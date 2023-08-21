import { gql } from "@apollo/client"

export const USER_CREATE = gql`
  # mutation userCreate($input: UserCreateInput!) {
  #   userCreate(input: $input) {
  #     id
  #   }
  # }
`
