import {
  LoginEmailInput,
  LoginPhoneInput,
  MeAuthQuery,
  RegisterEmailInput,
  RegisterPhoneInput,
  UserDevice
} from 'src/generated'

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

  // setLoading: (value: boolean) => void

  user?: UserContextType
  setUser: (value: UserContextType) => void
  roles?: RoleType
  permissions?: string[]

  logout: () => void
}
export type UserData = LoginEmailInput & LoginPhoneInput & RegisterEmailInput & RegisterPhoneInput

export type AuthModalValuesType = {
  userData: UserData | null
  setUserData: (value: LoginEmailInput | LoginPhoneInput) => void
  sessionList: UserDevice[] | null
  setSessionList: (value: any) => void
  reset: boolean | null
  setReset: (value: boolean) => void
}

export type UserContextType =
  | (MeAuthQuery['meAuth'] & {
      roles: {
        isAdmin: boolean
        isEditor: boolean
        isMember: boolean
      }
    } & { permissions: string[] })
  | null
