// ** React Imports
import React, { forwardRef, Fragment, MouseEvent, ReactElement, Ref, useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'

import Slide, { SlideProps } from '@mui/material/Slide'

import {
  Box,
  Card,
  CardContent,
  Checkbox,
  DialogContent,
  Divider,
  FormControlLabel,
  IconButton,
  Stack,
  Tab,
  Typography
} from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-mui'

import * as yup from 'yup'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

import { LoginEmailInput, LoginPhoneInput, useLoginMutation } from '../../generated'

const Transition = forwardRef(function Transition(
  props: SlideProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction='down' ref={ref} {...props} />
})

export type AuthDialogProps = {
  open: boolean
  setOpen: (value: boolean) => void
}

// the Formik component supports yup validation out-of-the-box via the `validationSchema` prop
const validationEmailSchema = yup.object().shape({
  email: yup.string().email().required('Required'),
  password: yup.string().min(6).required('Required')
})

const validationPhoneSchema = yup.object().shape({
  phoneNumber: yup.string().required('Required'),
  countryCode: yup.string().required('Required'),
  password: yup.string().min(8).required('Required')
})

export const AuthDialog = (props: AuthDialogProps) => {
  const { open, setOpen } = props
  const handleClose = () => setOpen(false)

  const [type, setType] = useState('email')

  const [onLoginEmail, { loading: loadingEmail }] = useLoginMutation({
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

  return (
    <Fragment>
      <Dialog open={open} keepMounted onClose={handleClose} TransitionComponent={Transition}>
        <DialogContent sx={{ padding: 0 }}>
          <Card sx={{ zIndex: 1, width: '460px' }}>
            <CardContent sx={{ p: theme => `${theme.spacing(13, 7, 6.5)} !important` }}>
              <Typography variant='h6' sx={{ ml: 2, lineHeight: 1, fontWeight: 700, fontSize: '1.5rem !important' }}>
                Нэвтрэх
              </Typography>

              <Formik
                initialValues={
                  type === 'email' ? { email: '', password: '' } : { phoneNumber: '', countryCode: '', password: '' }
                }
                validationSchema={type === 'email' ? validationEmailSchema : validationPhoneSchema}
                onSubmit={(values: LoginEmailInput | LoginPhoneInput, formikHelpers) => {
                  console.log('onSubmit === values', values)
                  if (values?.email)
                    onLoginEmail({
                      variables: {
                        input: {
                          email: values?.email,
                          password: values.password
                        }
                      }
                    })
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
                          <Field component={TextField} name='email' type='email' label='И-Майл хаяг' size='small' />
                          <Field component={TextField} name='password' type='password' label='Нууц үг' size='small' />
                        </Stack>
                      </TabPanel>
                      <TabPanel value='phone'>
                        <Stack spacing={6}>
                          <Field component={TextField} name='email' type='email' label='И-Майл хаяг' size='small' />
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
                        component={Link}
                        href='/pages/auth/forgot-password-v2'
                        sx={{ color: 'primary.main', textDecoration: 'none' }}
                      >
                        Forgot Password?
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
                <Typography>Шинэ хэрэглэгч үү?</Typography> <Button>Бүртгүүлэх</Button>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconButton
                  href='/'
                  component={Link}
                  sx={{ color: '#497ce2' }}
                  onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                >
                  <Icon icon='mdi:facebook' />
                </IconButton>
                <IconButton
                  href='/'
                  component={Link}
                  sx={{ color: '#1da1f2' }}
                  onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                >
                  <Icon icon='mdi:twitter' />
                </IconButton>
                <IconButton
                  href='/'
                  component={Link}
                  onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                  sx={{ color: theme => (theme.palette.mode === 'light' ? '#272727' : 'grey.300') }}
                >
                  <Icon icon='mdi:github' />
                </IconButton>
                <IconButton
                  href='/'
                  component={Link}
                  sx={{ color: '#db4437' }}
                  onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                >
                  <Icon icon='mdi:google' />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </Fragment>
  )
}
