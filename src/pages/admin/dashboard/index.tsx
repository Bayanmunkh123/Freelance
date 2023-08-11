import React from 'react'
import { NextPage } from 'next'
import { DashboardScene } from 'src/scene/admin/dashboard/DashboardScene'
import { RoleData } from 'src/config/acl'

const DashboardList: NextPage = () => <DashboardScene />

DashboardList.acl = {
  action: 'read',
  subject: 'Admin_Dashboard',
}

DashboardList.guestGuard = false
export const adminDashboardPermission: RoleData = {
  Admin_Dashboard: {
    can: [
      {
        actions: ['create', 'update', 'read', 'delete'],
        roles: ['ADMIN', 'EDITOR'],
      },
    ],
    cannot: [],
  },
}

export default DashboardList
