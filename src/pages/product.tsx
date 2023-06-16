import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const Home = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Product'></CardHeader>
          <CardContent>
            {/* <Typography sx={{ mb: 2 }}>All the best for your new project.</Typography> */}
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis id harum nobis consequuntur quo
              pariatur, nam modi facilis doloribus libero ratione non magni eaque eveniet sequi culpa praesentium et!
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home
