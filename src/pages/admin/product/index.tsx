import { ProductScene } from 'src/scene/admin/product/ProductScene'
import React from 'react'
import { NextPage } from 'next'
import { RoleData } from 'src/config/acl'

const ProductList: NextPage = () => <ProductScene />

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
