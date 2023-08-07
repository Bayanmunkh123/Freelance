import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { HomeMain } from 'src/scene/landing/home/components/HomeMain'
import { SuggestCard } from 'src/scene/landing/home/product/SuggestCard'
import Paper from '@mui/material/Paper'
import { Header } from 'src/scene/landing/home/components/Header'
import { SubHeader } from 'src/scene/landing/home/components/SubHeader'
import { Box } from '@mui/material'
import { ProductDetail } from './home/product/ProductDetail'

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
          <ProductDetail />
        </Card>
      </Grid>
    </Grid>
  )
}

export default HomeScene
