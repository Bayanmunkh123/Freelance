import { gql } from "@apollo/client"

export const JOBS_LIST = gql`
  query Jobs {
    jobs {
      data {
        id
        name
        location
        organizationId
        organization {
          id
          name
          createdAt
        }
        createdAt
      }
      count
    }
  }
`
export const JOB = gql`
  query Job {
    job {
      id
      name
      location
      organizationId
      organization {
        id
        name
        createdAt
      }
      createdAt
    }
  }
`
