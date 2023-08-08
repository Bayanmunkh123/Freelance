import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import Divider from "@mui/material/Divider"
import Grid from "@mui/material/Grid"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import Link from "next/link"
import { MouseEvent, useCallback, useContext, useState } from "react"
import Icon from "src/@core/components/icon"
import CustomAvatar from "src/@core/components/mui/avatar"
import { getInitials } from "src/@core/utils/get-initials"
import { Job, useJobsQuery } from "src/generated"
import { useOnSearch } from "src/hooks/useOnSearch"
import { AbilityContext } from "src/layouts/components/acl/Can"
import TableHeader from "./components/TableHeader"
import { AddJobDrawer } from "./components/AddJobDrawer"

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
const renderClient = (row: any) => {
  if (row.image?.length) {
    return (
      <CustomAvatar src={row.avatar} sx={{ mr: 3, width: 34, height: 34 }} />
    )
  } else {
    return (
      <CustomAvatar
        skin="light"
        color={row.avatarColor || "primary"}
        sx={{ mr: 3, width: 34, height: 34, fontSize: "1rem" }}
      >
        {getInitials(row.firstName ? row.firstName : "John Doe")}
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
    headerName: "UserName",
    renderCell: ({ row }: { row: Job }) => {
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
            <LinkStyled href="/apps/user/view/overview/">{row.name}</LinkStyled>
            {/* <Typography noWrap variant="caption">
              {`${row.location}`}
            </Typography> */}
          </Box>
        </Box>
      )
    },
  },
  {
    flex: 0.2,
    minWidth: 250,
    field: "organization",
    headerName: "Байгуулга",
    renderCell: ({ row }: { row: Job }) => {
      return (
        <Typography key={row.id} noWrap variant="body2">
          {row.organization?.name}
        </Typography>
      )
    },
  },
  {
    flex: 0.2,
    minWidth: 250,
    field: "location",
    headerName: "Хаяг",
    renderCell: ({ row }: { row: Job }) => {
      return (
        <Typography noWrap variant="body2">
          {row.location}
        </Typography>
      )
    },
  },
  {
    flex: 0.15,
    field: "createdAt",
    minWidth: 150,
    headerName: "CreatedAt",
    renderCell: ({ row }: { row: Job }) => {
      return (
        <Box sx={{ display: "flex", alignItems: "center", "& svg": { mr: 3 } }}>
          {/* <Icon icon={userRoleObj[row.role].icon} fontSize={20} /> */}
          <Typography
            noWrap
            sx={{ color: "text.secondary", textTransform: "capitalize" }}
          >
            {row.createdAt}
          </Typography>
        </Box>
      )
    },
  },
  {
    flex: 0.1,
    minWidth: 90,
    sortable: false,
    field: "actions",
    headerName: "Actions",
    renderCell: ({ row }) => <RowOptions id={row.id} />,
  },
]

export const JobScene = () => {
  const ability = useContext(AbilityContext)
  const onSearch = useOnSearch()

  const [value, setValue] = useState<string>("")
  const [addJobOpen, setAddJobOpen] = useState<boolean>(false)
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  })

  const { data: dataJobs } = useJobsQuery({
    fetchPolicy: "no-cache",
    onError: (error: unknown) => {
      alert(error)
    },
  })

  const handleFilter = useCallback((val: string) => {
    onSearch("role", val)
    setValue(val)
  }, [])

  const toggleAddJobDrawer = () => setAddJobOpen(!addJobOpen)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            title="Search"
            sx={{ pb: 4, "& .MuiCardHeader-title": { letterSpacing: ".15px" } }}
          />
          <CardContent>
            <Grid container spacing={6}></Grid>
          </CardContent>
          <Divider />
          <TableHeader
            value={value}
            handleFilter={handleFilter}
            toggle={toggleAddJobDrawer}
          />
          <DataGrid
            autoHeight
            rows={dataJobs?.jobs?.data || []}
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

      <AddJobDrawer open={addJobOpen} toggle={toggleAddJobDrawer} />
    </Grid>
  )
}
