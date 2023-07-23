import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material"
import { Field, Form, Formik } from "formik"
import { TextField } from "formik-mui"
import { RegisterPhoneInput, useRegisterPhoneMutation } from "src/generated"
import { useAuthModalContext } from "src/hooks/useAuth"
import { AuthModalType } from "src/utils/constants"
import { encrypt } from "src/utils/generateData"
import { validationRegisterPhoneSchema } from "src/validators/auth/auth.validator"

type RegisterPhoneProps = {
  setVisibleAuthDialog: (type: AuthModalType | null) => void
}
export const RegisterPhone = (props: RegisterPhoneProps) => {
  const { setVisibleAuthDialog } = props

  const { setUserData } = useAuthModalContext()

  const [onRegisterPhone] = useRegisterPhoneMutation({
    fetchPolicy: "no-cache",
    onError: (error: unknown) => {
      alert(error)
    },
  })
  const handleSubmit = async (values: RegisterPhoneInput) => {
    setUserData(values as RegisterPhoneInput)

    const { data } = await onRegisterPhone({
      variables: {
        input: {
          phone: values?.phone.toString(),
          countryCode: "976",
          password: encrypt(values.password),
        },
      },
    })
    if (data?.registerPhone) {
      setVisibleAuthDialog(AuthModalType.TokenVerify)
    }
  }

  return (
    <Formik
      initialValues={{ phone: "", password: "", confirmPassword: "" }}
      validationSchema={validationRegisterPhoneSchema}
      onSubmit={(values: RegisterPhoneInput, formikHelpers) => {
        handleSubmit(values)
        formikHelpers.setSubmitting(false)
      }}
    >
      {(formikProps) => (
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
            <Field
              component={TextField}
              name="confirmPassword"
              type="password"
              label="Нууц үг давтах"
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
              name="remember"
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
            >
              Бүртгүүлэх
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
