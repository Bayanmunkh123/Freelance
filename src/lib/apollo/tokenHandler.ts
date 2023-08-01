import { gql } from "@apollo/client"
import { config } from "src/config"
import { parseCookies, setCookie } from "nookies"
import { setCookieToken } from "src/utils/cookies"

const REFRESH_ACCESS_TOKEN = gql`
  mutation REFRESH_ACCESS_TOKEN($data: RefreshToAccessTokenInput!) {
    refreshAccessToken(data: $data) {
      accessToken
      refreshToken
    }
  }
`

export const getNewAccessToken = async (apolloClient: any) => {
  let result
  try {
    const cookies = parseCookies()
    if (cookies["refresh-token"]) {
      result = await apolloClient.mutate({
        mutation: REFRESH_ACCESS_TOKEN,
        variables: {
          data: {
            refreshToken: cookies["refresh-token"],
          },
        },
      })
      const newRefreshToken =
        result?.data?.refreshAccessToken?.refreshToken || ""
      const newAccessToken = result?.data?.refreshAccessToken?.accessToken || ""

      setCookieToken({
        refreshToken: newRefreshToken,
        accessToken: newAccessToken,
      })
    }

    return !!cookies["refresh-token"]
  } catch (error) {
    console.log("refreshAccessTokenError", error)
  }

  return
}
