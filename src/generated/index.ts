import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {} as const

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
  JSON: any
}

export enum AccountProviderTypeEnum {
  APPLE = 'APPLE',
  EMAIL = 'EMAIL',
  FACEBOOK = 'FACEBOOK',
  GOOGLE = 'GOOGLE',
  NONE = 'NONE',
  PHONE = 'PHONE',
  TWITTER = 'TWITTER'
}

export type AuthEmailResetPasswordInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type AuthEmailVerifyTokenInput = {
  code: Scalars['String']
  email: Scalars['String']
}

export type AuthEmailVerifyTokenSenderInput = {
  email: Scalars['String']
}

export type AuthPhoneResetPasswordInput = {
  countryCode: Scalars['String']
  password: Scalars['String']
  phone: Scalars['String']
}

export type AuthPhoneVerifyTokenInput = {
  code: Scalars['String']
  countryCode: Scalars['String']
  phone: Scalars['String']
}

export type AuthPhoneVerifyTokenSenderInput = {
  countryCode: Scalars['String']
  phone: Scalars['String']
}

export type AuthUserType = {
  __typename?: 'AuthUserType'
  accounts?: Maybe<Array<UserAccount>>
  countryCode?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  id: Scalars['ID']
  image?: Maybe<Scalars['String']>
  organizationUsers?: Maybe<Array<OrganizationUser>>
  phone?: Maybe<Scalars['String']>
  profile?: Maybe<UserProfile>
  role: UserRoleEnum
  updatedAt?: Maybe<Scalars['DateTime']>
  userName?: Maybe<Scalars['String']>
}

export type AuthVerifyTokenType = {
  __typename?: 'AuthVerifyTokenType'
  accessToken?: Maybe<Scalars['String']>
  isEmailConfirmed?: Maybe<Scalars['Boolean']>
  isPhoneConfirmed?: Maybe<Scalars['Boolean']>
  refreshToken?: Maybe<Scalars['String']>
}

export type ExternalAuthAppleInput = {
  email?: InputMaybe<Scalars['String']>
  providerId: Scalars['String']
  providerName: Scalars['String']
}

export type ExternalAuthInput = {
  accessToken: Scalars['String']
}

export enum FileSizeEnum {
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
  THUMB = 'THUMB'
}

export type Job = {
  __typename?: 'Job'
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  location: Scalars['String']
  name: Scalars['String']
  organization?: Maybe<Organization>
  organizationId: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type LoginEmailInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type LoginPhoneInput = {
  countryCode?: InputMaybe<Scalars['String']>
  password: Scalars['String']
  phone: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  authApple?: Maybe<AuthVerifyTokenType>
  authEmailForgetPassword?: Maybe<Scalars['Boolean']>
  authEmailResetPassword?: Maybe<AuthVerifyTokenType>
  authEmailVerifyToken?: Maybe<AuthVerifyTokenType>
  authEmailVerifyTokenSender?: Maybe<Scalars['Boolean']>
  authFacebook?: Maybe<AuthVerifyTokenType>
  authGoogle?: Maybe<AuthVerifyTokenType>
  authPhoneForgetPassword?: Maybe<Scalars['Boolean']>
  authPhoneResetPassword?: Maybe<AuthVerifyTokenType>
  authPhoneVerifyToken?: Maybe<AuthVerifyTokenType>
  authPhoneVerifyTokenSender?: Maybe<Scalars['Boolean']>
  createUser?: Maybe<User>
  loginEmail?: Maybe<AuthVerifyTokenType>
  loginPhone?: Maybe<AuthVerifyTokenType>
  logout?: Maybe<Scalars['Boolean']>
  registerEmail?: Maybe<Scalars['Boolean']>
  registerPhone?: Maybe<Scalars['Boolean']>
}

export type MutationAuthAppleArgs = {
  input: ExternalAuthAppleInput
}

export type MutationAuthEmailForgetPasswordArgs = {
  input: AuthEmailVerifyTokenSenderInput
}

export type MutationAuthEmailResetPasswordArgs = {
  input: AuthEmailResetPasswordInput
}

export type MutationAuthEmailVerifyTokenArgs = {
  input: AuthEmailVerifyTokenInput
}

export type MutationAuthEmailVerifyTokenSenderArgs = {
  input: AuthEmailVerifyTokenSenderInput
}

export type MutationAuthFacebookArgs = {
  input: ExternalAuthInput
}

export type MutationAuthGoogleArgs = {
  input: ExternalAuthInput
}

export type MutationAuthPhoneForgetPasswordArgs = {
  input: AuthPhoneVerifyTokenSenderInput
}

export type MutationAuthPhoneResetPasswordArgs = {
  input: AuthPhoneResetPasswordInput
}

export type MutationAuthPhoneVerifyTokenArgs = {
  input: AuthPhoneVerifyTokenInput
}

export type MutationAuthPhoneVerifyTokenSenderArgs = {
  input: AuthPhoneVerifyTokenSenderInput
}

export type MutationCreateUserArgs = {
  input: UserCreateInput
}

export type MutationLoginEmailArgs = {
  input: LoginEmailInput
}

export type MutationLoginPhoneArgs = {
  input: LoginPhoneInput
}

export type MutationRegisterEmailArgs = {
  input: RegisterEmailInput
}

export type MutationRegisterPhoneArgs = {
  input: RegisterPhoneInput
}

export type Organization = {
  __typename?: 'Organization'
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  invitations?: Maybe<Array<UserInvitation>>
  jobs?: Maybe<Array<Job>>
  logo?: Maybe<Scalars['String']>
  members?: Maybe<Array<OrganizationUser>>
  name: Scalars['String']
  status?: Maybe<OrganizationStatusEnum>
  type?: Maybe<OrganizationTypeEnum>
  updatedAt: Scalars['DateTime']
}

export enum OrganizationStatusEnum {
  CONFIRMED = 'CONFIRMED',
  EXPIRED = 'EXPIRED',
  REJECTED = 'REJECTED',
  REQUESTED = 'REQUESTED'
}

export enum OrganizationTypeEnum {
  AGENT = 'AGENT',
  COMPANY = 'COMPANY',
  GOVERNMENT = 'GOVERNMENT',
  UNIVERSITY = 'UNIVERSITY'
}

export type OrganizationUser = {
  __typename?: 'OrganizationUser'
  assignedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  organization?: Maybe<Organization>
  organizationId: Scalars['String']
  role?: Maybe<OrganizationUserRoleEnum>
  updatedAt: Scalars['DateTime']
  user?: Maybe<User>
  userId: Scalars['String']
}

export enum OrganizationUserRoleEnum {
  EDITOR = 'EDITOR',
  FINANCE = 'FINANCE',
  OWNER = 'OWNER',
  SALES = 'SALES',
  SUPPORT = 'SUPPORT',
  VIEWER = 'VIEWER'
}

export type Query = {
  __typename?: 'Query'
  meAuth?: Maybe<AuthUserType>
  user?: Maybe<User>
  users?: Maybe<UsersType>
}

export type RegisterEmailInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type RegisterPhoneInput = {
  countryCode?: InputMaybe<Scalars['String']>
  password: Scalars['String']
  phone: Scalars['String']
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc'
}

export type User = {
  __typename?: 'User'
  accounts?: Maybe<Array<UserAccount>>
  countryCode?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  email?: Maybe<Scalars['String']>
  id: Scalars['ID']
  image?: Maybe<Scalars['String']>
  image_url?: Maybe<Scalars['String']>
  invitedUsers?: Maybe<Array<UserInvitation>>
  organizationUsers?: Maybe<Array<OrganizationUser>>
  phone?: Maybe<Scalars['String']>
  profile?: Maybe<UserProfile>
  role?: Maybe<UserRoleEnum>
  sessions?: Maybe<Array<UserSession>>
  status?: Maybe<UserStatusEnum>
  updatedAt: Scalars['DateTime']
  userId?: Maybe<Scalars['String']>
  userName?: Maybe<Scalars['String']>
}

export type UserAccount = {
  __typename?: 'UserAccount'
  accessToken?: Maybe<Scalars['String']>
  accessTokenExpires?: Maybe<Scalars['DateTime']>
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  providerAccountId?: Maybe<Scalars['String']>
  providerId?: Maybe<Scalars['String']>
  providerName?: Maybe<Scalars['String']>
  providerType?: Maybe<AccountProviderTypeEnum>
  refreshToken?: Maybe<Scalars['String']>
  signedIn: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  user?: Maybe<User>
  userId?: Maybe<Scalars['String']>
  userUid?: Maybe<Scalars['String']>
}

export type UserCreateInput = {
  countryCode?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  image?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
}

export type UserInvitation = {
  __typename?: 'UserInvitation'
  createdAt: Scalars['DateTime']
  email: Scalars['String']
  id: Scalars['ID']
  inviteAccepted?: Maybe<Scalars['Boolean']>
  inviter?: Maybe<User>
  inviterId: Scalars['String']
  organization?: Maybe<Organization>
  organizationId: Scalars['String']
  role: OrganizationUserRoleEnum
  token?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

export type UserProfile = {
  __typename?: 'UserProfile'
  dateOfBirth?: Maybe<Scalars['DateTime']>
  firstName?: Maybe<Scalars['String']>
  gender?: Maybe<Scalars['String']>
  id: Scalars['ID']
  lastName?: Maybe<Scalars['String']>
  registerNumber?: Maybe<Scalars['String']>
  user?: Maybe<User>
  userId: Scalars['String']
}

export enum UserRoleEnum {
  ADMIN = 'ADMIN',
  EDITOR = 'EDITOR',
  MEMBER = 'MEMBER'
}

export type UserSession = {
  __typename?: 'UserSession'
  createdAt: Scalars['DateTime']
  deviceName: Scalars['String']
  deviceToken: Scalars['String']
  deviceType: Scalars['String']
  expires: Scalars['String']
  fcmToken?: Maybe<Scalars['String']>
  id: Scalars['ID']
  isActive: Scalars['Boolean']
  updatedAt: Scalars['DateTime']
  user?: Maybe<User>
  userId: Scalars['String']
}

export enum UserStatusEnum {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}

export type UsersType = {
  __typename?: 'UsersType'
  count?: Maybe<Scalars['Int']>
  data?: Maybe<Array<User>>
}

export type LoginMutationVariables = Exact<{
  input: LoginEmailInput
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  loginEmail?: { __typename?: 'AuthVerifyTokenType'; accessToken?: string | null } | null
}

export type RegisterEmailMutationVariables = Exact<{
  input: RegisterEmailInput
}>

export type RegisterEmailMutation = { __typename?: 'Mutation'; registerEmail?: boolean | null }

export type LogoutMutationVariables = Exact<{ [key: string]: never }>

export type LogoutMutation = { __typename?: 'Mutation'; logout?: boolean | null }

export const LoginDocument = gql`
  mutation Login($input: LoginEmailInput!) {
    loginEmail(input: $input) {
      accessToken
    }
  }
`
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options)
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>
export const RegisterEmailDocument = gql`
  mutation registerEmail($input: RegisterEmailInput!) {
    registerEmail(input: $input)
  }
`
export type RegisterEmailMutationFn = Apollo.MutationFunction<RegisterEmailMutation, RegisterEmailMutationVariables>

/**
 * __useRegisterEmailMutation__
 *
 * To run a mutation, you first call `useRegisterEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerEmailMutation, { data, loading, error }] = useRegisterEmailMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterEmailMutation(
  baseOptions?: Apollo.MutationHookOptions<RegisterEmailMutation, RegisterEmailMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useMutation<RegisterEmailMutation, RegisterEmailMutationVariables>(RegisterEmailDocument, options)
}
export type RegisterEmailMutationHookResult = ReturnType<typeof useRegisterEmailMutation>
export type RegisterEmailMutationResult = Apollo.MutationResult<RegisterEmailMutation>
export type RegisterEmailMutationOptions = Apollo.BaseMutationOptions<
  RegisterEmailMutation,
  RegisterEmailMutationVariables
>
export const LogoutDocument = gql`
  mutation logout {
    logout
  }
`
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options)
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[]
  }
}
const result: PossibleTypesResultData = {
  possibleTypes: {}
}
export default result
