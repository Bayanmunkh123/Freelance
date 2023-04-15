import { split } from '@apollo/client/core'
import { getMainDefinition } from '@apollo/client/utilities'
import { createHttpLinkFunction } from './httpLink'
import { createWsLink } from './wsLink'

export function splitLink() {
  const httpLink = createHttpLinkFunction()
  const wsLink = createWsLink()

  const link = wsLink
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query)

          return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
        },
        wsLink,
        httpLink
      )
    : httpLink

  return link
}
