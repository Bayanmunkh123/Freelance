import { ProductStatusEnum, ConstructionStatusEnum } from 'src/generated'
import * as React from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Link from 'next/link'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Icon from 'src/@core/components/icon'
import { Tooltip  } from '@mui/material'
/**Icon import */
// import DeleteIcon from '@mui/icons-material/Delete'
// import EditIcon from '@mui/icons-material/Edit'

type ProductType = {
  isSold: boolean
  name: string
  location: string
  sqr: number
  priceSqr: number
  postDate: Date | number
  productStatus: ProductStatusEnum

}
interface CellType {
  row: ProductType
}

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 50
  },
  {
    field: 'isSold',
    headerName: 'Төлөв',
    width: 100,
    editable: true,
    renderCell: ({ row }: CellType) => {
      const { isSold } = row
      return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Tooltip title= {isSold ? 'Зарагдсан' : 'Зарагдаагүй'}>
          <IconButton size='small' sx={{ mr: 0.5 }} >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    )}
  },
  {
    field: 'name',
    headerName: 'Нэр',
    width: 120,
    editable: true,
  },
  {
    field: 'location',
    headerName: 'Байршил',
    width: 150,
    editable: true,
  },
  {
    field: 'sqr',
    headerName: 'Метр квадрат',
    type: 'number',
    sortable: false,
    width: 100,
  },
  {
    field: 'priceSqr',
    headerName: 'Үнэ',
    type: 'number',
    sortable: false,
    width: 160,
  },
  {
    field: 'postDate',
    headerName: 'Хугацаа',
    width: 100,
    editable: true,
  },
  {
    field: 'productStatus',
    headerName: 'Төлөв1',
    sortable: false,
    width: 100,
  },
  {
    flex: 0.1,
    minWidth: 130,
    sortable: false,
    editable: false,
    field: 'actions',
    headerName: 'Үйлдэл',
    renderCell: ({ row }: CellType) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Tooltip title='Delete Invoice'>
          <IconButton size='small' sx={{ mr: 0.5 }} >
            {/* <DeleteIcon /> */}
          </IconButton>
        </Tooltip>
        <Tooltip title='View'>
          <IconButton size='small'  sx={{ mr: 0.5 }} >
            {/* <EditIcon /> */}
          </IconButton>
        </Tooltip>
      </Box>
    )
  }
]

const rows = [
  { id: 1, isSold: true, name: 'Snow', location: 'Jon', sqr: 35, priceSqr: 40, postDate: 2023, productStatus: "NEW" },
  { id: 2, isSold: true, name: 'Snow', location: 'Jon', sqr: 35, priceSqr: 40, postDate: 2023, productStatus: "NEW" },
  { id: 3, isSold: true, name: 'Snow', location: 'Jon', sqr: 35, priceSqr: 40, postDate: 2023, productStatus: "NEW" },
  { id: 4, isSold: true, name: 'Snow', location: 'Jon', sqr: 35, priceSqr: 40, postDate: 2023, productStatus: "NEW" },
  { id: 5, isSold: true, name: 'Snow', location: 'Jon', sqr: 35, priceSqr: 40, postDate: 2023, productStatus: "NEW" },
  { id: 6, isSold: true, name: 'Snow', location: 'Jon', sqr: 35, priceSqr: 40, postDate: 2023, productStatus: "NEW" },
  { id: 7, isSold: true, name: 'Snow', location: 'Jon', sqr: 35, priceSqr: 40, postDate: 2023, productStatus: "NEW" },
]

export const ProductScene = () => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
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
        disableRowSelectionOnClick
      />
    </Box>
  )
}
