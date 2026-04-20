import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import ProtectedRoute from './components/routing/ProtectedRoute'
import About from './pages/About'
import AuthCallback from './pages/AuthCallback'
import AuthEntry from './pages/AuthEntry'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Membership from './pages/Membership'
import NotFound from './pages/NotFound'
import { clearAuthState, setAuthState } from './store/slices/authSlice'

function AuthStateSync() {
  const dispatch = useDispatch()
  const { isAuthenticated, user } = useAuth0()

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(setAuthState({ isAuthenticated, profile: user || null }))
      return
    }

    dispatch(clearAuthState())
  }, [dispatch, isAuthenticated, user])

  return null
}

function App() {
  return (
    <>
      <AuthStateSync />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/membership' element={<Membership />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/auth/login' element={<AuthEntry />} />
          <Route path='/auth/signup' element={<AuthEntry />} />
          <Route path='/auth/callback' element={<AuthCallback />} />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path='/not-found' element={<NotFound />} />
          <Route path='*' element={<Navigate to='/not-found' replace />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
