import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Box, CircularProgress } from '@mui/material'
import { useLocation } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0()
  const location = useLocation()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect({ appState: { returnTo: location.pathname } })
    }
  }, [isAuthenticated, isLoading, location.pathname, loginWithRedirect])

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
