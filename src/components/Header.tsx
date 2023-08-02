import Checkbox from "@mui/material/Checkbox"
import Stack from "@mui/material/Stack"
import FormControlLabel from "@mui/material/FormControlLabel"
import FilterHeader from "./FilterHeader"
import FormGroup from "@mui/material/FormGroup"

export const Header = () => {
  return (
    <Stack direction="row">
      <FormGroup row>
        <FormControlLabel control={<Checkbox />} label="Худалдан авах" />
        <FormControlLabel control={<Checkbox />} label="Түрээслэх" />
      </FormGroup>
      <FilterHeader hidden={false} />
    </Stack>
  )
}
