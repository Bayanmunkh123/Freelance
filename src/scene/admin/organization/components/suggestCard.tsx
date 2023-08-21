// ** MUI Imports
import Card from "@mui/material/Card"
import Button from "@mui/material/Button"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import CardContent from "@mui/material/CardContent"

const SuggestCard = () => {
  return (
    <Card sx={{width: 1000}}>
      <CardMedia
        sx={{ height: 150 }}
        image={"https://kmcmaggroup.com/ImageGen.ashx?image=/media/2071/the-differences-between-grade-a-and-grade-b-buildings.jpg&Compression=70"}
      />
      <CardContent sx={{ p: (theme) => `${theme.spacing(4, 5)} !important` }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Ус сувгийн удирдах газар
        </Typography>
        <Typography>
          Байршил
        </Typography>
      </CardContent>
    </Card>

  )
}
export default SuggestCard


