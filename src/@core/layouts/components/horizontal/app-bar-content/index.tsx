// ** Next Import
import Link from "next/link"

// ** MUI Imports
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"

// ** Type Import
import { LayoutProps } from "src/@core/layouts/types"

interface Props {
  hidden: LayoutProps["hidden"]
  settings: LayoutProps["settings"]
  saveSettings: LayoutProps["saveSettings"]
  appBarContent: NonNullable<
    NonNullable<LayoutProps["horizontalLayoutProps"]>["appBar"]
  >["content"]
  appBarBranding: NonNullable<
    NonNullable<LayoutProps["horizontalLayoutProps"]>["appBar"]
  >["branding"]
}

const LinkStyled = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  marginRight: theme.spacing(8),
}))

const AppBarContent = (props: Props) => {
  // ** Props
  const {
    appBarContent: userAppBarContent,
    appBarBranding: userAppBarBranding,
  } = props

  // ** Hooks
  // const theme = useTheme()

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {userAppBarBranding ? (
        userAppBarBranding(props)
      ) : (
        <LinkStyled href="/">
          {/* <svg
            width='28'
            height='28'
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
          >
            <rect width='30' height='30' fill='url(#pattern0)' />
            <defs>
              <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
                <use xlinkHref='#image0_2_98205' transform='translate(0 -0.00505051) scale(0.00505051)' />
              </pattern>
              <image
                id='image0_2_98205'
                width='198'
                height='200'
                xlinkHref='data:image/png;base64,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'
              />
            </defs>
          </svg> */}

          <Typography
            variant="h6"
            sx={{
              ml: 2,
              mr: 1,
              fontWeight: 500,
              lineHeight: 1.2,
              color: "primary.main",
            }}
          >
            TAB
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, lineHeight: 1.2, color: "primary.main" }}
          >
            Systems
          </Typography>
        </LinkStyled>
      )}
      {userAppBarContent ? userAppBarContent(props) : null}
    </Box>
  )
}

export default AppBarContent
