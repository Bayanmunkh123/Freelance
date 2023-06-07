import { gql } from '@apollo/client'

export const ME_AUTH = gql`
  query meAuth {
    meAuth {
      id
      role
      email
      countryCode
      phone
      userName
      createdAt
      updatedAt
      organizationUsers {
        id
        role
      }
      image
    }
  }
`

export const LOGOUT = gql`
  mutation logout {
    logout
  }
`
