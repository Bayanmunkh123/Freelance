import { FetchResult, Observable } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { GraphQLError } from "graphql";

// export const errorLink = onError(({ networkError, graphQLErrors, operation, forward }) => {
//   console.log(networkError, graphQLErrors, operation, forward)
//   if (graphQLErrors) {
//     graphQLErrors.forEach(({ message, locations, path }) =>
//       console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
//     )

//     // for (const error of graphQLErrors) {
//     //   const { key } = error
//     //   switch (key) {
//     //     case "CSRF_TOKEN_MISSING":
//     //       Modal.info({
//     //         title: "",
//     //         content: "リロードして、再度試してください。",
//     //         okText: "はい",
//     //         onOk: () => window.location.reload(),
//     //       })
//     //       return
//     //     case "NO_ACCESS_TOKEN":
//     //       destroyCookie(ctx, config.ACCESS_TOKEN_KEY, {
//     //         domain: config.COOKIE_DOMAIN,
//     //         path: "/",
//     //       })
//     //       destroyCookie(ctx, config.REFRESH_TOKEN_KEY, {
//     //         domain: config.COOKIE_DOMAIN,
//     //         path: "/",
//     //       })
//     //       return forward(operation)
//     //     case "INVALID_ACCESS_TOKEN":
//     //       destroyCookie(ctx, config.ACCESS_TOKEN_KEY, {
//     //         domain: config.COOKIE_DOMAIN,
//     //         path: "/",
//     //       })
//     //       destroyCookie(ctx, config.REFRESH_TOKEN_KEY, {
//     //         domain: config.COOKIE_DOMAIN,
//     //         path: "/",
//     //       })
//     //       return forward(operation)
//     //     case "ACCESS_TOKEN_EXPIRED":
//     //       return new Observable((obs) => {
//     //         getNewAccessToken(apolloClient, parsedCookies)
//     //           .then((tokens = {}) => {
//     //             // Add new cookies to the operation context
//     //             operation.setContext(({ store, ...rest }) => ({
//     //               ...rest,
//     //               store,
//     //               tempHeaders: tokens,
//     //             }))
//     //             // Set new cookies
//     //             if (ctx) {
//     //               setCookie(
//     //                 ctx,
//     //                 config.ACCESS_TOKEN_KEY,
//     //                 tokens.newAccessToken,
//     //                 {
//     //                   path: "/",
//     //                   maxAge: 60 * 60 * 60,
//     //                   domain: config.COOKIE_DOMAIN,
//     //                   httpOnly: true,
//     //                   secure: false,
//     //                 },
//     //               )
//     //               setCookie(
//     //                 ctx,
//     //                 config.REFRESH_TOKEN_KEY,
//     //                 tokens.newRefreshToken,
//     //                 {
//     //                   path: "/",
//     //                   maxAge: 60 * 60 * 60,
//     //                   domain: config.COOKIE_DOMAIN,
//     //                   httpOnly: true,
//     //                   secure: false,
//     //                 },
//     //               )
//     //             }
//     //             // Retry the request
//     //             forward(operation).subscribe(obs)
//     //           })
//     //           .catch((error) => {
//     //             return forward(operation).subscribe(obs)
//     //           })
//     //       })
//     //     case "REFRESH_TOKEN_EXPIRED":
//     //       // Logout
//     //       logout(ctx, apolloClient)
//     //       return forward(operation)
//     //     case "INVALID_REFRESH_TOKEN":
//     //       // Logout
//     //       logout(ctx, apolloClient)
//     //       return forward(operation)
//     //     default:
//     //       return
//     //   }
//     // }
//   }

//   if (networkError) {
//     console.log(`[Network error]: ${networkError}`)
//   }

//   return
// })

export const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code)
          switch (err.extensions.code) {
            case "UNAUTHENTICATED":
              // ignore 401 error for a refresh request
              if (operation.operationName === "refreshToken") return;

              const observable = new Observable<
                FetchResult<Record<string, any>>
              >((observer) => {
                // used an annonymous function for using an async function
                (async () => {
                  try {
                    const accessToken = await refreshToken();

                    if (!accessToken) {
                      throw new GraphQLError("Empty AccessToken");
                    }

                    // Retry the failed request
                    const subscriber = {
                      next: observer.next.bind(observer),
                      error: observer.error.bind(observer),
                      complete: observer.complete.bind(observer),
                    };

                    forward(operation).subscribe(subscriber);
                  } catch (err) {
                    observer.error(err);
                  }
                })();
              });

              return observable;
          }
        else {
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          );
        }
      }
    }

    if (networkError) console.log(`[Network error]: ${networkError}`);
  }
);

const refreshToken = async () => {
  try {
    // const refreshResolverResponse = await client.mutate<{
    //   refreshToken: AccessToken
    // }>({
    //   mutation: REFRESH_TOKEN
    // })

    const accessToken = ""; // refreshResolverResponse.data?.refreshToken.accessToken
    localStorage.setItem("accessToken", accessToken || "");

    return accessToken;
  } catch (err) {
    localStorage.clear();
    throw err;
  }
};
