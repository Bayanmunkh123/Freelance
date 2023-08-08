import React from "react"
import { NextPage } from "next"
import { OrganizationScene } from "src/scene/admin/organization/OrganizationScene"
import { RoleData } from "src/config/acl"

const OrganizationList: NextPage = () => <OrganizationScene />

OrganizationList.acl = {
  action: "read",
  subject: "Admin_Jobs",
}

OrganizationList.guestGuard = false
export const adminOrganizationPermission: RoleData = {
  Admin_Jobs: {
    can: [
      {
        actions: ["create", "update", "read", "delete"],
        roles: ["ADMIN", "EDITOR"],
      },
    ],
    cannot: [],
  },
}

export default OrganizationList
