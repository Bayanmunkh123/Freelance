import React, { useState } from 'react'
import {
  Box,
  Card,
  CardContent,
  Stack,
  Tab,
  Typography,
  Button
} from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-mui'
import { validationEmailSchema, validationPhoneSchema } from 'src/validators/auth/auth.validator'
import { LoginEmailInput, LoginPhoneInput } from 'src/generated'
import { AuthModalType } from 'src/utils/constants'

export type AuthForgetProps = {
  visibleAuthDialog: AuthModalType | undefined
  setVisibleAuthDialog: (type: AuthModalType) => void
}

export const AuthForget = (props:AuthForgetProps) => {
  const {visibleAuthDialog, setVisibleAuthDialog} = props
  const [type, setType] = useState('email')
  return (
    <Card sx={{ zIndex: 1, width: '460px' }}>
      <CardContent sx={{ p: theme => `${theme.spacing(13, 7, 6.5)} !important` }}>
        <Typography variant='h6' sx={{ ml: 2, lineHeight: 1, fontWeight: 700, fontSize: '1.5rem !important' }}>
          Нууц үг сэргээх
        </Typography>
        <Formik
          initialValues={
            type === 'email' ? { email: '', password: '' } : { phoneNumber: '', countryCode: '', password: '' }
          }
          validationSchema={type === 'email' ? validationEmailSchema : validationPhoneSchema}
          onSubmit={(values: LoginEmailInput | LoginPhoneInput, formikHelpers) => {
            console.log('onSubmit === values', values)
            alert(JSON.stringify(values, null, 2))
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
                    <Tab label='И-мэйл' value='email' />
                    <Tab label='Утас' value='phone' />
                  </TabList>
                  
                </Box>
                <TabPanel value='email'>
                  <Stack spacing={6}>
                    <Field component={TextField} name='email' type='email' label='И-мэйл хаяг' size='small' />
                  </Stack>
                </TabPanel>
                <TabPanel value='phone'>
                  <Stack spacing={6}>
                    <Field component={TextField} name='phoneNumber' type='number' label='Утасны дугаар' size='small' />
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
                  // disabled={formikProps.isSubmitting}
                  onClick={()=>setVisibleAuthDialog(AuthModalType.ConfirmCode)}
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
