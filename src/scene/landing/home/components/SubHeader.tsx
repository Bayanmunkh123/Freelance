import Checkbox from '@mui/material/Checkbox'
import Stack from '@mui/material/Stack'
import FormControlLabel from '@mui/material/FormControlLabel'
import FilterHeader from './Filter'
import FormGroup from '@mui/material/FormGroup'
import Button from '@mui/material/Button'
import LocationSelect from './LocationSelect'

//** Icon imports*/
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import { Typography } from '@mui/material'

export const SubHeader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ px: 25, width: '100%' }}
    >
      <Typography sx={{ borderLeft: `4px solid` }}>
        50 хайлтын үр дүн
      </Typography>
      <Button endIcon={<UnfoldMoreIcon />}>Эрэмбэ: Шинээр</Button>
    </Stack>
  )
}
