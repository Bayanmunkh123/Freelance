import { gql } from '@apollo/client'

export const USER_LIST = gql`
  query Users($input: UsersWhereInput) {
    users(input: $input) {
      data {
        id
        userId
        userName
        role
        email
      }
      count
    }
  }
`
