// ** React Imports
import { useState, useEffect, MouseEvent, useCallback } from 'react'

// ** Next Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import PageHeader from 'src/@core/components/page-header'
import RolesCards from './components/role.cards'
import RoleListTable from './components/role.list'

export const RoleScene = () => {
  return (
    <Grid container spacing={6}>
      <PageHeader
        title={<Typography variant='h5'>Roles List</Typography>}
        subtitle={
          <Typography variant='body2'>
            A role provided access to predefined menus and features so that depending on assigned role an administrator
            can have access to what he need
          </Typography>
        }
      />
      <Grid item xs={12} sx={{ mb: 5 }}>
        <RolesCards />
      </Grid>
      <PageHeader
        title={<Typography variant='h5'>Total users with their roles</Typography>}
        subtitle={
          <Typography variant='body2'>
            Find all of your company’s administrator accounts and their associate roles.
          </Typography>
        }
      />
      <Grid item xs={12}>
        <RoleListTable />
      </Grid>
    </Grid>
  )
}