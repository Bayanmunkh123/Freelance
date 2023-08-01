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
          <CardHeader title="Service"></CardHeader>
          <CardContent>
            {/* <Typography sx={{ mb: 2 }}>All the best for your new project.</Typography> */}
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
              vero veniam, eaque sit doloribus voluptatem voluptatibus totam.
              Temporibus non aliquam officia neque blanditiis, fugit dolorum
              perferendis repellat est, ipsam delectus.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home
