import { onError } from "@apollo/client/link/error"

export const errorLink = onError(
  ({ networkError, graphQLErrors, operation, forward }) => {
    console.log(networkError, graphQLErrors, operation, forward)
    if (graphQLErrors) {
      graphQLErrors.forEach((error) => {
        console.log("key", error.message)
      })
      // for (const error of graphQLErrors) {
      //   const { key } = error
      //   switch (key) {
      //     case "CSRF_TOKEN_MISSING":
      //       Modal.info({
      //         title: "",
      //         content: "リロードして、再度試してください。",
      //         okText: "はい",
      //         onOk: () => window.location.reload(),
      //       })
      //       return
      //     case "NO_ACCESS_TOKEN":
      //       destroyCookie(ctx, config.ACCESS_TOKEN_KEY, {
      //         domain: config.COOKIE_DOMAIN,
      //         path: "/",
      //       })
      //       destroyCookie(ctx, config.REFRESH_TOKEN_KEY, {
      //         domain: config.COOKIE_DOMAIN,
      //         path: "/",
      //       })
      //       return forward(operation)
      //     case "INVALID_ACCESS_TOKEN":
      //       destroyCookie(ctx, config.ACCESS_TOKEN_KEY, {
      //         domain: config.COOKIE_DOMAIN,
      //         path: "/",
      //       })
      //       destroyCookie(ctx, config.REFRESH_TOKEN_KEY, {
      //         domain: config.COOKIE_DOMAIN,
      //         path: "/",
      //       })
      //       return forward(operation)
      //     case "ACCESS_TOKEN_EXPIRED":
      //       return new Observable((obs) => {
      //         getNewAccessToken(apolloClient, parsedCookies)
      //           .then((tokens = {}) => {
      //             // Add new cookies to the operation context
      //             operation.setContext(({ store, ...rest }) => ({
      //               ...rest,
      //               store,
      //               tempHeaders: tokens,
      //             }))
      //             // Set new cookies
      //             if (ctx) {
      //               setCookie(
      //                 ctx,
      //                 config.ACCESS_TOKEN_KEY,
      //                 tokens.newAccessToken,
      //                 {
      //                   path: "/",
      //                   maxAge: 60 * 60 * 60,
      //                   domain: config.COOKIE_DOMAIN,
      //                   httpOnly: true,
      //                   secure: false,
      //                 },
      //               )
      //               setCookie(
      //                 ctx,
      //                 config.REFRESH_TOKEN_KEY,
      //                 tokens.newRefreshToken,
      //                 {
      //                   path: "/",
      //                   maxAge: 60 * 60 * 60,
      //                   domain: config.COOKIE_DOMAIN,
      //                   httpOnly: true,
      //                   secure: false,
      //                 },
      //               )
      //             }
      //             // Retry the request
      //             forward(operation).subscribe(obs)
      //           })
      //           .catch((error) => {
      //             return forward(operation).subscribe(obs)
      //           })
      //       })
      //     case "REFRESH_TOKEN_EXPIRED":
      //       // Logout
      //       logout(ctx, apolloClient)
      //       return forward(operation)
      //     case "INVALID_REFRESH_TOKEN":
      //       // Logout
      //       logout(ctx, apolloClient)
      //       return forward(operation)
      //     default:
      //       return
      //   }
      // }
    }

    if (networkError) {
      if (networkError?.message.includes("Timeout")) {
        console.warn(networkError)
        return
      }
      console.log("networkError: ", JSON.stringify(networkError, null, 2))
    }
    return
  },
)
