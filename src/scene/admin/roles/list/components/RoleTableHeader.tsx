// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { RoleType } from 'src/context/types'
import { OrgRoles } from 'src/utils/constants'

interface TableHeaderProps {
  plan: string
  roleList: string | undefined
  handleFilter: (val: string) => void
  handleRoleChange: (e: SelectChangeEvent) => void
}

export const RoleTableHeader = (props: TableHeaderProps) => {
  // ** Props
  const { handleRoleChange, handleFilter, roleList } = props

  return (
    <Box sx={{ p: 5, pb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Button sx={{ mr: 4, mb: 2 }} color='secondary' variant='outlined' startIcon={<Icon icon='mdi:export-variant' />}>
        Export
      </Button>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField
          size='small'
          value={roleList}
          placeholder='Search User'
          sx={{ mr: 6, mb: 2 }}
          onChange={e => handleFilter(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel id='role-select'>Role сонгох</InputLabel>
          <Select
            fullWidth
            value={roleList as string}
            id='select-role'
            label='Select Role'
            labelId='role-select'
            onChange={handleRoleChange}
            inputProps={{ placeholder: 'Select Role' }}
          >
            {OrgRoles.map((role, key) => {
              return (
                <MenuItem key={key} value={role.name}>
                  {role.name}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </Box>
    </Box>
  )
}
