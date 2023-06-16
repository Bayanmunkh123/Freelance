import React from 'react'
import { useApolloClient } from '@apollo/client'
import { Button, Box, Checkbox, Divider, FormControlLabel, Stack, Typography } from '@mui/material'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-mui'
import { useRouter } from 'next/router'
import { config } from 'src/configs'
import { LoginEmailInput, useLoginEmailMutation } from 'src/generated'
import { useAuthModalContext } from 'src/hooks/useAuth'
import { AuthModalType } from 'src/utils/constants'
import { destroyCookieToken, setCookieToken } from 'src/utils/cookies'
import { validationLoginEmailSchema } from 'src/validators/auth/auth.validator'
import crypto from 'crypto-js'

type LoginEmailProps = {
  setVisibleAuthDialog: (type: AuthModalType | null) => void
}
const LoginEmail = (props: LoginEmailProps) => {
  const { setVisibleAuthDialog } = props
  const apolloClient = useApolloClient()

  const { setUserData, setSessionList } = useAuthModalContext()
  const router = useRouter()

  const [onLoginEmail] = useLoginEmailMutation({
    fetchPolicy: 'no-cache',
    onError: (error: unknown) => {
      alert(error)
    }
  })
  const handleSubmit = async (values: LoginEmailInput & { remember: boolean }) => {
    if (values?.remember) {
      localStorage.setItem(
        'credentials-email',
        crypto.AES.encrypt(
          JSON.stringify({ ...values, remember: values?.remember }),
          'onehrmn_credentials_secret'
        ).toString()
      )
    } else localStorage.removeItem('credentials-email')

    setUserData(values)

    const { data } = await onLoginEmail({
      variables: {
        input: {
          email: values?.email,
          password: values.password,
          deviceId: localStorage.getItem(config.DEVICE_ID)
        }
      }
    })
    if (data?.loginEmail?.deviceId) {
      localStorage.setItem(config.DEVICE_ID, data.loginEmail?.deviceId)
    }

    destroyCookieToken(undefined)
    if (data?.loginEmail?.accessToken) {
      setCookieToken(data?.loginEmail)
      console.log('Амжилттай')

      await apolloClient.cache.reset()
      const returnUrl = router.query.returnUrl
      setVisibleAuthDialog(null)
      const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/admin/jobs'
      router.replace(redirectURL as string).then(() => window.location.reload)
    } else if (data?.loginEmail && !data?.loginEmail?.isEmailConfirmed) {
      setVisibleAuthDialog(AuthModalType.TokenVerify)

      // setVerifyModal(true)
    } else {
      setSessionList(data?.loginEmail?.devices)
      setVisibleAuthDialog(AuthModalType.SessionManage)
    }
  }

  return (
    <Formik
      initialValues={{ email: '', password: '', remember: false }}
      validationSchema={validationLoginEmailSchema}
      onSubmit={(values: LoginEmailInput & { remember: boolean }, formikHelpers) => {
        handleSubmit(values)
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
              name='remember'
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
