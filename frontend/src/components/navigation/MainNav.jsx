import { useState, useEffect } from 'react'
import { Link as RouterLink, NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import GradientBorderButton from '../common/GradientBorderButton'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  ButtonBase,
  Container,
  Divider,
  Drawer,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Membership', to: '/membership' },
  { label: 'Contact', to: '/contact' },
]

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

function Logo({ disabled = false }) {
  return (
    <Box
      component={disabled ? 'div' : RouterLink}
      to={disabled ? undefined : '/'}
      sx={
        disabled
          ? {
              width: 64,
              height: 64,
              border: '2px solid',
              borderColor: 'primary.main',
              borderRadius: '50%',
              display: 'grid',
              placeItems: 'center',
              flexShrink: 0,
              opacity: 0.6,
            }
          : {
              width: 64,
              height: 64,
              border: '2px solid',
              borderColor: 'primary.main',
              borderRadius: '50%',
              display: 'grid',
              placeItems: 'center',
              textDecoration: 'none',
              flexShrink: 0,
            }
      }
    >
      <Typography
        variant='caption'
        sx={{ color: 'primary.main', letterSpacing: 1.8 }}
      >
        NATA
      </Typography>
    </Box>
  )
}

function getInitials(user) {
  if (!user) return '?'
  const name = user.name || user.email || ''
  const parts = name.trim().split(' ')
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase()
  return name.slice(0, 2).toUpperCase()
}

function UserAvatar({ user, onClick }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        background: 'linear-gradient(160deg, #302b21, #78755f)',
        p: '1px',
        borderRadius: '50%',
        cursor: 'pointer',
        transition: 'background 0.25s ease',
        '&:hover': { background: 'linear-gradient(160deg, #78755f, #d4af37)' },
      }}
    >
      <Avatar
        src={user?.picture || undefined}
        alt={user?.name || ''}
        sx={{
          width: 38,
          height: 38,
          bgcolor: '#0a0a0a',
          color: '#d4af37',
          fontSize: '0.75rem',
          fontWeight: 700,
          fontFamily: '"Montserrat", sans-serif',
          letterSpacing: 1,
        }}
      >
        {!user?.picture && getInitials(user)}
      </Avatar>
    </Box>
  )
}

function MainNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuAnchor, setMenuAnchor] = useState(null)
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleMenuOpen = (e) => setMenuAnchor(e.currentTarget)
  const handleMenuClose = () => setMenuAnchor(null)

  const handleLogout = () => {
    handleMenuClose()
    setOpen(false)
    logout({ logoutParams: { returnTo: window.location.origin } })
  }

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
        <Toolbar
          disableGutters
          sx={{ minHeight: { xs: 72, md: 100 }, py: { xs: 1, md: 2 } }}
        >
          {/* ── Mobile: hamburger left ── */}
          <Box
            sx={{
              width: 40,
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
            }}
          >
            <IconButton
              sx={{ color: 'text.primary', p: 0.5 }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* ── Desktop: left nav links ── */}
          <Stack
            direction='row'
            alignItems='center'
            sx={{ flex: 1, display: { xs: 'none', md: 'flex' } }}
          >
            {!isAuthenticated &&
              navItems.map((item) => (
                <NavItem key={item.to} label={item.label} to={item.to} />
              ))}
          </Stack>

          {/* ── Center: logo (truly centered on all sizes) ── */}
          <Box
            sx={{
              flex: { xs: 1, md: '0 0 auto' },
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Logo disabled={isAuthenticated} />
          </Box>

          {/* ── Desktop: right actions ── */}
          <Stack
            direction='row'
            spacing={0}
            justifyContent='flex-end'
            alignItems='center'
            sx={{ flex: 1, display: { xs: 'none', md: 'flex' } }}
          >
            {!isAuthenticated ? (
              <>
                <Box
                  component='button'
                  onClick={() =>
                    loginWithRedirect({
                      authorizationParams: { screen_hint: 'signup' },
                    })
                  }
                  sx={{
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
                <Box
                  onClick={() => loginWithRedirect()}
                  sx={{
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
              <UserAvatar user={user} onClick={handleMenuOpen} />
            )}
          </Stack>

          {/* ── Avatar dropdown menu ── */}
          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={handleMenuClose}
            autoFocus={false}
            disableAutoFocusItem
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            PaperProps={{
              sx: {
                mt: 1,
                bgcolor: '#0a0a0a',
                border: '1px solid rgba(212,175,55,0.2)',
                borderRadius: 0,
                minWidth: 180,
                boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
                '& .MuiMenuItem-root': {
                  fontSize: '0.65rem',
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 600,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.7)',
                  py: 1,
                  px: 2,
                  transition: 'color 0.2s',
                  '&:hover': { color: '#d4af37', bgcolor: 'transparent' },
                },
              },
            }}
          >
            <MenuItem
              component={RouterLink}
              to='/membership'
              onClick={handleMenuClose}
            >
              <ListItemIcon sx={{ color: 'inherit', minWidth: 28 }}>
                <TokenOutlinedIcon sx={{ fontSize: 16 }} />
              </ListItemIcon>
              Membership
            </MenuItem>
            <Divider sx={{ borderColor: 'rgba(212,175,55,0.15)', mx: 1 }} />
            <MenuItem onClick={handleLogout}>
              <ListItemIcon sx={{ color: 'inherit', minWidth: 28 }}>
                <LogoutOutlinedIcon sx={{ fontSize: 16 }} />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>

          {/* ── Mobile: right spacer to balance hamburger ── */}
          <Box sx={{ width: 40, display: { xs: 'flex', md: 'none' } }} />
        </Toolbar>
      </Container>

      {/* ── Mobile Drawer ── */}
      <Drawer
        anchor='left'
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: '#0a0a0a',
            borderRight: '1px solid rgba(212,175,55,0.15)',
          },
        }}
      >
        <Stack sx={{ height: '100%', p: 3 }} spacing={0}>
          {/* Drawer header */}
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ mb: 4 }}
          >
            <Logo disabled={isAuthenticated} />
            <IconButton
              onClick={() => setOpen(false)}
              sx={{ color: 'rgba(255,255,255,0.5)' }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>

          <Divider sx={{ borderColor: 'rgba(212,175,55,0.15)', mb: 3 }} />

          {/* Nav links */}
          <Stack spacing={1} sx={{ flex: 1 }}>
            {!isAuthenticated &&
              navItems.map((item) => (
                <NavItem
                  key={item.to}
                  label={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                />
              ))}
          </Stack>

          <Divider sx={{ borderColor: 'rgba(212,175,55,0.15)', my: 3 }} />

          {/* Auth buttons */}
          {!isAuthenticated ? (
            <Stack spacing={1.5}>
              <Button
                fullWidth
                variant='outlined'
                onClick={() => {
                  setOpen(false)
                  loginWithRedirect({
                    authorizationParams: { screen_hint: 'signup' },
                  })
                }}
              >
                Register
              </Button>
              <Button
                fullWidth
                variant='contained'
                onClick={() => {
                  setOpen(false)
                  loginWithRedirect()
                }}
              >
                Login
              </Button>
            </Stack>
          ) : (
            <Stack spacing={1.5}>
              <Stack
                direction='row'
                alignItems='center'
                spacing={1.5}
                sx={{ mb: 0.5 }}
              >
                <UserAvatar user={user} onClick={() => {}} />
                <Box>
                  <Typography
                    sx={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: '#f6f1df',
                      lineHeight: 1.2,
                    }}
                  >
                    {user?.name || 'Member'}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.65rem',
                      color: 'rgba(255,255,255,0.4)',
                      fontFamily: '"Montserrat", sans-serif',
                    }}
                  >
                    {user?.email || ''}
                  </Typography>
                </Box>
              </Stack>
              <Button
                fullWidth
                variant='outlined'
                component={RouterLink}
                to='/membership'
                onClick={() => setOpen(false)}
                startIcon={<TokenOutlinedIcon fontSize='small' />}
              >
                Membership
              </Button>
              <GradientBorderButton fullWidth onClick={handleLogout}>
                Logout
              </GradientBorderButton>
            </Stack>
          )}
        </Stack>
      </Drawer>
    </AppBar>
  )
}

export default MainNav
