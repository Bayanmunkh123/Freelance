import { onError } from '@apollo/client/link/error'

export const errorLink = onError(({ networkError, graphQLErrors, operation, forward }) => {
  console.log(networkError, graphQLErrors, operation, forward)
  if (graphQLErrors) {
    graphQLErrors.forEach(error => {
      console.log('key', error.message)
    })
  }

  if (networkError) {
    if (networkError?.message.includes('Timeout')) {
      console.warn(networkError)

      return
    }
    console.log('networkError: ', JSON.stringify(networkError, null, 2))
  }
})
