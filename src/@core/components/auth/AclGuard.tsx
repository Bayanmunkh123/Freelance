// ** React Imports
import { ReactNode, useEffect } from "react"

// ** Next Import
import { useRouter } from "next/router"

// ** Types
import type { ACLObj, Actions, AppAbility, Subjects } from "src/config/acl"

// ** Context Imports
import { AbilityContext } from "src/layouts/components/acl/Can"

// ** Config Import
import { buildAbilityFor } from "src/config/acl"

// ** Component Import
import NotAuthorized from "src/pages/401"
import Spinner from "src/@core/components/spinner"
import BlankLayout from "src/@core/layouts/BlankLayout"

// ** Hooks
import { useAuth } from "src/hooks/useAuth"

// ** Util Import
import { AuthUserType } from "src/generated"

interface AclGuardProps {
  children: ReactNode
  authGuard?: boolean
  guestGuard?: boolean
  aclAbilities: ACLObj
}

const AclGuard = (props: AclGuardProps) => {
  // ** Props
  const { aclAbilities, children, guestGuard = true, authGuard = false } = props

  // ** Hooks
  const auth = useAuth()
  const router = useRouter()

  let ability: AppAbility
  if (auth.loading) return <Spinner />

  // User is logged in, build ability for the user based on his role
  if (auth.user && !ability) {
    ability = buildAbilityFor(
      auth.user as AuthUserType,
      aclAbilities.subject as Subjects,
    )
    if (router.route === "/" && !ability) {
      return <Spinner />
    }
  }

  // If guest guard or no guard is true or any error page
  if (
    guestGuard ||
    router.route === "/404" ||
    router.route === "/500" ||
    !authGuard
  ) {
    // If user is logged in and his ability is built
    if (auth.user && ability) {
      return (
        <AbilityContext.Provider value={ability}>
          {children}
        </AbilityContext.Provider>
      )
    } else {
      // If user is not logged in (render pages like login, register etc..)
      return <>{children}</>
    }
  }

  // Check the access of current user and render pages
  if (
    ability &&
    auth.user &&
    ability.can(
      aclAbilities.action as Actions,
      aclAbilities.subject as Subjects,
    )
  ) {
    if (router.route === "/") {
      return <Spinner />
    }

    return (
      <AbilityContext.Provider value={ability}>
        {children}
      </AbilityContext.Provider>
    )
  }

  // Render Not Authorized component if the current user has limited access
  return (
    <BlankLayout>
      <NotAuthorized />
    </BlankLayout>
  )
}

export default AclGuard
