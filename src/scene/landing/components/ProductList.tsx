import * as React from 'react'
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined'
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined'
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined'
import HotelIcon from '@mui/icons-material/Hotel'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'

// Styled Box component
const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))
interface ListDataType {
  estateType: string
  status: string
  desc: string
  address: string
  roomNo: number
  bedNo: number
  bathNo: number
  area: number
  price: number
  isFav: boolean
  imageUrl: string
}
const ListData: ListDataType[] = [
  {
    estateType: 'Орон сууц',
    status: 'Онцлох',
    desc: 'Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola, body muscles and holding ones own breath. Though, most of these notes are not fundamentally necessary, they are such that you can use them for a good laugh, at a drinks party or for picking up women or men.',
    address: 'Цагаан7 хороолол Golden Art - Эрдэнэт, Монгол',
    roomNo: 2,
    bedNo: 2,
    bathNo: 1,
    area: 37,
    price: 95000000,
    isFav: false,
    imageUrl: 'https://images.homes.com/listings/214/1007620603-872007331-original.jpg'
  }
]
function changeNot(): ListDataType[] {
  const getRandomInt = (max: number) => Math.floor(Math.random() * Math.floor(max))

  return Array.from(new Array(5)).map(() => ListData[getRandomInt(ListData.length)])
}

const CardMembership = () => {
  const data = changeNot()
  const [icon, setIcon] = React.useState<JSX.Element>(<FavoriteBorderOutlinedIcon color='error' />)
  const [liked, setLiked] = React.useState<boolean>(false)
  const getIcon = () => {
    return icon
  }
  const handleChange = () => {
    setLiked(!liked)
    console.log()
    if (liked) setIcon(<FavoriteOutlinedIcon color='error' />)
    else setIcon(<FavoriteBorderOutlinedIcon color='error' />)
  }

  return (
    <>
      {data.map((item, index: number) => (
        <Box key={index} sx={{ display: 'flex', flexDirection: 'row' }}>
          <Box
            sx={{
              position: 'absolute',
              height: '36px',
              backgroundColor:
                item.status === 'Онцлох' ? 'primary.main' : item.status === 'Шинэ' ? 'warning.main' : 'transparent',
              padding: '2px 80px',
              borderRadius: '10px 10px 10px 0',
              color: 'common.white',
              fontWeight: 700,
              marginTop: '24px'
            }}
          >
            {item.status}
          </Box>
          <Box
            sx={{
              position: 'absolute',
              width: '20px',
              height: '20px',
              backgroundColor:
                item.status === 'Онцлох' ? 'primary.main' : item.status === 'Шинэ' ? 'error.dark' : 'transparent',
              borderRadius: '0 0 0 10px',

              marginTop: '60px'
            }}
          >
            {' '}
          </Box>

          <Card sx={{ mb: 5, ml: '20px' }}>
            <Grid container spacing={6}>
              <Grid
                item
                sm={5}
                xs={12}
                sx={{ pt: ['0 !important', '1.5rem !important'], pl: ['1.5rem !important', '0 !important'] }}
              >
                <Box>
                  <img src={item.imageUrl} alt={item.estateType} height={'320px'} width={'100%'} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={7}>
                <CardContent>
                  <Typography variant='h6' sx={{ mb: 2 }}>
                    {item.estateType}
                  </Typography>
                  <Typography variant='body2'>{item.desc}</Typography>
                  <Divider sx={{ my: theme => `${theme.spacing(3)} !important` }} />
                  <Grid item xs={12} sm={7}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        '& svg': { color: 'primary.main' },
                        marginBottom: 4
                      }}
                    >
                      <PinDropOutlinedIcon />
                      <Typography variant='body2'>{item.address}</Typography>
                    </Box>
                  </Grid>
                  <Grid
                    container
                    spacing={4}
                    sx={{
                      '& .Typography-root': {
                        color: theme => theme.palette.common.black
                      }
                    }}
                  >
                    <Grid item xs={12} sm={3}>
                      <StyledBox>
                        <Box
                          sx={{
                            py: 1.25,
                            mb: 4,
                            display: 'flex',
                            alignItems: 'center',
                            '& svg': { color: 'primary.main', mr: 2.5 }
                          }}
                        >
                          <MeetingRoomOutlinedIcon />
                          <Typography variant='body2'>{item.roomNo} өрөө</Typography>
                        </Box>
                        <Box
                          sx={{
                            py: 1.25,
                            display: 'flex',
                            alignItems: 'center',
                            '& svg': { color: 'primary.main', mr: 2.5 }
                          }}
                        >
                          <HotelIcon />
                          <Typography variant='body2'>{item.bedNo} унтлагын өрөө</Typography>
                        </Box>
                      </StyledBox>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Box
                        sx={{
                          py: 1.25,
                          mb: 4,
                          display: 'flex',
                          alignItems: 'center',
                          '& svg': { color: 'primary.main', mr: 2.5 }
                        }}
                      >
                        <CompareArrowsIcon />
                        <Typography variant='body2'>{item.area} метр квадрат</Typography>
                      </Box>
                      <Box
                        sx={{
                          py: 1.25,
                          display: 'flex',
                          alignItems: 'center',
                          '& svg': { color: 'primary.main', mr: 2.5 }
                        }}
                      >
                        <BathtubOutlinedIcon />
                        <Typography variant='body2'>{item.bathNo} угаалгын өрөө</Typography>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={5}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        '& .Typography-root': { fontWeight: 700 }
                      }}
                    >
                      <Typography variant='body2'>{item.price} ₮</Typography>
                      <IconButton onClick={handleChange} sx={{ border: `1px solid #DEDEDE}`, borderRadius: 100 }}>
                        {getIcon()}
                      </IconButton>
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Box>
      ))}
    </>
  )
}

export default CardMembership