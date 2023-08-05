import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { HomeMain } from 'src/scene/landing/home/list/HomeMain'
import { SuggestCard } from 'src/scene/landing/home/list/SuggestCard'
import Paper from '@mui/material/Paper'
import { Header } from 'src/scene/landing/home/list/productList/Header'
import {SubHeader} from 'src/scene/landing/home/list/productList/SubHeader'
import { Box } from '@mui/material'
const HomeScene = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <Header />
          <SubHeader />
          <CardContent>
            <HomeMain />
          </CardContent>
          <Grid container spacing={4} justifyContent="center" >
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

export default HomeScene
