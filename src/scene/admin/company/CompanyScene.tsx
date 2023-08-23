import * as React from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import UserIcon from "src/layouts/components/UserIcon"
import { IconButton, Tooltip } from "@mui/material"
import {useOrganizationsQuery } from 'src/generated'
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'Компаний нэр',
    width: 170,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Хариуцсан ажилтан',
    width: 200,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Гишүүдийн тоо',
    type: 'number',
    width: 160,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Статус',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'actions',
    headerName: 'Үйлдэл',
    sortable: false,
    width: 160,
    renderCell: () =>(
      <Box>
        <Tooltip title="delete">
          <IconButton>
            <UserIcon icon="mdi:bin"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="delete">
          <IconButton>
            <UserIcon icon="material-symbols:edit"/>
          </IconButton>
        </Tooltip>
      </Box>
    )
  },
]

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
]

export const CompanyScene = () => {
  const data = useOrganizationsQuery()
  console.log(data?.organizations)
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <button style={{margin:'20px',background:'red',color:'white'}}>Delete</button>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        
      />
    </Box>
  )
}
