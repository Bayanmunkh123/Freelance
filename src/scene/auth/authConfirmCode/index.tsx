// ** React Imports
import React from 'react'
import { Box, Card, CardContent, Stack, Tab, Typography, Button } from '@mui/material'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-mui'
import { validationEmailSchema, validationPhoneSchema } from 'src/validators/auth/auth.validator'
import { LoginEmailInput, LoginPhoneInput } from 'src/generated'
import { AuthModalType } from 'src/utils/constants'

export type AuthConfirmCodeProps = {
  visibleAuthDialog: AuthModalType | undefined
  setVisibleAuthDialog: (type: AuthModalType) => void
}

export const AuthConfirmCode = (props: AuthConfirmCodeProps) => {
  const { visibleAuthDialog, setVisibleAuthDialog } = props
  return (
    <Card sx={{ zIndex: 1, width: '460px' }}>
      <CardContent sx={{ p: theme => `${theme.spacing(13, 7, 6.5)} !important` }}>
        <Typography variant='h6' sx={{ ml: 2, lineHeight: 1, fontWeight: 700, fontSize: '1.5rem !important' }}>
          Баталгаажуулах код оруулах
        </Typography>
        <Formik
          initialValues={{ email: '', password: '' }}
          // validationSchema={type === 'email' ? validationEmailSchema : validationPhoneSchema}
          onSubmit={(values: LoginEmailInput | LoginPhoneInput, formikHelpers) => {
            console.log('onSubmit === values', values)
            alert(JSON.stringify(values, null, 2))
            formikHelpers.setSubmitting(false)
          }}
        >
          {formikProps => (
            <Form noValidate autoComplete='off'>
              <Stack spacing={6}>
                <Field component={TextField} name='confirmCode' type='number' label='Баталгаажуулах код' size='small' />
              </Stack>
              <Box p='12px'>
                <Button
                  type='submit'
                  variant='contained'
                  size='large'
                  color='primary'
                  fullWidth
                  // disabled={formikProps.isSubmitting}
                  onClick={() => setVisibleAuthDialog(AuthModalType.ConfirmPassword)}
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
