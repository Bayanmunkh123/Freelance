// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useContext } from 'react'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { AbilityContext } from 'src/layouts/components/acl/Can'

interface TableHeaderProps {
  value: string
  toggle: () => void
  handleFilter: (val: string) => void
}

export const UserTableHeader = (props: TableHeaderProps) => {
  // ** Props
  const { handleFilter, toggle, value } = props
  const ability = useContext(AbilityContext)

  return (
    <Box sx={{ p: 5, pb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Button
        sx={{ mr: 4, mb: 2 }}
        color='secondary'
        variant='outlined'
        startIcon={<Icon icon='mdi:export-variant' fontSize={20} />}
      >
        Export
      </Button>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField
          size='small'
          value={value}
          sx={{ mr: 6, mb: 2 }}
          placeholder='Search User'
          onChange={e => handleFilter(e.target.value)}
        />
        {ability?.can('create', 'User') && (
          <Button sx={{ mb: 2 }} onClick={toggle} variant='contained'>
            Хэрэглэгч нэмэх
          </Button>
        )}
      </Box>
    </Box>
  )
}
