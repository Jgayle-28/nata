import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Alert, Button, Container, Stack, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'

function AuthEntry() {
  const location = useLocation()
  const { loginWithRedirect, error } = useAuth0()
  const isSignup = location.pathname.includes('signup')

  useEffect(() => {
    loginWithRedirect({
      authorizationParams: isSignup ? { screen_hint: 'signup' } : {},
      appState: { returnTo: '/dashboard' },
    })
  }, [isSignup, loginWithRedirect])

  return (
    <Container maxWidth='sm' sx={{ py: 10, textAlign: 'center' }}>
      <Typography variant='h3'>
        Redirecting to {isSignup ? 'Register' : 'Login'}
      </Typography>
      <Typography variant='body1' color='text.secondary' sx={{ mt: 1.5 }}>
        If redirection takes too long, continue manually.
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={1.4}
        sx={{ justifyContent: 'center', mt: 2.6 }}
      >
        <Button
          variant='contained'
          onClick={() =>
            loginWithRedirect({ appState: { returnTo: '/dashboard' } })
          }
        >
          Login
        </Button>
        <Button
          variant='outlined'
          onClick={() =>
            loginWithRedirect({
              authorizationParams: { screen_hint: 'signup' },
              appState: { returnTo: '/dashboard' },
            })
          }
        >
          Register
        </Button>
      </Stack>
      {error && (
        <Alert severity='error' sx={{ mt: 2 }}>
          {error.message}
        </Alert>
      )}
    </Container>
  )
}

export default AuthEntry
