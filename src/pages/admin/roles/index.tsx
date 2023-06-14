import React from 'react'
import { NextPage } from 'next'
import { RoleScene } from 'src/scene/admin/roles/list/role.list.scene'
import { ActionsEnum, SubjectsEnum } from 'src/configs/acl'

const RoleList: NextPage = () => <RoleScene />

RoleList.acl = {
  action: ActionsEnum.Read,
  subject: SubjectsEnum.Role
}

export default RoleList
