import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Button, Container, IconButton, Typography } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react'
import { motion } from 'framer-motion'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { courses } from '../data/courses'
import { events } from '../data/events'

function Reveal({ children, delay = 0, height, sx = {} }) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      sx={
        height
          ? {
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'stretch',
              ...sx,
            }
          : { ...sx }
      }
    >
      {children}
    </Box>
  )
}

const VISIBLE = 4 // cards visible at once on desktop

function CourseCard({ course }) {
  return (
    <Box
      component={RouterLink}
      to={`/dashboard/course/${course.id}`}
      sx={{
        width: '100%',
        height: '100%',
        textDecoration: 'none',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          border: '1px solid rgba(212,175,55,0.25)',
          zIndex: 2,
          pointerEvents: 'none',
          transition: 'border-color 0.3s',
        },
        '&:hover::before': {
          borderColor: 'rgba(212,175,55,0.7)',
        },
        // gold bottom-left corner accent
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 40,
          height: 40,
          borderBottom: '2px solid #d4af37',
          borderLeft: '2px solid #d4af37',
          zIndex: 3,
          pointerEvents: 'none',
        },
      }}
    >
      {/* Image */}
      <Box
        component='img'
        src={course.image}
        alt={course.title}
        sx={{
          width: '100%',
          height: 200,
          objectFit: 'cover',
          display: 'block',
          filter: 'grayscale(100%)',
          transition: 'filter 0.4s ease, transform 0.4s ease',
          '&:hover': {
            filter: 'grayscale(30%)',
            transform: 'scale(1.03)',
          },
        }}
      />
      {/* Text below image */}
      <Box sx={{ bgcolor: '#0a0a0a', px: 2.5, pt: 2, pb: 2.5, flex: 1 }}>
        <Typography
          variant='h6'
          sx={{
            fontSize: '1.05rem',
            fontWeight: 700,
            color: '#f6f1df',
            mb: 0.6,
          }}
        >
          {course.title}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          sx={{ fontSize: '0.72rem', lineHeight: 1.65 }}
        >
          {course.description}
        </Typography>
      </Box>
    </Box>
  )
}

const EVENT_VISIBLE = 4

function EventCard({ event }) {
  return (
    <Box
      sx={{
        width: '100%',
        flex: 1,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          border: '1px solid rgba(212,175,55,0.25)',
          zIndex: 2,
          pointerEvents: 'none',
          transition: 'border-color 0.3s',
        },
        '&:hover::before': {
          borderColor: 'rgba(212,175,55,0.7)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 40,
          height: 40,
          borderBottom: '2px solid #d4af37',
          borderRight: '2px solid #d4af37',
          zIndex: 3,
          pointerEvents: 'none',
        },
      }}
    >
      {/* Image */}
      <Box
        component='img'
        src={event.image}
        alt={event.title}
        sx={{
          width: '100%',
          height: 160,
          objectFit: 'cover',
          display: 'block',
          filter: 'grayscale(100%)',
          transition: 'filter 0.4s ease, transform 0.4s ease',
          '&:hover': {
            filter: 'grayscale(30%)',
            transform: 'scale(1.03)',
          },
        }}
      />
      {/* Content */}
      <Box
        sx={{
          bgcolor: '#0a0a0a',
          px: 2.5,
          pt: 2,
          pb: 2.5,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Date pill */}
        <Box
          sx={{
            display: 'inline-flex',
            alignSelf: 'flex-start',
            border: '1px solid rgba(212,175,55,0.35)',
            px: 1.2,
            py: 0.3,
            mb: 1.2,
          }}
        >
          <Typography
            sx={{
              fontSize: '0.6rem',
              fontFamily: '"Montserrat", sans-serif',
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: '#d4af37',
            }}
          >
            {event.date}
          </Typography>
        </Box>

        <Typography
          variant='h6'
          sx={{
            fontSize: '1rem',
            fontWeight: 700,
            color: '#f6f1df',
            mb: 0.5,
            lineHeight: 1.25,
          }}
        >
          {event.title}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          sx={{ fontSize: '0.72rem', lineHeight: 1.65, mb: 0.8, flex: 1 }}
        >
          {event.description}
        </Typography>
        <Typography
          sx={{
            fontSize: '0.62rem',
            fontFamily: '"Montserrat", sans-serif',
            letterSpacing: 1.5,
            color: 'rgba(255,255,255,0.3)',
            textTransform: 'uppercase',
            mb: 2,
          }}
        >
          {event.location}
        </Typography>

        {/* Register button */}
        <Box
          sx={{
            background: 'linear-gradient(160deg, #302b21, #78755f)',
            p: '1px',
            alignSelf: 'flex-start',
            width: '100%',
            transition: 'background 0.25s ease',
            '&:hover': {
              background: 'linear-gradient(160deg, #78755f, #d4af37)',
            },
          }}
        >
          <Button
            fullWidth
            sx={{
              borderRadius: 0,
              bgcolor: '#000',
              color: '#d4af37',
              fontFamily: '"Montserrat", sans-serif',
              fontWeight: 700,
              fontSize: '0.65rem',
              letterSpacing: 2.5,
              textTransform: 'uppercase',
              py: 1.1,
              '&:hover': { bgcolor: '#0a0a0a' },
            }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

function EventRow() {
  const [start, setStart] = useState(0)
  const maxStart = events.length - EVENT_VISIBLE
  const prev = () => setStart((s) => Math.max(s - 1, 0))
  const next = () => setStart((s) => Math.min(s + 1, maxStart))

  return (
    <Box sx={{ mt: { xs: 6, md: 10 } }}>
      <Reveal>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            mb: 3,
          }}
        >
          <Box>
            <Typography
              variant='overline'
              sx={{
                letterSpacing: 6,
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.35)',
                display: 'block',
                mb: 0.5,
              }}
            >
              Upcoming Events
            </Typography>
            <Typography
              variant='h3'
              sx={{ fontSize: { xs: 26, md: 36 }, lineHeight: 1.15 }}
            >
              Live{' '}
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
                Workshops
              </Box>
            </Typography>
            <Box
              sx={{
                mt: 1,
                height: '1px',
                width: 120,
                background:
                  'linear-gradient(90deg, #d4af37 0%, #78755f 55%, transparent 100%)',
              }}
            />
          </Box>

          {events.length > EVENT_VISIBLE && (
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {[
                { fn: prev, Icon: ArrowBackIosNewIcon, disabled: start === 0 },
                {
                  fn: next,
                  Icon: ArrowForwardIosIcon,
                  disabled: start >= maxStart,
                },
              ].map(({ fn, Icon, disabled }, i) => (
                <Box
                  key={i}
                  sx={{
                    background: disabled
                      ? 'rgba(120,117,95,0.15)'
                      : 'linear-gradient(160deg, #302b21, #78755f)',
                    p: '1px',
                    transition: 'background 0.25s ease',
                    '&:hover': !disabled && {
                      background: 'linear-gradient(160deg, #78755f, #d4af37)',
                    },
                  }}
                >
                  <IconButton
                    onClick={fn}
                    disabled={disabled}
                    size='small'
                    sx={{
                      borderRadius: 0,
                      bgcolor: '#000',
                      color: disabled ? 'rgba(255,255,255,0.2)' : '#fff',
                      px: 1.5,
                      py: 1,
                      '&:hover': { bgcolor: '#000' },
                      '&.Mui-disabled': { bgcolor: '#000' },
                    }}
                  >
                    <Icon sx={{ fontSize: 14 }} />
                  </IconButton>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Reveal>

      {/* Mobile scroll */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          gap: 2,
          overflowX: 'auto',
          pb: 1,
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {events.map((e) => (
          <Box
            key={e.id}
            sx={{ flex: '0 0 auto', width: { xs: '80vw', sm: '45%' } }}
          >
            <EventCard event={e} />
          </Box>
        ))}
      </Box>

      {/* Desktop sliding window */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          gap: '24px',
          overflow: 'hidden',
          alignItems: 'stretch',
        }}
      >
        {events.slice(start, start + EVENT_VISIBLE).map((e, i) => (
          <Reveal
            key={e.id}
            delay={i * 0.08}
            height
            sx={{
              flex: '0 0 auto',
              width: `calc(${100 / EVENT_VISIBLE}% - 18px)`,
            }}
          >
            <EventCard event={e} />
          </Reveal>
        ))}
      </Box>
    </Box>
  )
}

function CourseRow() {
  const [start, setStart] = useState(0)
  const maxStart = courses.length - VISIBLE

  const prev = () => setStart((s) => Math.max(s - 1, 0))
  const next = () => setStart((s) => Math.min(s + 1, maxStart))

  return (
    <Box sx={{ mt: { xs: 6, md: 10 } }}>
      {/* Section header */}
      <Reveal>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            mb: 3,
          }}
        >
          <Box>
            <Typography
              variant='overline'
              sx={{
                letterSpacing: 6,
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.35)',
                display: 'block',
                mb: 0.5,
              }}
            >
              Courses & Learning
            </Typography>
            <Typography
              variant='h3'
              sx={{ fontSize: { xs: 26, md: 36 }, lineHeight: 1.15 }}
            >
              Elevate Your{' '}
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
                Craft
              </Box>
            </Typography>
            <Box
              sx={{
                mt: 1,
                height: '1px',
                width: 120,
                background:
                  'linear-gradient(90deg, #d4af37 0%, #78755f 55%, transparent 100%)',
              }}
            />
          </Box>

          {/* Arrows */}
          {courses.length > VISIBLE && (
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {[
                { fn: prev, Icon: ArrowBackIosNewIcon, disabled: start === 0 },
                {
                  fn: next,
                  Icon: ArrowForwardIosIcon,
                  disabled: start >= maxStart,
                },
              ].map(({ fn, Icon, disabled }, i) => (
                <Box
                  key={i}
                  sx={{
                    background: disabled
                      ? 'rgba(120,117,95,0.15)'
                      : 'linear-gradient(160deg, #302b21, #78755f)',
                    p: '1px',
                    transition: 'background 0.25s ease',
                    '&:hover': !disabled && {
                      background: 'linear-gradient(160deg, #78755f, #d4af37)',
                    },
                  }}
                >
                  <IconButton
                    onClick={fn}
                    disabled={disabled}
                    size='small'
                    sx={{
                      borderRadius: 0,
                      bgcolor: '#000',
                      color: disabled ? 'rgba(255,255,255,0.2)' : '#fff',
                      px: 1.5,
                      py: 1,
                      '&:hover': { bgcolor: '#000' },
                      '&.Mui-disabled': { bgcolor: '#000' },
                    }}
                  >
                    <Icon sx={{ fontSize: 14 }} />
                  </IconButton>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Reveal>

      {/* Cards — desktop sliding window, mobile scroll */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          gap: 2,
          overflowX: 'auto',
          pb: 1,
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {courses.map((c, i) => (
          <Box
            key={c.id}
            sx={{ flex: '0 0 auto', width: { xs: '80vw', sm: '45%' } }}
          >
            <CourseCard course={c} />
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          gap: '24px',
          overflow: 'hidden',
          alignItems: 'stretch',
        }}
      >
        {courses.slice(start, start + VISIBLE).map((c, i) => (
          <Reveal
            key={c.id}
            delay={i * 0.08}
            height
            sx={{
              flex: '0 0 auto',
              width: `calc(${100 / VISIBLE}% - 18px)`,
            }}
          >
            <CourseCard course={c} />
          </Reveal>
        ))}
      </Box>
    </Box>
  )
}

function Dashboard() {
  const { user } = useAuth0()

  return (
    <Container maxWidth='lg' sx={{ py: { xs: 6, md: 10 } }}>
      {/* Header */}
      <Reveal>
        <Typography
          variant='overline'
          color='primary.main'
          sx={{ letterSpacing: 3 }}
        >
          Member Dashboard
        </Typography>
        <Typography variant='h2' sx={{ mt: 0.5 }}>
          Welcome,{' '}
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
            {user?.given_name || user?.name?.split(' ')[0] || 'Member'}
          </Box>
        </Typography>
      </Reveal>

      <CourseRow />
      <EventRow />
    </Container>
  )
}

export default Dashboard
