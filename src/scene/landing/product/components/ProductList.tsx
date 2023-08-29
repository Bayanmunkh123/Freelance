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
import { BannerStatusEnum, useProductsLandingQuery } from 'src/generated'
import { FilterType } from 'src/@core/utils/types' 

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Header, SubHeader } from '../../home/components/Header'
import { Pagination, Stack } from '@mui/material'

export const ProductList = () => {
  const initialValues: FilterType = {
        city: 'Улаанбаатар',
        district: null,
        //type: '',
        maxPrice: null,
        minPrice: null,
        maxSqr: null,
        minSqr:null,
        roomNumber: null,
        constStatus: null,
        organizationId: null,
  }
  const [filterValues, setFilterValues] = React.useState<FilterType>(initialValues)
   const handleFilterFill = (value: FilterType ) =>{
    setFilterValues(value)
  }
  const { data } = useProductsLandingQuery({variables: {where: filterValues}})
  const router = useRouter()
  const [icon, setIcon] = React.useState<string>( "material-symbols:favorite-outline")
  const [liked, setLiked] = React.useState<boolean>(false)
  const handleChange = () => {
    setLiked(!liked)
    if (liked) setIcon("material-symbols:favorite")
    else setIcon("material-symbols:favorite-outline")
  }
  const perPage = 3
  const totalPages = Math.ceil(data?.products?.data?.length ? data?.products?.data?.length : 0)
  const [page, setPage] = React.useState(1)
  const data1 = data?.products?.data?.slice(
    (page - 1) * perPage,
    page * perPage
  )
  const [products, setProducts] = React.useState(data1)
  const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    const newProducts = data?.products?.data?.slice(
    (value - 1) * perPage,
    value * perPage
  )
  setProducts(newProducts)
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
      <Header filterValues={filterValues} handleFilterFill={handleFilterFill} actionType={''}/>

      {data?.products?.data?.length ? <SubHeader count={data?.products?.data?.length} /> : <Typography>Хайлтын үр дүн байхгүй байна</Typography>}
      {products?.map((item, index: number) => (
        <Box
          key={item.id}
          sx={{ display: 'flex', flexDirection: 'row', maxWidth: 1200 ,px: '20px'}}
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
                    height='350px'
                    width={'100%'}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={7}>
                <CardContent sx={{m: '20px', p: '16px'}}>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2">{item.description}</Typography>
                  <Divider
                    sx={{ my: (theme) => `${theme.spacing(3)} !important` }}
                  />
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        '& svg': { color: 'primary.main', fontSize: '2.2rem' },
                        marginBottom: 4,
                        columnGap: '10px',
                        '& .MuiTypography-root':{
                          width: '100%'
                        }
                      }}
                    >
                      <Icon icon="ic:outline-pin-drop" />
                      <Typography variant="body2">
                        {item.city} {item.district} {item.address1}
                      </Typography>
                    </Box>
                  <Grid
                    container
                    spacing={4}
                    sx={{
                      '& .Typography-root': {
                        color: (theme) => theme.palette.common.black,
                      },
                    }}
                  >
                    <Grid item>
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
                    <Grid item >
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
    
                  </Grid>
                  <Grid
                      container
                      justifyContent='space-between'
                      alignItems='center'
                    >
                      <Typography variant="body2" fontWeight="bold">{item.price} ₮</Typography>
                      <IconButton
                        onClick={handleChange}
                        sx={{ border: `1px solid #DEDEDE}`, borderRadius: 100 }}
                      >
                        {<Icon icon={icon} color='red' />}
                      </IconButton>
                    </Grid>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Box>
      ))}
      <Pagination count={totalPages} page={page} onChange={handleChangePagination} color='primary' variant='outlined' sx={{mb: '20px'}}/>
    </Card>
  )
}