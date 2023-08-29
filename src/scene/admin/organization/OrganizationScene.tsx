import Typography from '@mui/material/Typography'
import SuggestCard from './components/suggestCard'
import { MainInfo } from './components/MainInfo'
import { ImgMediaCard} from './components/card'
import { ImgMediaCard1} from './components/card'
import { ImgMediaCard2} from './components/card'
import Grid from '@mui/material/Grid'

export const OrganizationScene = () => {
  return (
    <Grid container>
      <SuggestCard />
      <Typography padding={'10px'}>Нүүр</Typography>
      <MainInfo />
      <ImgMediaCard/>
      <ImgMediaCard1/>
      <ImgMediaCard2/>
    </Grid>
  )
}
