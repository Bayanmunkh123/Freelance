import React from 'react'
import { Card, CardContent, Typography, Button, Box } from '@mui/material'

import { AuthModalType } from 'src/utils/constants'
import { useAuthModalContext } from 'src/hooks/useAuth'

export type AuthSessionManageProps = {
  visibleAuthDialog: AuthModalType | undefined
  setVisibleAuthDialog: (type: AuthModalType | null) => void
}

export const AuthTokenVerify = (props: AuthSessionManageProps) => {
  const { setVisibleAuthDialog } = props
  const { userData } = useAuthModalContext()

  return (
    <Card sx={{ zIndex: 1, width: '460px' }}>
      <CardContent sx={{ p: theme => `${theme.spacing(13, 7, 6.5)} !important` }}>
        <Typography variant='h6' sx={{ ml: 2, mb: 5, lineHeight: 1, fontWeight: 700, fontSize: '1.5rem !important' }}>
          Анхааруулга
        </Typography>
        <Typography sx={{ ml: 2, mb: 2 }}>
          Таны <span style={{ fontWeight: 700, marginRight: 5 }}>{userData?.email}</span>
          имейл хаяг баталгаажаагүй байна.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            color='error'
            onClick={() => {
              setVisibleAuthDialog(null)
            }}
            sx={{ mt: 2 }}
          >
            Буцах
          </Button>
          <Button onClick={() => setVisibleAuthDialog(AuthModalType.ConfirmCode)} sx={{ mt: 2 }}>
            Баталгаажуулах
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}
