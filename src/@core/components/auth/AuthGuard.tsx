// ** React Imports
import { ReactNode, ReactElement, useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Hooks Import
import { useAuth } from 'src/hooks/useAuth'

interface AuthGuardProps {
  children: ReactNode
  fallback: ReactElement | null
}

const AuthGuard = (props: AuthGuardProps) => {
  // console.log('AuthGuard START')
  const { children, fallback } = props
  const auth = useAuth()
  const router = useRouter()

  // useEffect(
  //   () => {
  //     if (!router.isReady) {
  //       return
  //     }

  //     console.log('AuthGuard useEffect USER', auth.user)
  //     if (auth.user === null) {
  //       if (router.asPath !== '/') {
  //         router.replace({
  //           pathname: '/'

  //           // query: { returnUrl: router.asPath }
  //         })
  //       }

  //       // else {
  //       // router.replace('/')
  //       // }
  //     }
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [router.route]
  // )

  if (auth.loading || auth.user === null) {
    return fallback
  }

  return <>{children}</>
}

export default AuthGuard
