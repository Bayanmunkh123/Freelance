import { gql } from "apollo-server"

export const UPDATE_USER = gql`
mutation updateUser($input: UserUpdateInput!, $updateUserId: String!) {
    updateUser(input: $input, id: $updateUserId) {
      id
      accounts {
        providerId
      }
      countryCode
      createdAt
      email
      devices {
  
      }
      image
      imageUrl {
  
      }
      phone
      profile {
      }
      role
      sessions {
  
      }
      status
      updatedAt
      userId
      userName
  
    }
  }
`