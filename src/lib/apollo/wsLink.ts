import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { config } from 'src/utils/constants'

const isBrowser = typeof window !== 'undefined'

export function createWsLink() {
  if (isBrowser) {
    return new GraphQLWsLink(
      createClient({
        url: config.BACKEND_WS_URL
      })
    )
  }

  return null
}
