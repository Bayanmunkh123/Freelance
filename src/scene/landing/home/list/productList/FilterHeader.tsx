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
import { Formik, Form, Field } from 'formik'
import TextField from '@mui/material/TextField'
import Slider from '@mui/material/Slider'
import { FilterDialog } from './FilterDialog'

/**Icon imports */
import CloseIcon from '@mui/icons-material/Close'
import SortIcon from '@mui/icons-material/Sort'
const NumButton = () => {
  return (
    <ButtonGroup disableElevation>
      <Button startIcon={<Checkbox />}>1</Button>
      <Button startIcon={<Checkbox />}>2</Button>
      <Button startIcon={<Checkbox />}>3</Button>
      <Button startIcon={<Checkbox />}>4</Button>
      <Button startIcon={<Checkbox />}>5+</Button>
    </ButtonGroup>
  )
}

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
  }

  // const formik = useFormik({
  //   initialValues: {
  //     actionType: '',
  //     location: '',
  //     type: '',
  //     price: {
  //       min: 0,
  //       max: 0,
  //     },
  //     size: 0,
  //     bedNo: 0,
  //     batho: 0,
  //     highlight: '',
  //     status: '',
  //   },
  //   onSubmit: (values: number[]) => {
  //     alert(JSON.stringify(values, null, 2))
  //   },
  // })

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
        {/* <form>
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
                  //value={formik.values.price.min}
                  //onChange={formik.handleChange}
                />
                <TextField
                  fullWidth
                  label="Дээд үнэ"
                  //value={formik.values.price.max}
                  //onChange={formik.handleChange}
                />
              </Stack>
              <Box>
                <Slider
                  getAriaLabel={() => 'Minimum distance'}
                  value={value}
                  disableSwap
                />
              </Box>
            </Box>
            <Box>
              <Typography>Өрөө</Typography>
              <NumButton />
            </Box>
            <Box>
              <Typography>Угаалгын өрөө</Typography>
              <NumButton />
            </Box>
            <Box>
              <Typography>Унтлагын өрөө</Typography>
              <NumButton />
            </Box>
            <Box>
              <Typography>Онцлог</Typography>
              <NumButton />
            </Box>
            <Box>
              <Typography>Статус</Typography>
              <NumButton />
            </Box>
          </DialogContent>
          <Button>Цэвэрлэх</Button>
          <Button >Шүүх</Button>
        </form> */}
        {/* <DialogActions>
        </DialogActions> */}
        <FilterDialog />
      </Dialog>
    </>
  )
}
