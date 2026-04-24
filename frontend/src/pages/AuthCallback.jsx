import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Box, CircularProgress, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function AuthCallback() {
  const { isLoading, isAuthenticated, appState, error } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoading) return
    if (error) {
      navigate('/', { replace: true })
      return
    }
    if (isAuthenticated) {
      const returnTo = appState?.returnTo || '/dashboard'
      navigate(returnTo, { replace: true })
    }
    // If not authenticated and not loading, Auth0 is still processing — wait
  }, [isAuthenticated, isLoading, error, appState, navigate])

  if (error) {
    return (
      <Box sx={{ minHeight: '40vh', display: 'grid', placeItems: 'center' }}>
        <Typography color='error'>{error.message}</Typography>
      </Box>
    )
  }

  return (
    <Box sx={{ minHeight: '40vh', display: 'grid', placeItems: 'center' }}>
      <Box sx={{ textAlign: 'center' }}>
        <CircularProgress color='primary' />
        <Typography variant='body2' color='text.secondary' sx={{ mt: 2 }}>
          Completing sign in...
        </Typography>
      </Box>
    </Box>
  )
}

export default AuthCallback
