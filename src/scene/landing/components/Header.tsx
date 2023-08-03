import Checkbox from '@mui/material/Checkbox'
import Stack from '@mui/material/Stack'
import FormControlLabel from '@mui/material/FormControlLabel'
import FilterHeader from './FilterHeader'
import FormGroup from '@mui/material/FormGroup'
import Button from '@mui/material/Button'
import LocationSelect from './LocationSelect'

//** Icon imports*/
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export const Header = () => {
  return (
    <Stack direction="row">
      <FormGroup row>
        <FormControlLabel control={<Checkbox />} label="Худалдан авах" />
        <FormControlLabel control={<Checkbox />} label="Түрээслэх" />
      </FormGroup>
      <LocationSelect />
      {/* <FilterHeader hidden={false} /> */}
      <Button endIcon={<KeyboardArrowDownIcon />}>Төрөл</Button>
    </Stack>
  )
}
