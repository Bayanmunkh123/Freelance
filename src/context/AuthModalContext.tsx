import { createContext, ReactNode, useReducer } from 'react'
import { AuthModalValuesType } from './types'
import { LoginEmailInput, LoginPhoneInput, UserDevice } from 'src/generated'

const actions = {
  LOGIN: 'LOGIN',
  SET_SESSION_LIST: 'SET_SESSION_LIST',
  SET_RESET: 'SET_RESET'
}

const modalReducer = (state, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        userData: action.payload
      }
    case actions.SET_SESSION_LIST:
      return {
        ...state,
        sessionList: action.payload
      }
    case actions.SET_RESET:
      return {
        ...state,
        reset: action.payload
      }
    default:
      return state
  }
}

// ** Defaults
const defaultProvider: AuthModalValuesType = {
  userData: null,
  setUserData: () => null,
  sessionList: null,
  setSessionList: () => null,
  reset: false,
  setReset: () => null
}

const AuthModalContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}
const initialState = {
  userData: {},
  sessionList: [],
  reset: false
}

const AuthModalProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(modalReducer, initialState)

  const values = {
    userData: state.userData,
    setUserData: (value: LoginEmailInput | LoginPhoneInput) => {
      dispatch({ type: actions.LOGIN, payload: value })
    },
    sessionList: state?.sessionList,
    setSessionList: (value: UserDevice) => {
      dispatch({ type: actions.SET_SESSION_LIST, payload: value })
    },
    reset: state?.reset,
    setReset: (value: boolean) => {
      dispatch({ type: actions.SET_RESET, payload: value })
    }
  }

  return <AuthModalContext.Provider value={values}>{children}</AuthModalContext.Provider>
}

export { AuthModalContext, AuthModalProvider }
