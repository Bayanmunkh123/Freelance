// ** React Imports
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Button, Card, CardContent, Divider, Tab, Typography } from '@mui/material'
import { useState } from 'react'
import { AuthModalType } from 'src/utils/constants'
import { AuthSocial } from '../components/AuthSocial'
import { RegisterEmail } from '../components/RegisterEmail'
import { RegisterPhone } from '../components/RegisterPhone'

export type AuthRegisterProps = {
  visibleAuthDialog: AuthModalType | null
  setVisibleAuthDialog: (type: AuthModalType | null) => void
}

export const AuthRegister = (props: AuthRegisterProps) => {
  const { setVisibleAuthDialog } = props
  const [type, setType] = useState('email')

  return (
    <Card sx={{ zIndex: 1, width: '460px' }}>
      <CardContent sx={{ p: theme => `${theme.spacing(13, 7, 6.5)} !important` }}>
        <Typography variant='h6' sx={{ ml: 2, lineHeight: 1, fontWeight: 700, fontSize: '1.5rem !important' }}>
          Бүртгүүлэх
        </Typography>

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
            <RegisterEmail setVisibleAuthDialog={setVisibleAuthDialog} />
          </TabPanel>
          <TabPanel value='phone'>
            <RegisterPhone setVisibleAuthDialog={setVisibleAuthDialog} />
          </TabPanel>
        </TabContext>

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
