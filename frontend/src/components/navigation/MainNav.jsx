import { useState, useEffect } from 'react'
import { Link as RouterLink, NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import { ButtonBase } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const leftNavItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Membership', to: '/membership' },
  { label: 'Contact', to: '/contact' },
]

const rightNavItems = []

function NavItem({ label, to, onClick }) {
  return (
    <Box
      component={NavLink}
      to={to}
      onClick={onClick}
      sx={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'rgba(255,255,255,0.7)',
        fontSize: '0.7rem',
        fontWeight: 600,
        letterSpacing: 3,
        textTransform: 'uppercase',
        px: 1.5,
        py: 0.5,
        transition: 'color 0.2s',
        '&:hover': { color: '#fff' },
        '&.active': {
          color: '#fff',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -4,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, #d4af37, transparent)',
          },
        },
      }}
    >
      {label}
    </Box>
  )
}

function MainNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AppBar
      position='sticky'
      color='transparent'
      sx={{
        bgcolor: scrolled ? 'rgba(10,10,10,0.7)' : '#000000',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: '1px solid rgba(212,175,55,0.15)',
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
      }}
    >
      <Container maxWidth='lg'>
        <Toolbar disableGutters sx={{ minHeight: 100, py: 2 }}>
          {/* Left nav */}
          <Stack
            direction='row'
            spacing={0}
            alignItems='center'
            sx={{ flex: 1, display: { xs: 'none', md: 'flex' } }}
          >
            {leftNavItems.map((item) => (
              <NavItem key={item.to} label={item.label} to={item.to} />
            ))}
          </Stack>

          <Box
            sx={{
              flex: { xs: 1, md: '0 0 auto' },
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              component={RouterLink}
              to='/'
              sx={{
                width: 64,
                height: 64,
                border: '2px solid',
                borderColor: 'primary.main',
                borderRadius: '50%',
                display: 'grid',
                placeItems: 'center',
                textDecoration: 'none',
              }}
            >
              <Typography
                variant='caption'
                sx={{ color: 'primary.main', letterSpacing: 1.8 }}
              >
                NATA
              </Typography>
            </Box>
          </Box>

          <Stack
            direction='row'
            spacing={0}
            justifyContent='flex-end'
            alignItems='center'
            sx={{ flex: 1 }}
          >
            {/* Right nav items (desktop) */}
            {rightNavItems.map((item) => (
              <NavItem
                key={item.to}
                label={item.label}
                to={item.to}
                sx={{ display: { xs: 'none', md: 'inline-flex' } }}
              />
            ))}

            <IconButton
              sx={{
                display: { xs: 'inline-flex', md: 'none' },
                color: 'text.primary',
              }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            {!isAuthenticated ? (
              <>
                {/* Register – plain text link */}
                <Box
                  component='button'
                  onClick={() =>
                    loginWithRedirect({
                      authorizationParams: { screen_hint: 'signup' },
                    })
                  }
                  sx={{
                    display: { xs: 'none', md: 'inline-flex' },
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: 3,
                    textTransform: 'uppercase',
                    px: 1.5,
                    transition: 'color 0.2s',
                    '&:hover': { color: '#fff' },
                  }}
                >
                  Register
                </Box>

                {/* Login – gradient border button */}
                <Box
                  onClick={() => loginWithRedirect()}
                  sx={{
                    display: { xs: 'none', md: 'inline-block' },
                    background: 'linear-gradient(160deg, #302b21, #78755f)',
                    p: '1px',
                    ml: 1,
                    cursor: 'pointer',
                    transition: 'background 0.25s ease',
                    '&:hover': {
                      background: 'linear-gradient(160deg, #78755f, #d4af37)',
                    },
                  }}
                >
                  <ButtonBase
                    sx={{
                      display: 'block',
                      bgcolor: '#000000',
                      px: 3,
                      py: 0.9,
                      color: '#ffffff',
                      letterSpacing: 3,
                      textTransform: 'uppercase',
                      fontSize: '0.7rem',
                      fontFamily: '"Montserrat", "Helvetica Neue", sans-serif',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Login
                  </ButtonBase>
                </Box>
              </>
            ) : (
              <>
                <Button
                  component={RouterLink}
                  to='/dashboard'
                  variant='outlined'
                  size='small'
                >
                  Dashboard
                </Button>
                <Button
                  variant='contained'
                  size='small'
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Logout
                </Button>
              </>
            )}
          </Stack>
        </Toolbar>
      </Container>

      <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
        <Stack
          sx={{ width: 260, p: 2, bgcolor: 'background.paper', height: '100%' }}
          spacing={1}
        >
          {[...leftNavItems, ...rightNavItems].map((item) => (
            <NavItem
              key={item.to}
              label={item.label}
              to={item.to}
              onClick={() => setOpen(false)}
            />
          ))}
          {!isAuthenticated ? (
            <>
              <Button
                variant='outlined'
                onClick={() =>
                  loginWithRedirect({
                    authorizationParams: { screen_hint: 'signup' },
                  })
                }
              >
                Register
              </Button>
              <Button variant='contained' onClick={() => loginWithRedirect()}>
                Login
              </Button>
            </>
          ) : (
            <>
              <Button
                component={RouterLink}
                to='/dashboard'
                variant='outlined'
                onClick={() => setOpen(false)}
              >
                Dashboard
              </Button>
              <Button
                variant='contained'
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Logout
              </Button>
            </>
          )}
        </Stack>
      </Drawer>
    </AppBar>
  )
}

export default MainNav
