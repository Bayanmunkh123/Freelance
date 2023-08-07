import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import { FilterDialog } from './FilterDialog'

/** Icon imports */
import SortIcon from '@mui/icons-material/Sort'

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
        startIcon={<SortIcon />}
        size="small"
        sx={{
          border: (theme) => `1px solid ${theme.palette.grey[600]}`,
          borderRadius: '8px',
          px: '15px',
        }}
      >
        Шүүлтүүр
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        sx={{ '& .MuiPaper-root': { maxWidth: '700px' } }}
      >
        <FilterDialog />
      </Dialog>
    </>
  )
}
