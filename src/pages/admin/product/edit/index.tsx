import UpdateProduct from "src/scene/admin/product/update/UpdateProduct"
import React from 'react'
import { NextPage } from 'next'
import { RoleData } from 'src/config/acl'
import { useRouter } from "next/router"

const ProductList: NextPage = () => {
const router = useRouter()
const _query = router.query
const _id = _query?.id as string      
return <UpdateProduct id={_id} />}

ProductList.acl = {
  action: 'update',
  subject: 'Admin_Product',
}

ProductList.guestGuard = false
export const adminProductPermission: RoleData = {
  Admin_Product: {
    can: [
      {
        actions: ['create', 'update', 'read', 'delete'],
        roles: ['ADMIN', 'EDITOR'],
      },
    ],
    cannot: [],
  },
}

export default ProductList
