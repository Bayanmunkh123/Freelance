import { gql } from '@apollo/client'

export const ME_AUTH = gql`
  query me {
    me {
      id
      role
      email
      phoneNumber
      firstName
      lastName
      userHost {
        id
      }
      image
    }
  }
`

export const LOGOUT = gql`
  query LOGOUT {
    logout
  }
`
