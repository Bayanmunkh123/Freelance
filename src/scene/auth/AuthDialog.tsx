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
import { AuthSessionManage } from './authSessionManage'

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
  const [sessionList, setSessionList] = useState()
  const [loginInputs, setLoginInputs] = useState()
  const handleClose = () => setOpen(false)
  const [visibleAuthDialog, setVisibleAuthDialog] = useState<AuthModalType | null>(AuthModalType.Login)
  useEffect(() => {
    if (!open) setVisibleAuthDialog(AuthModalType.Login)
  }, [open])

  const setSessionData = (data, loginInput) => {
    console.log('data', data)
    console.log('loginINput', loginInput)
    setSessionList(data)
    setLoginInputs(loginInput)
  }

  return (
    <Fragment>
      <Dialog open={open} keepMounted onClose={handleClose} TransitionComponent={Transition}>
        <DialogContent sx={{ padding: 0 }}>
          {visibleAuthDialog && visibleAuthDialog === AuthModalType.Login && (
            <AuthLogin
              visibleAuthDialog={visibleAuthDialog}
              setVisibleAuthDialog={setVisibleAuthDialog}
              setSessionData={setSessionData}
            />
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
          {visibleAuthDialog && visibleAuthDialog === AuthModalType.SessionManage && (
            <AuthSessionManage
              visibleAuthDialog={visibleAuthDialog}
              setVisibleAuthDialog={setVisibleAuthDialog}
              sessionList={sessionList}
              loginInputs={loginInputs}
            />
          )}
        </DialogContent>
      </Dialog>
    </Fragment>
  )
}
