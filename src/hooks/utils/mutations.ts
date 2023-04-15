import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation Login($input: LoginUserInput!) {
    login(input: $input) {
      accessToken
      refreshToken
      isEmailConfirmed
      isPhoneConfirmed
    }
  }
`

export const REGISTER = gql`
  mutation register($input: RegisterUserInput!) {
    register(input: $input)
  }
`

export const AUTH_WEB = gql`
  mutation authWeb($input: ExternalWebAuthInput!) {
    authWeb(input: $input) {
      accessToken
      refreshToken
    }
  }
`

// OLD
export const AUTH_VERIFY_TOKEN_SENDER = gql`
  mutation authVerifyTokenSender($input: AuthVerifyTokenSenderInput!) {
    authVerifyTokenSender(input: $input)
  }
`

export const AUTH_FORGET_PASSWORD = gql`
  mutation authForgetPassword($input: AuthVerifyTokenSenderInput!) {
    authForgetPassword(input: $input)
  }
`

export const AUTH_VERIFY_TOKEN = gql`
  mutation authVerifyToken($input: AuthVerifyTokenInput!) {
    authVerifyToken(input: $input) {
      accessToken
      refreshToken
    }
  }
`

export const AUTH_RESET_PASSWORD = gql`
  mutation authResetPassword($input: AuthResetPasswordInput!) {
    authResetPassword(input: $input) {
      accessToken
      refreshToken
    }
  }
`
