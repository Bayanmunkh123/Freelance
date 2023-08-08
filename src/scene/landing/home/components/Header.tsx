import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import Stack from '@mui/material/Stack'
import FormControlLabel from '@mui/material/FormControlLabel'
import FilterButton from './Filter'
import FormGroup from '@mui/material/FormGroup'
import Button from '@mui/material/Button'
import LocationSelect from './LocationSelect'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { MenuItem, InputLabel, FormControl, IconButton, Chip } from '@mui/material'

//** Icon imports*/
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import RedoIcon from '@mui/icons-material/Redo'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import CloseIcon from '@mui/icons-material/Close'
export const Header = () => {
  const [icon, setIcon] = React.useState<JSX.Element>(<KeyboardArrowDownIcon />)
  const [type, setType] = React.useState<string>('')
  const [open, setOpen] = React.useState(false)

  const handleChange = (event: SelectChangeEvent<typeof type>) => {
    setType(event.target.value)
    setIcon(<CloseIcon />)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ px: 25, width: '100%' }}
    >
      <FormGroup row>
        <FormControlLabel control={<Checkbox />} label="Худалдан авах" />
        <FormControlLabel control={<Checkbox />} label="Түрээслэх" />
      </FormGroup>
      <LocationSelect />
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-controlled-open-select-label">Төрөл</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={type}
          label="Төрөл"
          onChange={handleChange}
          renderValue={(value) => (
            <Chip
              key={value}
              label={value}
              onMouseDown={(event) => {
                event.stopPropagation()
              }}
              onDelete={() => setType('')}
            />
          )}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'apartment'}>Орон сууц</MenuItem>
          <MenuItem value={'shop'}>Дэлгүүр</MenuItem>
          <MenuItem value={'office'}>Оффис</MenuItem>
          <MenuItem value={'place'}>Газар</MenuItem>
          <MenuItem value={'house'}>Хувийн сууц</MenuItem>
          <MenuItem value={'building'}>Барилга</MenuItem>
        </Select>
      </FormControl>
      <FilterButton />
    </Stack>
  )
}
interface Props {
  count: number;
}
export const SubHeader = (props: Props) => {
  const { count } = props
  const [value, setValue] = React.useState<string>('')
  const [open, setOpen] = React.useState(false)

  const handleChange = (event: SelectChangeEvent<typeof value>) => {
    setValue(event.target.value)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <Grid container justifyContent="space-between">
      <Stack direction="row" columnGap="10px">
        <Typography
          variant="h6"
          sx={{
            borderLeft: (theme) => `4px solid ${theme.palette.primary.main}`,
            alignSelf: 'center',
            color: (theme) => theme.palette.primary.main,
          }}
        >
          {' '}
          {count}
        </Typography>
        <Typography variant="h6" sx={{ alignSelf: 'center' }}>
          {' '}
          хайлтын үр дүн
        </Typography>
      </Stack>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-controlled-open-select-label">Эрэмбэ</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={value}
          label="Эрэмбэ"
          onChange={handleChange}
          IconComponent={UnfoldMoreIcon}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'NEW'}>Шинээр</MenuItem>
          <MenuItem value={'SPECIAL'}>Онцлох</MenuItem>
          <MenuItem value={'NONE'}>Мэдэхгүй</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  )
}
export const DetailHeader = () => {
  const [icon, setIcon] = React.useState<JSX.Element>(
    <FavoriteBorderOutlinedIcon color="error" />,
  )
  const [liked, setLiked] = React.useState<boolean>(false)
  const getIcon = () => {
    return icon
  }
  const handleChange = () => {
    setLiked(!liked)
    if (liked) setIcon(<FavoriteOutlinedIcon color="error" />)
    else setIcon(<FavoriteBorderOutlinedIcon color="error" />)
  }
  return (
    <Grid container justifyContent="space-between">
      <Stack direction="row" columnGap="10px">
        <Button
          startIcon={
            <ArrowBackIcon
              sx={{ color: (theme) => theme.palette.primary.main }}
            />
          }
          sx={{
            color: (theme) => theme.palette.grey[600],
            border: `1px solid #DEDEDE`,
            borderRadius: '13px',
          }}
        >
          Буцах
        </Button>
        <Button
          sx={{
            color: (theme) => theme.palette.customColors.lightBg,
            backgroundColor: (theme) => theme.palette.primary.main,
          }}
        >
          Онцлох
        </Button>
      </Stack>
      <Stack
        direction="row"
        columnGap="10px"
        sx={{
          '& .MuiButtonBase-root': {
            border: `1px solid #DEDEDE`,
            borderRadius: '13px',
          },
        }}
      >
        <IconButton sx={{ color: (theme) => theme.palette.primary.main }}>
          <RedoIcon />
        </IconButton>
        <IconButton onClick={handleChange}>{getIcon()}</IconButton>
      </Stack>
    </Grid>
  )
}
