import Router, { useRouter } from 'next/router'

export const useOnSearchMultiple = () => {
  const { pathname, query } = useRouter()

  // On search we're remoing pagination

  const onSearchMultiple = object => {
    delete query.page
    delete query.size
    Router.push({
      pathname,
      query: {
        ...query,
        ...object
      }
    })
  }

  return onSearchMultiple
}
