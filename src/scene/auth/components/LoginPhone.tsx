import { useApolloClient } from '@apollo/client'
import { Field, Form, Formik } from 'formik'
import { TextField } from 'formik-mui'
import { Button, Box, Checkbox, Divider, FormControlLabel, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { config } from 'src/configs'
import { LoginPhoneInput, useLoginPhoneMutation } from 'src/generated'
import { destroyCookieToken, setCookieToken } from 'src/utils/cookies'
import { validationLoginPhoneSchema } from 'src/validators/auth/auth.validator'
import { AuthModalType } from 'src/utils/constants'

type LoginPhoneProps = {
  setVisibleAuthDialog: (type: AuthModalType | null) => void
}
const LoginPhone = (props: LoginPhoneProps) => {
  const { setVisibleAuthDialog } = props

  const Router = useRouter()
  const apolloClient = useApolloClient()

  const [onLoginPhone] = useLoginPhoneMutation({
    fetchPolicy: 'no-cache',
    onCompleted: async data => {
      if (data.loginPhone?.deviceId) {
        localStorage.setItem(config.DEVICE_ID, data.loginPhone?.deviceId)
      }
      destroyCookieToken(undefined)
      if (data?.loginPhone?.accessToken) {
        setCookieToken(data.loginPhone)
        if (data?.loginPhone?.accessToken) {
          alert('Амжилттай')
          await apolloClient.cache.reset()
          window.location.reload()

          setVisibleAuthDialog(null)
        }
        Router.push('/')
      } else {
        alert('AMjiltgui')
      }
    },
    onError: (error: unknown) => {
      alert(error)
    }
  })

  return (
    <Formik
      initialValues={{ phone: '', countryCode: '', password: '' }}
      validationSchema={validationLoginPhoneSchema}
      onSubmit={(values: LoginPhoneInput, formikHelpers) => {
        const deviceId = localStorage.getItem('deviceId')
        onLoginPhone({
          variables: {
            input: {
              phone: values?.phone,
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
            <Field component={TextField} name='phoneNumber' type='number' label='Утасны дугаар' size='small' />
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

export default LoginPhone
