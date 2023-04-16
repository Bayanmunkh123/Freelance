import { AuthUserType } from 'src/generated'

export type ErrCallbackType = (err: { [key: string]: string }) => void

export type LoginParams = {
  email: string
  password: string
  rememberMe?: boolean
}

export interface RoleType {
  isAdministrator?: boolean
  isAdmin?: boolean
  isUser?: boolean
  isHost?: boolean
}

export type AuthValuesType = {
  loading: boolean
  setLoading: (value: boolean) => void

  user?: AuthUserType | null
  setUser: (value: AuthUserType | null) => void
  roles?: RoleType | null
  permissions?: string[]

  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void
  logout: () => void
}
