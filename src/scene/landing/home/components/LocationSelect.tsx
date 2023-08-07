import * as React from 'react'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Chip from '@mui/material/Chip'
//import {Select} from 'formik-mui'

const distNames = [
  'Баянгол',
  'Баянзүрх',
  'Хан-Уул',
  'Чингэлтэй',
  'Сүхбаатар',
  'Налайх',
  'Багахангай',
  'Сонгинохайрхан',
  'Багануур',
]

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
    <Select
      multiple
      //name="location"
      value={selection}
      onChange={handleChange}
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
  )
}

export default LocationSelect
