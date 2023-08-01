import { useApolloClient } from "@apollo/client"
import { Field, Form, Formik } from "formik"
import { TextField } from "formik-mui"
import {
  Button,
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material"
import { useRouter } from "next/router"
import React from "react"
import { config } from "src/config"
import { LoginPhoneInput, useLoginPhoneMutation } from "src/generated"
import { destroyCookieToken, setCookieToken } from "src/utils/cookies"
import { validationLoginPhoneSchema } from "src/validators/auth/auth.validator"
import { AuthModalType } from "src/utils/constants"
import crypto from "crypto-js"
import { useAuthModalContext } from "src/hooks/useAuth"
import { encrypt } from "src/utils/generateData"
import { handleAuthDialog } from "../utils/handleAuthDialog"

type LoginPhoneProps = {
  setVisibleAuthDialog: (type: AuthModalType | null) => void
}
const LoginPhone = (props: LoginPhoneProps) => {
  const { setVisibleAuthDialog } = props

  const router = useRouter()
  const apolloClient = useApolloClient()

  const { reset, setUserData, setSessionList } = useAuthModalContext()

  const [onLoginPhone] = useLoginPhoneMutation({
    fetchPolicy: "no-cache",
    onError: (error: unknown) => {
      alert(error)
    },
  })
  const handleSubmit = async (
    values: LoginPhoneInput & { remember: boolean },
  ) => {
    if (values?.remember) {
      localStorage.setItem(
        "credentials-phone",
        crypto.AES.encrypt(
          JSON.stringify({ ...values, remember: values?.remember }),
          "onehrmn_credentials_secret",
        ).toString(),
      )
    } else localStorage.removeItem("credentials-phone")

    setUserData(values as LoginPhoneInput)

    const { data } = await onLoginPhone({
      variables: {
        input: {
          phone: values.phone.toString(),
          countryCode: "976",
          password: encrypt(values.password),
          deviceId: localStorage.getItem(config.DEVICE_ID),
        },
      },
    })
    if (data?.loginPhone?.deviceId) {
      localStorage.setItem(config.DEVICE_ID, data.loginPhone.deviceId)
    }
    if (data?.loginPhone) {
      destroyCookieToken(undefined)
      if (data.loginPhone.accessToken) {
        setCookieToken(data.loginPhone)
        handleAuthDialog({ apolloClient, router })
      } else if (data.loginPhone.devices) {
        setSessionList(data.loginPhone.devices)
        setVisibleAuthDialog(AuthModalType.SessionManage)
      } else if (data.loginPhone && !data.loginPhone?.isPhoneConfirmed) {
        setVisibleAuthDialog(AuthModalType.TokenVerify)
      } else if (reset) {
        setVisibleAuthDialog(AuthModalType.ChangePassword)
      }
    }
  }

  return (
    <Formik
      initialValues={{
        phone: "",
        countryCode: "",
        password: "",
        remember: false,
      }}
      validationSchema={validationLoginPhoneSchema}
      onSubmit={(
        values: LoginPhoneInput & { remember: boolean },
        formikHelpers,
      ) => {
        handleSubmit(values)
        formikHelpers.setSubmitting(false)
      }}
    >
      {() => (
        <Form noValidate autoComplete="off">
          <Stack spacing={6}>
            <Field
              component={TextField}
              name="phone"
              type="number"
              label="Утасны дугаар"
              size="small"
            />
            <Field
              component={TextField}
              name="password"
              type="password"
              label="Нууц үг"
              size="small"
            />
          </Stack>

          <Box
            sx={{
              mb: 4,
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <FormControlLabel
              label="Remember Me"
              control={<Checkbox />}
              sx={{ "& .MuiFormControlLabel-label": { color: "text.primary" } }}
            />
            <Typography
              variant="body2"
              sx={{
                color: "primary.main",
                textDecoration: "none",
                cursor: "pointer",
                ":hover": {
                  color: "rgb(5,166,239, 0.5)",
                },
              }}
              onClick={() => setVisibleAuthDialog(AuthModalType.Forget)}
            >
              Нууц үгээ мартсан?
            </Typography>
          </Box>
          <Box p="12px">
            <Button
              type="submit"
              variant="contained"
              size="large"
              color="primary"
              fullWidth

              // disabled={formikProps.isSubmitting}
            >
              Нэвтрэх
            </Button>
          </Box>
          <Divider
            sx={{
              "& .MuiDivider-wrapper": { px: 4 },
              mt: (theme) => `${theme.spacing(5)} !important`,
              mb: (theme) => `${theme.spacing(3.5)} !important`,
            }}
          >
            Эсвэл
          </Divider>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              my: "20px",
            }}
          >
            <Typography>Шинэ хэрэглэгч үү?</Typography>{" "}
            <Button
              onClick={() => setVisibleAuthDialog(AuthModalType.Register)}
            >
              Бүртгүүлэх
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  )
}

export default LoginPhone
