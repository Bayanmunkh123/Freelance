import { gql } from '@apollo/client'

export const AUTH_GOOGLE = gql`
  mutation authGoogle($input: ExternalAuthInput!) {
    authGoogle(input: $input) {
      accessToken
    }
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

export const LOGIN_EMAIL = gql`
  mutation loginEmail($input: LoginEmailInput!) {
    loginEmail(input: $input) {
      accessToken
      refreshToken
      deviceId
      sessionList {
        id
        deviceName
        deviceType
        deviceOs
      }
    }
  }
`
export const LOGIN_PHONE = gql`
  mutation loginPhone($input: LoginPhoneInput!) {
    loginPhone(input: $input) {
      accessToken
      refreshToken
      deviceId
    }
  }
`

export const REGISTER_EMAIL = gql`
  mutation registerEmail($input: RegisterEmailInput!) {
    registerEmail(input: $input) {
      deviceId
    }
  }
`
export const REGISTER_PHONE = gql`
  mutation registerPhone($input: RegisterPhoneInput!) {
    registerPhone(input: $input) {
      deviceId
    }
  }
`
export const EMAIL_FORGET_PASSWORD = gql`
  mutation authEmailForgetPassword($input: AuthEmailVerifyTokenSenderInput!) {
    authEmailForgetPassword(input: $input)
  }
`
export const EMAIL_VERIFY_TOKEN_SENDER = gql`
  mutation authEmailVerifyTokenSender($input: AuthEmailVerifyTokenSenderInput!) {
    authEmailVerifyTokenSender(input: $input)
  }
`
export const AUTH_EMAIL_RESET_PASSWORD_INPUT = gql`
  mutation authEmailResetPassword($input: AuthEmailResetPasswordInput!) {
    authEmailResetPassword(input: $input) {
      accessToken
      refreshToken
    }
  }
`

export const ACCOUNT_ELIMINATE = gql`
  mutation AccountEliminate($input: AccountEliminateInputType!) {
    accountEliminate(input: $input) {
      accessToken
      refreshToken
      deviceId
    }
  }
`

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
