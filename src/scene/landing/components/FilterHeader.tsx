import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog, { DialogProps } from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import ButtonGroup from '@mui/material/ButtonGroup'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LocationSelect from './LocationSelect'
import RadioGroup from '@mui/material/RadioGroup'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Stack from '@mui/material/Stack'
import { useFormik } from 'formik'
import TextField from '@mui/material/TextField'

/**Icon imports */
import CloseIcon from '@mui/icons-material/Close'
import SortIcon from '@mui/icons-material/Sort'

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const [value, setValue] = React.useState<number[]>([0, 0])

  const handleChange = (newValue: number[]) => {
    setValue(newValue)

    // if (!Array.isArray(newValue)) {
    //   return;
    // }

    // if (newValue[1] - newValue[0] < minDistance) {
    //   if (activeThumb === 0) {
    //     const clamped = Math.min(newValue[0], 100 - minDistance);
    //     setValue2([clamped, clamped + minDistance]);
    //   } else {
    //     const clamped = Math.max(newValue[1], minDistance);
    //     setValue2([clamped - minDistance, clamped]);
    //   }
    // } else {
    //   setValue2(newValue as number[]);
    // }
  }
  const formik = useFormik({
    initialValues: {
      values: number[]
    },
    onSubmit: (values: number[]) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <>
      <Button onClick={handleOpen} startIcon={<SortIcon />} size="medium">
        Шүүлтүүр
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        sx={{ '& .MuiPaper-root': {} }}
      >
        <form>
          <DialogTitle>
            Бүх Шүүлтүүр
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <ButtonGroup disableElevation>
              <Button>Худалдан авах</Button>
              <Button>Түрээслэх</Button>
            </ButtonGroup>
            <Box>
              <Typography>Байршил</Typography>
              <LocationSelect />
            </Box>
            <Box>
              <FormControl>
                <FormLabel>Төрөл</FormLabel>
                <RadioGroup>
                  <Stack direction="row">
                    {' '}
                    <FormControlLabel
                      value="dept"
                      control={<Checkbox />}
                      label="Орон сууц"
                    />
                    <FormControlLabel
                      value="house"
                      control={<Checkbox />}
                      label="Хувийн сууц"
                    />
                    <FormControlLabel
                      value="place"
                      control={<Checkbox />}
                      label="Газар"
                    />
                  </Stack>
                  <Stack direction="row">
                    <FormControlLabel
                      value="office"
                      control={<Checkbox />}
                      label="Оффис"
                    />
                    <FormControlLabel
                      value="building"
                      control={<Checkbox />}
                      label="Барилга"
                    />
                    <FormControlLabel
                      value="shop"
                      control={<Checkbox />}
                      label="Дэлгүүр"
                    />
                  </Stack>
                </RadioGroup>
              </FormControl>
            </Box>
            <Box>
              <Typography>Үнэ</Typography>
              <Stack direction="row">
                <Typography>{value[0]}₮</Typography>
                <Typography>{value[1]}₮</Typography>
                <TextField
                  fullWidth
                  label="Доод үнэ"
                  //value={formik.values.max}
                  onChange={formik.handleChange}
                />
                <TextField
                  fullWidth
                  label="Дээд үнэ"
                  //value={formik.values.min}
                  onChange={formik.handleChange}
                />
              </Stack>
            </Box>
          </DialogContent>
        </form>
        {/* <DialogActions>
        </DialogActions> */}
      </Dialog>
    </>
  )
}
