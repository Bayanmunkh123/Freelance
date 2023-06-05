import { IconButton } from '@mui/material'
import React, { MouseEvent } from 'react'
import Icon from 'src/@core/components/icon'
import Link from 'next/link'
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, User, signInWithPopup } from 'firebase/auth'
import { firebaseConfig } from 'src/utils/firebase/config'
import { useApolloClient } from '@apollo/client'
import { useAuthGoogleMutation } from 'src/generated'
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const LoginGoogle = () => {
  const apolloClient = useApolloClient()

  const [onAuthWeb] = useAuthGoogleMutation({
    fetchPolicy: 'no-cache',
    onCompleted: async ({ authGoogle }) => {
      if (authGoogle?.accessToken) {
        // showSuccess('Амжилттай')
        // setCookieToken(authWeb)
        await apolloClient.cache.reset()
        window.location.reload()
      } else {
        alert('ERROR')
        // showError('Дахин оролдоно уу?')
      }
    },
    onError: (error: unknown) => {
      console.log('LoginGoogle === useAuthWebMutation === error', error)
      alert('Дахин оролдоно уу')
    }
  })
  const onSuccess = async (res: User, token: string) => {
    const provider = res?.providerData?.[0]
    onAuthWeb({
      variables: {
        input: {
          accessToken: token as string
        }
      }
    })
  }
  const responseGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      provider.addScope('profile')
      provider.addScope('email')
      const result = await signInWithPopup(auth, provider)
      const token = await result.user.getIdToken()
      onSuccess(result.user, token)
    } catch (error) {
      console.log('LoginGoogle === responseGoogle === error', error)
    }
  }

  return (
    <div>
      <IconButton href='/' component={Link} sx={{ color: '#db4437' }} onClick={responseGoogle}>
        <Icon icon='mdi:google' />
      </IconButton>
    </div>
  )
}

export default LoginGoogle
