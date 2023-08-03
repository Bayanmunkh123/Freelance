import * as React from 'react'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Chip from '@mui/material/Chip'

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
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>Байршил</InputLabel>
        <Select
          multiple
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
      </FormControl>
    </div>
  )
}

export default LocationSelect
