import Typography from '@mui/material/Typography'
import SuggestCard from './components/suggestCard'
import { MainInfo } from './components/MainInfo'
import Grid from '@mui/material/Grid'

export const OrganizationScene = () => {
  return (
    <Grid container>
      <SuggestCard />
      <Typography padding={'10px'}>Нүүр</Typography>
      <MainInfo />
    </Grid>
  )
}
