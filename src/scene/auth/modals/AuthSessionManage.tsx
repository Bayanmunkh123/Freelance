import React from "react"
import {
  Card,
  CardContent,
  Typography,
  FormControl,
  MenuItem,
  Button,
} from "@mui/material"

import { AuthModalType } from "src/utils/constants"
import { useAccountEliminateMutation } from "src/generated"
import { config } from "src/config"
import { useApolloClient } from "@apollo/client"
import { useRouter } from "next/router"
import { useAuthModalContext } from "src/hooks/useAuth"
import { removeItemToken, setItemToken } from "src/lib/apollo/tokenHandler"

export type AuthSessionManageProps = {
  visibleAuthDialog: AuthModalType | undefined
  setVisibleAuthDialog: (type: AuthModalType | null) => void
}

export const AuthSessionManage = (props: AuthSessionManageProps) => {
  const { setVisibleAuthDialog } = props
  const { sessionList, userData } = useAuthModalContext()
  const apolloClient = useApolloClient()
  const Router = useRouter()

  const [onAccountEliminate] = useAccountEliminateMutation({
    onCompleted: async (data) => {
      console.log(data)
      if (data.accountEliminate?.deviceId) {
        localStorage.setItem(config.DEVICE_ID, data.accountEliminate?.deviceId)
      }

      if (data.accountEliminate?.accessToken) {
        removeItemToken(null)
        if (data?.accountEliminate?.accessToken) {
          setItemToken(data.accountEliminate)
          alert("Амжилттай")
          await apolloClient.cache.reset()
          window.location.reload()
          setVisibleAuthDialog(null)
          Router.push("/")
        }
      } else {
        alert("CHADAHGUI BAINA")
      }
    },
  })

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
          Төхөөрөмжийн Бүртгэл
        </Typography>
        <FormControl sx={{ m: 1, width: 500 }}>
          {sessionList?.map((name) => (
            <MenuItem key={name.id} value={name.id}>
              {name.deviceOs} - {name.deviceType} - {name.deviceName}
              <Button
                onClick={() => {
                  userData &&
                    onAccountEliminate({
                      variables: {
                        input: {
                          id: name.id,
                          email: userData?.email as string,
                          password: userData?.password,
                        },
                      },
                    })
                }}
              >
                X
              </Button>
            </MenuItem>
          ))}
        </FormControl>
      </CardContent>
    </Card>
  )
}
