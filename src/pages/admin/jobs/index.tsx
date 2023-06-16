import React from 'react'
import { NextPage } from 'next'
import { JobScene } from 'src/scene/admin/job/list/JobScene'
import { ActionsEnum, SubjectsEnum } from 'src/configs/acl'

const JobList: NextPage = () => <JobScene />

JobList.acl = {
  action: ActionsEnum.Read,
  subject: SubjectsEnum.Job
}

JobList.guestGuard = false

export default JobList
