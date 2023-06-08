import React from 'react'
import { NextPage } from 'next'
import { RoleListScene } from 'src/scene/admin/roles/list'
import { ActionsEnum, SubjectsEnum } from 'src/configs/acl'

const RoleList: NextPage = () => <RoleListScene />

RoleList.acl = {
  action: ActionsEnum.Read,
  subject: SubjectsEnum.Role
}

export default RoleList
