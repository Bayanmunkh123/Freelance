import * as React from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import ImageList from '@mui/material/ImageList'
import Stack from '@mui/material/Stack'
import ImageListItem from '@mui/material/ImageListItem'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { ListData } from '../utils/ListData'
import { DetailedBox } from './DetailedBox'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import { DetailHeader } from '../../components/Header'

// ** Icon Imports
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

export const ProductDetail = () => {
  const [expanded, setExpanded] = React.useState(false)
  const [label, setLabel] = React.useState('Дэлгэрэнгүй харах')
  const handleChange = (bool: boolean) => {
    bool ? setLabel('Хураах') : setLabel('Дэлгэрэнгүй харах')
    setExpanded(bool)
  }
  return (
    <Grid container spacing={2} maxWidth={1300} rowGap="20px" px="50px" rowGap="15px">
      <DetailHeader />
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
              p: '8px 30px',
            }}
          >
            {ListData[0].constStatus}
          </Typography>
        </Stack>
        <Typography>
          {ListData[0].location.concat(ListData[0].district)}
        </Typography>
      </Stack>
      <Grid container>
        <img
          src={ListData[0].images[0]}
          style={{ borderRadius: '10px', width: 500 }}
        />
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
      </Grid>
      <Divider sx={{ width: '100%' }} />
      <Grid container columnGap="20px">
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
      </Grid>
      <Grid container columnGap="20px">
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
      </Grid>
      <Accordion expanded={expanded} onChange={() => handleChange(!expanded)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Grid container justifyContent="space-between">
            <Typography variant="h6" fontWeight="bold">
              Дэлгэрэнгүй мэдээлэл
            </Typography>
            <Typography fontWeight="medium">{label}</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{ListData[0].description}</Typography>
        </AccordionDetails>
      </Accordion>
      <Typography variant="h6" fontWeight="bold">
        Байршил
      </Typography>
      <Grid container>
        <img src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1" />
      </Grid>

      <Typography variant="h6" fontWeight="bold">
        Онцлог
      </Typography>
      <Grid container columnGap="20px" rowGap="20px">
        {ListData[0].highlights.map((item) => (
          <Button
            key={item}
            size="small"
            sx={{
              width: 200,
              borderRadius: '15px',
              fontSize: '12px',
              color: (theme) => theme.palette.grey[600],
              '& .MuiSvgIcon-root': {
                color: (theme) => theme.palette.primary.main,
              },
              '& .MuiButtonBase-root': {
                borderRadius: '30px',
                backgroundColor: (theme) => theme.palette.primary.light,
              },
              boxShadow: (theme) =>
                `1px 1px 1px 1px ${theme.palette.grey[300]}`,
            }}
          >
            <IconButton>
              <CheckCircleIcon />
            </IconButton>
            {item}
          </Button>
        ))}
      </Grid>
      <Button
        sx={{
          backgroundColor: 'primary.main',
          color: (theme) => theme.palette.customColors.lightBg,
          px: '30px',
          left: '80%'
        }}
      >
        Худалдан авах
      </Button>
    </Grid>
  )
}
