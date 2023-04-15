import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { config } from 'src/utils/constants'

export function createWsLink() {
  if (process.browser) {
    return new GraphQLWsLink(
      createClient({
        url: config.BACKEND_WS_URL
      })
    )
  }
  return null
}
