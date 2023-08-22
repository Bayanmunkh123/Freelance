import React from 'react'
import { LocationSelect } from './LocationSelect'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { FilterBuy } from './FilterBuy'
import { FilterRent } from './FilterRent'
import {
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
  Chip,
  Dialog,
  DialogContent,
  Typography,
  Grid,
  Tab,
  Button,
  FormGroup,
  FormControlLabel,
  Stack,
  Checkbox
} from '@mui/material'
import { useRouter } from 'next/router'
import { FilterType } from './FilterBuy'

// ** Icon Imports
import Icon from "src/@core/components/icon"

export type FilterInputProps = {
  filterValues: FilterType 
  handleFilterFill: (values: FilterType) => void
}

export const Header = (props : FilterInputProps) => {
  
  const [icon, setIcon] = React.useState<JSX.Element>(<Icon icon={"mdi:arrow-down"} />)
  const [type, setType] = React.useState<string>('')
  const [open, setOpen] = React.useState(false)
  const [openSelection, setOpenSelection] = React.useState(false)
  const [actionType, setActiontype] = React.useState('buy')
  const {filterValues, handleFilterFill} = props

  const handleChange = (event: SelectChangeEvent<typeof type>) => {
    setType(event.target.value)
    setIcon(<Icon icon="material-symbols:close" />)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }
  const handleOpenSelection = () => {
    setOpenSelection(true)
  }

  const handleCloseSelection = () => {
    setOpenSelection(false)
  }
  return (
    <Grid container justifyContent="space-between" px="50px" rowGap="15px">
      <FormGroup row>
        <FormControlLabel control={<Checkbox />} label="Худалдан авах" />
        <FormControlLabel control={<Checkbox />} label="Түрээслэх" />
      </FormGroup>
      <LocationSelect />
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-controlled-open-select-label">Төрөл</InputLabel>
        <Select
          open={open}
          onClose={handleCloseSelection}
          onOpen={handleOpenSelection}
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
        <DialogContent>
      <TabContext value={actionType}>
        <Grid sx={{ mb: '20px' }}>
          <TabList
            onChange={(_event, type) => {
              setActiontype(type)
            }}
            aria-label="filter product"
          >
            <Tab label="Худалдан авах" value="buy" />
            <Tab label="Түрээслэх" value="rent" />
          </TabList>
        </Grid>
        <TabPanel
          value="buy"
          sx={{
            '& .formBuy': {
              display: 'flex',
              flexDirection: 'column',
              rowGap: 4,
            },
          }}
        >
          <FilterBuy filterValues={filterValues} handleFilterFill={handleFilterFill} setOpen={setOpen} />
        </TabPanel>
        <TabPanel value="rent">
          <FilterRent />
        </TabPanel>
      </TabContext>
    </DialogContent>
      </Dialog>
    </Grid>
  )
}
interface Props {
  count: number | undefined;
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
    <Grid container justifyContent="space-between" px="50px" rowGap="15px" >
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
          //IconComponent={<Icon icon="ci:unfold-more"/>}
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
  const [icon, setIcon] = React.useState<string>( "material-symbols:favorite-outline")
  const [liked, setLiked] = React.useState<boolean>(false)
  const handleChange = () => {
    setLiked(!liked)
    if (liked) setIcon("material-symbols:favorite")
    else setIcon("material-symbols:favorite-outline")
  }
  const router = useRouter()
  return (
    <Grid container justifyContent="space-between" rowGap="15px">
      <Stack direction="row" columnGap="10px">
        <Button
          startIcon={
            <Icon icon={"mdi:arrow-left"} />
          }
          sx={{
            color: (theme) => theme.palette.grey[600],
            border: `1px solid #DEDEDE`,
            borderRadius: '13px',
          }}
          onClick={() => router.back()}
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
          <Icon icon="mdi:redo" />
        </IconButton>
        <IconButton onClick={handleChange}><Icon icon={icon} color='red' /></IconButton>
      </Stack>
    </Grid>
  )
}
