import { Fragment, useState} from "react"
import {
  Button,
} from "@mui/material"
import Icon from "src/@core/components/icon"
import { ProductInput, useProductQuery } from "src/generated"
import { useRouter } from "next/router"
import { FormInitial } from "../create/components/FormInitial"

export const UpdateProduct = ({ id }: { id: string }) => {
  const { data, refetch } = useProductQuery({
      variables: {input: { id } },
  })

  const initialValues = {
    name: data?.product?.name,
    constStatus: data?.product?.constStatus,
    bannerStatus: data?.product?.bannerStatus,
    description: data?.product?.description,
    address1: data?.product?.address1,
    roomNumber: data?.product?.roomNumber,
    sqr: data?.product?.sqr,
    price: data?.product?.price,
    images: data?.product?.images,
    releaseDate: data?.product?.releaseDate,
    floors: data?.product?.floors,
    floorNumber: data?.product?.floorNumber,
    city: data?.product?.city,
    district: data?.product?.district,
    organizationId: data?.product?.organizationId,
    priceSqr: data?.product?.priceSqr,
    bathNumber: data?.product?.ProductRooms?.bathNumber,
    bathRoom: data?.product?.ProductRooms?.bathRoom,
    bedNumber: data?.product?.ProductRooms?.bedNumber,
    bedRoom: data?.product?.ProductRooms?.bedRoom,
    kitchenNumber: data?.product?.ProductRooms?.kitchenNumber,
    kitchenRoom: data?.product?.ProductRooms?.kitchenRoom,
    livingNumber: data?.product?.ProductRooms?.livingNumber,
    livingRoom: data?.product?.ProductRooms?.livingRoom,
    viewWindow: data?.product?.ProductRooms?.viewWindow,
    
  } as ProductInput
  const router = useRouter()
  return (
    <>
       <Button variant="outlined" onClick={()=> router.back()} startIcon={<Icon icon={"mdi:arrow-left"} />} sx={{alignSelf: "flex-start"}}>Буцах</Button>
      <FormInitial actionType="update" initialValues={initialValues} id={id}/>
    </>
  )
}

