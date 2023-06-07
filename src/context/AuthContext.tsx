// ** React Imports
import { createContext, useState, ReactNode } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Types
import { AuthValuesType, UserContextType } from './types'

import { LOGOUT } from 'src/hooks/utils/queries'
import { useApolloClient } from '@apollo/client'
import { UserRoleEnum, useMeAuthQuery } from 'src/generated'
import { destroyCookieToken } from 'src/utils/cookies'

// ** Defaults
const defaultProvider: AuthValuesType = {
  loading: false,
  setLoading: () => Boolean,
  user: null,
  setUser: () => null,
  logout: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
  user: UserContextType | null
  setUser: (value: UserContextType) => void
}

const AuthProvider = ({ children, user, setUser }: Props) => {
  const apolloClient = useApolloClient()

  // ** States

  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)

  // ** Hooks
  const router = useRouter()

  // useEffect(() => {
  //   const initAuth = async (): Promise<void> => {
  //     const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)!
  //     // if (storedToken) {
  //     //   setLoading(true)
  //     //   await axios
  //     //     .get(authConfig.meEndpoint, {
  //     //       headers: {
  //     //         Authorization: storedToken
  //     //       }
  //     //     })
  //     //     .then(async response => {
  //     //       setLoading(false)
  //     //       setUser({ ...response.data.userData })
  //     //     })
  //     //     .catch(() => {
  //     //       localStorage.removeItem('userData')
  //     //       localStorage.removeItem('refreshToken')
  //     //       localStorage.removeItem('accessToken')
  //     //       setUser(null)
  //     //       setLoading(false)
  //     //       if (authConfig.onTokenExpiration === 'logout' && !router.pathname.includes('login')) {
  //     //         router.replace('/login')
  //     //       }
  //     //     })
  //     // } else {
  //     //   setLoading(false)
  //     // }
  //     setLoading(false)
  //   }

  //   initAuth()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  // const handleLogin = (params: LoginParams, errorCallback?: ErrCallbackType) => {
  //   axios
  //     .post(authConfig.loginEndpoint, params)
  //     .then(async response => {
  //       params.rememberMe
  //         ? window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.accessToken)
  //         : null
  //       const returnUrl = router.query.returnUrl

  //       setUser({ ...response.data.userData })
  //       params.rememberMe ? window.localStorage.setItem('userData', JSON.stringify(response.data.userData)) : null

  //       const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'

  //       router.replace(redirectURL as string)
  //     })

  //     .catch(err => {
  //       if (errorCallback) errorCallback(err)
  //     })
  // }

  // const [handleLogin] = useLoginMutation({
  //   fetchPolicy: 'no-cache',
  //   onCompleted: async ({ login }) => {
  //     login?.accessToken ? window.localStorage.setItem(authConfig.storageTokenKeyName, login?.accessToken) : null

  //     // setUser({ ...response.data.userData })
  //     // params.rememberMe ? window.localStorage.setItem('userData', JSON.stringify(response.data.userData)) : null
  //     if (login?.accessToken) {
  //       setCookieToken(login)
  //       toast.success('Амжилттай.', {
  //         duration: 2000
  //       })
  //       await apolloClient.cache.reset()
  //       window.location.reload()
  //     } else if (login && !login?.isEmailConfirmed) {
  //       // Modal.confirm({
  //       //   title: 'Анхаарууллага',
  //       //   content: `Таны ${_values.email} Имейл хаяг баталгаажаагүй байна.`,
  //       //   okText: 'Баталгаажуулах',
  //       //   onOk: () => {
  //       //     onResendCode({ email: _values.email })
  //       //     onOkSendCode()
  //       //     setVisibleAuthModal(AuthModalType.ConfirmCode)
  //       //   },
  //       //   cancelText: 'Буцах'
  //       // })
  //     }

  //     const returnUrl = router.query.returnUrl
  //     console.log('AuthContext === returnUrl', returnUrl)
  //     const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
  //     router.replace(redirectURL as string)
  //   },
  //   onError: (error: unknown) => {
  //     console.log('error', error)

  //     // showError(error)
  //   }
  // })

  useMeAuthQuery({
    onCompleted: data => {
      if (data?.meAuth?.id) {
        const user = data?.meAuth
        const isAdmin = user.role === UserRoleEnum.ADMIN
        const isEditor = user.role === UserRoleEnum.EDITOR
        const isMember = user.role === UserRoleEnum.MEMBER

        const _roles = { isAdmin, isEditor, isMember }

        const _user: UserContextType = {
          ...user,
          roles: _roles,
          permissions: ['Web']
        }
        setUser(_user)
      }
    }
  })

  const handleLogout = async () => {
    await apolloClient.mutate({ mutation: LOGOUT })
    destroyCookieToken(undefined)
    await apolloClient.cache.reset()
    router.push('/')
  }

  const values = {
    loading,
    setLoading,
    user,
    setUser,
    logout: handleLogout
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
