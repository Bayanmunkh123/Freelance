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
import {
  AuthEmailResetPasswordInput,
  useAuthEmailForgetPasswordMutation,
  useAuthEmailVerifyTokenSenderMutation,
} from "src/generated"
import { useAuthModalContext } from "src/hooks/useAuth"
import { AuthModalType } from "src/utils/constants"
import { validationForgetEmailSchema } from "src/validators/auth/auth.validator"

export type AuthForgetProps = {
  visibleAuthDialog: AuthModalType | undefined
  setVisibleAuthDialog: (type: AuthModalType) => void
}

export const AuthForget = (props: AuthForgetProps) => {
  const { setVisibleAuthDialog } = props
  const { setReset, setUserData } = useAuthModalContext()
  const [onForgetPassword] = useAuthEmailForgetPasswordMutation({
    onError: (error) => {
      alert(error)
      console.log(error)
    },
  })

  const [onAuthEmailVerifyTokenSender] = useAuthEmailVerifyTokenSenderMutation({
    onCompleted: (data) => {
      if (data.authEmailVerifyTokenSender) {
        setVisibleAuthDialog(AuthModalType.ConfirmCode)
      }
    },
  })

  const submitHandler = async (values: AuthEmailResetPasswordInput) => {
    const { data } = await onForgetPassword({
      variables: {
        input: {
          email: values.email,
        },
      },
    })

    if (data?.authEmailForgetPassword) {
      setUserData(values)
      const { data } = await onAuthEmailVerifyTokenSender({
        variables: {
          input: {
            email: values.email,
          },
        },
      })
      if (data?.authEmailVerifyTokenSender) {
        setReset(true)
        setVisibleAuthDialog(AuthModalType.ConfirmCode)
      }
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
          Нууц үг сэргээх
        </Typography>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={validationForgetEmailSchema}
          onSubmit={(values: any, formikHelpers) => {
            submitHandler(values)
            formikHelpers.setSubmitting(false)
          }}
        >
          {(formikProps) => (
            <Form noValidate autoComplete="off">
              <Stack spacing={6}>
                <Field
                  component={TextField}
                  name="email"
                  type="email"
                  label="И-мэйл хаяг"
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
                  Илгээх
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  )
}
