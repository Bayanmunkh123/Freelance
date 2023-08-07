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

export const ProductDetail = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography>{ListData[0].estateType}</Typography>
      <Stack direction="row">
        <Typography>{ListData[0].price}</Typography>
        <Typography>{ListData[0].estateStatus}</Typography>
      </Stack>
      <Typography>
        {ListData[0].location.concat(ListData[0].address)}
      </Typography>
      <Stack direction="row">
        <img src={ListData[0].images[0]} />
        <ImageList sx={{ width: 500, height: 450 }} cols={2} rowHeight={164}>
          {ListData[0].images.map((url) => (
            <ImageListItem key={url}>
              <img src={url} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>
      <Divider />
      <Stack direction="row">
        <DetailedBox
          title="Нийт өрөө- "
          subTitle={`${ListData[0].roomNo}`}
          icon="MeetingRoomOutlinedIcon"
        />
        <DetailedBox
          title="Угаалгын өрөө- "
          subTitle={`${ListData[0].bathNo}`}
          icon="BathtubOutlinedIcon"
        />
        <DetailedBox
          title="Нийт метр квадрат- "
          subTitle={`${ListData[0].area}`}
          icon="CompareArrowsIcon"
        />
        <DetailedBox
          title="Угаалгын өрөө- "
          subTitle={`${ListData[0].bathNo}`}
          icon="BathtubOutlinedIcon"
        />
      </Stack>
      <Stack direction="row">
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
          subTitle={`${ListData[0].buildYear}`}
          icon="EventAvailableIcon"
        />
        <DetailedBox
          title="Зогсоол- "
          subTitle={`${ListData[0].parking}`}
          icon="DirectionsCarIcon"
        />
      </Stack>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Дэлгэрэнгүй</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{ListData[0].desc}</Typography>
        </AccordionDetails>
      </Accordion>
      <Typography>Байршил</Typography>
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

      <Button>Худалдан авах</Button>
    </Box>
  )
}
