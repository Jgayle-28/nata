import { motion } from 'framer-motion'
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined'
import { Link as RouterLink } from 'react-router-dom'
import GradientBorderButton from '../components/common/GradientBorderButton'
import CornerCard from '../components/common/CornerCard'

const values = [
  {
    Icon: VerifiedUserOutlinedIcon,
    title: 'Advocacy First',
    desc: 'We fight for the rights and recognition of tattoo professionals at every level.',
  },
  {
    Icon: GroupsOutlinedIcon,
    title: 'Community Driven',
    desc: 'Built by artists, for artists — a collective voice that grows stronger together.',
  },
  {
    Icon: WorkspacePremiumOutlinedIcon,
    title: 'Premium Access',
    desc: 'Member perks and corporate-level benefits that independent artists deserve.',
  },
  {
    Icon: HandshakeOutlinedIcon,
    title: 'Trusted Support',
    desc: 'A dedicated team that understands the unique challenges of the trade.',
  },
]

function Reveal({ children, delay = 0 }) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </Box>
  )
}

import SEO from '../components/common/SEO'

function About() {
  return (
    <Box>
      <SEO
        title='About Us'
        description='Learn about NATA — the National Association of Tattoo Artists. Our mission is to protect and empower tattoo artists and piercers nationwide.'
        path='/about'
        image='/about-us.jpg'
      />
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: '55vh', md: '65vh' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/about-us.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: {
              xs: 'linear-gradient(to bottom, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.6) 100%)',
              md: 'linear-gradient(to right, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.82) 45%, rgba(0,0,0,0.3) 75%, transparent 100%)',
            },
          }}
        />
        <Container
          maxWidth='lg'
          sx={{ position: 'relative', py: { xs: 10, md: 14 } }}
        >
          <Box
            sx={{
              maxWidth: { xs: '100%', md: '55%' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Reveal>
              <Typography
                variant='overline'
                sx={{
                  letterSpacing: 8,
                  fontSize: { xs: '0.9rem', md: '1.65rem' },
                  color: 'rgba(255,255,255,0.4)',
                  display: 'block',
                  mb: 2,
                }}
              >
                About Us
              </Typography>
              <Typography
                variant='h1'
                sx={{
                  fontSize: { xs: 36, sm: 50, md: 60 },
                  lineHeight: 1.12,
                  mb: 2.5,
                }}
              >
                Your Top Tattoos Deserve{' '}
                <Box
                  component='span'
                  sx={{
                    display: { xs: 'block', md: 'inline' },
                    background:
                      'linear-gradient(90deg, #c9a84c 0%, #d4af37 40%, #78755f 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  The Spotlight
                </Box>
              </Typography>
              <Box
                sx={{
                  height: '1px',
                  width: { xs: '55%', md: '40%' },
                  mx: { xs: 'auto', md: 0 },
                  background:
                    'linear-gradient(90deg, #d4af37 0%, #78755f 55%, transparent 100%)',
                  mb: 3,
                }}
              />
              <Typography
                variant='body1'
                color='text.secondary'
                sx={{
                  maxWidth: 500,
                  mx: { xs: 'auto', md: 0 },
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                Welcome to NATA — the ultimate platform designed exclusively for
                tattoo artists to thrive in their craft and business. We
                understand the challenges you face, from managing coverage to
                showcasing your work. That's why we've created a space where
                your art and professionalism take center stage.
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                <GradientBorderButton component={RouterLink} to='/membership'>
                  Read More
                </GradientBorderButton>
              </Box>
            </Reveal>
          </Box>
        </Container>
      </Box>

      {/* ── Art Meets Assurance ── */}
      <Container maxWidth='lg' sx={{ py: { xs: 7, md: 11 } }}>
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems='center'>
          {/* Left: framed image */}
          <Grid item xs={12} md={5}>
            <Reveal>
              <Box sx={{ position: 'relative', width: '100%' }}>
                <Box
                  component='img'
                  src='/protecting.jpg'
                  alt='Tattoo artists at work'
                  sx={{
                    width: '100%',
                    display: 'block',
                    objectFit: 'cover',
                    minHeight: { xs: 280, md: 420 },
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
                    border: '1px solid rgba(212,175,55,0.55)',
                    pointerEvents: 'none',
                    zIndex: 2,
                  }}
                />
              </Box>
            </Reveal>
          </Grid>

          {/* Right: copy */}
          <Grid item xs={12} md={7}>
            <Reveal delay={0.15}>
              <Typography variant='h2' sx={{ mb: 1.5 }}>
                Art Meets{' '}
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
                  Assurance
                </Box>{' '}
                Here
              </Typography>
              <Box
                sx={{
                  height: '1px',
                  width: { xs: '55%', md: '42%' },
                  background:
                    'linear-gradient(90deg, #d4af37 0%, #78755f 55%, transparent 100%)',
                  mb: 3.5,
                }}
              />
              <Typography
                variant='body1'
                color='text.secondary'
                sx={{ lineHeight: 1.9, mb: 2 }}
              >
                The National Association of Tattoo Artists focuses on tattoo
                advocacy by providing valuable membership benefits for
                tattooists and piercers across the nation. With a deep
                understanding of the unique challenges you face, our team
                combines industry expertise with a personal touch, ensuring you
                receive the support you need.
              </Typography>
              <Typography
                variant='body1'
                color='text.secondary'
                sx={{ lineHeight: 1.9, mb: 4 }}
              >
                We believe in fostering a vibrant community where artists can
                thrive and focus on their art, knowing they have reliable
                coverage and peers behind them.
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                <GradientBorderButton component={RouterLink} to='/membership'>
                  Become a Member
                </GradientBorderButton>
              </Box>
            </Reveal>
          </Grid>
        </Grid>
      </Container>

      {/* ── Core Values ── */}
      <Box
        sx={{
          py: { xs: 7, md: 10 },
        }}
      >
        <Container maxWidth='lg'>
          <Reveal>
            <Typography variant='h2' sx={{ mb: 1.5 }}>
              What We{' '}
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
                Stand For
              </Box>
            </Typography>
            <Box
              sx={{
                height: '1px',
                width: { xs: '55%', md: '30%' },
                background:
                  'linear-gradient(90deg, #d4af37 0%, #78755f 55%, transparent 100%)',
                mb: 7,
              }}
            />
          </Reveal>

          <Grid container spacing={2.5} alignItems='stretch'>
            {values.map(({ Icon, title, desc }, idx) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={title}
                sx={{ display: 'flex' }}
              >
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  sx={{ width: '100%', display: 'flex' }}
                >
                  <CornerCard offsetDirection={false}>
                    <Box sx={{ textAlign: 'center', pt: 1 }}>
                      <Icon
                        sx={{ fontSize: 44, color: 'primary.main', mb: 1 }}
                      />
                      <Box
                        sx={{
                          width: 50,
                          height: '1px',
                          background:
                            'linear-gradient(90deg, transparent 0%, #78755f 30%, #d4af37 50%, #78755f 70%, transparent 100%)',
                          mx: 'auto',
                          mb: 2.5,
                        }}
                      />
                      <Typography variant='h6' sx={{ color: '#fff', mb: 1 }}>
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
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── Join CTA ── */}
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
              Join Us to{' '}
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
                Elevate Your Craft
              </Box>
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
              sx={{ maxWidth: 540, mx: 'auto', mb: 4, lineHeight: 1.8 }}
            >
              Unlock a world of benefits designed specifically for tattoo
              artists and piercers nationwide. Start your membership today.
            </Typography>
            <GradientBorderButton component={RouterLink} to='/membership'>
              Become a Member
            </GradientBorderButton>
          </Reveal>
        </Container>
      </Box>
    </Box>
  )
}

export default About
