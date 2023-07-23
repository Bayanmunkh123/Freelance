import React from "react"
import { NextPage } from "next"
import { RoleScene } from "src/scene/admin/roles/list/RoleScene"
import { ActionsEnum, SubjectsEnum } from "src/config/acl"

const RoleList: NextPage = () => <RoleScene />

RoleList.acl = {
  action: ActionsEnum.Read,
  subject: SubjectsEnum.Role,
}

RoleList.guestGuard = false

export default RoleList
