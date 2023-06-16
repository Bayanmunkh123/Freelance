// ** React Imports
import React, { useState } from 'react'
import { Button, Box, Card, CardContent, IconButton, Typography, Tab, Stack, Divider } from '@mui/material'
import { LocalizationProvider, TabContext, TabList, TabPanel } from '@mui/lab'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-mui'
import { AuthModalType } from 'src/utils/constants'
import { LoginEmailInput, LoginPhoneInput, useRegisterEmailMutation, useRegisterPhoneMutation } from 'src/generated'
import { AuthSocial } from '../components/AuthSocial'
import { validationRegisterEmailSchema, validationRegisterPhoneSchema } from 'src/validators/auth/auth.validator'
import { useAuthModalContext } from 'src/hooks/useAuth'

export type AuthRegisterProps = {
  visibleAuthDialog: AuthModalType | undefined
  setVisibleAuthDialog: (type: AuthModalType) => void
}

export const AuthRegister = (props: AuthRegisterProps) => {
  const { setUserData } = useAuthModalContext()

  const { setVisibleAuthDialog } = props
  const [type, setType] = useState('email')
  const [onRegisterEmail] = useRegisterEmailMutation({
    onCompleted: data => {
      if (data?.registerEmail) {
        setVisibleAuthDialog(AuthModalType.ConfirmCode)
      }
    }
  })
  const [onRegisterPhone] = useRegisterPhoneMutation({
    onCompleted: data => {
      console.log(data)
    }
  })
  const submitHandler = (values: LoginEmailInput | LoginPhoneInput) => {
    console.log('onSubmit === values', values)
    setUserData(values)

    if (type === 'email') {
      onRegisterEmail({
        variables: {
          input: {
            email: values.email,
            password: values.password
          }
        }
      })
    } else if (type === 'phone') {
      onRegisterPhone({
        variables: {
          input: {
            phone: values.phone,
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
          Бүртгүүлэх
        </Typography>
        <Formik
          initialValues={type === 'email' ? { email: '', password: '' } : { phone: '', countryCode: '', password: '' }}
          validationSchema={type === 'email' ? validationRegisterEmailSchema : validationRegisterPhoneSchema}
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
                  >
                    <Tab label='И-мэйл' value='email' />
                    <Tab label='Утас' value='phone' />
                  </TabList>
                </Box>
                <TabPanel value='email'>
                  <Stack spacing={6}>
                    <Field component={TextField} name='email' type='email' label='И-мэйл хаяг' size='small' />
                    <Field component={TextField} name='password' type='password' label='Нууц үг' size='small' />
                    <Field
                      component={TextField}
                      name='confirmPassword'
                      type='password'
                      label='Нууц үг давтах'
                      size='small'
                    />
                  </Stack>
                </TabPanel>
                <TabPanel value='phone'>
                  <Stack spacing={6}>
                    <Field component={TextField} name='phoneNumber' type='number' label='Утасны дугаар' size='small' />
                    <Field component={TextField} name='password' type='password' label='Нууц үг' size='small' />
                    <Field
                      component={TextField}
                      name='confirmPassword'
                      type='password'
                      label='Нууц үг давтах'
                      size='small'
                    />
                  </Stack>
                </TabPanel>
              </TabContext>
              <Box p='12px'>
                <Button
                  type='submit'
                  variant='contained'
                  size='large'
                  color='primary'
                  fullWidth
                  disabled={formikProps.isSubmitting}
                >
                  Бүртгүүлэх
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
          <Typography>Бүртгэлтэй хэрэглэгч үү?</Typography>{' '}
          <Button onClick={() => setVisibleAuthDialog(AuthModalType.Login)}>Нэвтрэх</Button>
        </Box>
        <AuthSocial />
      </CardContent>
    </Card>
  )
}
