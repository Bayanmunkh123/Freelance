import { gql } from '@apollo/client';

export const LANDING_USER = gql`
query landingUser($input: UserWhereInput) {
    user(input: $input) {
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
      accounts {
        id
        userId
        userUid
        providerName
        providerType
        providerId
        providerAccountId
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
        refreshToken
        accessToken
        accessTokenExpires
        signedIn
        createdAt
        updatedAt
      }
      devices {
        id
        deviceName
        deviceOs
        deviceType
      }
      sessions {
        id
        userId
        fcmToken
        isActive
        expires
        createdAt
        updatedAt
        device {
          id
          deviceName
          deviceOs
          deviceType
        }
      }
      profile {
        id
        userId
        firstName
        lastName
        registerNumber
        gender
        dateOfBirth
        image
        address
        country
        duration
        workSector
        workYear
        visaCategory
        income
        User {
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
      }
      imageUrl {
        id
        name
        image
        THUMB
        SMALL
        MEDIUM
        NATIVE
      }
    }
  }`
