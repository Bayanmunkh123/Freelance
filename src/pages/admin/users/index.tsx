import React from 'react'
import { NextPage } from 'next'
import { UserScene } from 'src/scene/admin/user/list/UserScene'
import { RoleData } from 'src/config/acl'

const UserList: NextPage = () => <UserScene />

UserList.acl = {
  action: 'read',
  subject: 'Admin_Users',
}

UserList.guestGuard = false

export const adminUsersPermission: RoleData = {
  Admin_Users: {
    can: [
      {
        actions: ['create', 'update', 'read', 'delete'],
        roles: ['ADMIN', 'EDITOR'],
      },
      {
        actions: ['create', 'update', 'read', 'delete'],
        roles: ['MEMBER'],
        orgRoles: ['EDITOR', 'FINANCE', 'FINANCE'],
      },
    ],
    cannot: [],
  },
}

export default UserList
