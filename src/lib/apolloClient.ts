import { ApolloClient, ApolloLink } from '@apollo/client'
import { errorLink } from './apollo/errorLink'
import { splitLink } from './apollo/splitLink'
import { localCache } from './apollo/localCache'

import { createAuthLink } from './apollo/authLink'

export function createApolloClient(initialState: any | undefined) {
  const link = splitLink()
  const authLink = createAuthLink()

  const apolloClient = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: ApolloLink.from([errorLink, authLink, link]),
    cache: localCache.restore(initialState || {})
  })

  return apolloClient
}
