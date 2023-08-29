import Link from "next/link"
import { MouseEvent, useCallback, useEffect, useState } from "react"

import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"
import { DataGrid, GridColDef } from "@mui/x-data-grid"

import Icon from "src/@core/components/icon"

import CustomAvatar from "src/@core/components/mui/avatar"
import { ThemeColor } from "src/@core/layouts/types"
import { getInitials } from "src/@core/utils/get-initials"
import {
  OrganizationUser,
  OrganizationUserRoleEnum,
  useOrganizationUsersQuery,
  // useRolesQuery,
} from "src/generated"
import { useOnSearch } from "src/hooks/useOnSearch"
import { useOrganizationUserVariables } from "../../../utils/useOrganizationUserVariables"
import { RoleTableHeader } from "./RoleTableHeader"
import { SelectChangeEvent } from "@mui/material"

// interface UserRoleType {
//   [key: string]: { icon: string; color: string }
// }

interface UserStatusType {
  [key: string]: ThemeColor
}

// ** Vars
// const userRoleObj: UserRoleType = {
//   admin: { icon: "mdi:laptop", color: "error.main" },
//   author: { icon: "mdi:cog-outline", color: "warning.main" },
//   editor: { icon: "mdi:pencil-outline", color: "info.main" },
//   maintainer: { icon: "mdi:chart-donut", color: "success.main" },
//   subscriber: { icon: "mdi:account-outline", color: "primary.main" },
// }

interface CellType {
  row: OrganizationUser
}

// const userStatusObj: UserStatusType = {
//   active: "success",
//   pending: "warning",
//   inactive: "secondary",
// }

const LinkStyled = styled(Link)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1rem",
  cursor: "pointer",
  textDecoration: "none",
  color: theme.palette.text.secondary,
  "&:hover": {
    color: theme.palette.primary.main,
  },
}))

// ** renders client column
const renderClient = (row: OrganizationUser) => {
  if (row?.user?.image) {
    return (
      <CustomAvatar
        src={`/images/${row.user.image}`}
        sx={{ mr: 3, width: 34, height: 34 }}
      />
    )
  } else {
    return (
      <CustomAvatar
        skin="light"
        color={"primary"}
        sx={{ mr: 3, width: 34, height: 34, fontSize: "1rem" }}
      >
        {getInitials(
          row?.user?.profile?.firstName
            ? row?.user?.profile?.firstName
            : "John Doe",
        )}
      </CustomAvatar>
    )
  }
}

const RowOptions = ({ id }: { id: number | string }) => {
  console.log(id)
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
      <IconButton size="small" onClick={handleRowOptionsClick}>
        <Icon icon="mdi:dots-vertical" />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={rowOptionsOpen}
        onClose={handleRowOptionsClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{ style: { minWidth: "8rem" } }}
      >
        <MenuItem
          component={Link}
          sx={{ "& svg": { mr: 2 } }}
          onClick={handleRowOptionsClose}
          href="/apps/user/view/overview/"
        >
          <Icon icon="mdi:eye-outline" fontSize={20} />
          View
        </MenuItem>
        <MenuItem onClick={handleRowOptionsClose} sx={{ "& svg": { mr: 2 } }}>
          <Icon icon="mdi:pencil-outline" fontSize={20} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleDelete} sx={{ "& svg": { mr: 2 } }}>
          <Icon icon="mdi:delete-outline" fontSize={20} />
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
    field: "userName",
    headerName: "Компаний нэр",
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {renderClient(row)}
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <LinkStyled href="/apps/user/view/overview/">
              {row?.user?.profile?.firstName}
            </LinkStyled>
            <Typography noWrap variant="caption">
              {`@${row?.user?.userName}`}
            </Typography>
          </Box>
        </Box>
      )
    },
  },
  {
    flex: 0.2,
    minWidth: 250,
    field: "email",
    headerName: "Email",
    renderCell: ({ row }: CellType) => {
      return (
        <Typography noWrap variant="body2">
          {row?.user?.email}
        </Typography>
      )
    },
  },
  {
    flex: 0.15,
    field: "role",
    minWidth: 150,
    headerName: "Үүрэг",
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: "flex", alignItems: "center", "& svg": { mr: 3 } }}>
          {/* <Icon icon={userRoleObj[row.role].icon} fontSize={20} /> */}
          <Typography
            noWrap
            sx={{ color: "text.secondary", textTransform: "capitalize" }}
          >
            {row?.orgRole}
          </Typography>
        </Box>
      )
    },
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
    field: "actions",
    headerName: "Үйлдэл",
    renderCell: ({ row }: CellType) => (
      <RowOptions id={row?.id ? row?.id : 0} />
    ),
  },
]

export const RoleListTable = () => {
  const variables = useOrganizationUserVariables()
  const onSearch = useOnSearch()

  const [value, setValue] = useState<string>("")
  const [searchValue, setSearchValue] = useState("")
  const [addUserOpen, setAddUserOpen] = useState<boolean>(false)
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  })

  const clearSearch = () => setSearchValue("")
  
  // const { data: rolesList } = useRolesQuery({
  //   fetchPolicy: "no-cache",
  //   onError: (error: unknown) => {
  //     alert(error)
  //   },
  // })

  // const {
  //   data,
  //   loading: organizationUserLoading,
  //   refetch,
  // } = useOrganizationUsersQuery({
  //   // fetchPolicy: "no-cache",
  //   variables: {
  //     input: {
  //       // ...variables,
  //       orgRole: "EDITOR" as OrganizationUserRoleEnum,
  //     },
  //   },
  //   onCompleted: (data) => {
  //     console.log(data)
  //   },
  //   onError: (error: unknown) => {
  //     alert(error)
  //   },
  // })

  const handleFilter = (val: string) => {
    // onSearch("orgRole", val)
    // refetch()
    setValue(val)
  }
  // const handleFilter = useCallback((val: string) => {
  //   // onSearch("orgRole", val)
  //   refetch()
  //   setValue(val)
  // }, [])

  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)

  const handleRoleChange = useCallback((e: SelectChangeEvent) => {
    onSearch("orgRole", e.target.value)
  }, [])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <RoleTableHeader
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            roleList={"dd" as string}
            handleFilter={handleFilter}
            toggle={toggleAddUserDrawer}
            handleRoleChange={handleRoleChange}
            clearSearch={clearSearch}
          />
          <DataGrid
            // loading={organizationUserLoading}
            autoHeight
            // rows={data?.organizationUsers?.data || []}
            rows={[]}
            columns={columns}
            checkboxSelection
            disableRowSelectionOnClick
            pageSizeOptions={[10, 25, 50]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            sx={{ "& .MuiDataGrid-columnHeaders": { borderRadius: 0 } }}
          />
        </Card>
      </Grid>
    </Grid>
  )
}
