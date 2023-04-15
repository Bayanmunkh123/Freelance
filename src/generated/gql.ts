/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  mutation Login($input: LoginUserInput!) {\n    login(input: $input) {\n      accessToken\n      refreshToken\n      isEmailConfirmed\n      isPhoneConfirmed\n    }\n  }\n':
    types.LoginDocument,
  '\n  mutation register($input: RegisterUserInput!) {\n    register(input: $input)\n  }\n': types.RegisterDocument,
  '\n  mutation authWeb($input: ExternalWebAuthInput!) {\n    authWeb(input: $input) {\n      accessToken\n      refreshToken\n    }\n  }\n':
    types.AuthWebDocument,
  '\n  mutation authVerifyTokenSender($input: AuthVerifyTokenSenderInput!) {\n    authVerifyTokenSender(input: $input)\n  }\n':
    types.AuthVerifyTokenSenderDocument,
  '\n  mutation authForgetPassword($input: AuthVerifyTokenSenderInput!) {\n    authForgetPassword(input: $input)\n  }\n':
    types.AuthForgetPasswordDocument,
  '\n  mutation authVerifyToken($input: AuthVerifyTokenInput!) {\n    authVerifyToken(input: $input) {\n      accessToken\n      refreshToken\n    }\n  }\n':
    types.AuthVerifyTokenDocument,
  '\n  mutation authResetPassword($input: AuthResetPasswordInput!) {\n    authResetPassword(input: $input) {\n      accessToken\n      refreshToken\n    }\n  }\n':
    types.AuthResetPasswordDocument,
  '\n  query me {\n    me {\n      id\n      role\n      email\n      phoneNumber\n      firstName\n      lastName\n      userHost {\n        id\n      }\n      image\n    }\n  }\n':
    types.MeDocument,
  '\n  query LOGOUT {\n    logout\n  }\n': types.LogoutDocument
}

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation Login($input: LoginUserInput!) {\n    login(input: $input) {\n      accessToken\n      refreshToken\n      isEmailConfirmed\n      isPhoneConfirmed\n    }\n  }\n'
): (typeof documents)['\n  mutation Login($input: LoginUserInput!) {\n    login(input: $input) {\n      accessToken\n      refreshToken\n      isEmailConfirmed\n      isPhoneConfirmed\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation register($input: RegisterUserInput!) {\n    register(input: $input)\n  }\n'
): (typeof documents)['\n  mutation register($input: RegisterUserInput!) {\n    register(input: $input)\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation authWeb($input: ExternalWebAuthInput!) {\n    authWeb(input: $input) {\n      accessToken\n      refreshToken\n    }\n  }\n'
): (typeof documents)['\n  mutation authWeb($input: ExternalWebAuthInput!) {\n    authWeb(input: $input) {\n      accessToken\n      refreshToken\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation authVerifyTokenSender($input: AuthVerifyTokenSenderInput!) {\n    authVerifyTokenSender(input: $input)\n  }\n'
): (typeof documents)['\n  mutation authVerifyTokenSender($input: AuthVerifyTokenSenderInput!) {\n    authVerifyTokenSender(input: $input)\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation authForgetPassword($input: AuthVerifyTokenSenderInput!) {\n    authForgetPassword(input: $input)\n  }\n'
): (typeof documents)['\n  mutation authForgetPassword($input: AuthVerifyTokenSenderInput!) {\n    authForgetPassword(input: $input)\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation authVerifyToken($input: AuthVerifyTokenInput!) {\n    authVerifyToken(input: $input) {\n      accessToken\n      refreshToken\n    }\n  }\n'
): (typeof documents)['\n  mutation authVerifyToken($input: AuthVerifyTokenInput!) {\n    authVerifyToken(input: $input) {\n      accessToken\n      refreshToken\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation authResetPassword($input: AuthResetPasswordInput!) {\n    authResetPassword(input: $input) {\n      accessToken\n      refreshToken\n    }\n  }\n'
): (typeof documents)['\n  mutation authResetPassword($input: AuthResetPasswordInput!) {\n    authResetPassword(input: $input) {\n      accessToken\n      refreshToken\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query me {\n    me {\n      id\n      role\n      email\n      phoneNumber\n      firstName\n      lastName\n      userHost {\n        id\n      }\n      image\n    }\n  }\n'
): (typeof documents)['\n  query me {\n    me {\n      id\n      role\n      email\n      phoneNumber\n      firstName\n      lastName\n      userHost {\n        id\n      }\n      image\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query LOGOUT {\n    logout\n  }\n'
): (typeof documents)['\n  query LOGOUT {\n    logout\n  }\n']

export function gql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<
  infer TType,
  any
>
  ? TType
  : never
