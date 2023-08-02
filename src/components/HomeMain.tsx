import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import { IconButton, SvgIcon } from "@mui/material"

/**Icon import */
import IconSvg from "src/layouts/components/IconSvg"

export const HomeMain = () => {
  return (
    <Stack
      direction="row"
      columnGap="20px"
      justifyContent="center"
      sx={{
        "& .MuiButton-root, .MuiIconButton-root": {
          border: `2px solid #E2E7EC`,
          borderRadius: "10px",
          boxShadow: (theme) => `0 0 0 2px ${theme.palette.background.paper}`,
        },
        "& .MuiBox-root": {
          display: "flex",
          columnGap: "20px",
          "& .MuiIconButton-root": {
            pb: "30px",
            px: "50px",
          },
          "& .MuiTypography-root": {
            position: "absolute",
            top: "50px",
          },
        },
      }}
    >
      <Stack direction="column" rowGap="20px">
        <Stack direction="row" alignItems="center" columnGap="20px">
          {IconSvg("rent")}
          <Typography>Түрээслэх</Typography>
        </Stack>
        <Button startIcon={IconSvg("rentButton")} sx={{}}>
          Түрээслэх
        </Button>
        <Box sx={{}}>
          <IconButton>
            {IconSvg("shop")}
            <Typography sx={{}}>Дэлгүүр</Typography>
          </IconButton>
          <IconButton>
            {IconSvg("office")}
            <Typography>Оффис</Typography>
          </IconButton>
          <IconButton>
            {IconSvg("place")}
            <Typography>Газар</Typography>
          </IconButton>
        </Box>
        <Box>
          <IconButton>
            {IconSvg("parking")}
            <Typography>Зогсоол</Typography>
          </IconButton>
          <IconButton>
            {IconSvg("warehouse")}
            <Typography>Агуулах</Typography>
          </IconButton>
          <IconButton>
            {IconSvg("building")}
            <Typography>Барилга</Typography>
          </IconButton>
        </Box>
        <Box>
          <IconButton>
            {IconSvg("dept")}
            <Typography>Орон сууц</Typography>
          </IconButton>
          <IconButton>
            {IconSvg("house")}
            <Typography>Хувийн сууц</Typography>
          </IconButton>
          <IconButton>
            {IconSvg("public-dept")}
            <Typography>Нийтийн байр</Typography>
          </IconButton>
        </Box>
      </Stack>
      <Stack direction="column" rowGap="20px">
        <Stack direction="row" alignItems="center" columnGap="20px">
          {IconSvg("buy")}
          <Typography>Худалдан авах</Typography>
        </Stack>
        <Button startIcon={IconSvg("rentButton")}>Худалдан авах</Button>
        <Box>
          <IconButton>
            {IconSvg("shop")}
            <Typography>Дэлгүүр</Typography>
          </IconButton>
          <IconButton>
            {IconSvg("office")}
            <Typography>Оффис</Typography>
          </IconButton>
          <IconButton>
            {IconSvg("place")}
            <Typography>Газар</Typography>
          </IconButton>
        </Box>
        <Box>
          <IconButton>
            {IconSvg("parking")}
            <Typography>Зогсоол</Typography>
          </IconButton>
          <IconButton>
            {IconSvg("warehouse")}
            <Typography>Агуулах</Typography>
          </IconButton>
          <IconButton>
            {IconSvg("building")}
            <Typography>Барилга</Typography>
          </IconButton>
        </Box>
        <Box>
          <IconButton>
            {IconSvg("dept")}
            <Typography>Орон сууц</Typography>
          </IconButton>
          <IconButton>
            {IconSvg("house")}
            <Typography>Хувийн сууц</Typography>
          </IconButton>
          <IconButton>
            {IconSvg("public-dept")}
            <Typography>Нийтийн байр</Typography>
          </IconButton>
        </Box>
      </Stack>
    </Stack>
  )
}
