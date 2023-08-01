import { ErrorResponse } from "@apollo/client/link/error"
import { ApolloClient, NormalizedCacheObject, Observable } from "@apollo/client"
import { getNewAccessToken } from "./tokenHandler"
import { destroyCookieToken } from "src/utils/cookies"

type props = { errors: ErrorResponse } & {
  client: ApolloClient<NormalizedCacheObject>
}

export const graphQLErrorLink = (props: props) => {
  const { errors, client } = props
  const { graphQLErrors, operation, forward } = errors
  if (graphQLErrors) {
    for (const error of graphQLErrors) {
      console.log("[GraphQL error]: error", error)
      if (!error.extensions.code) {
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        )
      }
      switch (error.extensions.code) {
        case "NO_ACCESS_TOKEN":
        case "ACCESS_TOKEN_EXPIRED":
          return new Observable((obs) => {
            getNewAccessToken(client).then((result) => {
              if (result) {
                forward(operation).subscribe(obs)
              } else {
                destroyCookieToken(null)
              }
            })
          })
        case "REFRESH_TOKEN_EXPIRED":
        case "INVALID_ACCESS_TOKEN":
          destroyCookieToken(null)
          forward(operation)

          return
        case "INVALID_REFRESH_TOKEN":
          destroyCookieToken(null)
          forward(operation)

          return
        default:
          graphQLErrors.map(({ message, locations, path }) => {
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            )
          })

          return
      }
    }
  }
}
