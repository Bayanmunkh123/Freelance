// ** React Imports
import React, { forwardRef, Fragment, ReactElement, Ref, useState, useEffect } from 'react'
import Slide, { SlideProps } from '@mui/material/Slide'
import { Dialog, DialogContent } from '@mui/material'
import { AuthModalType } from 'src/utils/constants'
import { AuthLogin } from './authLogin'
import { AuthRegister } from './authRegister'
import { AuthForget } from './authForgetPassword'
import { AuthConfirmCode } from './authConfirmCode'
import { AuthConfirmPassword } from './authConfirmPassword'

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

export const AuthDialog = (props: AuthDialogProps) => {
  const { open, setOpen } = props
  const handleClose = () => setOpen(false)
  const [visibleAuthDialog, setVisibleAuthDialog] = useState<AuthModalType>(AuthModalType.Login)
  useEffect(() => {
    if (!open) setVisibleAuthDialog(AuthModalType.Login)
  }, [open])

  return (
    <Fragment>
      <Dialog open={open} keepMounted onClose={handleClose} TransitionComponent={Transition}>
        <DialogContent sx={{ padding: 0 }}>
          {/* <Card sx={{ zIndex: 1, width: '460px' }}>
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
          </Card> */}
          {visibleAuthDialog && visibleAuthDialog === AuthModalType.Login && (
            <AuthLogin visibleAuthDialog={visibleAuthDialog} setVisibleAuthDialog={setVisibleAuthDialog} />
          )}
          {visibleAuthDialog && visibleAuthDialog === AuthModalType.Register && (
            <AuthRegister visibleAuthDialog={visibleAuthDialog} setVisibleAuthDialog={setVisibleAuthDialog} />
          )}
          {visibleAuthDialog && visibleAuthDialog === AuthModalType.Forget && (
            <AuthForget visibleAuthDialog={visibleAuthDialog} setVisibleAuthDialog={setVisibleAuthDialog} />
          )}
          {visibleAuthDialog && visibleAuthDialog === AuthModalType.ConfirmCode && (
            <AuthConfirmCode visibleAuthDialog={visibleAuthDialog} setVisibleAuthDialog={setVisibleAuthDialog} />
          )}
          {visibleAuthDialog && visibleAuthDialog === AuthModalType.ConfirmPassword && (
            <AuthConfirmPassword visibleAuthDialog={visibleAuthDialog} setVisibleAuthDialog={setVisibleAuthDialog} />
          )}
        </DialogContent>
      </Dialog>
    </Fragment>
  )
}
