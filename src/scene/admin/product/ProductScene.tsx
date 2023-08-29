import {
  BannerStatusEnum,
  ConstructionStatusEnum,
  ProductStatusEnum,
  ProductsQuery,
  useProductStatusUpdateMutation,
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

type OrganizationProductType = {
  id: string
  no: number
  //isFav: boolean
  name: string
  city: string
  district: string
  sqr: number
  priceSqr: number | null | undefined
  releaseDate: Date
  bannerStatus: BannerStatusEnum
  constStatus: ConstructionStatusEnum
  floors: number
  floorNumber: number
}

interface CellType {
  row: OrganizationProductType
}

const columns: GridColDef[] = [
  {
    field: "no",
    headerName: "№",
    width: 50,
  },
  {
    field: "name",
    headerName: "Үл хөдлөх",
    width: 250,
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
    headerName: "Mетр кв үнэ",
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
    field: "floors",
    headerName: "Нийт давхар",
    width: 100,
    editable: true,
    sortable: true,
  },
  {
    field: "floorNumber",
    headerName: "Давхарын тоо",
    width: 100,
    editable: true,
    sortable: true,
  },
  {
    field: "constStatus",
    headerName: "Статус",
    width: 110,
    editable: true,
    sortable: true,
    renderCell: ({ row }: CellType) =>{
      const { constStatus } = row
      return(
        <Typography>{constStatus === ConstructionStatusEnum.NEWBUILDING ? 'Шинэ' :  constStatus === ConstructionStatusEnum.SOON ? 'Тун удахгүй' : constStatus === ConstructionStatusEnum.OLD ? 'Хуучин' : ' '}</Typography>
      )
    }
  },
  {
    field: "releaseDate",
    headerName: "Хугацаа",
    width: 150,
    editable: true,
    sortable: true,
    renderCell: ({ row }: CellType) => {
      const { releaseDate } = row;
      const date = new Date(releaseDate).toISOString().split('T')[0];
      return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography>{date}</Typography>
        </Box>
      )
    },
  },
  {
    field: "bannerStatus",
    headerName: "Төрөл",
    sortable: true,
    editable: true,
    width: 70,
    renderCell: ({ row }: CellType) => {
      const { bannerStatus } = row
      return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Tooltip
            title={
              bannerStatus === BannerStatusEnum.NEW
                ? "Шинэ"
                : bannerStatus === BannerStatusEnum.HIGHLIGTH
                ? "Онцлох"
                : "Энгийн"
            }
          >
            <IconButton size="small" sx={{ mr: 0.5 }}>
              {bannerStatus === BannerStatusEnum.NEW ? (
                <Icon icon={"mdi:new-box"} color="red" />
              ) : bannerStatus === BannerStatusEnum.HIGHLIGTH ? (
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
      const [onDeleteProduct] = useProductStatusUpdateMutation({
        onCompleted: () =>{
          alert("Амжилттай устлаа")
        },
        onError: (error)=>{
          console.log(error)
        } 
      })
      const handleDelete = (id: string) =>{
        onDeleteProduct({
          variables:{
            id: id,
            input: {
              productStatus: ProductStatusEnum.INACTIVE
            }
          },
        })
      }
    

      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Tooltip title="Устгах">
            <IconButton size="small" sx={{ mr: 0.5 }} onClick={() => handleDelete(id)}>
              <Icon icon={"mdi:delete-outline"}/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Засах">
            <Link href={`/admin/product/update?id=${id}`}>
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
  const rows: OrganizationProductType[] = []
  data?.products?.data?.forEach((item, index: number) => {
    rows.push({
      name: item.name,
      city: item.city,
      district: item.district,
      id: item.id,
      sqr: item.sqr,
      priceSqr: item.priceSqr,
      releaseDate: item.releaseDate,
      //isFav: true,
      bannerStatus: item.bannerStatus,
      no: index+1,
      constStatus: item.constStatus,
      floors: item.floors,
      floorNumber: item.floorNumber
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
  const { data, refetch } = useProductsQuery()
  
  React.useEffect(() => {
    const fetchData = () => {
      refetch()
    };
    fetchData();
    const intervalId = setInterval(fetchData, 100)
    return () => {
      clearInterval(intervalId);
    };
  }, []);
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
