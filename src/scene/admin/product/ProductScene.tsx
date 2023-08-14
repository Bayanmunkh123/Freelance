import { ProductStatusEnum, ConstructionStatusEnum } from 'src/generated'
import * as React from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Link from 'next/link'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Tooltip, Typography  } from '@mui/material'
/**Icon import */
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork'
import FiberNewIcon from '@mui/icons-material/FiberNew';

type ProductType = {
  isSold: boolean
  name: string
  location: string
  sqr: number
  priceSqr: number
  postDate: Date | string
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
    width: 70,
    editable: true,
    sortable: true,
    renderCell: ({ row }: CellType) => {
      const { isSold } = row
      return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Tooltip title= {isSold ? 'Зарагдсан' : 'Зарагдаагүй'}>
          <IconButton size='small' sx={{ mr: 0.5 }} >
            {
              isSold ? <CheckOutlinedIcon color='success' /> : <ClearOutlinedIcon color='error' />
            }
            
          </IconButton>
        </Tooltip>
      </Box>
    )}
  },
  {
    field: 'name',
    headerName: 'Үл хөдлөх',
    width: 250,
    editable: true,
    sortable: true,
    renderCell: ({ row }: CellType) => {
      const { name, location } = row
      return (
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              noWrap
              variant='body2'
              sx={{ color: 'text.primary', fontWeight: 500, lineHeight: '22px', letterSpacing: '.1px' }}
            >
              {name}
            </Typography>
            <Typography noWrap variant='caption'>
              {location}
            </Typography>
          </Box>
      )
    }
  },
  {
    field: 'priceSqr',
    headerName: 'Үнэ',
    type: 'number',
    width: 150,
    editable: true,
    sortable: true
  },
  {
    field: 'sqr',
    headerName: 'Метр кв',
    width: 100,
    editable: true,
    sortable: true
  },
  {
    field: 'postDate',
    headerName: 'Хугацаа',
    width: 150,
    editable: true,
    sortable: true
  },
  {
    field: 'productStatus',
    headerName: 'Төлөв',
    sortable: true,
    editable: true,
    width: 70,
    renderCell: ({ row }: CellType) => {
      const { productStatus } = row
      return (
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Tooltip title= {productStatus === ProductStatusEnum.NEW ?  'Шинэ' : productStatus === ProductStatusEnum.HIGHLIGTH ? 'Онцлох' : 'Энгийн'}>
              
                <IconButton size='small' sx={{ mr: 0.5 }} >
                {productStatus === ProductStatusEnum.NEW ?  <FiberNewIcon color='warning'/> : productStatus === ProductStatusEnum.HIGHLIGTH ? <StarOutlinedIcon color='error'/> : <MapsHomeWorkIcon color='primary'/>}
                </IconButton>
              
        </Tooltip>
          </Box>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 130,
    sortable: false,
    editable: false,
    field: 'actions',
    headerName: 'Үйлдэл',
    renderCell: () => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Tooltip title='Устгах'>
          <IconButton size='small' sx={{ mr: 0.5 }} >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title='Засах'>
        <Link href='/admin/product/edit'>
          <IconButton size='small'sx={{ mr: 0.5 }}  >
            <EditIcon />
          </IconButton>
          </Link>
        </Tooltip>
      </Box>
    )
  }
]

const rows = [
  { id: 1, isSold: true, name: 'Орон сууц', location: 'Улаанбаатар хот, Баянзүрх дүүрэг,  ', sqr: 350, priceSqr: 4000000, postDate: "22 Oct 2019", productStatus: "NEW" },
  { id: 2, isSold: true, name: 'Орон сууц', location: 'Улаанбаатар хот, Баянзүрх дүүрэг,  ', sqr: 350, priceSqr: 4000000, postDate: "22 Oct 2019", productStatus: "NEW" },
  { id: 3, isSold: false, name: 'Орон сууц', location: 'Улаанбаатар хот, Баянзүрх дүүрэг,  ', sqr: 350, priceSqr: 4000000, postDate: "22 Oct 2019", productStatus: "NEW" },
  { id: 4, isSold: true, name: 'Орон сууц', location: 'Улаанбаатар хот, Баянзүрх дүүрэг,  ', sqr: 350, priceSqr: 4000000, postDate: "22 Oct 2019", productStatus: "HIGHLIGTH" },
  { id: 5, isSold: true, name: 'Орон сууц', location: 'Улаанбаатар хот, Баянзүрх дүүрэг,  ', sqr: 350, priceSqr: 4000000, postDate: "22 Oct 2019", productStatus: "NEW" },
  { id: 6, isSold: false, name: 'Орон сууц', location: 'Улаанбаатар хот, Баянзүрх дүүрэг,  ', sqr: 350, priceSqr: 4000000, postDate: "22 Oct 2019", productStatus: "DEFAULT" },
  { id: 7, isSold: true, name: 'Орон сууц', location: 'Улаанбаатар хот, Баянзүрх дүүрэг,  ', sqr: 350, priceSqr: 4000000, postDate: "22 Oct 2019", productStatus: "NEW" },
]

export const ProductScene = () => {
  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  )
}
