import type { ACLObj } from "src/config/acl"
import type { ReactElement, ReactNode } from "react"
import type { NextComponentType } from "next/dist/shared/lib/utils"

declare module "next" {
  export declare type NextPage<P = object, IP = P> = NextComponentType<
    NextPageContext,
    IP,
    P
  > & {
    acl?: ACLObj
    authGuard?: boolean
    guestGuard?: boolean
    setConfig?: () => void
    contentHeightFixed?: boolean
    getLayout?: (page: ReactElement) => ReactNode
  }
}

declare namespace NodeJS {
  export interface Process extends NodeJS.Process {
    browser?: string
  }
}
// setConfig?: () => void
// contentHeightFixed?: boolean
