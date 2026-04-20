import { Box } from '@mui/material'

const BORDER_GRADIENT = 'linear-gradient(160deg, #302b21, #78755f)'
const SHADOW_GRADIENT =
  'linear-gradient(160deg, rgba(48,43,33,0.6), rgba(120,117,95,0.6))'

/**
 * offsetDirection:
 *   false          — no shadow border
 *   'bottom-left'  — shadow offset down-left  (card 1)
 *   'top-right'    — shadow offset up-right   (card 3)
 */
function CornerCard({ children, offsetDirection = false, sx = {} }) {
  const offsetTranslate =
    offsetDirection === 'bottom-left'
      ? 'translate(-9px, 9px)'
      : offsetDirection === 'top-right'
        ? 'translate(9px, -9px)'
        : undefined

  return (
    <Box sx={{ position: 'relative', height: '100%' }}>
      {/* Offset shadow border */}
      {offsetTranslate && (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: SHADOW_GRADIENT,
            transform: offsetTranslate,
            p: '1px',
            pointerEvents: 'none',
          }}
        >
          <Box sx={{ width: '100%', height: '100%', bgcolor: '#000000' }} />
        </Box>
      )}

      {/* Main card — gradient wrapper gives the border, inner Box is solid black */}
      <Box
        sx={{
          position: 'relative',
          background: BORDER_GRADIENT,
          p: '1px',
          height: '100%',
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            bgcolor: '#000000',
            p: { xs: 3, md: 4 },
            height: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            ...sx,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default CornerCard
