import React from "react"
import { NextPage } from "next"
import { JobScene } from "src/scene/admin/job/list/JobScene"
import { RoleData } from "src/config/acl"

const JobList: NextPage = () => <JobScene />

JobList.acl = {
  action: "read",
  subject: "Admin_Jobs",
}

JobList.guestGuard = false
export const adminJobsPermission: RoleData = {
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

export default JobList
