import { IconButton } from '@mui/material'
import React from 'react'
import Icon from 'src/@core/components/icon'
import Link from 'next/link'
import { initializeApp } from 'firebase/app'
import { getAuth, FacebookAuthProvider, User, signInWithPopup } from 'firebase/auth'
import { firebaseConfig } from 'src/utils/firebase/config'
import { useApolloClient } from '@apollo/client'
import { useAuthWebMutation } from 'src/generated'

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const LoginFacebook = () => {
  const apolloClient = useApolloClient()

  const [onAuthWeb] = useAuthWebMutation({
    fetchPolicy: 'no-cache',
    onCompleted: async ({ authWeb }) => {
      if (authWeb?.accessToken) {
        // showSuccess("Амжилттай")
        // setCookieToken(authWeb)
        await apolloClient.cache.reset()
        window.location.reload()
      } else {
        // showError("Дахин оролдоно уу?")
      }
    },
    onError: (error: unknown) => {
      console.log('LoginFacebook === useAuthWebMutation === error', error)

      // showError("Дахин оролдоно уу")
    }
  })

  const onSuccess = async (res: User, token: string) => {
    const provider = res?.providerData?.[0]
    onAuthWeb({
      variables: {
        input: {
          accessToken: token as string,
          userUid: res.uid,
          providerId: provider.uid,
          providerName: provider.providerId
        }
      }
    })
  }
  const responseFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider()
      provider.addScope('user_birthday')
      const result = await signInWithPopup(auth, provider)
      const token = await result.user.getIdToken()
      onSuccess(result.user, token)
    } catch (error) {
      console.log('LoginFacebook === responseFacebook === error', error)
    }
  }

  return (
    <div>
      <IconButton href='/' component={Link} sx={{ color: '#db4437' }} onClick={responseFacebook}>
        <Icon icon='mdi:facebook' />
      </IconButton>
    </div>
  )
}

export default LoginFacebook
