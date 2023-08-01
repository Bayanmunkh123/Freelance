import { gql } from "@apollo/client"

export const CREATE_JOB = gql`
  mutation createJob($input: JobCreateInput!) {
    createJob(input: $input) {
      id
    }
  }
`
