import { gql } from "@apollo/client"

export const CREATE_USER = gql`
  # mutation CreateUser($input: UserCreateInput!) {
  #   createUser(input: $input) {
  #     id
  #   }
  # }
`
