// ** React Imports
import React, { forwardRef, Fragment, MouseEvent, ReactElement, Ref, useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'

import Slide, { SlideProps } from '@mui/material/Slide'

import { Box, Card, CardContent, DialogContent, Divider, IconButton, Stack, Tab, Typography } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

import { Formik, Form, FormikProps, FormikHelpers } from 'formik'

import * as yup from 'yup'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Form } from 'src/components'
import { LoginUserInput } from '../../generated'

const Transition = forwardRef(function Transition(
  props: SlideProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction='down' ref={ref} {...props} />
})

export type LoginDialogProps = {
  open: boolean
  setOpen: (value: boolean) => void
}

// the Formik component supports yup validation out-of-the-box via the `validationSchema` prop
const validationSchema = yup.object().shape({
  email: yup.string().required('Required'),
  password: yup.string().required('Required')
})

export const LoginDialog = (props: LoginDialogProps) => {
  const { FormTextField, FormAutocompleteCountry } = Form

  const { open, setOpen } = props
  const handleClose = () => setOpen(false)

  const [type, setType] = useState('email')

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
                initialValues={{
                  email: '',
                  password: '',
                  code: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values: LoginUserInput, formikHelpers: FormikHelpers<LoginUserInput>) => {
                  alert(JSON.stringify(values, null, 2))
                  formikHelpers.setSubmitting(false)
                }}
              >
                {(formikProps: FormikProps<LoginUserInput>) => (
                  <Form noValidate autoComplete='off'>
                    <TabContext value={type}>
                      <Box sx={{ mb: '24px' }}>
                        <TabList
                          onChange={(event, _type) => {
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
                          <FormTextField name='email' label='И-Майл хаяг' size='small' />

                          <FormTextField name='password' label='Нууц үг' size='small' type='password' />
                        </Stack>
                      </TabPanel>
                      <TabPanel value='phone'>
                        <Stack spacing={6}>
                          <FormTextField
                            name='phoneNumber'
                            type='number'
                            label='Phone Number'
                            size='small'
                            InputProps={{
                              startAdornment: (
                                <FormAutocompleteCountry name='countryCode' type={{ code: 'MN', phone: '976' }} />
                              )
                            }}
                          />

                          <FormTextField name='password' label='Нууц үг' size='small' type='password' />
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
