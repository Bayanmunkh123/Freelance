import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import { FilterDialog } from './FilterDialog'

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
  }
  return (
    <>
      <Button onClick={handleOpen} startIcon={<SortIcon />} size="medium">
        Шүүлтүүр
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        sx={{ '& .MuiPaper-root': { maxWidth : '700px' } }}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
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
