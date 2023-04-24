// ** MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

// ** Data
import { countries } from 'src/@fake-db/autocomplete'
import { useFormikContext } from 'formik'
import { matchSorter } from 'match-sorter'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

interface CountryProps {
  name: string
  type: CountryType
}
interface CountryType {
  code: string
  label: string
  phone: string
  suggested: true
}

export const FormAutocompleteCountry: React.FC<CountryProps> = _props => {
  const formik = useFormikContext()

  const { type } = _props

  // filterOptions={(options, { inputValue }) => {
  //   const filterMatch = matchSorter(options, inputValue)
  //   console.log('options', options)
  //   console.log('filterMatch', filterMatch)

  //   return filterMatch
  // }}

  return (
    <Autocomplete
      autoHighlight
      sx={{ width: 250 }}
      id='autocomplete-country-select'
      options={countries as CountryType[]}
      getOptionLabel={option => option.phone || ''}
      filterOptions={(options, { inputValue }) => {
        console.log('options', options)
        console.log('inputValue', inputValue)
        console.log('matchSorter(options, inputValue)', matchSorter(options, inputValue))

        return matchSorter(options, inputValue, { keys: ['label', 'code', 'phone'] })
      }}
      disablePortal={true}
      renderOption={(props, option) => (
        <Box
          component='li'
          key={`${option.code}_${option.phone}`}
          sx={{ '& > img': { mr: 4, flexShrink: 0 } }}
          {...props}
        >
          <img
            alt=''
            width='20'
            loading='lazy'
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={params => (
        <TextField
          {...params}
          variant='standard'
          size='small'
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password'
          }}
        />
      )}
    />
  )
}
