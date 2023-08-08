import React from "react"
import { NextPage } from "next"
import { CompanyScene } from "src/scene/admin/company/CompanyScene"
import { RoleData } from "src/config/acl"

const CompanyList: NextPage = () => <CompanyScene />

CompanyList.acl = {
  action: "read",
  subject: "Admin_Jobs",
}

CompanyList.guestGuard = false
export const adminCompanyPermission: RoleData = {
  Admin_Company: {
    can: [
      {
        actions: ["create", "update", "read", "delete"],
        roles: ["ADMIN", "EDITOR"],
      },
    ],
    cannot: [],
  },
}

export default CompanyList
