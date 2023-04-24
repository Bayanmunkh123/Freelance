// ** React Imports
import { ReactNode } from 'react'

// ** Next Imports
import Head from 'next/head'
import { Router } from 'next/router'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

// ** Loader Import
import NProgress from 'nprogress'

// ** Config Imports
import { defaultACLObj } from 'src/configs/acl'
import themeConfig from 'src/configs/themeConfig'

// ** Third Party Import
import { Toaster } from 'react-hot-toast'

// ** Component Imports
import GuestLayout from 'src/layouts/GuestLayout'
import UserLayout from 'src/layouts/UserLayout'

import AclGuard from 'src/@core/components/auth/AclGuard'
import ThemeComponent from 'src/@core/theme/ThemeComponent'
import AuthGuard from 'src/@core/components/auth/AuthGuard'
import GuestGuard from 'src/@core/components/auth/GuestGuard'

// ** Spinner Import
import Spinner from 'src/@core/components/spinner'

// ** Contexts
import { AuthProvider } from 'src/context/AuthContext'
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'

// ** Styled Components
import ReactHotToast from 'src/@core/styles/libs/react-hot-toast'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

// ** Global css styles
import '../../styles/globals.css'
import { ApolloClient, ApolloLink, ApolloProvider } from '@apollo/client'
import { Context } from 'react-apollo'
import withApollo from 'next-with-apollo'

import { createApolloClient } from 'src/lib/apolloClient'
import { splitLink } from 'src/lib/apollo/splitLink'
import { createAuthLink } from 'src/lib/apollo/authLink'
import { localCache } from 'src/lib/apollo/localCache'
import { errorLink } from 'src/lib/apollo/errorLink'

import { ME_AUTH } from 'src/hooks/utils/queries'
import { AuthUserType, MeQueryResult, UserRoleEnum } from 'src/generated'

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage
  title: string | null
  user: AuthUserType | null
}
type GuardProps = {
  authGuard: boolean
  guestGuard: boolean
  children: ReactNode
}

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

const Guard = ({ children, authGuard, guestGuard }: GuardProps) => {
  console.log('Guard', authGuard, guestGuard)
  if (guestGuard) {
    return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>
  } else {
    return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>
  }
}

// ** Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
  const { Component, pageProps, title, user } = props

  // Variables
  const contentHeightFixed = Component.contentHeightFixed ?? false
  let getLayout =
    Component.getLayout ?? (page => <GuestLayout contentHeightFixed={contentHeightFixed}>{page}</GuestLayout>)

  const setConfig = Component.setConfig ?? undefined

  console.log('Component.authGuard', Component.authGuard)
  console.log('Component.guestGuard', Component.guestGuard)
  let authGuard = Component.authGuard ?? true
  let guestGuard = Component.guestGuard ?? false
  if (user) {
    authGuard = true
    guestGuard = false
    getLayout = Component.getLayout ?? (page => <UserLayout contentHeightFixed={contentHeightFixed}>{page}</UserLayout>)
  } else {
    authGuard = false
    guestGuard = false
    getLayout =
      Component.getLayout ?? (page => <GuestLayout contentHeightFixed={contentHeightFixed}>{page}</GuestLayout>)
  }

  const aclAbilities = Component.acl ?? defaultACLObj

  const apolloClient = createApolloClient(undefined)
  console.log('authGuard', authGuard)
  console.log('guestGuard', guestGuard)

  return (
    <>
      <Head>
        <title>{`${themeConfig.templateName} - Material Design React Admin Template`}</title>
        <meta
          name='description'
          content={`${themeConfig.templateName} – Material Design React Admin Dashboard Template – is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.`}
        />
        <meta name='keywords' content='Material Design, MUI, Admin Template, React Admin Template' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <title>{title || 'OnedayJOB'}</title>
      </Head>
      <ApolloProvider client={apolloClient}>
        <AuthProvider data={user}>
          <SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
            <SettingsConsumer>
              {({ settings }) => {
                return (
                  <ThemeComponent settings={settings}>
                    <Guard authGuard={authGuard} guestGuard={guestGuard}>
                      <AclGuard aclAbilities={aclAbilities} guestGuard={guestGuard} authGuard={authGuard}>
                        {getLayout(<Component {...pageProps} />)}
                      </AclGuard>
                    </Guard>
                    <ReactHotToast>
                      <Toaster position={settings.toastPosition} toastOptions={{ className: 'react-hot-toast' }} />
                    </ReactHotToast>
                  </ThemeComponent>
                )
              }}
            </SettingsConsumer>
          </SettingsProvider>
        </AuthProvider>
      </ApolloProvider>
    </>
  )
}

App.getInitialProps = async (context: Context) => {
  const { Component, ctx } = context
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  const { pathname, apolloClient } = ctx
  const title = 'BAIHGUI' // ROUTES.getTitle(pathname) || ''

  const meQuery: MeQueryResult = await apolloClient.query({
    fetchPolicy: 'no-cache',
    query: ME_AUTH
  })
  if (meQuery.data?.me) {
    const user = meQuery.data?.me
    const isAdministrator = user.role === UserRoleEnum.ADMINISTRATOR
    const isAdmin = user.role === UserRoleEnum.ADMIN
    const isUser = user.role === UserRoleEnum.USER
    const isHost = !!user?.userHost
    const _roles = { isAdministrator, isAdmin, isUser, isHost }
    const _user = { ...user, roles: _roles, permissions: ['Web'] }

    return { title, pageProps, pathname, apolloClient, user: _user }
  }

  return { title, pageProps, pathname, apolloClient, autData: undefined }
}

export default withApollo(({ initialState, headers }) => {
  const link = splitLink()
  const authLink = createAuthLink(headers)

  const apolloClient: any = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: ApolloLink.from([errorLink, authLink, link]),
    cache: localCache.restore(initialState || {})
  })

  return apolloClient
})(App)
