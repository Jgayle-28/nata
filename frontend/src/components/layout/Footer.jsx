import { useAuth0 } from '@auth0/auth0-react'
import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material'

function Footer() {
  const { isAuthenticated } = useAuth0()
  return (
    <Box
      component='footer'
      sx={{ mt: 8, borderTop: '1px solid', borderColor: 'divider', py: 5 }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Typography variant='h6' color='primary.main' gutterBottom>
              National Association of Tattoo Artists
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Community made by us for us. Benefits, growth, and premium member
              access for artists.
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Stack spacing={0.7}>
              {!isAuthenticated && (
                <>
                  <Link href='/' color='inherit' underline='hover'>
                    Home
                  </Link>
                  <Link href='/about' color='inherit' underline='hover'>
                    About
                  </Link>
                  <Link href='/membership' color='inherit' underline='hover'>
                    Membership
                  </Link>
                  <Link href='/contact' color='inherit' underline='hover'>
                    Contact
                  </Link>
                </>
              )}
            </Stack>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant='body2' color='text.secondary'>
              745 W Baseline Rd, Suite 6
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Mesa, AZ 85210
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{ mt: 1.2 }}>
              (480) 799-7667
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              info@nata-membership.com
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
