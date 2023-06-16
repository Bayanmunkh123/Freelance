// ** React Imports
import React from 'react'
import { Box, Card, CardContent, Stack, Typography, Button } from '@mui/material'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-mui'
import {
  AuthEmailResetPasswordInput,
  LoginEmailInput,
  LoginPhoneInput,
  useAuthEmailResetPasswordMutation
} from 'src/generated'
import { AuthModalType } from 'src/utils/constants'
import { validationConfirmPasswordSchema } from 'src/validators/auth/auth.validator'
import FallbackSpinner from 'src/@core/components/spinner'
import { useAuthModalContext } from 'src/hooks/useAuth'

export type AuthChangePasswordProps = {
  visibleAuthDialog: AuthModalType | undefined
  setVisibleAuthDialog: (type: AuthModalType) => void
}

export const AuthChangePassword = (props: AuthChangePasswordProps) => {
  const { setVisibleAuthDialog } = props
  const { userData } = useAuthModalContext()

  const [onAuthEmailResetPassword, { loading }] = useAuthEmailResetPasswordMutation({
    onError: error => {
      console.log(error)
    }
  })
  const handleSubmit = async values => {
    if (userData?.email) {
      const { data } = await onAuthEmailResetPassword({
        variables: {
          input: {
            email: userData?.email,
            password: values.password
          }
        }
      })

      if (data?.authEmailResetPassword?.accessToken) setVisibleAuthDialog(AuthModalType.Login)
    }
  }

  return (
    <Card sx={{ zIndex: 1, width: '460px' }}>
      <CardContent sx={{ p: theme => `${theme.spacing(13, 7, 6.5)} !important` }}>
        <Typography variant='h6' sx={{ ml: 2, mb: 5, lineHeight: 1, fontWeight: 700, fontSize: '1.5rem !important' }}>
          Нууц үг солих
        </Typography>
        <Formik
          initialValues={{ password: '', confirmPassword: '' }} //password
          validationSchema={validationConfirmPasswordSchema}
          onSubmit={(values: any, formikHelpers) => {
            handleSubmit(values)
            formikHelpers.setSubmitting(false)
          }}
        >
          {formikProps => (
            <Form noValidate autoComplete='off'>
              <Stack spacing={6}>
                <Field component={TextField} name='password' type='password' label='Нууц үг' size='small' />
                <Field
                  component={TextField}
                  name='confirmPassword'
                  type='password'
                  label='Нууц үг давтах'
                  size='small'
                />
              </Stack>
              <Box p='12px'>
                <Button
                  type='submit'
                  variant='contained'
                  size='large'
                  color='primary'
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
