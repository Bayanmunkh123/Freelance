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
          <CardHeader title='About Us'></CardHeader>
          <CardContent>
            {/* <Typography sx={{ mb: 2 }}>All the best for your new project.</Typography> */}
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusantium facere similique esse aut
              necessitatibus, quod delectus, temporibus quisquam dolores corporis animi libero debitis eos, ut fugit
              nesciunt odit culpa.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home
