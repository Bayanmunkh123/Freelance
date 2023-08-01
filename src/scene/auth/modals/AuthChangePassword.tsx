// ** React Imports
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material"
import { Field, Form, Formik } from "formik"
import { TextField } from "formik-mui"
import { config } from "src/config"
import { useAuthEmailResetPasswordMutation } from "src/generated"
import { useAuthModalContext } from "src/hooks/useAuth"
import { AuthModalType } from "src/utils/constants"
import { destroyCookieToken, setCookieToken } from "src/utils/cookies"
import { encrypt } from "src/utils/generateData"
import { validationConfirmPasswordSchema } from "src/validators/auth/auth.validator"
import { handleAuthDialog } from "../utils/handleAuthDialog"
import { useApolloClient } from "@apollo/client"
import { useRouter } from "next/router"

export type AuthChangePasswordProps = {
  visibleAuthDialog: AuthModalType | undefined
  setVisibleAuthDialog: (type: AuthModalType) => void
}

export const AuthChangePassword = (props: AuthChangePasswordProps) => {
  const { setVisibleAuthDialog } = props
  const { userData, resetToken, setSessionList } = useAuthModalContext()

  const apolloClient = useApolloClient()
  const router = useRouter()
  const [onAuthEmailResetPassword] = useAuthEmailResetPasswordMutation({
    context: {
      headers: {
        [`${config.RESET_TOKEN_KEY}`]: resetToken,
      },
    },
    onError: (error) => {
      console.log(error)
    },
  })
  const handleSubmit = async (values: any) => {
    if (userData?.email) {
      const { data } = await onAuthEmailResetPassword({
        variables: {
          input: {
            email: userData?.email,
            password: encrypt(values.password),
          },
        },
      })
      if (data?.authEmailResetPassword) {
        if (data.authEmailResetPassword.deviceId)
          localStorage.setItem(
            config.DEVICE_ID,
            data.authEmailResetPassword?.deviceId,
          )

        destroyCookieToken(undefined)
        if (data.authEmailResetPassword.accessToken) {
          setCookieToken(data.authEmailResetPassword)
          handleAuthDialog({ apolloClient, router })
        } else if (data.authEmailResetPassword.devices) {
          setSessionList(data.authEmailResetPassword.devices)
          setVisibleAuthDialog(AuthModalType.SessionManage)
        }
      }

      if (data?.authEmailResetPassword?.accessToken)
        setVisibleAuthDialog(AuthModalType.Login)
    }
  }

  return (
    <Card sx={{ zIndex: 1, width: "460px" }}>
      <CardContent
        sx={{ p: (theme) => `${theme.spacing(13, 7, 6.5)} !important` }}
      >
        <Typography
          variant="h6"
          sx={{
            ml: 2,
            mb: 5,
            lineHeight: 1,
            fontWeight: 700,
            fontSize: "1.5rem !important",
          }}
        >
          Нууц үг солих
        </Typography>
        <Formik
          initialValues={{ password: "", confirmPassword: "" }} //password
          validationSchema={validationConfirmPasswordSchema}
          onSubmit={(values: any, formikHelpers) => {
            handleSubmit(values)
            formikHelpers.setSubmitting(false)
          }}
        >
          {(formikProps) => (
            <Form noValidate autoComplete="off">
              <Stack spacing={6}>
                <Field
                  component={TextField}
                  name="password"
                  type="password"
                  label="Нууц үг"
                  size="small"
                />
                <Field
                  component={TextField}
                  name="confirmPassword"
                  type="password"
                  label="Нууц үг давтах"
                  size="small"
                />
              </Stack>
              <Box p="12px">
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  color="primary"
                  fullWidth
                  disabled={formikProps.isSubmitting}
                >
                  солих
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  )
}
