import React from 'react'
import { NextPage } from 'next'
import { UsersScene } from 'src/scene/admin/orgusers/user'
import { RoleData } from 'src/config/acl'

const UserList: NextPage = () => <UsersScene />

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
