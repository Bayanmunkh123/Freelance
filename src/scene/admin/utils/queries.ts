import { gql } from '@apollo/client'

export const USER = gql`
  query User {
    user {
      id
      userId
      userName
      role
      email
      profile {
        id
        firstName
        lastName
      }
      organizationUsers {
        id
        orgRole
        organizationId
        organization {
          id
          logo
          name
        }
      }
    }
  }
`
export const USER_LIST = gql`
  query Users($input: UsersWhereInput) {
    users(input: $input) {
      data {
        id
        userId
        userName
        role
        email
        profile {
          id
          firstName
          lastName
        }
        organizationUsers {
          id
          orgRole
          organizationId
          organization {
            id
            logo
            name
          }
        }
      }
      count
    }
  }
`
export const ORGANIZATION_USER_LIST = gql`
  query OrganizationUsers($input: OrganizationUsersWhereInput) {
    organizationUsers(input: $input) {
      data {
        id
        orgRole
        organization {
          id
          name
        }
        user {
          id
          userId
          userName
          role
          email
          image
          profile {
            id
            firstName
            lastName
          }
        }
      }
      count
    }
  }
`

export const ROLES_LIST = gql`
  query Roles($input: RoleWhereInput) {
    roles(input: $input) {
      data {
        orgRole
        id
      }
    }
  }
`
export const ORGANIZATION_LIST = gql`
  query Organizations {
    organizations {
      data {
        id
        name
      }
      count
    }
  }
`
