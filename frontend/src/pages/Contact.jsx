import { useState } from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/common/SEO'
import {
  Alert,
  Box,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import apiClient from '../services/apiClient'
import GradientBorderButton from '../components/common/GradientBorderButton'

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

const contactItems = [
  {
    Icon: PlaceOutlinedIcon,
    lines: ['745 W. Baseline Rd., Suite 6', 'Mesa, AZ 85210'],
  },
  {
    Icon: LocalPhoneOutlinedIcon,
    lines: ['(480) 799-7667'],
  },
  {
    Icon: MailOutlineIcon,
    lines: ['318ink@gmail.com'],
  },
]

const inputSx = {
  '& .MuiOutlinedInput-root': {
    color: '#fff',
    '& fieldset': { borderColor: 'rgba(212,175,55,0.25)' },
    '&:hover fieldset': { borderColor: 'rgba(212,175,55,0.5)' },
    '&.Mui-focused fieldset': { borderColor: '#d4af37' },
  },
  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.4)' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#d4af37' },
}

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState({
    loading: false,
    error: '',
    success: '',
  })

  const onChange = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, error: '', success: '' })
    try {
      await apiClient.post('/contact', form)
      setStatus({
        loading: false,
        error: '',
        success: 'Message sent successfully.',
      })
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      setStatus({
        loading: false,
        error: err.response?.data?.message || 'Unable to send your message.',
        success: '',
      })
    }
  }

  return (
    <Box>
      <SEO
        title='Contact Us'
        description='Get in touch with NATA. We are always ready to assist tattoo artists and piercers with membership questions, support, and resources.'
        path='/contact'
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
                Contact
              </Box>{' '}
              Us
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

      {/* ── Main Contact Section ── */}
      <Container maxWidth='lg' sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems='flex-start'>
          {/* Left — info */}
          <Grid item xs={12} md={5}>
            <Reveal>
              <Typography variant='h4' sx={{ mb: 3, lineHeight: 1.25 }}>
                We're Always Ready to <br />
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
                  Assist You
                </Box>
              </Typography>
              <Box
                sx={{
                  height: '1px',
                  width: '70%',
                  background:
                    'linear-gradient(90deg, #d4af37 0%, #78755f 55%, transparent 100%)',
                  mb: 5,
                }}
              />
              <Stack spacing={3.5}>
                {contactItems.map(({ Icon, lines }, idx) => (
                  <Reveal key={idx} delay={idx * 0.1}>
                    <Stack direction='row' spacing={2} alignItems='flex-start'>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          flexShrink: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background:
                            'linear-gradient(160deg, #302b21, #78755f)',
                          p: '1px',
                        }}
                      >
                        <Box
                          sx={{
                            width: '100%',
                            height: '100%',
                            bgcolor: '#000',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Icon sx={{ fontSize: 20, color: 'primary.main' }} />
                        </Box>
                      </Box>
                      <Box>
                        {lines.map((line) => (
                          <Typography
                            key={line}
                            variant='body2'
                            color='text.secondary'
                            sx={{ lineHeight: 1.7 }}
                          >
                            {line}
                          </Typography>
                        ))}
                      </Box>
                    </Stack>
                  </Reveal>
                ))}
              </Stack>
            </Reveal>
          </Grid>

          {/* Right — form */}
          <Grid item xs={12} md={7}>
            <Reveal delay={0.15}>
              <Box
                component='form'
                onSubmit={onSubmit}
                sx={{
                  background: 'linear-gradient(160deg, #302b21, #78755f)',
                  p: '1px',
                }}
              >
                <Box
                  sx={{
                    bgcolor: '#0a0a0a',
                    p: { xs: 3, md: 5 },
                  }}
                >
                  <Stack spacing={2.5}>
                    <TextField
                      placeholder='Name *'
                      value={form.name}
                      onChange={onChange('name')}
                      required
                      fullWidth
                      sx={inputSx}
                    />
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                      <TextField
                        placeholder='Email *'
                        type='email'
                        value={form.email}
                        onChange={onChange('email')}
                        required
                        fullWidth
                        sx={inputSx}
                      />
                      <TextField
                        placeholder='Phone *'
                        type='tel'
                        value={form.phone}
                        onChange={onChange('phone')}
                        required
                        fullWidth
                        sx={inputSx}
                      />
                    </Stack>
                    <TextField
                      placeholder='Message'
                      value={form.message}
                      onChange={onChange('message')}
                      fullWidth
                      multiline
                      minRows={5}
                      sx={inputSx}
                    />
                    {status.error && (
                      <Alert severity='error'>{status.error}</Alert>
                    )}
                    {status.success && (
                      <Alert severity='success'>{status.success}</Alert>
                    )}
                    <GradientBorderButton
                      type='submit'
                      disabled={status.loading}
                      fullWidth
                    >
                      {status.loading ? 'Sending...' : 'Submit'}
                    </GradientBorderButton>
                  </Stack>
                </Box>
              </Box>
            </Reveal>
          </Grid>
        </Grid>
      </Container>

      {/* ── Mailing List ── */}
      <Box
        sx={{
          py: { xs: 7, md: 10 },
        }}
      >
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
              <TextField
                fullWidth
                placeholder='Name*'
                size='small'
                sx={inputSx}
              />
              <TextField
                fullWidth
                placeholder='Email*'
                size='small'
                sx={inputSx}
              />
              <GradientBorderButton
                sx={{ display: { xs: 'block', md: 'inline-block' } }}
                fullWidth
              >
                Subscribe
              </GradientBorderButton>
            </Stack>
          </Reveal>
        </Container>
      </Box>
    </Box>
  )
}

export default Contact
