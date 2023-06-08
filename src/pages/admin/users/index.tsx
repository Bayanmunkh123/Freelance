import React from 'react'
import { NextPage } from 'next'
import { UserListScene } from 'src/scene/admin/user/list'
import { ActionsEnum, SubjectsEnum } from 'src/configs/acl'

const UserList: NextPage = () => <UserListScene />

UserList.acl = {
  action: ActionsEnum.Read,
  subject: SubjectsEnum.Role
}

export default UserList
