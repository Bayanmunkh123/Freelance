import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { initializeApollo } from './client'
import {  ApolloProvider } from '@apollo/client'

export const withApollo =
  ({ ssr = true } = {}) =>
  PageComponent => {
    const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
      let client
      if (apolloClient) {
        // Happens on: getDataFromTree & next.js ssr
        client = apolloClient
      } else {
        // Happens on: next.js csr
        // client = initApolloClient(apolloState, undefined);
        client = initializeApollo(apolloState)
      }
      
      return (
          <ApolloProvider client={client}>
            <PageComponent {...pageProps} />
          </ApolloProvider>
          )
    }
    

    // Set the correct displayName in development
    if (process.env.NODE_ENV !== 'production') {
      const displayName = PageComponent.displayName || PageComponent.name || 'Component'
      WithApollo.displayName = `withApollo(${displayName})`
    }
    if (ssr || PageComponent.getInitialProps) {
      WithApollo.getInitialProps = async ctx => {
        const { AppTree } = ctx

        // Initialize ApolloClient, add it to the ctx object so
        // we can use it in `PageComponent.getInitialProp`.
        const apolloClient = (ctx.apolloClient = initializeApollo(null))

        // Run wrapped getInitialProps methods
        let pageProps = {}
        if (PageComponent.getInitialProps) {
          pageProps = await PageComponent.getInitialProps(ctx)
        }

        // Only on the server:
        if (typeof window === 'undefined') {
          // When redirecting, the response is finished.
          // No point in continuing to render
          if (ctx.res && ctx.res.finished) {
            return pageProps
          }

          // Only if ssr is enabled
          if (ssr) {
            try {
              // Run all GraphQL queries
              const { getDataFromTree } = await import('@apollo/react-ssr')
              await getDataFromTree(
                <AppTree
                  pageProps={{
                    ...pageProps,
                    apolloClient
                  }}
                />
              )
            } catch (error) {
              // Prevent Apollo Client GraphQL errors from crashing SSR.
              // Handle them in components via the data.error prop:
              // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
              console.error('Error while running `getDataFromTree`', error)
            }

            // getDataFromTree does not call componentWillUnmount
            // head side effect therefore need to be cleared manually
          }
        }

        // Extract query data from the Apollo store
        const apolloState = apolloClient.cache.extract()

        return {
          ...pageProps,
          apolloState
        }
      }
    }

    return WithApollo
  }
