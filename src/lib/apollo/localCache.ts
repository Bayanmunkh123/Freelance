import { gql, InMemoryCache } from '@apollo/client'

export const localCache = new InMemoryCache()

export const LocalCacheInitQuery = gql`
  query LocalCacheInit {
    shoppingCart
  }
`

export function initialLocalCache() {
  localCache.writeQuery({
    query: LocalCacheInitQuery,
    data: {
      shoppingCart: null
    }
  })
}
