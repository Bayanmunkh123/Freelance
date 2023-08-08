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
import { MenuItem, InputLabel, FormControl, IconButton } from '@mui/material'

//** Icon imports*/
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import RedoIcon from '@mui/icons-material/Redo'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'

export const Header = () => {
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
      <Button endIcon={<KeyboardArrowDownIcon />}>Төрөл</Button>
      <FilterButton />
    </Stack>
  )
}
interface Props {
  count: number;
}
export const SubHeader = (props: Props) => {
  const { count } = props
  const [age, setAge] = React.useState<string | number>('')
  const [open, setOpen] = React.useState(false)

  const handleChange = (event: SelectChangeEvent<typeof age>) => {
    setAge(event.target.value)
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
          value={age}
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
        <Button startIcon={<ArrowBackIcon />}>Буцах</Button>
        <Button>Онцлох</Button>
      </Stack>
      <Stack direction="row" columnGap="10px">
        <IconButton>
          <RedoIcon />
        </IconButton>
        <IconButton
          onClick={handleChange}
          sx={{ border: `1px solid #DEDEDE}`, borderRadius: 100 }}
        >
          {getIcon()}
        </IconButton>
      </Stack>
    </Grid>
  )
}
