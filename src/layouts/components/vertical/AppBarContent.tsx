// ** MUI Imports
import { styled, Theme } from "@mui/material"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import { SxProps } from "@mui/system"
import MuiToolbar, { ToolbarProps } from "@mui/material/Toolbar"
import Button from "@mui/material/Button"

// ** Icon Imports
import Icon from "src/@core/components/icon"

// ** Type Import
import { Settings } from "src/@core/context/settingsContext"
import { useRouter } from "next/router"

// ** Components
import ModeToggler from "src/@core/layouts/components/shared-components/ModeToggler"
import UserDropdown from "src/@core/layouts/components/shared-components/UserDropdown"
import { HorizontalNavItemsType, LayoutProps } from "src/@core/layouts/types"
import Navigation from "src/@core/layouts/components/horizontal/navigation"

// import { useAuth } from 'src/hooks/useAuth'

const Toolbar = styled(MuiToolbar)<ToolbarProps>(({ theme }) => ({
  width: "100%",
  padding: `${theme.spacing(0, 6)} !important`,
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(4),
  },
  [theme.breakpoints.down("xs")]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}))

interface Props {
  hidden: boolean;
  settings: Settings;
  saveSettings: (values: Settings) => void;
  toggleNavVisibility: () => void;
  navMenu?: {
    sx?: SxProps<Theme>
    navItems?: HorizontalNavItemsType
  }
}

const AppBarContent = (props: Props) => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility, navMenu } = props

  // const { user } = useAuth()
  const { skin, contentWidth } = settings
  const router = useRouter()
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        className="actions-left"
        sx={{ mr: 2, display: "flex", alignItems: "center" }}
      >
        {hidden ? (
          <IconButton
            color="inherit"
            sx={{ ml: -2.75 }}
            onClick={toggleNavVisibility}
          >
            <Icon icon="mdi:menu" />
          </IconButton>
        ) : null}
        {/* Navigation Menu */}
        {!hidden && navMenu?.navItems && (
          <Box
            className="layout-horizontal-nav"
            sx={{ width: "100%", ...props?.navMenu?.sx }}
          >
            <Toolbar
              className="horizontal-nav-content-container"
              sx={{
                mx: "auto",
                ...(contentWidth === "boxed" && {
                  "@media (min-width:1440px)": { maxWidth: 1440 },
                }),
                minHeight: (theme) =>
                  `${
                    (theme.mixins.toolbar.minHeight as number) -
                    (skin === "bordered" ? 1 : 0)
                  }px !important`,
              }}
            >
              <Navigation
                settings={props.settings}
                horizontalNavItems={
                  navMenu.navItems as NonNullable<
                    NonNullable<LayoutProps["horizontalLayoutProps"]>["navMenu"]
                  >["navItems"]
                }
              />
            </Toolbar>
          </Box>
        )}
      </Box>
      <Box
        className="actions-right"
        sx={{ display: "flex", alignItems: "center" }}
      >         
        <Button onClick={router.push('')}>Product үүсгэх</Button>
        <ModeToggler settings={settings} saveSettings={saveSettings} />
        <UserDropdown settings={settings} hidden={hidden} />
      </Box>
    </Box>
  )
}

export default AppBarContent
