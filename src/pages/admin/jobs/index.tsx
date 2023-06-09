import React from 'react'
import { NextPage } from 'next'
import { JobListScene } from 'src/scene/admin/job/list'
import { ActionsEnum, SubjectsEnum } from 'src/configs/acl'

const JobList: NextPage = () => <JobListScene />

JobList.acl = {
  action: ActionsEnum.Read,
  subject: SubjectsEnum.Job
}

export default JobList
