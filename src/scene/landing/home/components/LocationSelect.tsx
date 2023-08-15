import * as React from 'react'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Chip from '@mui/material/Chip'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import { distNames } from 'src/@core/utils/initData'
//import {Select} from 'formik-mui'

const LocationSelect = () => {
  const [selection, setSelection] = React.useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof selection>) => {
    const {
      target: { value },
    } = event
    setSelection(typeof value === 'string' ? value.split(',') : value)
  }

  const handleDelete = (deleteValue: string) => {
    setSelection(() => selection.filter((value) => value !== deleteValue))
    console.log(selection)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-controlled-open-select-label">Байршил</InputLabel>
      <Select
        multiple
        name="location"
        value={selection}
        onChange={handleChange}
        //IconComponent={SearchIcon}
        input={<OutlinedInput label="Байршил" />}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip
                key={value}
                label={value}
                onMouseDown={(event) => {
                  event.stopPropagation()
                }}
                onDelete={() => handleDelete(value)}
              />
            ))}
          </Box>
        )}
      >
        {distNames.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default LocationSelect
