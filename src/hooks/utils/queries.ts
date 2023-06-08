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
        orgRole
      }
      profile {
        id
        firstName
        lastName
      }
      image
    }
  }
`

export const LOGOUT = gql`
  mutation logout($deviceId: String) {
    logout(deviceId: $deviceId)
  }
`
