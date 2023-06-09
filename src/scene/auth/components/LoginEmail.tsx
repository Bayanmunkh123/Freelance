import { useApolloClient } from '@apollo/client'
import { Button, Box, Checkbox, Divider, FormControlLabel, Stack, Typography } from '@mui/material'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-mui'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { config } from 'src/configs'
import { LoginEmailInput, useLoginEmailMutation } from 'src/generated'
import { AuthModalType } from 'src/utils/constants'
import { destroyCookieToken, setCookieToken } from 'src/utils/cookies'
import { validationLoginEmailSchema } from 'src/validators/auth/auth.validator'

type LoginEmailProps = {
  setVisibleAuthDialog: (type: AuthModalType | null) => void
  setSessionData: (data: any, loginInput: LoginEmailInput) => void
}
const LoginEmail = (props: LoginEmailProps) => {
  const apolloClient = useApolloClient()
  const Router = useRouter()

  const { setVisibleAuthDialog, setSessionData } = props
  const [loginInput, setLoginInput] = useState({ email: '', password: '' })

  const [onLoginEmail] = useLoginEmailMutation({
    fetchPolicy: 'no-cache',
    onCompleted: async data => {
      if (data.loginEmail?.deviceId) {
        localStorage.setItem(config.DEVICE_ID, data.loginEmail?.deviceId)
      }
      destroyCookieToken(undefined)
      if (data?.loginEmail?.accessToken) {
        setCookieToken(data.loginEmail)

        alert('Амжилттай')

        await apolloClient.cache.reset()
        window.location.reload()

        setVisibleAuthDialog(null)

        Router.push('/')
      } else {
        setSessionData(data.loginEmail?.sessionList, loginInput)
        setVisibleAuthDialog(AuthModalType.SessionManage)
      }
    },
    onError: (error: unknown) => {
      alert(error)
    }
  })

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationLoginEmailSchema}
      onSubmit={(values: LoginEmailInput, formikHelpers) => {
        setLoginInput({
          email: values.email,
          password: values.password
        })
        const deviceId = localStorage.getItem('deviceId')
        onLoginEmail({
          variables: {
            input: {
              email: values?.email,
              password: values.password,
              deviceId: deviceId
            }
          }
        })
        formikHelpers.setSubmitting(false)
      }}
    >
      {() => (
        <Form noValidate autoComplete='off'>
          <Stack spacing={6}>
            <Field component={TextField} name='email' type='email' label='И-мэйл хаяг' size='small' />
            <Field component={TextField} name='password' type='password' label='Нууц үг' size='small' />
          </Stack>
          <Box
            sx={{
              mb: 4,
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'space-between'
            }}
          >
            <FormControlLabel
              label='Remember Me'
              control={<Checkbox />}
              sx={{ '& .MuiFormControlLabel-label': { color: 'text.primary' } }}
            />
            <Typography
              variant='body2'
              sx={{
                color: 'primary.main',
                textDecoration: 'none',
                cursor: 'pointer',
                ':hover': {
                  color: 'rgb(5,166,239, 0.5)'
                }
              }}
              onClick={() => setVisibleAuthDialog(AuthModalType.Forget)}
            >
              Нууц үгээ мартсан?
            </Typography>
          </Box>
          <Box p='12px'>
            <Button
              type='submit'
              variant='contained'
              size='large'
              color='primary'
              fullWidth

              // disabled={formikProps.isSubmitting}
            >
              Нэвтрэх
            </Button>
          </Box>
          <Divider
            sx={{
              '& .MuiDivider-wrapper': { px: 4 },
              mt: theme => `${theme.spacing(5)} !important`,
              mb: theme => `${theme.spacing(3.5)} !important`
            }}
          >
            Эсвэл
          </Divider>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: '20px' }}>
            <Typography>Шинэ хэрэглэгч үү?</Typography>{' '}
            <Button onClick={() => setVisibleAuthDialog(AuthModalType.Register)}>Бүртгүүлэх</Button>
          </Box>
        </Form>
      )}
    </Formik>
  )
}

export default LoginEmail
