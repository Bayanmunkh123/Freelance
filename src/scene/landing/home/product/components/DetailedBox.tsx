import { Box, IconButton, Typography } from '@mui/material'
/**Icon imports */
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined'
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined'
import HotelIcon from '@mui/icons-material/Hotel'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import BusinessIcon from '@mui/icons-material/Business'
import LayersIcon from '@mui/icons-material/Layers'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'

interface DetailedBoxType {
  title: string;
  subTitle: string;
  icon: string;
}
function getIcon(name: string) {
  switch (name) {
    case 'CompareArrowsIcon':
      return <CompareArrowsIcon />
    case 'MeetingRoomOutlinedIcon':
      return <MeetingRoomOutlinedIcon />
    case 'HotelIcon':
      return <HotelIcon />
    case 'BathtubOutlinedIcon':
      return <BathtubOutlinedIcon />
    case 'BusinessIcon':
      return <BusinessIcon />
    case 'LayersIcon':
      return <LayersIcon />
    case 'EventAvailableIcon':
      return <EventAvailableIcon />
    case 'DirectionsCarIcon':
      return <DirectionsCarIcon />
  }
}
export const DetailedBox = (props: DetailedBoxType) => {
  const { title, subTitle, icon } = props
  return (
    <Box
      sx={{
        py: 1.25,
        display: 'flex',
        alignItems: 'center',
        '& svg': { color: 'primary.main' },
        '& .MuiButtonBase-root': {
          borderRadius: '30px',
          backgroundColor: (theme) => theme.palette.primary.light,
        },
        columnGap: '20px',
      }}
    >
      <IconButton>{getIcon(icon)}</IconButton>

      <Typography variant="body2">
        {title} {subTitle}
      </Typography>
    </Box>
  )
}
