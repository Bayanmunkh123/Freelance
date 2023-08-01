import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"

const Home = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Home"></CardHeader>
          <CardContent>
            {/* <Typography sx={{ mb: 2 }}></Typography> */}
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, laborum! Voluptas accusamus atque dicta, vero
              explicabo ratione deserunt, possimus voluptatem nostrum obcaecati
              maxime nam eius totam, repellat voluptate maiores id?
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home
