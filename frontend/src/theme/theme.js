import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#d4af37',
      light: '#f0d986',
      dark: '#a88316',
      contrastText: '#0a0a0a',
    },
    secondary: {
      main: '#101010',
      contrastText: '#f5f5f5',
    },
    background: {
      default: '#000000',
      paper: '#0a0a0a',
    },
    text: {
      primary: '#f6f1df',
      secondary: '#c8b27a',
    },
    divider: 'rgba(212, 175, 55, 0.28)',
  },
  typography: {
    fontFamily: '"Cormorant Garamond", "Lora", "Times New Roman", serif',
    h1: {
      fontWeight: 700,
      letterSpacing: 0.3,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: 0.2,
    },
    h3: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      letterSpacing: 0.9,
      fontWeight: 600,
      fontFamily: '"Montserrat", "Helvetica Neue", sans-serif',
    },
    body1: {
      fontFamily: '"Montserrat", "Helvetica Neue", sans-serif',
      lineHeight: 1.75,
    },
    body2: {
      fontFamily: '"Montserrat", "Helvetica Neue", sans-serif',
      lineHeight: 1.7,
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#000000',
          minHeight: '100vh',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderColor: '#d4af37',
          color: '#d4af37',
          '&:hover': {
            borderColor: '#f0d986',
            backgroundColor: 'rgba(212, 175, 55, 0.08)',
          },
        },
        containedPrimary: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 8px 20px rgba(212, 175, 55, 0.24)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000',
          border: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(212, 175, 55, 0.35)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(212, 175, 55, 0.65)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#d4af37',
            },
          },
        },
      },
    },
  },
})

export default theme
