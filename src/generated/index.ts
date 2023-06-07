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
  deviceId?: Maybe<Scalars['String']>
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

export type ExternalWebAuthInput = {
  accessToken: Scalars['String']
  email?: InputMaybe<Scalars['String']>
  firstName?: InputMaybe<Scalars['String']>
  image?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
  providerId?: InputMaybe<Scalars['String']>
  providerName?: InputMaybe<Scalars['String']>
  userName?: InputMaybe<Scalars['String']>
  userUid?: InputMaybe<Scalars['String']>
}

export enum FileSizeEnum {
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
  THUMB = 'THUMB'
}

export type InvitationCreateInput = {
  email: Scalars['String']
  role?: InputMaybe<OrganizationUserRoleEnum>
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
  deviceId?: InputMaybe<Scalars['String']>
  email: Scalars['String']
  password: Scalars['String']
}

export type LoginPhoneInput = {
  countryCode?: InputMaybe<Scalars['String']>
  deviceId?: InputMaybe<Scalars['String']>
  password: Scalars['String']
  phone: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  accountEliminate?: Maybe<Scalars['Boolean']>
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
  authWeb?: Maybe<AuthVerifyTokenType>
  createInvitation?: Maybe<Scalars['Boolean']>
  createUser?: Maybe<User>
  loginEmail?: Maybe<AuthVerifyTokenType>
  loginPhone?: Maybe<AuthVerifyTokenType>
  logout?: Maybe<Scalars['Boolean']>
  registerEmail: RegisterVerifyTokenType
  registerPhone: RegisterVerifyTokenType
  updateUser?: Maybe<User>
}

export type MutationAccountEliminateArgs = {
  deviceId: Scalars['String']
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

export type MutationAuthWebArgs = {
  input: ExternalWebAuthInput
}

export type MutationCreateInvitationArgs = {
  input: InvitationCreateInput
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

export type MutationUpdateUserArgs = {
  input: UserUpdateInput
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

export type QueryUsersArgs = {
  input?: InputMaybe<UsersWhereInput>
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

export type RegisterVerifyTokenType = {
  __typename?: 'RegisterVerifyTokenType'
  deviceId: Scalars['String']
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
  email: Scalars['String']
  image?: InputMaybe<Scalars['String']>
  phone: Scalars['String']
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
  role?: Maybe<OrganizationUserRoleEnum>
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

export type UserUpdateInput = {
  countryCode?: InputMaybe<Scalars['String']>
  email: Scalars['String']
  id: Scalars['ID']
  image?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  phone: Scalars['String']
  status?: InputMaybe<UserStatusEnum>
  userName?: InputMaybe<Scalars['String']>
}

export type UsersType = {
  __typename?: 'UsersType'
  count?: Maybe<Scalars['Int']>
  data?: Maybe<Array<User>>
}

export type UsersWhereInput = {
  role?: InputMaybe<Scalars['String']>
}

export type MeAuthQueryVariables = Exact<{ [key: string]: never }>

export type MeAuthQuery = {
  __typename?: 'Query'
  meAuth?: {
    __typename?: 'AuthUserType'
    id: string
    role: UserRoleEnum
    email?: string | null
    countryCode?: string | null
    phone?: string | null
    userName?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    image?: string | null
    organizationUsers?: Array<{
      __typename?: 'OrganizationUser'
      id: string
      role?: OrganizationUserRoleEnum | null
    }> | null
  } | null
}

export type LogoutMutationVariables = Exact<{ [key: string]: never }>

export type LogoutMutation = { __typename?: 'Mutation'; logout?: boolean | null }

export type UsersQueryVariables = Exact<{
  input?: InputMaybe<UsersWhereInput>
}>

export type UsersQuery = {
  __typename?: 'Query'
  users?: {
    __typename?: 'UsersType'
    count?: number | null
    data?: Array<{
      __typename?: 'User'
      id: string
      userId?: string | null
      userName?: string | null
      role?: UserRoleEnum | null
      email?: string | null
    }> | null
  } | null
}

export type AuthGoogleMutationVariables = Exact<{
  input: ExternalAuthInput
}>

export type AuthGoogleMutation = {
  __typename?: 'Mutation'
  authGoogle?: { __typename?: 'AuthVerifyTokenType'; accessToken?: string | null } | null
}

export type AuthWebMutationVariables = Exact<{
  input: ExternalWebAuthInput
}>

export type AuthWebMutation = {
  __typename?: 'Mutation'
  authWeb?: { __typename?: 'AuthVerifyTokenType'; accessToken?: string | null; refreshToken?: string | null } | null
}

export type LoginEmailMutationVariables = Exact<{
  input: LoginEmailInput
}>

export type LoginEmailMutation = {
  __typename?: 'Mutation'
  loginEmail?: {
    __typename?: 'AuthVerifyTokenType'
    accessToken?: string | null
    refreshToken?: string | null
    deviceId?: string | null
  } | null
}

export type LoginPhoneMutationVariables = Exact<{
  input: LoginPhoneInput
}>

export type LoginPhoneMutation = {
  __typename?: 'Mutation'
  loginPhone?: {
    __typename?: 'AuthVerifyTokenType'
    accessToken?: string | null
    refreshToken?: string | null
    deviceId?: string | null
  } | null
}

export type RegisterEmailMutationVariables = Exact<{
  input: RegisterEmailInput
}>

export type RegisterEmailMutation = {
  __typename?: 'Mutation'
  registerEmail: { __typename?: 'RegisterVerifyTokenType'; deviceId: string }
}

export type RegisterPhoneMutationVariables = Exact<{
  input: RegisterPhoneInput
}>

export type RegisterPhoneMutation = {
  __typename?: 'Mutation'
  registerPhone: { __typename?: 'RegisterVerifyTokenType'; deviceId: string }
}

export type AuthEmailForgetPasswordMutationVariables = Exact<{
  input: AuthEmailVerifyTokenSenderInput
}>

export type AuthEmailForgetPasswordMutation = { __typename?: 'Mutation'; authEmailForgetPassword?: boolean | null }

export type AuthEmailVerifyTokenSenderMutationVariables = Exact<{
  input: AuthEmailVerifyTokenSenderInput
}>

export type AuthEmailVerifyTokenSenderMutation = {
  __typename?: 'Mutation'
  authEmailVerifyTokenSender?: boolean | null
}

export type AuthEmailResetPasswordMutationVariables = Exact<{
  input: AuthEmailResetPasswordInput
}>

export type AuthEmailResetPasswordMutation = {
  __typename?: 'Mutation'
  authEmailResetPassword?: {
    __typename?: 'AuthVerifyTokenType'
    accessToken?: string | null
    refreshToken?: string | null
  } | null
}

export const MeAuthDocument = gql`
  query meAuth {
    meAuth {
      id
      role
      email
      countryCode
      phone
      userName
      createdAt
      updatedAt
      organizationUsers {
        id
        role
      }
      image
    }
  }
`

/**
 * __useMeAuthQuery__
 *
 * To run a query within a React component, call `useMeAuthQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeAuthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeAuthQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeAuthQuery(baseOptions?: Apollo.QueryHookOptions<MeAuthQuery, MeAuthQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<MeAuthQuery, MeAuthQueryVariables>(MeAuthDocument, options)
}
export function useMeAuthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeAuthQuery, MeAuthQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<MeAuthQuery, MeAuthQueryVariables>(MeAuthDocument, options)
}
export type MeAuthQueryHookResult = ReturnType<typeof useMeAuthQuery>
export type MeAuthLazyQueryHookResult = ReturnType<typeof useMeAuthLazyQuery>
export type MeAuthQueryResult = Apollo.QueryResult<MeAuthQuery, MeAuthQueryVariables>
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
export const UsersDocument = gql`
  query Users($input: UsersWhereInput) {
    users(input: $input) {
      data {
        id
        userId
        userName
        role
        email
      }
      count
    }
  }
`

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options)
}
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options)
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>
export const AuthGoogleDocument = gql`
  mutation authGoogle($input: ExternalAuthInput!) {
    authGoogle(input: $input) {
      accessToken
    }
  }
`
export type AuthGoogleMutationFn = Apollo.MutationFunction<AuthGoogleMutation, AuthGoogleMutationVariables>

/**
 * __useAuthGoogleMutation__
 *
 * To run a mutation, you first call `useAuthGoogleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthGoogleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authGoogleMutation, { data, loading, error }] = useAuthGoogleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthGoogleMutation(
  baseOptions?: Apollo.MutationHookOptions<AuthGoogleMutation, AuthGoogleMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useMutation<AuthGoogleMutation, AuthGoogleMutationVariables>(AuthGoogleDocument, options)
}
export type AuthGoogleMutationHookResult = ReturnType<typeof useAuthGoogleMutation>
export type AuthGoogleMutationResult = Apollo.MutationResult<AuthGoogleMutation>
export type AuthGoogleMutationOptions = Apollo.BaseMutationOptions<AuthGoogleMutation, AuthGoogleMutationVariables>
export const AuthWebDocument = gql`
  mutation authWeb($input: ExternalWebAuthInput!) {
    authWeb(input: $input) {
      accessToken
      refreshToken
    }
  }
`
export type AuthWebMutationFn = Apollo.MutationFunction<AuthWebMutation, AuthWebMutationVariables>

/**
 * __useAuthWebMutation__
 *
 * To run a mutation, you first call `useAuthWebMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthWebMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authWebMutation, { data, loading, error }] = useAuthWebMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthWebMutation(
  baseOptions?: Apollo.MutationHookOptions<AuthWebMutation, AuthWebMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useMutation<AuthWebMutation, AuthWebMutationVariables>(AuthWebDocument, options)
}
export type AuthWebMutationHookResult = ReturnType<typeof useAuthWebMutation>
export type AuthWebMutationResult = Apollo.MutationResult<AuthWebMutation>
export type AuthWebMutationOptions = Apollo.BaseMutationOptions<AuthWebMutation, AuthWebMutationVariables>
export const LoginEmailDocument = gql`
  mutation loginEmail($input: LoginEmailInput!) {
    loginEmail(input: $input) {
      accessToken
      refreshToken
      deviceId
    }
  }
`
export type LoginEmailMutationFn = Apollo.MutationFunction<LoginEmailMutation, LoginEmailMutationVariables>

/**
 * __useLoginEmailMutation__
 *
 * To run a mutation, you first call `useLoginEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginEmailMutation, { data, loading, error }] = useLoginEmailMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginEmailMutation(
  baseOptions?: Apollo.MutationHookOptions<LoginEmailMutation, LoginEmailMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useMutation<LoginEmailMutation, LoginEmailMutationVariables>(LoginEmailDocument, options)
}
export type LoginEmailMutationHookResult = ReturnType<typeof useLoginEmailMutation>
export type LoginEmailMutationResult = Apollo.MutationResult<LoginEmailMutation>
export type LoginEmailMutationOptions = Apollo.BaseMutationOptions<LoginEmailMutation, LoginEmailMutationVariables>
export const LoginPhoneDocument = gql`
  mutation loginPhone($input: LoginPhoneInput!) {
    loginPhone(input: $input) {
      accessToken
      refreshToken
      deviceId
    }
  }
`
export type LoginPhoneMutationFn = Apollo.MutationFunction<LoginPhoneMutation, LoginPhoneMutationVariables>

/**
 * __useLoginPhoneMutation__
 *
 * To run a mutation, you first call `useLoginPhoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginPhoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginPhoneMutation, { data, loading, error }] = useLoginPhoneMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginPhoneMutation(
  baseOptions?: Apollo.MutationHookOptions<LoginPhoneMutation, LoginPhoneMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useMutation<LoginPhoneMutation, LoginPhoneMutationVariables>(LoginPhoneDocument, options)
}
export type LoginPhoneMutationHookResult = ReturnType<typeof useLoginPhoneMutation>
export type LoginPhoneMutationResult = Apollo.MutationResult<LoginPhoneMutation>
export type LoginPhoneMutationOptions = Apollo.BaseMutationOptions<LoginPhoneMutation, LoginPhoneMutationVariables>
export const RegisterEmailDocument = gql`
  mutation registerEmail($input: RegisterEmailInput!) {
    registerEmail(input: $input) {
      deviceId
    }
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
export const RegisterPhoneDocument = gql`
  mutation registerPhone($input: RegisterPhoneInput!) {
    registerPhone(input: $input) {
      deviceId
    }
  }
`
export type RegisterPhoneMutationFn = Apollo.MutationFunction<RegisterPhoneMutation, RegisterPhoneMutationVariables>

/**
 * __useRegisterPhoneMutation__
 *
 * To run a mutation, you first call `useRegisterPhoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterPhoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerPhoneMutation, { data, loading, error }] = useRegisterPhoneMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterPhoneMutation(
  baseOptions?: Apollo.MutationHookOptions<RegisterPhoneMutation, RegisterPhoneMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useMutation<RegisterPhoneMutation, RegisterPhoneMutationVariables>(RegisterPhoneDocument, options)
}
export type RegisterPhoneMutationHookResult = ReturnType<typeof useRegisterPhoneMutation>
export type RegisterPhoneMutationResult = Apollo.MutationResult<RegisterPhoneMutation>
export type RegisterPhoneMutationOptions = Apollo.BaseMutationOptions<
  RegisterPhoneMutation,
  RegisterPhoneMutationVariables
>
export const AuthEmailForgetPasswordDocument = gql`
  mutation authEmailForgetPassword($input: AuthEmailVerifyTokenSenderInput!) {
    authEmailForgetPassword(input: $input)
  }
`
export type AuthEmailForgetPasswordMutationFn = Apollo.MutationFunction<
  AuthEmailForgetPasswordMutation,
  AuthEmailForgetPasswordMutationVariables
>

/**
 * __useAuthEmailForgetPasswordMutation__
 *
 * To run a mutation, you first call `useAuthEmailForgetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthEmailForgetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authEmailForgetPasswordMutation, { data, loading, error }] = useAuthEmailForgetPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthEmailForgetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<AuthEmailForgetPasswordMutation, AuthEmailForgetPasswordMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useMutation<AuthEmailForgetPasswordMutation, AuthEmailForgetPasswordMutationVariables>(
    AuthEmailForgetPasswordDocument,
    options
  )
}
export type AuthEmailForgetPasswordMutationHookResult = ReturnType<typeof useAuthEmailForgetPasswordMutation>
export type AuthEmailForgetPasswordMutationResult = Apollo.MutationResult<AuthEmailForgetPasswordMutation>
export type AuthEmailForgetPasswordMutationOptions = Apollo.BaseMutationOptions<
  AuthEmailForgetPasswordMutation,
  AuthEmailForgetPasswordMutationVariables
>
export const AuthEmailVerifyTokenSenderDocument = gql`
  mutation authEmailVerifyTokenSender($input: AuthEmailVerifyTokenSenderInput!) {
    authEmailVerifyTokenSender(input: $input)
  }
`
export type AuthEmailVerifyTokenSenderMutationFn = Apollo.MutationFunction<
  AuthEmailVerifyTokenSenderMutation,
  AuthEmailVerifyTokenSenderMutationVariables
>

/**
 * __useAuthEmailVerifyTokenSenderMutation__
 *
 * To run a mutation, you first call `useAuthEmailVerifyTokenSenderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthEmailVerifyTokenSenderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authEmailVerifyTokenSenderMutation, { data, loading, error }] = useAuthEmailVerifyTokenSenderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthEmailVerifyTokenSenderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AuthEmailVerifyTokenSenderMutation,
    AuthEmailVerifyTokenSenderMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useMutation<AuthEmailVerifyTokenSenderMutation, AuthEmailVerifyTokenSenderMutationVariables>(
    AuthEmailVerifyTokenSenderDocument,
    options
  )
}
export type AuthEmailVerifyTokenSenderMutationHookResult = ReturnType<typeof useAuthEmailVerifyTokenSenderMutation>
export type AuthEmailVerifyTokenSenderMutationResult = Apollo.MutationResult<AuthEmailVerifyTokenSenderMutation>
export type AuthEmailVerifyTokenSenderMutationOptions = Apollo.BaseMutationOptions<
  AuthEmailVerifyTokenSenderMutation,
  AuthEmailVerifyTokenSenderMutationVariables
>
export const AuthEmailResetPasswordDocument = gql`
  mutation authEmailResetPassword($input: AuthEmailResetPasswordInput!) {
    authEmailResetPassword(input: $input) {
      accessToken
      refreshToken
    }
  }
`
export type AuthEmailResetPasswordMutationFn = Apollo.MutationFunction<
  AuthEmailResetPasswordMutation,
  AuthEmailResetPasswordMutationVariables
>

/**
 * __useAuthEmailResetPasswordMutation__
 *
 * To run a mutation, you first call `useAuthEmailResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthEmailResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authEmailResetPasswordMutation, { data, loading, error }] = useAuthEmailResetPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthEmailResetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<AuthEmailResetPasswordMutation, AuthEmailResetPasswordMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useMutation<AuthEmailResetPasswordMutation, AuthEmailResetPasswordMutationVariables>(
    AuthEmailResetPasswordDocument,
    options
  )
}
export type AuthEmailResetPasswordMutationHookResult = ReturnType<typeof useAuthEmailResetPasswordMutation>
export type AuthEmailResetPasswordMutationResult = Apollo.MutationResult<AuthEmailResetPasswordMutation>
export type AuthEmailResetPasswordMutationOptions = Apollo.BaseMutationOptions<
  AuthEmailResetPasswordMutation,
  AuthEmailResetPasswordMutationVariables
>

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[]
  }
}
const result: PossibleTypesResultData = {
  possibleTypes: {}
}
export default result
