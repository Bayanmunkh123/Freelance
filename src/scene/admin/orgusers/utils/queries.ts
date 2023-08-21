import { gql } from "@apollo/client"

export const ORGANIZATION_USERS = gql`
    query OrganizationUsers($input: OrganizationUsersWhereInput) {
  organizationUsers(input: $input) {
    count
    data {
      id
      orgRole
      userId
      organizationId
      user {
        id
        userId
        userName
        role
        status

        email
        phone
        countryCode
        createdAt
        updatedAt
        image

      }
      organization {
        id
      }
      assignedAt
      createdAt
      updatedAt
    }
  }
}
`
