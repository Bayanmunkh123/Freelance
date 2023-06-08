import React, { useEffect, useState } from 'react'
import {
  Button,
  Box,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  Tab,
  Typography
} from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-mui'
import Icon from 'src/@core/components/icon'

import { AuthModalType } from 'src/utils/constants'
import { LoginEmailInput, LoginPhoneInput, useLoginEmailMutation, useLoginPhoneMutation } from 'src/generated'
import { AuthSocial } from '../components/AuthSocial'
import { validationLoginEmailSchema, validationLoginPhoneSchema } from 'src/validators/auth/auth.validator'
import { useRouter } from 'next/router'
import { destroyCookieToken, setCookieToken } from 'src/utils/cookies'
import { useApolloClient } from '@apollo/client'
import { config } from 'src/configs'

export type AuthLoginProps = {
  visibleAuthDialog: AuthModalType | undefined
  setVisibleAuthDialog: (type: AuthModalType | undefined) => void
}

export const AuthLogin = (props: AuthLoginProps) => {
  const [type, setType] = useState('email')
  const { visibleAuthDialog, setVisibleAuthDialog } = props

  const Router = useRouter()
  const apolloClient = useApolloClient()

  const [onLoginEmail] = useLoginEmailMutation({
    fetchPolicy: 'no-cache',
    onCompleted: async data => {
      if (data.loginEmail?.deviceId) {
        localStorage.setItem(config.DEVICE_ID, data.loginEmail?.deviceId)
      }
      destroyCookieToken(undefined)
      if (data?.loginEmail?.accessToken) {
        setCookieToken(data.loginEmail)
        if (data?.loginEmail?.accessToken) {
          alert('Амжилттай')
          await apolloClient.cache.reset()
          window.location.reload()

          setVisibleAuthDialog(undefined)
        }
        Router.push('/admin')
      } else {
        alert('AMjiltgui')
      }
    },
    onError: (error: unknown) => {
      alert(error)
    }
  })

  const [onLoginPhone] = useLoginPhoneMutation({
    fetchPolicy: 'no-cache',
    onCompleted: data => {
      console.log(data)

      // localStorage.setItem('cookie', data)
      // Router.push('http://localhost:3011/admin')
    },
    onError: (error: unknown) => {
      alert(error)
    }
  })
  const submitHandler = (values: LoginEmailInput | LoginPhoneInput) => {
    console.log('onSubmit === values', values)
    if (type === 'email') {
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
    } else if (type === 'phone') {
      onLoginPhone({
        variables: {
          input: {
            phone: values?.phone,
            password: values.password
          }
        }
      })
    }
  }

  return (
    <Card sx={{ zIndex: 1, width: '460px' }}>
      <CardContent sx={{ p: theme => `${theme.spacing(13, 7, 6.5)} !important` }}>
        <Typography variant='h6' sx={{ ml: 2, lineHeight: 1, fontWeight: 700, fontSize: '1.5rem !important' }}>
          Нэвтрэх
        </Typography>
        <Formik
          initialValues={type === 'email' ? { email: '', password: '' } : { phone: '', countryCode: '', password: '' }}
          validationSchema={type === 'email' ? validationLoginEmailSchema : validationLoginPhoneSchema}
          onSubmit={(values: LoginEmailInput | LoginPhoneInput, formikHelpers) => {
            submitHandler(values)
            formikHelpers.setSubmitting(false)
          }}
        >
          {formikProps => (
            <Form noValidate autoComplete='off'>
              <TabContext value={type}>
                <Box sx={{ mb: '24px' }}>
                  <TabList
                    onChange={(_event, _type) => {
                      setType(_type)
                    }}
                    aria-label='lab API tabs example'
                  >
                    <Tab
                      label='И-мэйл'
                      value='email'
                      iconPosition='start'
                      icon={<Icon icon='ic:outline-email' style={{ marginRight: '4px' }} />}
                    />
                    <Tab
                      label='Утас'
                      value='phone'
                      iconPosition='start'
                      icon={<Icon icon='carbon:phone' style={{ marginRight: '4px' }} />}
                    />
                  </TabList>
                </Box>
                <TabPanel value='email'>
                  <Stack spacing={6}>
                    <Field component={TextField} name='email' type='email' label='И-мэйл хаяг' size='small' />
                    <Field component={TextField} name='password' type='password' label='Нууц үг' size='small' />
                  </Stack>
                </TabPanel>
                <TabPanel value='phone'>
                  <Stack spacing={6}>
                    <Field component={TextField} name='phoneNumber' type='number' label='Утасны дугаар' size='small' />
                    <Field component={TextField} name='password' type='password' label='Нууц үг' size='small' />
                  </Stack>
                </TabPanel>
              </TabContext>
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
                  disabled={formikProps.isSubmitting}
                >
                  Нэвтрэх
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
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
        <AuthSocial />
      </CardContent>
    </Card>
  )
}
