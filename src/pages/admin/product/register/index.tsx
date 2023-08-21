import {RegisterProduct} from "src/scene/admin/product/create/RegisterProduct"
import React from 'react'
import { NextPage } from 'next'
import { RoleData } from 'src/config/acl'

const ProductList: NextPage = () => <RegisterProduct />

ProductList.acl = {
  action: 'read',
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
