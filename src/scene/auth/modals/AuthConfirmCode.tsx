// ** React Imports
import React, { useState } from "react"
import { Box, Card, CardContent, Stack, Typography } from "@mui/material"
import { Formik, Form, Field } from "formik"
import { TextField } from "formik-mui"
import {
  TokenVerifyEnum,
  useAuthEmailVerifyTokenMutation,
  useAuthEmailVerifyTokenSenderMutation,
} from "src/generated"
import { AuthModalType } from "src/utils/constants"
import { validationConfirmCodeSchema } from "src/validators/auth/auth.validator"
import { useAuthModalContext } from "src/hooks/useAuth"
import { config } from "src/config"
import { useApolloClient } from "@apollo/client"
import { useRouter } from "next/router"
import Countdown, { CountdownRenderProps } from "react-countdown"
import { LoadingButton } from "@mui/lab"
import { handleAuthDialog } from "../utils/handleAuthDialog"
import { removeItemToken, setItemToken } from "src/lib/apollo/tokenHandler"

export type AuthConfirmCodeProps = {
  visibleAuthDialog: AuthModalType | null
  setVisibleAuthDialog: (type: AuthModalType | null) => void
}

export const AuthConfirmCode = (props: AuthConfirmCodeProps) => {
  const { setVisibleAuthDialog } = props
  const apolloClient = useApolloClient()
  const router = useRouter()
  const { reset, userData, setSessionList, setResetToken } =
    useAuthModalContext()

  const [disabled, setDisabled] = useState(false)

  const [onEmailVerifyToken, { loading }] = useAuthEmailVerifyTokenMutation({
    onError: (error) => {
      alert(error)
      console.log(error)
    },
  })

  // SEND VERIFY CODE
  const [onVerifyTokenSend] = useAuthEmailVerifyTokenSenderMutation({
    fetchPolicy: "no-cache",
    onError: (error: unknown) => {
      alert(error)
      console.log("onVerifyTokenSend === error", error)
    },
  })
  const sendVerifyCode = async () => {
    if (userData?.email) {
      const { data } = await onVerifyTokenSend({
        variables: {
          input: {
            email: userData?.email,
          },
        },
      })
      if (data?.authEmailVerifyTokenSender)
        setVisibleAuthDialog(AuthModalType.ConfirmCode)
    }
  }

  // SUBMIT
  const handleSubmit = async (value: any) => {
    if (userData?.email) {
      const { data } = await onEmailVerifyToken({
        variables: {
          input: {
            type: TokenVerifyEnum.RESET,
            email: userData?.email,
            code: value.code.toString(),
          },
        },
      })
      if (data?.authEmailVerifyToken) {
        if (data?.authEmailVerifyToken?.deviceId) {
          localStorage.setItem(
            config.DEVICE_ID,
            data.authEmailVerifyToken?.deviceId,
          )
        }
        removeItemToken(null)
        if (data?.authEmailVerifyToken?.accessToken) {
          setItemToken(data.authEmailVerifyToken)
          handleAuthDialog({ apolloClient, router })
        } else if (data?.authEmailVerifyToken?.devices) {
          setSessionList(data?.authEmailVerifyToken?.devices)
          setVisibleAuthDialog(AuthModalType.SessionManage)
        } else if (reset && data.authEmailVerifyToken.resetToken) {
          setResetToken(data.authEmailVerifyToken.resetToken)
          setVisibleAuthDialog(AuthModalType.ChangePassword)
        }
      }
    }
  }

  const resendCode = () => {
    sendVerifyCode()
    setDisabled(true)
    setTimeout(() => {
      setDisabled(false)
    }, 60000)
  }
  const renderer = ({ seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      ;() => setDisabled(true)
    } else {
      return <span>{seconds}</span>
    }
  }

  return (
    <Card sx={{ zIndex: 1, width: "460px" }}>
      <CardContent
        sx={{ p: (theme) => `${theme.spacing(13, 7, 6.5)} !important` }}
      >
        <Typography
          variant="h5"
          sx={{
            ml: 2,
            mb: 5,
            lineHeight: 1,
            fontWeight: 700,
            fontSize: "1.4rem !important",
          }}
        >
          Баталгаажуулах код оруулна уу
        </Typography>
        <Formik
          initialValues={{ code: "" }} //confirmCode
          validationSchema={validationConfirmCodeSchema}
          onSubmit={(values: any, formikHelpers) => {
            console.log(values)
            handleSubmit(values)
            formikHelpers.setSubmitting(false)
          }}
        >
          {() => (
            <Form noValidate autoComplete="off">
              <Stack spacing={6}>
                <Field
                  component={TextField}
                  name="code"
                  type="number"
                  label="Баталгаажуулах код"
                  size="small"
                />
              </Stack>
              <Box p="12px">
                <LoadingButton
                  loading={loading}
                  type="submit"
                  variant="contained"
                  size="large"
                  color="primary"
                  fullWidth
                >
                  Баталгаажуулах
                </LoadingButton>
              </Box>
            </Form>
          )}
        </Formik>
        <div className="auth-container-footer">
          <span>Баталгаажуулах код ирээгүй?</span>
          <br />

          {disabled ? (
            <div className="CountDown">
              <Countdown date={Date.now() + 60000} renderer={renderer} />
              <span> </span>
              сек
            </div>
          ) : (
            <LoadingButton
              loading={loading}
              type="button"
              variant="text"
              size="large"
              onClick={resendCode}
              disabled={disabled}
            >
              Дахин илгээх
            </LoadingButton>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
