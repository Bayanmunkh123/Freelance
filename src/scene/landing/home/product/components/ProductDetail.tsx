import * as React from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import Stack from '@mui/material/Stack'
import ImageListItem from '@mui/material/ImageListItem'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { ListData } from '../utils/ListData'
import { DetailedBox } from './DetailedBox'

// ** Icon Imports
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Grid } from '@mui/material'

export const ProductDetail = () => {
  const [expanded, setExpanded] = React.useState(false)
  const [label, setLabel] = React.useState('Дэлгэрэнгүй харах')
  const handleChange = (bool: boolean) => {
    bool ? setLabel('Хураах') : setLabel('Дэлгэрэнгүй харах')
    setExpanded(bool)
  }
  return (
    <Grid
      container
      spacing={2}
      maxWidth={1300}
      // sx={{
      //   display: 'flex',
      //   flexDirection: 'column',
      //   alignItems: 'center',
      // }}
    >
      <Stack direction="column">
        <Typography variant="h6" fontWeight="bold">
          {ListData[0].name}
        </Typography>
        <Stack direction="row" columnGap="20px" alignItems="center">
          <Typography variant="h6" fontWeight="bold">
            {ListData[0].price}₮
          </Typography>
          <Typography
            sx={{
              border: (theme) => `1px solid ${theme.palette.primary.main}`,
              borderRadius: '8px',
              p: '10px 30px',
            }}
          >
            {ListData[0].constStatus}
          </Typography>
        </Stack>
        <Typography>
          {ListData[0].location.concat(ListData[0].district)}
        </Typography>
      </Stack>
      <Stack direction="row" width="100%">
        <img src={ListData[0].images[0]} style={{ borderRadius: '10px' }} />
        <ImageList
          sx={{
            width: 500,
            height: 450,
            borderRadius: '10px',
          }}
          cols={2}
          rowHeight={164}
        >
          {ListData[0].images.map((url) => (
            <ImageListItem key={url}>
              <img src={url} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>
      <Divider />
      <Stack direction="row" width="100%" columnGap="20px">
        <DetailedBox
          title="Нийт өрөө- "
          subTitle={`${ListData[0].roomNumber}`}
          icon="MeetingRoomOutlinedIcon"
        />
        <DetailedBox
          title="Угаалгын өрөө- "
          subTitle={`${ListData[0].bathNo}`}
          icon="BathtubOutlinedIcon"
        />
        <DetailedBox
          title="Нийт метр квадрат- "
          subTitle={`${ListData[0].sqr}`}
          icon="CompareArrowsIcon"
        />
        <DetailedBox
          title="Угаалгын өрөө- "
          subTitle={`${ListData[0].bathNo}`}
          icon="BathtubOutlinedIcon"
        />
      </Stack>
      <Stack direction="row" width="100%" columnGap="20px">
        <DetailedBox
          title="Нийт давхар- "
          subTitle={`${ListData[0].floors}`}
          icon="BusinessIcon"
        />
        <DetailedBox
          title="Давхар- "
          subTitle={`${ListData[0].floorNumber}`}
          icon="LayersIcon"
        />
        <DetailedBox
          title="Баригдсан он- "
          subTitle={`${ListData[0].releaseDate}`}
          icon="EventAvailableIcon"
        />
        <DetailedBox
          title="Зогсоол- "
          subTitle={`${ListData[0].parking}`}
          icon="DirectionsCarIcon"
        />
      </Stack>
      <Accordion expanded={expanded} onChange={() => handleChange(!expanded)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Stack direction="row" justifyContent="space-between">
            <Typography>Дэлгэрэнгүй</Typography>
            <Typography sx={{ ml: '950px' }}>{label}</Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{ListData[0].description}</Typography>
        </AccordionDetails>
      </Accordion>
      <Typography>Байршил</Typography>
      <Box>
      <Typography>Онцлог</Typography>
        <Stack direction="row">
          {ListData[0].highlights.map((item) => (
            <Button
              key={item}
              startIcon={<CheckCircleIcon />}
              sx={{
                width: 180,
                border: '1px solid',
                borderRadius: '10px',
                fontSize: '12px',
                color: 'primary.main',
              }}
            >
              {item}
            </Button>
          ))}
        </Stack>
      </Box>
      <Button>Худалдан авах</Button>
    </Grid>
  )
}
