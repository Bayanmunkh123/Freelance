import { setContext } from '@apollo/client/link/context'
import { config } from 'src/utils/constants'
import cookie from 'cookie'
import { IncomingHttpHeaders } from 'http'

// Create Auth link - Add Authentication headers
export function createAuthLink(serverHeaders?: IncomingHttpHeaders | undefined) {
  return setContext(async (_, { headers }) => {
    let newHeaders = headers

    // Add AccessToken header
    const accessToken = process.browser
      ? cookie.parse(document?.cookie || '')[config.ACCESS_TOKEN_KEY]
      : cookie.parse(headers?.cookie || serverHeaders?.cookie || '')[config.ACCESS_TOKEN_KEY]
    if (accessToken) {
      newHeaders = { ...newHeaders, [config.ACCESS_TOKEN_KEY]: accessToken }
    }

    // Add RefreshToken header
    const refreshToken = process.browser
      ? cookie.parse(document?.cookie || '')[config.REFRESH_TOKEN_KEY]
      : cookie.parse(headers?.cookie || serverHeaders?.cookie || '')[config.REFRESH_TOKEN_KEY]

    if (refreshToken) {
      newHeaders = {
        ...newHeaders,
        [config.REFRESH_TOKEN_KEY]: refreshToken
      }
    }
    return {
      headers: newHeaders
    }
  })
}
