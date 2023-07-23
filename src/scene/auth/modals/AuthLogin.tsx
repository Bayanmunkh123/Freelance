import React, { useState } from "react"
import { Box, Card, CardContent, Tab, Typography } from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import Icon from "src/@core/components/icon"

import { AuthModalType } from "src/utils/constants"
import { AuthSocial } from "../components/AuthSocial"
import LoginEmail from "../components/LoginEmail"
import LoginPhone from "../components/LoginPhone"

export type AuthLoginProps = {
  visibleAuthDialog: AuthModalType | null
  setVisibleAuthDialog: (type: AuthModalType | null) => void
}

export const AuthLogin = (props: AuthLoginProps) => {
  const [type, setType] = useState("email")
  const { setVisibleAuthDialog } = props

  return (
    <Card sx={{ zIndex: 1, width: "460px" }}>
      <CardContent
        sx={{ p: (theme) => `${theme.spacing(13, 7, 6.5)} !important` }}
      >
        <Typography
          variant="h6"
          sx={{
            ml: 2,
            lineHeight: 1,
            fontWeight: 700,
            fontSize: "1.5rem !important",
          }}
        >
          Нэвтрэх
        </Typography>
        <TabContext value={type}>
          <Box sx={{ mb: "24px" }}>
            <TabList
              onChange={(_event, _type) => {
                setType(_type)
              }}
              aria-label="lab API tabs example"
            >
              <Tab
                label="И-мэйл"
                value="email"
                iconPosition="start"
                icon={
                  <Icon
                    icon="ic:outline-email"
                    style={{ marginRight: "4px" }}
                  />
                }
              />
              <Tab
                label="Утас"
                value="phone"
                iconPosition="start"
                icon={
                  <Icon icon="carbon:phone" style={{ marginRight: "4px" }} />
                }
              />
            </TabList>
          </Box>
          <TabPanel value="email">
            <LoginEmail setVisibleAuthDialog={setVisibleAuthDialog} />
          </TabPanel>
          <TabPanel value="phone">
            <LoginPhone setVisibleAuthDialog={setVisibleAuthDialog} />
          </TabPanel>
        </TabContext>
        <AuthSocial />
      </CardContent>
    </Card>
  )
}
