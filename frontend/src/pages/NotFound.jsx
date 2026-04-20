import { Button, Container, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

function NotFound() {
  return (
    <Container maxWidth='sm' sx={{ py: 10, textAlign: 'center' }}>
      <Typography variant='h2'>Page Not Found</Typography>
      <Typography
        variant='body1'
        color='text.secondary'
        sx={{ mt: 1.4, mb: 2.6 }}
      >
        The page you requested does not exist.
      </Typography>
      <Button component={RouterLink} to='/' variant='contained'>
        Back Home
      </Button>
    </Container>
  )
}

export default NotFound
