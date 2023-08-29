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
export const ORGANIZATION = gql`
  query organization {
    organization {
      id
      name
      logo
      rating
      companyRegister
      totalSales
      accesses
      type
      status
      members {
        userId
      }
    createdAt
    updatedAt
  }
}
`
export const ORGANIZATIONS = gql`
  query Organizations {
    organizations {
      count
      data {
        id
        name
        logo
        rating
        companyRegister
        totalSales
        accesses
        type
        status
        createdAt
        updatedAt
        members {
          userId
        }
        products {
          id
        }
    }
  }
}
`
