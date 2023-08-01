// ** React Imports
import React, { MouseEvent } from "react"
import Link from "next/link"
import { Box, IconButton } from "@mui/material"

import Icon from "src/@core/components/icon"
import LoginGoogle from "./LoginGoogle"
import LoginFacebook from "./LoginFacebook"

export const AuthSocial = () => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <IconButton
        href="/"
        component={Link}
        sx={{ color: "#497ce2" }}

        // onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
      >
        <LoginFacebook />
      </IconButton>
      <IconButton
        href="/"
        component={Link}
        sx={{ color: "#1da1f2" }}

        // onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
      >
        <Icon icon="mdi:twitter" />
      </IconButton>
      <IconButton
        href="/"
        component={Link}
        // onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
        sx={{
          color: (theme) =>
            theme.palette.mode === "light" ? "#272727" : "grey.300",
        }}
      >
        <Icon icon="mdi:github" />
      </IconButton>
      <IconButton
        href="/"
        component={Link}
        sx={{ color: "#db4437" }}
        onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
      >
        <LoginGoogle />
      </IconButton>
    </Box>
  )
}
