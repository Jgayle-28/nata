import { useState } from 'react'
import { Link as RouterLink, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { courses } from '../data/courses'

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

const resourceIcon = {
  pdf: PictureAsPdfOutlinedIcon,
  download: FileDownloadOutlinedIcon,
  link: OpenInNewOutlinedIcon,
}

function getYouTubeId(url) {
  if (!url) return ''
  const m = url.match(/(?:v=|youtu\.be\/)([\w-]{11})/)
  return m ? m[1] : ''
}

function CoursePage() {
  const { id } = useParams()
  const course = courses.find((c) => c.id === id)
  const [activeModule, setActiveModule] = useState(course?.modules[0] || null)

  if (!course) {
    return (
      <Container maxWidth='lg' sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant='h4'>Course not found.</Typography>
        <Box
          component={RouterLink}
          to='/dashboard'
          sx={{ color: 'primary.main', mt: 2, display: 'block' }}
        >
          ← Back to Dashboard
        </Box>
      </Container>
    )
  }

  return (
    <Container maxWidth='lg' sx={{ py: { xs: 5, md: 8 } }}>
      {/* ── Back nav + header ── */}
      <Reveal>
        <Box
          component={RouterLink}
          to='/dashboard'
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.8,
            textDecoration: 'none',
            color: 'rgba(255,255,255,0.7)',
            fontSize: '0.68rem',
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 600,
            letterSpacing: 2.5,
            textTransform: 'uppercase',
            mb: 3,
            transition: 'color 0.2s',
            '&:hover': { color: '#d4af37' },
          }}
        >
          <ArrowBackIcon sx={{ fontSize: 13 }} />
          Back to Dashboard
        </Box>

        <Typography
          variant='overline'
          sx={{
            letterSpacing: 6,
            fontSize: '0.9rem',
            color: 'rgba(255,255,255,0.5)',
            display: 'block',
            mb: 0.5,
          }}
        >
          Courses &amp; Learning
        </Typography>
        <Typography variant='h2' sx={{ fontSize: { xs: 28, md: 40 }, mb: 1 }}>
          {course.title}
        </Typography>
        <Box
          sx={{
            height: '1px',
            width: 100,
            background:
              'linear-gradient(90deg, #d4af37 0%, #78755f 55%, transparent 100%)',
            mb: 4,
          }}
        />
      </Reveal>

      <Grid container spacing={{ xs: 3, md: 4 }}>
        {/* ── Left sidebar: module list ── */}
        <Grid item xs={12} md={4} order={{ xs: 2, md: 1 }}>
          <Box sx={{ position: { md: 'sticky' }, top: { md: 110 } }}>
            <Reveal delay={0.1}>
              {/* <Typography
                variant='overline'
                sx={{
                  letterSpacing: 5,
                  fontSize: '0.65rem',
                  color: 'rgba(255,255,255,0.5)',
                  display: 'block',
                  mb: 1.5,
                }}
              >
                Course Modules
              </Typography> */}
              <Box
                sx={{
                  border: '1px solid rgba(212,175,55,0.15)',
                  overflow: 'hidden',
                }}
              >
                {course.modules.map((mod, idx) => (
                  <Box
                    key={mod.id}
                    onClick={() => setActiveModule(mod)}
                    sx={{
                      py: 2,
                      px: 2.5,
                      cursor: 'pointer',
                      borderLeft:
                        activeModule?.id === mod.id
                          ? '3px solid #d4af37'
                          : '3px solid transparent',
                      bgcolor:
                        activeModule?.id === mod.id
                          ? 'rgba(212,175,55,0.05)'
                          : 'transparent',
                      borderBottom:
                        idx < course.modules.length - 1
                          ? '1px solid rgba(212,175,55,0.1)'
                          : 'none',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        bgcolor: 'rgba(212,175,55,0.04)',
                        borderLeftColor:
                          activeModule?.id === mod.id
                            ? '#d4af37'
                            : 'rgba(212,175,55,0.35)',
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '0.6rem',
                        fontFamily: '"Montserrat", sans-serif',
                        fontWeight: 700,
                        letterSpacing: 3,
                        color:
                          activeModule?.id === mod.id
                            ? '#d4af37'
                            : 'rgba(212,175,55,0.35)',
                        mb: 0.4,
                      }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color:
                          activeModule?.id === mod.id
                            ? '#f6f1df'
                            : 'rgba(255,255,255,0.5)',
                        lineHeight: 1.3,
                        mb: 0.5,
                        transition: 'color 0.2s',
                      }}
                    >
                      {mod.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '0.65rem',
                        fontFamily: '"Montserrat", sans-serif',
                        color: 'rgba(255,255,255,0.28)',
                      }}
                    >
                      {mod.duration}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Reveal>
          </Box>
        </Grid>

        {/* ── Right: video + content ── */}
        <Grid item xs={12} md={8} order={{ xs: 1, md: 2 }}>
          <Reveal delay={0.05}>
            {/* 16:9 video container */}
            <Box
              sx={{
                position: 'relative',
                pt: '56.25%',
                bgcolor: '#0a0a0a',
                overflow: 'hidden',
                border: '1px solid rgba(212,175,55,0.15)',
              }}
            >
              <Box
                key={activeModule?.videoUrl}
                component='iframe'
                src={`https://www.youtube.com/embed/${getYouTubeId(activeModule?.videoUrl)}?rel=0`}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
              />
            </Box>

            {/* Active module label + title */}
            <Box sx={{ mt: 3, mb: 2 }}>
              {/* <Typography
                variant='overline'
                sx={{
                  fontSize: '0.6rem',
                  letterSpacing: 4,
                  color: 'rgba(255,255,255,0.28)',
                  display: 'block',
                  mb: 0.4,
                }}
              >
                Now Playing
              </Typography> */}
              <Typography
                variant='h5'
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.35rem' },
                  fontWeight: 700,
                }}
              >
                {activeModule?.title}
              </Typography>
            </Box>

            <Divider sx={{ borderColor: 'rgba(212,175,55,0.15)', mb: 2.5 }} />

            {/* Description */}
            <Typography
              variant='body1'
              color='text.secondary'
              sx={{ lineHeight: 1.9, fontSize: '0.85rem', mb: 4 }}
            >
              {activeModule?.description}
            </Typography>

            {/* Resources */}
            {activeModule?.resources?.length > 0 && (
              <Box>
                <Typography
                  variant='overline'
                  sx={{
                    fontSize: '0.65rem',
                    letterSpacing: 5,
                    color: 'rgba(255,255,255,0.3)',
                    display: 'block',
                    mb: 1.5,
                  }}
                >
                  Module Resources
                </Typography>
                <Box
                  sx={{
                    border: '1px solid rgba(212,175,55,0.15)',
                    overflow: 'hidden',
                  }}
                >
                  {activeModule.resources.map((res, idx) => {
                    const Icon = resourceIcon[res.type] || OpenInNewOutlinedIcon
                    return (
                      <Box
                        key={idx}
                        component='a'
                        href={res.url}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                          py: 1.6,
                          px: 2.5,
                          textDecoration: 'none',
                          borderBottom:
                            idx < activeModule.resources.length - 1
                              ? '1px solid rgba(212,175,55,0.1)'
                              : 'none',
                          transition: 'background 0.2s',
                          '&:hover': { bgcolor: 'rgba(212,175,55,0.04)' },
                        }}
                      >
                        <Icon sx={{ color: '#d4af37', fontSize: 17 }} />
                        <Typography
                          sx={{
                            fontSize: '0.75rem',
                            fontFamily: '"Montserrat", sans-serif',
                            fontWeight: 500,
                            color: 'rgba(255,255,255,0.65)',
                            flex: 1,
                          }}
                        >
                          {res.label}
                        </Typography>
                        <ChevronRightIcon
                          sx={{ fontSize: 16, color: 'rgba(255,255,255,0.2)' }}
                        />
                      </Box>
                    )
                  })}
                </Box>
              </Box>
            )}
          </Reveal>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CoursePage
