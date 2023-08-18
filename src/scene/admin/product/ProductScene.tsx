import {
  BannerStatusEnum,
  ProductsQuery,
} from "src/generated"
import * as React from "react"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Link from "next/link"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { Tooltip, Typography } from "@mui/material"

// ** Icon Imports
import Icon from "src/@core/components/icon"

import { useProductsQuery } from "src/generated"

type ProductType = {
  id: string
  isFav: boolean
  name: string
  city: string
  district: string
  sqr: number
  priceSqr: number | null | undefined
  releaseDate: Date
  productStatus: BannerStatusEnum
}

interface CellType {
  row: ProductType
}

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
  },
  {
    field: "isSold",
    headerName: "Төлөв",
    width: 70,
    editable: true,
    sortable: true,
    renderCell: ({ row }: CellType) => {
      const { isFav } = row
      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* <Tooltip title= {isFav ? 'Зарагдсан' : 'Зарагдаагүй'}>
          <IconButton size='small' sx={{ mr: 0.5 }} >
            {
              isFav ? <CheckOutlinedIcon color='success' /> : <ClearOutlinedIcon color='error' />
            }
            
          </IconButton>
        </Tooltip> */}
        </Box>
      )
    },
  },
  {
    field: "name",
    headerName: "Үл хөдлөх",
    width: 200,
    editable: true,
    sortable: true,
    renderCell: ({ row }: CellType) => {
      const { name, city, district } = row
      return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            noWrap
            variant="body2"
            sx={{
              color: "text.primary",
              fontWeight: 500,
              lineHeight: "22px",
              letterSpacing: ".1px",
            }}
          >
            {name}
          </Typography>
          <Typography noWrap variant="caption">
            {city} {district}
          </Typography>
        </Box>
      )
    },
  },
  {
    field: "priceSqr",
    headerName: "Үнэ",
    width: 150,
    editable: true,
    sortable: true,
  },
  {
    field: "sqr",
    headerName: "Метр кв",
    width: 100,
    editable: true,
    sortable: true,
  },
  {
    field: "releaseDate",
    headerName: "Хугацаа",
    width: 200,
    editable: true,
    sortable: true,
    renderCell: ({ row }: CellType) => {
      const { releaseDate } = row
      return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography>{releaseDate ? releaseDate : ""}</Typography>
        </Box>
      )
    },
  },
  {
    field: "productStatus",
    headerName: "Төлөв",
    sortable: true,
    editable: true,
    width: 70,
    renderCell: ({ row }: CellType) => {
      const { productStatus } = row
      return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Tooltip
            title={
              productStatus === BannerStatusEnum.NEW
                ? "Шинэ"
                : productStatus === BannerStatusEnum.HIGHLIGTH
                ? "Онцлох"
                : "Энгийн"
            }
          >
            <IconButton size="small" sx={{ mr: 0.5 }}>
              {productStatus === BannerStatusEnum.NEW ? (
                <Icon icon={"mdi:new-box"} color="red" />
              ) : productStatus === BannerStatusEnum.HIGHLIGTH ? (
                <Icon icon={"mdi:star-outline"} color="#72E128" />
              ) : (
                <Icon icon={"mdi:home-city-outline"} color="#0361C9" />
              )}
            </IconButton>
          </Tooltip>
        </Box>
      )
    },
  },
  {
    flex: 0.1,
    minWidth: 130,
    sortable: false,
    editable: false,
    field: "actions",
    headerName: "Үйлдэл",
    renderCell: ({ row }: CellType) => {
      const { id } = row
      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Tooltip title="Устгах">
            <IconButton size="small" sx={{ mr: 0.5 }}>
              <Icon icon={"mdi:delete-outline"} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Засах">
            <Link href={`/admin/product/edit?id=${id}`}>
              <IconButton size="small" sx={{ mr: 0.5 }}>
                <Icon icon={"mdi:home-edit-outline"} />
              </IconButton>
            </Link>
          </Tooltip>
        </Box>
      )
    },
  },
]
function getRows(data: ProductsQuery | undefined) {
  const rows: ProductType[] = []
  data?.products?.data?.forEach((item) => {
    rows.push({
      name: item.name,
      city: item.city,
      district: item.district,
      id: item.id,
      sqr: item.sqr,
      priceSqr: item.priceSqr,
      releaseDate: item.releaseDate,
      isFav: true,
      productStatus: item.bannerStatus,
    })
  })
  return rows
}

// const rows = [
//   { id: 1, isSold: true, name: 'Орон сууц', location: 'Улаанбаатар хот, Баянзүрх дүүрэг,  ', sqr: 350, priceSqr: 4000000, postDate: "22 Oct 2019", productStatus: "NEW" },
//   { id: 2, isSold: true, name: 'Орон сууц', location: 'Улаанбаатар хот, Баянзүрх дүүрэг,  ', sqr: 350, priceSqr: 4000000, postDate: "22 Oct 2019", productStatus: "NEW" },
//   { id: 3, isSold: false, name: 'Орон сууц', location: 'Улаанбаатар хот, Баянзүрх дүүрэг,  ', sqr: 350, priceSqr: 4000000, postDate: "22 Oct 2019", productStatus: "NEW" },
//   { id: 4, isSold: true, name: 'Орон сууц', location: 'Улаанбаатар хот, Баянзүрх дүүрэг,  ', sqr: 350, priceSqr: 4000000, postDate: "22 Oct 2019", productStatus: "HIGHLIGTH" },
//   { id: 5, isSold: true, name: 'Орон сууц', location: 'Улаанбаатар хот, Баянзүрх дүүрэг,  ', sqr: 350, priceSqr: 4000000, postDate: "22 Oct 2019", productStatus: "NEW" },
//   { id: 6, isSold: false, name: 'Орон сууц', location: 'Улаанбаатар хот, Баянзүрх дүүрэг,  ', sqr: 350, priceSqr: 4000000, postDate: "22 Oct 2019", productStatus: "DEFAULT" },
//   { id: 7, isSold: true, name: 'Орон сууц', location: 'Улаанбаатар хот, Баянзүрх дүүрэг,  ', sqr: 350, priceSqr: 4000000, postDate: "22 Oct 2019", productStatus: "NEW" },
// ]

export const ProductScene = () => {
  const { data } = useProductsQuery()
  const rows = getRows(data)
  return (
    <Box sx={{ height: 600, width: "100%" }}>
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
