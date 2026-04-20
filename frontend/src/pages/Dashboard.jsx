import { Container, Grid, Paper, Typography } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react'

const cards = [
  {
    title: 'My Membership',
    text: 'View plan status, renewal date, and account benefits.',
  },
  {
    title: 'Course Modules',
    text: 'Module routes are prepared and ready for content rollout.',
  },
  {
    title: 'Materials Library',
    text: 'Protected resources and downloadable assets coming next.',
  },
  {
    title: 'Account Snapshot',
    text: 'Profile, contact info, and membership preferences.',
  },
]

function Dashboard() {
  const { user } = useAuth0()

  return (
    <Container maxWidth='lg' sx={{ py: { xs: 6, md: 10 } }}>
      <Typography
        variant='overline'
        color='primary.main'
        sx={{ letterSpacing: 3 }}
      >
        Member Dashboard
      </Typography>
      <Typography variant='h2'>Welcome, {user?.name || 'Member'}</Typography>
      <Typography
        variant='body1'
        color='text.secondary'
        sx={{ mt: 1.5, mb: 3 }}
      >
        This area is protected. Dashboard content blocks are now in place for
        your module build phase.
      </Typography>

      <Grid container spacing={2.2}>
        {cards.map((card) => (
          <Grid item xs={12} md={6} key={card.title}>
            <Paper
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper',
              }}
            >
              <Typography variant='h5' color='primary.main'>
                {card.title}
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{ mt: 1.2 }}
              >
                {card.text}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Dashboard
