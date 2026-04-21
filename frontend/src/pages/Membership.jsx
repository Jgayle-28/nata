import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Alert,
  Box,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { FiFeather } from 'react-icons/fi'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import { SlDiamond } from 'react-icons/sl'
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined'
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined'
import { Link as RouterLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { createCheckoutSession } from '../services/paymentService'
import CornerCard from '../components/common/CornerCard'
import GradientBorderButton from '../components/common/GradientBorderButton'
import SEO from '../components/common/SEO'

const plans = [
  {
    id: 'association-monthly',
    name: 'Association Membership',
    price: '$29 / month',
    summary: 'Essential member coverage and artist perks.',
    Icon: FiFeather,
  },
  {
    id: 'association-6mo',
    name: '6-Month Membership',
    price: '$149 one-time',
    summary: 'Medium-term commitment with savings.',
    Icon: CalendarMonthOutlinedIcon,
  },
  {
    id: 'association-yearly',
    name: 'Yearly Membership',
    price: '$279 one-time',
    summary: 'Best value for serious professionals.',
    Icon: SlDiamond,
  },
]

const benefitCards = [
  {
    Icon: HealthAndSafetyOutlinedIcon,
    title: 'Comprehensive Health Insurance',
    desc: 'Our health insurance plans provide you with access to essential medical services. We prioritize your well-being by ensuring you have the necessary coverage for all your health needs, helping you maintain a healthy lifestyle and catching potential health issues early.',
  },
  {
    Icon: ApartmentOutlinedIcon,
    title: 'Other Benefits as Larger Corporations',
    desc: 'As a valued member, you gain access to a range of exclusive perks designed to enhance your overall well-being. We are committed to supporting you beyond insurance, fostering a holistic approach to your health and success.',
  },
]

function Reveal({ children, delay = 0, height }) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      sx={height ? { height: '100%' } : {}}
    >
      {children}
    </Box>
  )
}

function Membership() {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0()
  const [status, setStatus] = useState({ loadingPlan: '', error: '' })
  const provider = (
    import.meta.env.VITE_DEFAULT_PAYMENT_PROVIDER || 'stripe'
  ).toLowerCase()

  const onCheckout = async (planId) => {
    if (!isAuthenticated) {
      loginWithRedirect({ appState: { returnTo: '/membership' } })
      return
    }
    setStatus({ loadingPlan: planId, error: '' })
    try {
      const result = await createCheckoutSession({
        provider,
        planId,
        customerEmail: user?.email,
      })
      if (result.checkoutUrl) {
        window.location.assign(result.checkoutUrl)
        return
      }
      setStatus({
        loadingPlan: '',
        error: 'Checkout URL was not returned by the server.',
      })
    } catch (error) {
      setStatus({
        loadingPlan: '',
        error: error.response?.data?.message || 'Unable to start checkout.',
      })
    }
  }

  return (
    <Box>
      <SEO
        title='Membership Benefits'
        description='Join NATA and access comprehensive health insurance, life insurance, and exclusive corporate perks designed for tattoo artists and piercers.'
        path='/membership'
      />
      {/* ── Hero ── */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: '38vh', md: '45vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.7) 100%)',
          }}
        />
        <Container
          maxWidth='md'
          sx={{
            position: 'relative',
            textAlign: 'center',
            py: { xs: 8, md: 12 },
          }}
        >
          <Reveal>
            <Typography variant='h1' sx={{ fontSize: { xs: 36, md: 52 } }}>
              <Box
                component='span'
                sx={{
                  background:
                    'linear-gradient(90deg, #c9a84c 0%, #d4af37 40%, #78755f 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Membership
              </Box>{' '}
              Benefits
            </Typography>
            <Box
              sx={{
                height: '1px',
                width: '30%',
                mx: 'auto',
                background:
                  'linear-gradient(90deg, transparent, #d4af37, transparent)',
                mt: 2,
              }}
            />
          </Reveal>
        </Container>
      </Box>

      {/* ── Exclusive Benefits ── */}
      <Container maxWidth='lg' sx={{ py: { xs: 7, md: 10 } }}>
        <Reveal>
          <Typography variant='h2' sx={{ mb: 1.5, textAlign: 'center' }}>
            Exclusive{' '}
            <Box
              component='span'
              sx={{
                background:
                  'linear-gradient(90deg, #c9a84c 0%, #d4af37 40%, #78755f 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Benefits
            </Box>{' '}
            for Tattoo Artists Nationwide
          </Typography>
          <Box
            sx={{
              height: '1px',
              width: { xs: '55%', md: '30%' },
              mx: 'auto',
              background:
                'linear-gradient(90deg, transparent, #d4af37, transparent)',
              mb: 7,
            }}
          />
        </Reveal>

        <Grid container spacing={2.5} alignItems='stretch'>
          {benefitCards.map(({ Icon, title, desc }, idx) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={title}
              sx={{ display: 'flex', flexDirection: 'column' }}
            >
              <Reveal delay={idx * 0.1} height>
                <CornerCard
                  offsetDirection={idx === 0 ? 'bottom-left' : 'top-right'}
                >
                  <Box sx={{ textAlign: 'center', pt: 1 }}>
                    <Icon sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
                    <Box
                      sx={{
                        width: 60,
                        height: '1px',
                        background:
                          'linear-gradient(90deg, transparent 0%, #78755f 30%, #d4af37 50%, #78755f 70%, transparent 100%)',
                        mx: 'auto',
                        mb: 2.5,
                      }}
                    />
                    <Typography variant='h5' sx={{ color: '#fff', mb: 1 }}>
                      {title}
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{ color: 'text.secondary', px: 1 }}
                    >
                      {desc}
                    </Typography>
                  </Box>
                </CornerCard>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ── Membership Plans ── */}
      <Box
        sx={{
          py: { xs: 6, md: 9 },
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth='lg'>
          <Reveal>
            <Typography variant='h2' sx={{ mb: 1.5 }}>
              <Box
                component='span'
                sx={{
                  background:
                    'linear-gradient(90deg, #c9a84c 0%, #d4af37 40%, #78755f 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Membership
              </Box>{' '}
              Payment Options
            </Typography>
            <Box
              sx={{
                height: '1px',
                width: { xs: '60%', md: '38%' },
                background:
                  'linear-gradient(90deg, #d4af37 0%, #78755f 55%, transparent 100%)',
                mb: 7,
              }}
            />
          </Reveal>

          {status.error && (
            <Alert severity='error' sx={{ mb: 3 }}>
              {status.error}
            </Alert>
          )}

          <Grid container spacing={2.5} alignItems='stretch'>
            {plans.map((plan, idx) => (
              <Grid
                item
                xs={12}
                md={4}
                key={plan.id}
                sx={{ display: 'flex', flexDirection: 'column' }}
              >
                <Reveal delay={idx * 0.1} height>
                  <CornerCard
                    offsetDirection={
                      idx === 0
                        ? 'bottom-left'
                        : idx === 2
                          ? 'top-right'
                          : false
                    }
                  >
                    <Box sx={{ textAlign: 'center', pt: 1 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          mb: 1,
                        }}
                      >
                        <plan.Icon
                          style={{
                            fontSize: 32,
                            width: 32,
                            height: 32,
                            color: '#d4af37',
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          width: 60,
                          height: '1px',
                          background:
                            'linear-gradient(90deg, transparent 0%, #78755f 30%, #d4af37 50%, #78755f 70%, transparent 100%)',
                          mx: 'auto',
                          mb: 2.5,
                        }}
                      />
                      <Typography variant='h5' sx={{ color: '#fff', mb: 0.8 }}>
                        {plan.name}
                      </Typography>
                      <Typography
                        variant='h6'
                        sx={{ color: 'primary.main', mb: 1.2 }}
                      >
                        {plan.price}
                      </Typography>
                      <Typography
                        variant='body2'
                        sx={{ color: 'text.secondary', px: 1 }}
                      >
                        {plan.summary}
                      </Typography>
                    </Box>
                  </CornerCard>
                </Reveal>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <GradientBorderButton onClick={() => onCheckout(plans[0].id)}>
              {status.loadingPlan ? 'Preparing Checkout...' : 'Join Now'}
            </GradientBorderButton>
          </Box>
        </Container>
      </Box>

      {/* ── Your Membership Awaits CTA ── */}
      <Box
        sx={{
          position: 'relative',
          py: { xs: 8, md: 14 },
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/cta.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.9) 100%)',
          }}
        />
        <Container maxWidth='md' sx={{ position: 'relative' }}>
          <Reveal>
            <Typography variant='h2' sx={{ mb: 1.5 }}>
              Your{' '}
              <Box
                component='span'
                sx={{
                  background:
                    'linear-gradient(90deg, #c9a84c 0%, #d4af37 40%, #78755f 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Membership
              </Box>{' '}
              Awaits
            </Typography>
            <Box
              sx={{
                height: '1px',
                width: '38%',
                mx: 'auto',
                background:
                  'linear-gradient(90deg, transparent, #d4af37, transparent)',
                mb: 3,
              }}
            />
            <Typography
              variant='body1'
              color='text.secondary'
              sx={{ maxWidth: 520, mx: 'auto', mb: 4, lineHeight: 1.8 }}
            >
              Membership with us means access to unparalleled benefits,
              including health and life insurance, for tattoo artists and
              piercers. Join Now.
            </Typography>
            <GradientBorderButton onClick={() => onCheckout(plans[0].id)}>
              Activate Your Membership
            </GradientBorderButton>
          </Reveal>
        </Container>
      </Box>

      {/* ── Mailing List ── */}
      <Box sx={{ py: { xs: 7, md: 10 } }}>
        <Container maxWidth='md'>
          <Reveal>
            <Typography variant='h3' sx={{ textAlign: 'center', mb: 1.5 }}>
              Join Our Mailing List
            </Typography>
            <Box
              sx={{
                height: '1px',
                width: '30%',
                mx: 'auto',
                background:
                  'linear-gradient(90deg, transparent, #d4af37, transparent)',
                mb: 5,
              }}
            />
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5}>
              <TextField fullWidth placeholder='Name*' size='small' />
              <TextField fullWidth placeholder='Email*' size='small' />
              <GradientBorderButton>Subscribe</GradientBorderButton>
            </Stack>
          </Reveal>
        </Container>
      </Box>
    </Box>
  )
}

export default Membership
