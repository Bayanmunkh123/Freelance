import React from "react"
import { NextPage } from "next"
import { RoleScene } from "src/scene/admin/roles/list/RoleScene"
import { RoleData } from "src/config/acl"

const RoleList: NextPage = () => <RoleScene />

RoleList.acl = {
  action: "read",
  subject: "Admin_Roles",
}

RoleList.guestGuard = false

export const adminRolesPermission: RoleData = {
  Admin_Roles: {
    can: [
      {
        actions: ["create", "update", "read", "delete"],
        roles: ["ADMIN", "EDITOR"],
      },
    ],
    cannot: [],
  },
}

export default RoleList
