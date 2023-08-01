// ** React Imports
import { ReactNode, ReactElement } from "react"

// ** Hooks Import
import { useAuth } from "src/hooks/useAuth"

interface GuestGuardProps {
  children: ReactNode
  fallback: ReactElement | null
}

const GuestGuard = (props: GuestGuardProps) => {
  // console.log('GuestGuard START')
  const { children, fallback } = props
  const auth = useAuth()

  if (auth.loading) {
    return fallback
  }

  return <>{children}</>
}

export default GuestGuard

// const router = useRouter()

// useEffect(() => {
//   if (!router.isReady) {
//     return
//   }

//   if (auth.user) {
//     router.replace('/')
//   }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [router.route])
