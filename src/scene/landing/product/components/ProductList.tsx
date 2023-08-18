import * as React from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import { DetailedBox } from './DetailedBox'
import { useRouter } from 'next/router'
import { BannerStatusEnum, ConstructionStatusEnum, useProductsLandingQuery } from 'src/generated'
import { FilterType } from '../../home/components/FilterBuy' 

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Header, SubHeader } from '../../home/components/Header'

const ProductList = () => {
  const initialValues: FilterType = {
        city: 'Улаанбаатар',
        district: null,
        //type: '',
        maxPrice: null,
        minPrice: null,
        maxSqr: null,
        minSqr:null,
        roomNumber: null,
        constStatus: ConstructionStatusEnum.DEFAULT,
        organizationId: null,
  }
  const [filterValues, setFilterValues] = React.useState<FilterType>(initialValues)
   const handleFilterFill = (value: FilterType ) =>{
    setFilterValues(value)
  }
  console.log(filterValues)
  const { data } = useProductsLandingQuery({variables: {where: filterValues}})
  console.log(data)
  // function changeNot(): ListDataType[] {
  //   const getRandomInt = (max: number) =>
  //     Math.floor(Math.random() * Math.floor(max))

  //   return Array.from(new Array(5)).map(
  //     () => ListData[getRandomInt(ListData.length)],
  //   )
  // }
  // const data1 = changeNot()
  const router = useRouter()
  const [icon, setIcon] = React.useState<string>( "material-symbols:favorite-outline")
  const [liked, setLiked] = React.useState<boolean>(false)
  const handleChange = () => {
    setLiked(!liked)
    if (liked) setIcon("material-symbols:favorite")
    else setIcon("material-symbols:favorite-outline")
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
      <Header filterValues={filterValues} handleFilterFill={handleFilterFill}/>

      {data?.products?.data?.length ? <SubHeader count={data?.products?.data?.length} /> : <Typography>Хайлтын үр дүн байхгүй байна</Typography>}
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
                item?.bannerStatus === BannerStatusEnum.HIGHLIGTH
                  ? 'primary.main'
                  : item?.bannerStatus === BannerStatusEnum.NEW ? 'warning.main':
                  'transparent',
              padding: '2px 80px',
              borderRadius: '10px 10px 10px 0',
              color: 'common.white',
              fontWeight: 700,
              marginTop: '24px',
            }}
          >
            {item?.bannerStatus === BannerStatusEnum.NEW ? 'Шинэ' : item?.bannerStatus === BannerStatusEnum.HIGHLIGTH ? 'Онцлох' : ''}
          </Box>
          <Box
            sx={{
              position: 'absolute',
              width: '20px',
              height: '20px',
              backgroundColor:
                item?.bannerStatus === BannerStatusEnum.HIGHLIGTH
                  ? 'primary.main'
                  : item?.bannerStatus === BannerStatusEnum.NEW
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
                    src={item.images ? item.images : 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800'}
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
                      <Icon icon="ic:outline-pin-drop" />
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
                        title={`${item?.roomNumber}`}
                        subTitle="өрөө"
                        icon="material-symbols:meeting-room-outline"
                      />
                      <DetailedBox
                        title={`${item?.ProductRooms?.bedNumber}`}
                        subTitle="унтлагын өрөө"
                        icon="icon-park-solid:sleep-two"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <DetailedBox
                        title={`${item.sqr}`}
                        subTitle="метр квадрат"
                        icon="ic:baseline-compare-arrows"
                      />
                      <DetailedBox
                        title={`${item?.ProductRooms?.bathNumber}`}
                        subTitle="угаалгын өрөө"
                        icon="fa:bathtub"
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
                        {<Icon icon={icon} />}
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
