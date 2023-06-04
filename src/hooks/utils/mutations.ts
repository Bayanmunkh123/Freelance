import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation Login($input: LoginEmailInput!) {
    loginEmail(input: $input) {
      accessToken
      # refreshToken
      # isEmailConfirmed
      # isPhoneConfirmed
    }
  }
`

export const REGISTER_EMAIL = gql`
  mutation registerEmail($input: RegisterEmailInput!) {
    registerEmail(input: $input)
  }
`

// export const AUTH_WEB = gql`
//   mutation AuthWeb($input: ExternalWebAuthInput!) {
//     authWeb(input: $input) {
//       accessToken
//       refreshToken
//     }
//   }
// `

// OLD
// export const AUTH_VERIFY_TOKEN_SENDER = gql`
//   mutation AuthVerifyTokenSender($input: AuthVerifyTokenSenderInput!) {
//     authVerifyTokenSender(input: $input)
//   }
// `

// export const AUTH_FORGET_PASSWORD = gql`
//   mutation AuthForgetPassword($input: AuthVerifyTokenSenderInput!) {
//     authForgetPassword(input: $input)
//   }
// `

// export const AUTH_VERIFY_TOKEN = gql`
//   mutation AuthVerifyToken($input: AuthVerifyTokenInput!) {
//     authVerifyToken(input: $input) {
//       accessToken
//       refreshToken
//     }
//   }
// `

// export const AUTH_RESET_PASSWORD = gql`
//   mutation AuthResetPassword($input: AuthResetPasswordInput!) {
//     authResetPassword(input: $input) {
//       accessToken
//       refreshToken
//     }
//   }
// `
