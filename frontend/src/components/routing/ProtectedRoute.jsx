import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Box, CircularProgress } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect({ appState: { returnTo: location.pathname } })
      navigate('/auth/login', { replace: true })
    }
  }, [
    isAuthenticated,
    isLoading,
    location.pathname,
    loginWithRedirect,
    navigate,
  ])

  if (isLoading || !isAuthenticated) {
    return (
      <Box sx={{ display: 'grid', placeItems: 'center', minHeight: '50vh' }}>
        <CircularProgress color='primary' />
      </Box>
    )
  }

  return children
}

export default ProtectedRoute
