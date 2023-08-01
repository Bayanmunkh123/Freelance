import { useMemo } from "react"
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  NormalizedCacheObject,
  split,
} from "@apollo/client"

// import { errorLink } from "./errorLink"
import { onError } from "@apollo/client/link/error"

import merge from "deepmerge"
import { GraphQLWsLink } from "@apollo/client/link/subscriptions"
import { createClient } from "graphql-ws"
import { getMainDefinition } from "@apollo/client/utilities"
import { config } from "src/config"
import { setContext } from "@apollo/client/link/context"
import cookie from "cookie"
import { IncomingHttpHeaders } from "http"
import { localCache } from "./localCache"
import { graphQLErrorLink } from "./graphQLErrors"

const httpLink = new HttpLink({
  uri: `${config.BACKEND_URL}/graphql`,
  credentials: "include",
})

const wsLink =
  typeof window !== "undefined"
    ? new GraphQLWsLink(
        createClient({
          url: `${config.BACKEND_WS_URL}/graphql`,
          connectionParams: async () => {
            // Add AccessToken header
            const accessToken = cookie.parse(document?.cookie || "")[
              config.ACCESS_TOKEN_KEY
            ]

            return { authentication: accessToken }
          },
        }),
      )
    : null

const splitLink =
  typeof window !== "undefined" && wsLink != null
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query)

          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          )
        },
        wsLink,
        httpLink,
      )
    : httpLink

function createAuthLink(serverHeaders?: IncomingHttpHeaders | undefined) {
  return setContext(async (_, { headers }) => {
    // Add AccessToken header
    let newHeaders = headers

    // Add AccessToken header
    const accessToken =
      typeof window !== "undefined"
        ? cookie.parse(document?.cookie || "")[config.ACCESS_TOKEN_KEY]
        : cookie.parse(headers?.cookie || serverHeaders?.cookie || "")[
            config.ACCESS_TOKEN_KEY
          ]
    if (accessToken) {
      newHeaders = { ...newHeaders, [config.ACCESS_TOKEN_KEY]: accessToken }
    }

    // Add RefreshToken header
    const refreshToken =
      typeof window !== "undefined"
        ? cookie.parse(document?.cookie || "")[config.REFRESH_TOKEN_KEY]
        : cookie.parse(headers?.cookie || serverHeaders?.cookie || "")[
            config.REFRESH_TOKEN_KEY
          ]

    if (refreshToken) {
      newHeaders = {
        ...newHeaders,
        [config.REFRESH_TOKEN_KEY]: refreshToken,
      }
    }

    return {
      headers: newHeaders,
    }
  })
}

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  const authLink = createAuthLink()

  const errorLink = onError((errors) => {
    const { graphQLErrors, networkError, operation, response } = errors

    console.log(
      `Error occured on operation: ${operation.operationName} with response of ${response}`,
    )
    if (graphQLErrors) {
      graphQLErrorLink({ errors: errors, client: apolloClient })
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      )
    }
    if (networkError) {
      console.log(`[Network error]: ${networkError}`)
    }
  })

  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: ApolloLink.from([errorLink, authLink, splitLink]),
    cache: localCache,
  })
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache)

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data)
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])

  return store
}
