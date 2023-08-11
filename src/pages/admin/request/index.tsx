import React from 'react'
import { NextPage } from 'next'
import { RoleScene } from 'src/scene/admin/request/RoleScene'
import { RoleData } from 'src/config/acl'

const RequestList: NextPage = () => <RoleScene />

RequestList.acl = {
  action: 'read',
  subject: 'Admin_Request',
}

RequestList.guestGuard = false

export const adminRequestPermission: RoleData = {
  Admin_Request: {
    can: [
      {
        actions: ['create', 'update', 'read', 'delete'],
        roles: ['ADMIN', 'EDITOR'],
      },
    ],
    cannot: [],
  },
}

export default RequestList
