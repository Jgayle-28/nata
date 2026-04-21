import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { FiFeather } from 'react-icons/fi'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import { SlDiamond } from 'react-icons/sl'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined'
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined'
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined'
import SEO from '../components/common/SEO'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Link as RouterLink } from 'react-router-dom'
import CornerCard from '../components/common/CornerCard'
import GradientBorderButton from '../components/common/GradientBorderButton'

const plans = [
  {
    title: 'Association Membership',
    price: '$29/mo',
    detail: 'Core coverage and member community access.',
    Icon: FiFeather,
  },
  {
    title: '6-Month Membership',
    price: '$149',
    detail: 'Save with 6 months prepaid support.',
    Icon: CalendarMonthOutlinedIcon,
  },
  {
    title: 'Yearly Membership',
    price: '$279',
    detail: 'Best-value yearly protection and perks.',
    Icon: SlDiamond,
  },
]

const testimonials = [
  {
    quote:
      'NATA completely transformed how I protect my livelihood. The coverage options are outstanding, and the ability to access member benefits helped me feel secure for the first time as a full-time artist. I love this community — they truly understand what we face.',
    name: 'Marcus Rivera',
    location: 'Los Angeles',
    avatar: null,
  },
  {
    quote:
      'I never thought I could access health insurance as an independent tattoo artist. NATA made it possible and the process was seamless. The support team actually cares — and that means everything when you are building a career from scratch.',
    name: 'Jade Calloway',
    location: 'Atlanta',
    avatar: null,
  },
  {
    quote:
      'Being part of NATA gives me confidence. The member perks, the community, and the real insurance coverage — it is everything I needed. Highly recommend to any artist who wants to be taken seriously.',
    name: 'Devon Torres',
    location: 'Chicago',
    avatar: null,
  },
]

const features = [
  {
    Icon: VerifiedUserOutlinedIcon,
    title: 'Tailored Coverage',
    desc: 'Customized insurance solutions for tattoo artists.',
  },
  {
    Icon: SupportAgentOutlinedIcon,
    title: 'Expert Support',
    desc: 'Knowledgeable team providing personalized assistance.',
  },
  {
    Icon: TaskAltOutlinedIcon,
    title: 'Proven Reliability',
    desc: 'Trusted by tattoo artists for consistent and dependable coverage.',
  },
]

const benefits = [
  {
    Icon: HealthAndSafetyOutlinedIcon,
    title: 'Comprehensive Health Insurance / Life Insurance',
    desc: 'Access essential medical services and preventive care for you and your family.',
  },
  {
    Icon: ApartmentOutlinedIcon,
    title: 'Larger Corporation Perks',
    desc: 'Enjoy a range of exclusive offerings designed for your corporate needs.',
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

function TestimonialSlider() {
  const [idx, setIdx] = useState(0)
  const t = testimonials[idx]
  const prev = () =>
    setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIdx((i) => (i + 1) % testimonials.length)

  return (
    <Box>
      {/* Quote card */}
      <Box
        sx={{
          bgcolor: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          p: { xs: 3, md: 4 },
          mb: 3,
        }}
      >
        <Typography
          variant='body2'
          sx={{ color: 'text.secondary', lineHeight: 1.9, fontStyle: 'italic' }}
        >
          "{t.quote}"
        </Typography>
      </Box>

      {/* Author row + nav */}
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Stack direction='row' spacing={2} alignItems='center'>
          {/* Avatar placeholder */}
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #302b21, #78755f)',
              display: 'grid',
              placeItems: 'center',
              flexShrink: 0,
            }}
          >
            <Typography
              sx={{ color: 'primary.main', fontWeight: 700, fontSize: '1rem' }}
            >
              {t.name.charAt(0)}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant='subtitle2'
              sx={{ color: '#fff', fontWeight: 600 }}
            >
              {t.name}
            </Typography>
            <Typography
              variant='caption'
              sx={{
                color: 'text.secondary',
                letterSpacing: 2,
                textTransform: 'uppercase',
              }}
            >
              {t.location}
            </Typography>
          </Box>
        </Stack>

        {/* Prev / Next */}
        <Stack direction='row' spacing={1}>
          <Box
            onClick={prev}
            sx={{
              background: 'linear-gradient(160deg, #302b21, #78755f)',
              p: '1px',
              cursor: 'pointer',
              '&:hover': {
                background: 'linear-gradient(160deg, #78755f, #d4af37)',
              },
            }}
          >
            <Box
              sx={{
                bgcolor: '#000',
                display: 'grid',
                placeItems: 'center',
                width: 36,
                height: 36,
              }}
            >
              <ChevronLeftIcon sx={{ color: '#fff', fontSize: 20 }} />
            </Box>
          </Box>
          <Box
            onClick={next}
            sx={{
              background: 'linear-gradient(160deg, #302b21, #78755f)',
              p: '1px',
              cursor: 'pointer',
              '&:hover': {
                background: 'linear-gradient(160deg, #78755f, #d4af37)',
              },
            }}
          >
            <Box
              sx={{
                bgcolor: '#000',
                display: 'grid',
                placeItems: 'center',
                width: 36,
                height: 36,
              }}
            >
              <ChevronRightIcon sx={{ color: '#fff', fontSize: 20 }} />
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}

function Home() {
  return (
    <Box>
      <SEO
        title='Home'
        description='NATA provides tattoo artists and piercers with health insurance, life insurance, and exclusive membership benefits. Join the national association today.'
        path='/'
      />
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: '80vh', md: '90vh' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background photo – right half */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
            filter: 'grayscale(100%)',
          }}
        />

        {/* Dark gradient wash – covers left two-thirds, fades out to the right */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: {
              xs: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 100%)',
              md: 'linear-gradient(to right, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.82) 42%, rgba(0,0,0,0.35) 68%, transparent 100%)',
            },
          }}
        />

        {/* Content */}
        <Container
          maxWidth='lg'
          sx={{ position: 'relative', py: { xs: 10, md: 14 } }}
        >
          <Box sx={{ maxWidth: { xs: '100%', md: '52%' } }}>
            <Reveal>
              <Typography
                variant='overline'
                sx={{
                  letterSpacing: 6,
                  fontSize: '1.68rem',
                  color: 'rgba(255,255,255,0.45)',
                  display: 'block',
                  mb: 2,
                  textTransform: 'uppercase',
                }}
              >
                Welcome to{' '}
                <Box component='span' sx={{ color: 'rgba(255,255,255,0.85)' }}>
                  NATA
                </Box>
              </Typography>

              <Typography
                variant='h1'
                sx={{
                  fontSize: { xs: 38, sm: 52, md: 64 },
                  lineHeight: 1.12,
                  mb: 2.5,
                }}
              >
                Community Made <br />
                <Box component='span' sx={{ color: '#ffffff' }}>
                  By Us
                </Box>{' '}
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
                  for Us.
                </Box>
              </Typography>

              <Box
                sx={{
                  height: '1px',
                  width: { xs: '60%', md: '38%' },
                  background:
                    'linear-gradient(90deg, #d4af37 0%, #78755f 55%, transparent 100%)',
                  mb: 3,
                }}
              />

              <Typography
                variant='body1'
                sx={{ maxWidth: 520, mb: 4, lineHeight: 1.8 }}
              >
                Bring back the feel of belonging and creating with peers.
                Protection, growth, and premium member access — built for
                working tattoo artists.
              </Typography>

              <GradientBorderButton component={RouterLink} to='/membership'>
                Join Now
              </GradientBorderButton>
            </Reveal>
          </Box>
        </Container>
      </Box>

      {/* Benefits Section ──----------------------------------- */}
      <Box
        sx={{
          py: { xs: 6, md: 9 },
          my: { xs: 4, md: 8 },
        }}
      >
        <Container maxWidth='lg'>
          <Reveal>
            <Typography variant='h2' sx={{ mb: 1.5, fontWeight: 100 }}>
              What Benefits{' '}
              <Box
                component='span'
                sx={{
                  background:
                    'linear-gradient(90deg, #c9a84c 0%, #d4af37 35%, #a07c20 65%, #78755f 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Will You Enjoy
              </Box>
            </Typography>
            <Box
              sx={{
                height: '1px',
                width: { xs: '60%', md: '38%' },
                background:
                  'linear-gradient(90deg, #d4af37 0%, #78755f 55%, transparent 100%)',
                mb: 12,
              }}
            />
          </Reveal>

          <Grid container spacing={2.5} alignItems='stretch'>
            {benefits.map(({ Icon, title, desc }, idx) => (
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
                      <Icon
                        sx={{
                          height: 32,
                          width: 32,
                          color: 'primary.main',
                          mb: 1,
                        }}
                      />
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

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <GradientBorderButton component={RouterLink} to='/membership'>
              Explore Membership Benefits
            </GradientBorderButton>
          </Box>
        </Container>
      </Box>

      {/* Protecting Your Art Section ──----------------------------------- */}
      <Container
        maxWidth='lg'
        sx={{ py: { xs: 6, md: 10 }, my: { xs: 4, md: 18 } }}
      >
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems='center'>
          {/* Left: image with decorative double frame */}
          <Grid item xs={12} md={6}>
            <Reveal>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                }}
              >
                {/* Image */}
                <Box
                  component='img'
                  src='/protecting.jpg'
                  alt='Tattoo artist at work'
                  sx={{
                    width: '100%',
                    display: 'block',
                    objectFit: 'cover',
                    minHeight: { xs: 300, md: 460 },
                    filter: 'grayscale(100%)',
                  }}
                />
                {/* Inset thin gold border overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 14,
                    left: 14,
                    right: 14,
                    bottom: 14,
                    border: '1px solid',
                    borderColor: 'rgba(212,175,55,0.55)',
                    pointerEvents: 'none',
                    zIndex: 2,
                  }}
                />
              </Box>
            </Reveal>
          </Grid>

          {/* Right: content */}
          <Grid item xs={12} md={6}>
            <Reveal delay={0.15}>
              <Typography variant='h2' sx={{ mb: 1.5, fontWeight: 100 }}>
                <Box
                  component='span'
                  sx={{
                    background:
                      'linear-gradient(90deg, #c9a84c 0%, #d4af37 35%, #a07c20 65%, #78755f 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Protecting
                </Box>{' '}
                Your Art, Health, and Future
              </Typography>
              <Box
                sx={{
                  height: '1px',
                  width: { xs: '60%', md: '52%' },
                  background:
                    'linear-gradient(90deg, #d4af37 0%, #78755f 55%, transparent 100%)',
                  mb: 3.5,
                }}
              />
              <Typography variant='body1' sx={{ mb: 4, lineHeight: 1.8 }}>
                As a national trade association for tattoo artists and piercers,
                NATA unites professionals to give them access to health and life
                insurance — perks usually available only to larger corporations.
              </Typography>

              <Stack spacing={3} sx={{ mb: 4.5 }}>
                {features.map(({ Icon, title, desc }) => (
                  <Stack
                    key={title}
                    direction='row'
                    spacing={2.5}
                    alignItems='flex-start'
                  >
                    {/* Gradient-bordered icon box */}
                    <Box
                      sx={{
                        flexShrink: 0,
                        background: 'linear-gradient(160deg, #302b21, #78755f)',
                        p: '1px',
                      }}
                    >
                      <Box
                        sx={{
                          width: 68,
                          height: 68,
                          bgcolor: '#000',
                          display: 'grid',
                          placeItems: 'center',
                        }}
                      >
                        <Icon
                          style={{ width: 30, height: 30, color: '#d4af37' }}
                        />
                      </Box>
                    </Box>
                    <Box>
                      <Typography
                        variant='h6'
                        sx={{ color: '#fff', mb: 0.4, fontWeight: 600 }}
                      >
                        {title}
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        {desc}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>

              <GradientBorderButton component={RouterLink} to='/membership'>
                Step Into Our World
              </GradientBorderButton>
            </Reveal>
          </Grid>
        </Grid>
      </Container>

      {/* Membership Inquiry Section -------------------------------------- */}
      <Box
        sx={{
          position: 'relative',
          py: { xs: 8, md: 14 },
          my: { xs: 4, md: 20 },
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background image */}
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
        {/* Dark gradient overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.88) 100%)',
          }}
        />
        <Container maxWidth='md' sx={{ position: 'relative' }}>
          <Reveal>
            <Typography variant='h2' sx={{ mb: 1.5 }}>
              Ask Us About Membership Benefits and Options
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
            <Typography variant='body1' color='text.secondary' sx={{ mb: 4 }}>
              Have questions about plans or member access? We are here to guide
              every step.
            </Typography>
            <GradientBorderButton component={RouterLink} to='/contact'>
              Send Questions
            </GradientBorderButton>
          </Reveal>
        </Container>
      </Box>

      {/* ── Testimonials ── */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: '#000' }}>
        <Container maxWidth='lg'>
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems='center'>
            {/* Left: image */}
            <Grid item xs={12} md={5}>
              <Reveal>
                <Box sx={{ position: 'relative', width: '100%' }}>
                  <Box
                    component='img'
                    src='/testimonials.jpg'
                    alt='Tattoo artist'
                    sx={{
                      width: '100%',
                      display: 'block',
                      objectFit: 'cover',
                      minHeight: { xs: 320, md: 500 },
                      filter: 'grayscale(100%)',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 14,
                      left: 14,
                      right: 14,
                      bottom: 14,
                      border: '1px solid rgba(212,175,55,0.45)',
                      pointerEvents: 'none',
                    }}
                  />
                </Box>
              </Reveal>
            </Grid>

            {/* Right: content */}
            <Grid item xs={12} md={7}>
              <Reveal delay={0.15}>
                <Typography
                  variant='overline'
                  sx={{
                    letterSpacing: 6,
                    fontSize: '1rem',
                    color: 'rgba(255,255,255,0.4)',
                    display: 'block',
                    mb: 1.5,
                  }}
                >
                  Testimonials
                </Typography>

                <Typography variant='h2' sx={{ lineHeight: 1.15, mb: 0.5 }}>
                  What Our Members Say
                </Typography>
                <Typography
                  variant='h2'
                  sx={{
                    lineHeight: 1.15,
                    mb: 1.5,
                    background:
                      'linear-gradient(90deg, #c9a84c 0%, #d4af37 35%, #a07c20 65%, #78755f 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  About NATA
                </Typography>
                <Box
                  sx={{
                    height: '1px',
                    width: { xs: '50%', md: '35%' },
                    background:
                      'linear-gradient(90deg, #d4af37 0%, #78755f 55%, transparent 100%)',
                    mb: 4,
                  }}
                />

                <TestimonialSlider />
              </Reveal>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Membership Payment Options Section -------------------------------------- */}
      <Container maxWidth='lg' sx={{ py: { xs: 6, md: 9 } }}>
        <Reveal>
          <Typography variant='h2' sx={{ mb: 1.5, fontWeight: 100 }}>
            <Box
              component='span'
              sx={{
                background:
                  'linear-gradient(90deg, #c9a84c 0%, #d4af37 35%, #a07c20 65%, #78755f 100%)',
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
              mb: 12,
            }}
          />
        </Reveal>
        <Grid container spacing={2.5} alignItems='stretch'>
          {plans.map((plan, idx) => (
            <Grid
              item
              xs={12}
              md={4}
              key={plan.title}
              sx={{ display: 'flex', flexDirection: 'column' }}
            >
              <Reveal delay={idx * 0.1} height>
                <CornerCard
                  offsetDirection={
                    idx === 0 ? 'bottom-left' : idx === 2 ? 'top-right' : false
                  }
                >
                  <Box sx={{ textAlign: 'center', pt: 1 }}>
                    <Box
                      sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}
                    >
                      <plan.Icon
                        style={{ width: 32, height: 32, color: '#d4af37' }}
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
                    <Typography variant='h5' sx={{ color: '#fff', mb: 1 }}>
                      {plan.title}
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{ color: 'text.secondary', px: 1 }}
                    >
                      {plan.detail}
                    </Typography>
                  </Box>
                </CornerCard>
              </Reveal>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
          <GradientBorderButton component={RouterLink} to='/membership'>
            Join Now
          </GradientBorderButton>
        </Box>
      </Container>

      {/* Mailing List Section -------------------------------------- */}
      <Box sx={{ py: { xs: 7, md: 18 } }}>
        <Container maxWidth='md'>
          <Reveal>
            <Typography
              variant='h3'
              sx={{ textAlign: 'center', fontWeight: 100, mb: 8 }}
            >
              Join Our Mailing List
            </Typography>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={1.5}
              sx={{ mt: 2.5 }}
            >
              <TextField fullWidth placeholder='Name' size='small' />
              <TextField fullWidth placeholder='Email' size='small' />
              <GradientBorderButton>Subscribe</GradientBorderButton>
            </Stack>
          </Reveal>
        </Container>
      </Box>
    </Box>
  )
}

export default Home
