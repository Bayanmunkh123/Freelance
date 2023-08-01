import React from "react"
import { NextPage } from "next"
import { UserScene } from "src/scene/admin/user/list/UserScene"
import { ActionsEnum, SubjectsEnum } from "src/config/acl"

const UserList: NextPage = () => <UserScene />

UserList.acl = {
  action: ActionsEnum.Read,
  subject: SubjectsEnum.User,
}

UserList.guestGuard = false

export default UserList
