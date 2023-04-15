import { createHttpLink } from '@apollo/client/link/http'
import { config } from 'src/utils/constants'

export function createHttpLinkFunction() {
  const httpLink = createHttpLink({
    uri: config.BACKEND_URL,
    credentials: 'include'
  })
  return httpLink
}
