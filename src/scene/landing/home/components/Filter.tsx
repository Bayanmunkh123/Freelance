import * as React from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import { FilterDialog } from "./FilterDialog"

// ** Icon Imports
import Icon from "src/@core/components/icon"

export default function Filter() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Button
        onClick={handleOpen}
        startIcon={<Icon icon={"mdi:sort"} />}
        size="small"
        sx={{
          border: (theme) => `1px solid ${theme.palette.grey[400]}`,
          borderRadius: "8px",
          px: "15px",
        }}
      >
        Шүүлтүүр
      </Button>
      <Dialog
        open={open}
        //onClose={handleClose}
        scroll="paper"
        sx={{ "& .MuiPaper-root": { maxWidth: "700px" } }}
      >
        <Grid container justifyContent="space-between" px="20px" my="20px">
          <Typography
            variant="h6"
            sx={{
              ml: 2,
              lineHeight: 1,
              fontWeight: 700,
              fontSize: "1.5rem !important",
            }}
          >
            Бүх шүүлтүүр
          </Typography>
          <Button onClick={handleClose}>
            <Icon icon={"mdi:close"} />
          </Button>
          
        </Grid>
        <FilterDialog />
      </Dialog>
    </>
  )
}
