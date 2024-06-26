import Grid from '@mui/material/Grid'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'
import { useProductsLandingQuery } from 'src/generated'

// function changeNot(): ListDataType[] {
//   const getRandomInt = (max: number) =>
//     Math.floor(Math.random() * Math.floor(max))

//   return Array.from(new Array(3)).map(
//     () => ListData[getRandomInt(ListData.length)],
//   )
// }
export const SuggestCard = () => {
  const {data} = useProductsLandingQuery()
  const router = useRouter()
  return (
    <>
      {data?.products?.data?.map((item, index: number) => (
        <Grid item key={index} sx={{ width: "360px"}}>
          <CardMedia
            sx={{
              height: 140,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              boxShadow: (theme) => theme.shadows[5],
            }}
            image={item.images ? item.images : 'https://images.homes.com/listings/214/1007620603-872007331-original.jpg'
            }
          />
          <CardContent
            sx={{
              p: (theme) => `${theme.spacing(4, 5)} !important`,
              maxWidth: 360,
              height: 140
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              {item.name}
            </Typography>
            <Typography sx={{ mb: 2 }}>{item.price}</Typography>
            <Typography variant="body2" sx={{ overflowWrap: 'break-word' }}>
              {item.city} хот {item.district} дүүрэг {item.address1}
            </Typography>
          </CardContent>
          <Button
            size="medium"
            variant="contained"
            sx={{
              width: '100%',
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }}
            onClick={() => router.push(`/product/detail?id=${item.id}`)}
          >
            Дэлгэрэнгүй
          </Button>
        </Grid>
      ))}
    </>
  )
}
