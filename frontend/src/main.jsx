import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { Provider } from 'react-redux'
import { CssBaseline, ThemeProvider } from '@mui/material'
import App from './App'
import './index.css'
import store from './store/store'
import theme from './theme/theme'

const authDomain = import.meta.env.VITE_AUTH0_DOMAIN || ''
const authClientId = import.meta.env.VITE_AUTH0_CLIENT_ID || ''
const authAudience = import.meta.env.VITE_AUTH0_AUDIENCE || ''

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Auth0Provider
            domain={authDomain}
            clientId={authClientId}
            authorizationParams={{
              redirect_uri: `${window.location.origin}/auth/callback`,
              audience: authAudience || undefined,
            }}
            cacheLocation='localstorage'
            useRefreshTokens
          >
            <App />
          </Auth0Provider>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
