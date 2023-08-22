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
            },
          },
        }}
      >
        <Stack direction="column" rowGap="20px">
          <Stack
            direction="row"
            alignItems="center"
            columnGap="20px"
            sx={{ mt: '20px' }}
          >
            {IconSvg('rent')}
            <Typography>Түрээслэх</Typography>
          </Stack>
          <Button startIcon={IconSvg('rentButton')} onClick={() => setAction("rent")} >Түрээслэх</Button>
          <Box>
            <HomeButton name="shop" title="Дэлгүүр" />
            <HomeButton name="office" title="Оффис" />
            <HomeButton name="place" title="Газар" />
          </Box>
          <Box>
            <HomeButton name="parking" title="Зогсоол" />
            <HomeButton name="warehouse" title="Агуулах" />
            <HomeButton name="building" title="Барилга" />
          </Box>
          <Box>
            <HomeButton name="dept" title="Орон сууц" />
            <HomeButton name="house" title="Хувийн сууц" />
            <HomeButton name="public-dept" title="Нийтийн байр" />
          </Box>
        </Stack>
        <Stack direction="column" rowGap="20px">
          <Stack
            direction="row"
            alignItems="center"
            columnGap="20px"
            sx={{ mt: '20px' }}
          >
            {IconSvg('buy')}
            <Typography>Худалдан авах</Typography>
          </Stack>
          <Button startIcon={IconSvg('rentButton')} onClick={() => setAction("buy")}>Худалдан авах</Button>
          <Box>
            <HomeButton name="shop" title="Дэлгүүр" />
            <HomeButton name="office" title="Оффис" />
            <HomeButton name="place" title="Газар" />
          </Box>
          <Box>
            <HomeButton name="dept" title="Орон сууц" />
            <HomeButton name="house" title="Хувийн сууц" />
            <HomeButton name="building" title="Барилга" />
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
