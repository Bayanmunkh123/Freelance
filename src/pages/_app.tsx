// ** React Imports
import { ReactNode, useState } from "react"

// ** Next Imports
import Head from "next/head"
import { Router, useRouter } from "next/router"
import type { NextPage } from "next"
import type { AppProps } from "next/app"

// ** Loader Import
import NProgress from "nprogress"

// ** Config Imports
import { defaultACLObj } from "src/config/acl"
import themeConfig from "src/config/themeConfig"

// ** Third Party Import
import { Toaster } from "react-hot-toast"

// ** Component Imports
import GuestLayout from "src/layouts/GuestLayout"
import UserLayout from "src/layouts/UserLayout"

import AclGuard from "src/@core/components/auth/AclGuard"
import ThemeComponent from "src/@core/theme/ThemeComponent"
import AuthGuard from "src/@core/components/auth/AuthGuard"
import GuestGuard from "src/@core/components/auth/GuestGuard"

// ** Spinner Import
import Spinner from "src/@core/components/spinner"

// ** Contexts
import { AuthProvider } from "src/context/AuthContext"
import {
  SettingsConsumer,
  SettingsProvider,
} from "src/@core/context/settingsContext"

// ** Styled Components
import ReactHotToast from "src/@core/styles/libs/react-hot-toast"

// ** React Perfect Scrollbar Style
import "react-perfect-scrollbar/dist/css/styles.css"

// ** Global css styles
import "../../styles/globals.css"
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client"

import { UserContextType } from "src/context/types"

// import { initializeApollo } from 'src/lib/apollo/client'
import { useApollo } from "src/lib/apollo/client"

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage
  title: string | null
  apollo: ApolloClient<NormalizedCacheObject>

  // user: UserContextType | null
  // apolloClient: ApolloClient<NormalizedCacheObject>
}
type GuardProps = {
  user: UserContextType | null
  authGuard: boolean
  guestGuard: boolean
  children: ReactNode
}

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on("routeChangeStart", () => {
    NProgress.start()
  })
  Router.events.on("routeChangeError", () => {
    NProgress.done()
  })
  Router.events.on("routeChangeComplete", () => {
    NProgress.done()
  })
}
const Guard = ({ user, children, guestGuard, authGuard }: GuardProps) => {
  // console.log('AUTHGURAD', authGuard)
  // console.log('GUESTGUARD', guestGuard)
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
  const router = useRouter()

  const { Component, title, pageProps } = props
  const [user, setUser] = useState<UserContextType | null>(null)

  // Variables
  const contentHeightFixed = Component.contentHeightFixed ?? false

  let getLayout =
    Component.getLayout ??
    ((page) => (
      <GuestLayout contentHeightFixed={contentHeightFixed}>{page}</GuestLayout>
    ))

  const setConfig = Component.setConfig ?? undefined

  const authGuard = Component.authGuard ?? true
  const guestGuard = Component.guestGuard ?? true

  if (user && router.pathname.startsWith("/admin")) {
    getLayout = (page) => (
      <UserLayout contentHeightFixed={contentHeightFixed}>{page}</UserLayout>
    )
  } else {
    getLayout = (page) => (
      <GuestLayout contentHeightFixed={contentHeightFixed}>{page}</GuestLayout>
    )
  }
  const aclAbilities = Component.acl ?? defaultACLObj

  const apolloClient = useApollo(pageProps.initialState)
  return (
    <>
      <Head>
        <title>{`${themeConfig.templateName} - Material Design React Admin Template`}</title>
        <meta
          name="description"
          content={`${themeConfig.templateName} – Material Design React Admin Dashboard Template – is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.`}
        />
        <meta
          name="keywords"
          content="Material Design, MUI, Admin Template, React Admin Template"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>{title || "Freelancer"}</title>
      </Head>
      <ApolloProvider client={apolloClient}>
        <AuthProvider user={user} setUser={setUser}>
          <SettingsProvider
            {...(setConfig ? { pageSettings: setConfig() } : {})}
          >
            <SettingsConsumer>
              {({ settings }) => {
                return (
                  <ThemeComponent settings={settings}>
                    <Guard
                      user={user}
                      authGuard={authGuard}
                      guestGuard={guestGuard}
                    >
                      <AclGuard
                        aclAbilities={aclAbilities}
                        guestGuard={guestGuard}
                        authGuard={authGuard}
                      >
                        {getLayout(<Component {...pageProps} />)}
                        {/* {user && router.pathname.startsWith('/admin') ? (
                          <UserLayout contentHeightFixed={contentHeightFixed}>
                            {<Component {...pageProps} />}
                          </UserLayout>
                        ) : (
                          <GuestLayout contentHeightFixed={contentHeightFixed}>
                            {<Component {...pageProps} />}
                          </GuestLayout>
                        )} */}
                      </AclGuard>
                    </Guard>
                    <ReactHotToast>
                      <Toaster
                        position={settings.toastPosition}
                        toastOptions={{ className: "react-hot-toast" }}
                      />
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

// App.getInitialProps = async (context) => {
//   console.log(context)

// const {data,error} = useQuery(ME_AUTH)

// console.log("ME_AUTH", data)
// const { Component, ctx } = context

// const apolloClient = createApolloClient()
// ctx.apolloClient = apolloClient
// let appProps = {}
// if (typeof App.getInitialProps === 'function') {
//   appProps = await App.getInitialProps(context)
// }

// const meQuery = await apolloClient.query({
//   fetchPolicy: 'no-cache',
//   query: ME_AUTH
// })

// if (meQuery.data.meAuth) {
//   const user = meQuery?.data?.meAuth
//   const isAdmin = user.role === UserRoleEnum.ADMIN
//   const isEditor = user.role === UserRoleEnum.EDITOR
//   const isMember = user.role === UserRoleEnum.MEMBER

//   const _roles = { isAdmin, isEditor, isMember }

//   const _user: UserContextType = {
//     ...user,
//     roles: _roles,
//     permissions: ['Web']
//   }

//   return {
//     ...appProps,
//     pageProps: { ...appProps.pageProps, initialApolloState: apolloClient.cache.extract() },
//     user: '_user'
//   }
// }
// return {title: ""}
//   // return { ...appProps, pageProps: { ...appProps.pageProps, initialApolloState: apolloClient.cache.extract() } }
// }

export default App
