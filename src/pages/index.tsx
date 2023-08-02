import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import { HomeMain } from "src/components/HomeMain"
import { SuggestCard } from "src/components/SuggestCard"
import Paper from "@mui/material/Paper"
import { Header } from "src/components/Header"
const Home = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <Header />
          <CardHeader title="Home"></CardHeader>
          <CardContent>
            {/* <Typography sx={{ mb: 2 }}></Typography> */}
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, laborum! Voluptas accusamus atque dicta, vero
              explicabo ratione deserunt, possimus voluptatem nostrum obcaecati
              maxime nam eius totam, repellat voluptate maiores id?
            </Typography>
            <HomeMain />
          </CardContent>
          <Grid container spacing={4} justifyContent="center">
            <SuggestCard />
          </Grid>
          <Grid container spacing={4} justifyContent="center">
            <SuggestCard />
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home
