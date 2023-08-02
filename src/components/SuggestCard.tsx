import Grid from "@mui/material/Grid"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
interface ListDataType {
  estateType: string
  address: string
  price: number
  imageUrl: string
}
const ListData: ListDataType[] = [
  {
    estateType: "Орон сууц",
    address: "Цагаан7 хороолол Golden Art - Эрдэнэт, Монгол",
    price: 95000000,
    imageUrl:
      "https://images.homes.com/listings/214/1007620603-872007331-original.jpg",
  },
]
function changeNot(): ListDataType[] {
  const getRandomInt = (max: number) =>
    Math.floor(Math.random() * Math.floor(max))

  return Array.from(new Array(3)).map(
    () => ListData[getRandomInt(ListData.length)],
  )
}
export const SuggestCard = () => {
  const data = changeNot()

  return (
    <>
      {data.map((item, index: number) => (
        <Grid item key={index}>
          <CardMedia sx={{ height: 140 }} image={item.imageUrl} />
          <CardContent
            sx={{ p: (theme) => `${theme.spacing(4, 5)} !important` }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              {item.estateType}
            </Typography>
            <Typography sx={{ mb: 2 }}>{item.price}</Typography>
            <Typography variant="body2">{item.address}</Typography>
          </CardContent>
          <Button
            size="large"
            variant="contained"
            sx={{
              width: "100%",
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }}
          >
            Дэлгэрэнгүй
          </Button>
        </Grid>
      ))}
    </>
  )
}
