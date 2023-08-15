import * as React from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import { ListData, ListDataType } from '../utils/ListData'
import { DetailedBox } from './DetailedBox'
import { useRouter } from 'next/router'
import { ConstructionStatusEnum, ProductStatusEnum, useProductsLandingQuery } from 'src/generated'

// ** Icon Imports
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import { Header, SubHeader } from '../../home/components/Header'
interface InputType {
  name: string;
  type: string
}
const ProductList = () => {
  //const {name, type} = props
  const { data } = useProductsLandingQuery()
  function changeNot(): ListDataType[] {
    console.log(data)
    const getRandomInt = (max: number) =>
      Math.floor(Math.random() * Math.floor(max))

    return Array.from(new Array(5)).map(
      () => ListData[getRandomInt(ListData.length)],
    )
  }
  const data1 = changeNot()
  const router = useRouter()
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
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: '20px',
      }}
    >
      <Header />
      <SubHeader count={data?.products?.data?.length} />
      {data?.products?.data?.map((item, index: number) => (
        <Box
          key={item.id}
          sx={{ display: 'flex', flexDirection: 'row', maxWidth: 1200 }}
          onClick={() => router.push(`/product/detail?id=${item.id}`)}
        >
          <Box
            sx={{
              position: 'absolute',
              height: '36px',
              backgroundColor:
                //item.status === 'Онцлох'
                item?.productStatus === ProductStatusEnum.HIGHLIGTH
                  ? 'primary.main'
                  : item?.productStatus === ProductStatusEnum.NEW ? 'warning.main':
                  'transparent',
              padding: '2px 80px',
              borderRadius: '10px 10px 10px 0',
              color: 'common.white',
              fontWeight: 700,
              marginTop: '24px',
            }}
          >
            {item?.productStatus === ProductStatusEnum.NEW ? 'Шинэ' : item?.productStatus === ProductStatusEnum.HIGHLIGTH ? 'Онцлох' : ''}
          </Box>
          <Box
            sx={{
              position: 'absolute',
              width: '20px',
              height: '20px',
              backgroundColor:
                item?.productStatus === ProductStatusEnum.HIGHLIGTH
                  ? 'primary.main'
                  : item?.productStatus === ProductStatusEnum.NEW
                  ? 'warning.dark'
                  : 'transparent',
              borderRadius: '0 0 0 10px',

              marginTop: '60px',
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
                sx={{
                  pt: ['0 !important', '1.5rem !important'],
                  pl: ['1.5rem !important', '0 !important'],
                }}
              >
                <Box>
                  <img
                    src={item.images}
                    alt={'picture of estate'}
                    height={'320px'}
                    width={'100%'}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={7}>
                <CardContent sx={{ width: 800 }}>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2">{item.description}</Typography>
                  <Divider
                    sx={{ my: (theme) => `${theme.spacing(3)} !important` }}
                  />
                  <Grid item xs={12} sm={7}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        '& svg': { color: 'primary.main' },
                        marginBottom: 4,
                      }}
                    >
                      <PinDropOutlinedIcon />
                      <Typography variant="body2">
                        {item.city} {item.district} {item.address1}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    container
                    spacing={4}
                    sx={{
                      '& .Typography-root': {
                        color: (theme) => theme.palette.common.black,
                      },
                    }}
                  >
                    <Grid item xs={12} sm={3}>
                      <DetailedBox
                        title={`${item.roomNumber}`}
                        subTitle="өрөө"
                        icon="MeetingRoomOutlinedIcon"
                      />
                      <DetailedBox
                        title={'1'}
                        subTitle="унтлагын өрөө"
                        icon="HotelIcon"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <DetailedBox
                        title={`${item.sqr}`}
                        subTitle="метр квадрат"
                        icon="CompareArrowsIcon"
                      />
                      <DetailedBox
                        title={'1'}
                        subTitle="угаалгын өрөө"
                        icon="BathtubOutlinedIcon"
                      />
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      //sm={5}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        '& .Typography-root': { fontWeight: 700 },
                      }}
                    >
                      <Typography variant="body2">{item.price} ₮</Typography>
                      <IconButton
                        onClick={handleChange}
                        sx={{ border: `1px solid #DEDEDE}`, borderRadius: 100 }}
                      >
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
    </Card>
  )
}

export default ProductList
