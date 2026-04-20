import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Box, CircularProgress, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function AuthCallback() {
  const { isLoading, isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading) {
      navigate(isAuthenticated ? '/dashboard' : '/', { replace: true })
    }
  }, [isAuthenticated, isLoading, navigate])

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
