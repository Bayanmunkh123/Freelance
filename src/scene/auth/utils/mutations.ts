import { gql } from '@apollo/client'

export const AUTH_GOOGLE = gql`
  mutation authGoogle($input: ExternalAuthInput!) {
    authGoogle(input: $input) {
      accessToken
    }
  }
`
