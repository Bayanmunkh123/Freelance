import { useState, MouseEvent, useCallback, useContext } from 'react'

import Link from 'next/link'
import { GetStaticProps, InferGetStaticPropsType } from 'next/types'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import Icon from 'src/@core/components/icon'

import CustomAvatar from 'src/@core/components/mui/avatar'
import CardStatisticsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'

import { getInitials } from 'src/@core/utils/get-initials'

import axios from 'axios'

import { ThemeColor } from 'src/@core/layouts/types'

import { CardStatsHorizontalProps } from 'src/@core/components/card-statistics/types'

import {
  sUsersQuery,
  useOrganizationUsersQuery,
  useOrganizationsQuery,
  useRolesQuery,
  useUsersQuery
} from 'src/generated'
import { useAuth } from 'src/hooks/useAuth'
import { useOrganizationUserVariables } from '../../utils/useOrganizationUserVariables'

import { AbilityContext } from 'src/layouts/components/acl/Can'
import TableHeader from '../components/TableHeader'
import AddUserDrawer from '../components/AddUserDrawer'
import { useOnSearch } from 'src/hooks/useOnSearch'
import { OrgRoles } from 'src/utils/constants'

interface UserRoleType {
  [key: string]: { icon: string; color: string }
}

interface UserStatusType {
  [key: string]: ThemeColor
}

const userRoleObj: UserRoleType = {
  admin: { icon: 'mdi:laptop', color: 'error.main' },
  owner: { icon: 'mdi:cog-outline', color: 'warning.main' },
  editor: { icon: 'mdi:pencil-outline', color: 'info.main' },
  finance: { icon: 'mdi:chart-donut', color: 'success.main' },
  sales: { icon: 'mdi:account-outline', color: 'primary.main' },
  support: { icon: 'mdi:account-outline', color: 'primary.main' },
  viewer: { icon: 'mdi:account-outline', color: 'primary.main' }
}

// interface CellType {
//   row: UsersType
// }

const userStatusObj: UserStatusType = {
  active: 'success',
  pending: 'warning',
  inactive: 'secondary'
}

const LinkStyled = styled(Link)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1rem',
  cursor: 'pointer',
  textDecoration: 'none',
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.primary.main
  }
}))

// ** renders client column
const renderClient = (row: any) => {
  if (row.image?.length) {
    return <CustomAvatar src={row.avatar} sx={{ mr: 3, width: 34, height: 34 }} />
  } else {
    return (
      <CustomAvatar
        skin='light'
        color={row.avatarColor || 'primary'}
        sx={{ mr: 3, width: 34, height: 34, fontSize: '1rem' }}
      >
        {getInitials(row.firstName ? row.firstName : 'John Doe')}
      </CustomAvatar>
    )
  }
}

const RowOptions = ({ id }: { id: number | string }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const rowOptionsOpen = Boolean(anchorEl)

  const handleRowOptionsClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleRowOptionsClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = () => {
    // dispatch(deleteUser(id))
    handleRowOptionsClose()
  }

  return (
    <>
      <IconButton size='small' onClick={handleRowOptionsClick}>
        <Icon icon='mdi:dots-vertical' />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={rowOptionsOpen}
        onClose={handleRowOptionsClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        PaperProps={{ style: { minWidth: '8rem' } }}
      >
        <MenuItem
          component={Link}
          sx={{ '& svg': { mr: 2 } }}
          onClick={handleRowOptionsClose}
          href='/apps/user/view/overview/'
        >
          <Icon icon='mdi:eye-outline' fontSize={20} />
          View
        </MenuItem>
        <MenuItem onClick={handleRowOptionsClose} sx={{ '& svg': { mr: 2 } }}>
          <Icon icon='mdi:pencil-outline' fontSize={20} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleDelete} sx={{ '& svg': { mr: 2 } }}>
          <Icon icon='mdi:delete-outline' fontSize={20} />
          Delete
        </MenuItem>
      </Menu>
    </>
  )
}

const columns: GridColDef[] = [
  {
    flex: 0.2,
    minWidth: 230,
    field: 'userName',
    headerName: 'UserName',
    renderCell: ({ row }: CellType) => {
      const { username, profile } = row

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {renderClient(row)}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <LinkStyled href='/apps/user/view/overview/'>{profile?.firstName}</LinkStyled>
            <Typography noWrap variant='caption'>
              {`@${username}`}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.2,
    minWidth: 250,
    field: 'organization',
    headerName: 'Байгуулга',
    renderCell: ({ row }: CellType) => {
      return (
        <Typography key={row.id} noWrap variant='body2'>
          {row?.organization?.name}
        </Typography>
      )
    }
  },
  {
    flex: 0.2,
    minWidth: 250,
    field: 'email',
    headerName: 'Email',
    renderCell: ({ row }: CellType) => {
      return (
        <Typography noWrap variant='body2'>
          {row.user.email}
        </Typography>
      )
    }
  },
  {
    flex: 0.15,
    field: 'role',
    minWidth: 150,
    headerName: 'Role',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 3 } }}>
          {/* <Icon icon={userRoleObj[row.role].icon} fontSize={20} /> */}
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.orgRole}
          </Typography>
        </Box>
      )
    }
  },

  // {
  //   flex: 0.15,
  //   minWidth: 120,
  //   headerName: 'Plan',
  //   field: 'currentPlan',
  //   renderCell: ({ row }: CellType) => {
  //     return (
  //       <Typography variant='subtitle1' noWrap sx={{ textTransform: 'capitalize' }}>
  //         {row.currentPlan}
  //       </Typography>
  //     )
  //   }
  // },
  // {
  //   flex: 0.1,
  //   minWidth: 110,
  //   field: 'status',
  //   headerName: 'Status',
  //   renderCell: ({ row }: CellType) => {
  //     return (
  //       <CustomChip
  //         skin='light'
  //         size='small'
  //         label={row.status}
  //         color={userStatusObj[row.status]}
  //         sx={{ textTransform: 'capitalize', '& .MuiChip-label': { lineHeight: '18px' } }}
  //       />
  //     )
  //   }
  // },
  {
    flex: 0.1,
    minWidth: 90,
    sortable: false,
    field: 'actions',
    headerName: 'Actions',
    renderCell: ({ row }: CellType) => <RowOptions id={row.id} />
  }
]

export const JobListScene = ({ apiData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const variables = useOrganizationUserVariables()

  const ability = useContext(AbilityContext)
  const onSearch = useOnSearch()

  const [value, setValue] = useState<string>('')
  const [addUserOpen, setAddUserOpen] = useState<boolean>(false)
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

  const { data } = useOrganizationUsersQuery({
    fetchPolicy: 'no-cache',
    variables,
    onCompleted: data => {
      // if (data?.users?.data) setRoleData(data?.users?.data)
    },
    onError: (error: unknown) => {
      alert(error)
    }
  })

  const { data: RolesList } = useRolesQuery({
    fetchPolicy: 'no-cache',

    // variables,
    onCompleted: data => {
      // if (data?.users?.data) setRoleData(data?.users?.data)
    },
    onError: (error: unknown) => {
      alert(error)
    }
  })
  const handleFilter = useCallback((val: string) => {
    onSearch('role', val)
    setValue(val)
  }, [])

  const handleRoleChange = useCallback((e: SelectChangeEvent) => {
    console.log(e.target.value)
    onSearch('role', e.target.value)
  }, [])

  // const handleStatusChange = useCallback((e: SelectChangeEvent) => {
  //   setStatus(e.target.value)
  // }, [])

  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        {apiData && (
          <Grid container spacing={6}>
            {apiData.statsHorizontal.map((item: CardStatsHorizontalProps, index: number) => {
              return (
                <Grid item xs={12} md={3} sm={6} key={index}>
                  <CardStatisticsHorizontal {...item} icon={<Icon icon={item.icon as string} />} />
                </Grid>
              )
            })}
          </Grid>
        )}
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Хайх' sx={{ pb: 4, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }} />
          <CardContent>
            <Grid container spacing={6}>
              <Grid item sm={4} xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='role-select'>Role сонгох</InputLabel>
                  <Select
                    fullWidth
                    value={RolesList}
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
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <TableHeader value={value} handleFilter={handleFilter} toggle={toggleAddUserDrawer} />
          <DataGrid
            autoHeight
            rows={data ? data.organizationUsers?.data : []}
            columns={columns}
            checkboxSelection
            disableRowSelectionOnClick
            pageSizeOptions={[10, 25, 50]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            sx={{ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } }}
          />
        </Card>
      </Grid>
      {ability?.can('create', 'User') && <AddUserDrawer open={addUserOpen} toggle={toggleAddUserDrawer} />}
    </Grid>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('/cards/statistics')
  const apiData: CardStatsType = res.data

  return {
    props: {
      apiData
    }
  }
}
