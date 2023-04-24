// ** React Imports
import { createContext, useState, ReactNode } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Types
import { AuthValuesType } from './types'

import { LOGOUT } from 'src/hooks/utils/queries'
import { useApolloClient } from '@apollo/client'
import { AuthUserType } from 'src/generated'
import { destroyCookieToken } from 'src/lib/cookies'

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
  data: AuthUserType | null
}

const AuthProvider = ({ children, data }: Props) => {
  console.log('AuthContext === data', data)
  const apolloClient = useApolloClient()

  // ** States
  const [user, setUser] = useState<AuthUserType | null>(data || null)
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

  const handleLogout = async () => {
    await apolloClient.query({ query: LOGOUT })
    destroyCookieToken(undefined)
    await apolloClient.cache.reset()
    router.push('/login')
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
