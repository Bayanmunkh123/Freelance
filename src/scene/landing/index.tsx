import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import { HomeMain } from 'src/scene/landing/home/components/HomeMain'
import { Header } from 'src/scene/landing/home/components/Header'
import { SubHeader } from 'src/scene/landing/home/components/SubHeader'
import { ProductDetail } from './home/product/components/ProductDetail'

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
          <ProductDetail />
        </Card>
      </Grid>
    </Grid>
  )
}

export default HomeScene
