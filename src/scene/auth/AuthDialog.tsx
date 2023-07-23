// ** React Imports
import React, {
  forwardRef,
  Fragment,
  ReactElement,
  Ref,
  useState,
  useEffect,
} from "react"
import Slide, { SlideProps } from "@mui/material/Slide"
import { Dialog, DialogContent } from "@mui/material"
import { AuthModalType } from "src/utils/constants"
import { AuthTokenVerify } from "./modals/AuthTokenVerify"
import { AuthSessionManage } from "./modals/AuthSessionManage"
import { AuthChangePassword } from "./modals/AuthChangePassword"
import { AuthConfirmCode } from "./modals/AuthConfirmCode"
import { AuthForget } from "./modals/AuthForgetPassword"
import { AuthRegister } from "./modals/AuthRegister"
import { AuthLogin } from "./modals/AuthLogin"
import { AuthModalProvider } from "src/context/AuthModalContext"

export const Transition = forwardRef(function Transition(
  props: SlideProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />
})

export type AuthDialogProps = {
  open: boolean
  setOpen: (value: boolean) => void
}

export const AuthDialog = (props: AuthDialogProps) => {
  const { open, setOpen } = props
  const handleClose = () => setOpen(false)
  const [visibleAuthDialog, setVisibleAuthDialog] =
    useState<AuthModalType | null>(AuthModalType.Login)
  useEffect(() => {
    if (!open) setVisibleAuthDialog(AuthModalType.Login)
  }, [open])

  return (
    <AuthModalProvider>
      <Fragment>
        <Dialog
          open={open}
          keepMounted
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <DialogContent sx={{ padding: 0 }}>
            <>
              {visibleAuthDialog &&
                visibleAuthDialog === AuthModalType.Login && (
                  <AuthLogin
                    visibleAuthDialog={visibleAuthDialog}
                    setVisibleAuthDialog={setVisibleAuthDialog}
                  />
                )}
              {visibleAuthDialog &&
                visibleAuthDialog === AuthModalType.Register && (
                  <AuthRegister
                    visibleAuthDialog={visibleAuthDialog}
                    setVisibleAuthDialog={setVisibleAuthDialog}
                  />
                )}
              {visibleAuthDialog &&
                visibleAuthDialog === AuthModalType.Forget && (
                  <AuthForget
                    visibleAuthDialog={visibleAuthDialog}
                    setVisibleAuthDialog={setVisibleAuthDialog}
                  />
                )}
              {visibleAuthDialog &&
                visibleAuthDialog === AuthModalType.ConfirmCode && (
                  <AuthConfirmCode
                    visibleAuthDialog={visibleAuthDialog}
                    setVisibleAuthDialog={setVisibleAuthDialog}
                  />
                )}
              {visibleAuthDialog &&
                visibleAuthDialog === AuthModalType.ChangePassword && (
                  <AuthChangePassword
                    visibleAuthDialog={visibleAuthDialog}
                    setVisibleAuthDialog={setVisibleAuthDialog}
                  />
                )}
              {visibleAuthDialog &&
                visibleAuthDialog === AuthModalType.SessionManage && (
                  <AuthSessionManage
                    visibleAuthDialog={visibleAuthDialog}
                    setVisibleAuthDialog={setVisibleAuthDialog}
                  />
                )}
              {visibleAuthDialog &&
                visibleAuthDialog === AuthModalType.TokenVerify && (
                  <AuthTokenVerify
                    visibleAuthDialog={visibleAuthDialog}
                    setVisibleAuthDialog={setVisibleAuthDialog}
                  />
                )}
            </>
          </DialogContent>
        </Dialog>
      </Fragment>
    </AuthModalProvider>
  )
}
