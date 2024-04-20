import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { Grid } from '@mui/material'
import { SuggestCard } from '../product/components/SuggestCard'
import { HomeButton } from './components/HomeButton'

/**Icon import */
import IconSvg from 'src/layouts/components/IconSvg'

export const HomeScene = () => {
  const [action, setAction] = React.useState<string>()
  const handleClick = (value: string) =>{
    setAction(value)
    console.log(value)
  }
  return (
    <>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        columnGap="20px"
        sx={{
          '& .MuiButton-root, .MuiIconButton-root': {
            border: `2px solid #E2E7EC`,
            borderRadius: '10px',
            boxShadow: (theme) => `0 0 0 2px ${theme.palette.background.paper}`,
            color: theme => theme.palette.customColors.lightBg,
            fontWeight: 700,
            fontSize: "20px",
            marginTop: "20px"
          },
          '& .MuiBox-root': {
            display: 'flex',
            columnGap: '20px',
            '& .MuiIconButton-root': {
              width: 155,
              pb: '30px',
              px: '50px',
            },
            '& .MuiTypography-root': {
              position: 'absolute',
              top: '50px',
            }
          },
        }}
      >
        <Stack direction="column" rowGap="20px">
          {/* <Stack
            direction="row"
            alignItems="center"
            columnGap="20px"
            sx={{ mt: '20px' }}
          >
            {IconSvg('rent')}
            <Typography>Client</Typography>
          </Stack> */}
          <Button  variant='contained' startIcon={IconSvg('rent')} onClick={() => handleClick("rent")} >Freelancer</Button>
          <Box>
            <HomeButton name="shop" title="Website" />
            <HomeButton name="office" title="Mobile" />
            <HomeButton name="place" title="Data entry" />
          </Box>
          <Box>
            <HomeButton name="parking" title="AI" />
            <HomeButton name="warehouse" title="Sales & Marketing" />
            <HomeButton name="building" title="Education" />
          </Box>
          <Box>
            <HomeButton name="dept" title="Engineering " />
            <HomeButton name="house" title="Telecommunication" />
            <HomeButton name="public-dept" title="Media" />
          </Box>
        </Stack>
        <Stack direction="column" rowGap="20px">
          {/* <Stack
            direction="row"
            alignItems="center"
            columnGap="20px"
            sx={{ mt: '20px' }}
          >
            {IconSvg('buy')}
            <Typography>Client</Typography>
          </Stack> */}
          <Button variant='contained' startIcon={IconSvg('buy')} onClick={() => handleClick("buy")} >Client</Button>
          <Box>
            <HomeButton name="shop" title="" />
            <HomeButton name="office" title="" />
            <HomeButton name="place" title="" />
          </Box>
          <Box>
            <HomeButton name="dept" title="" />
            <HomeButton name="house" title="" />
            <HomeButton name="building" title="" />
          </Box>
        </Stack>
      </Grid>
      <Divider sx={{ m: '40px 0 40px 100px', height: '2px', maxWidth: 1200 }} />
      <Typography variant="h6" fontWeight="bold" sx={{ px: '140px' }}>
        Санал болгох
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ mt: '20px' }}>
        <SuggestCard />
      </Grid>
    </>
  )
}
