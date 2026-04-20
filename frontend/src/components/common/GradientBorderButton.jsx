import { Box, ButtonBase } from '@mui/material'
import { forwardRef } from 'react'

const GradientBorderButton = forwardRef(function GradientBorderButton(
  { children, sx = {}, fullWidth = false, ...props },
  ref,
) {
  return (
    <Box
      sx={{
        display: fullWidth ? 'block' : 'inline-block',
        background: 'linear-gradient(160deg, #302b21, #78755f)',
        p: '1px',
        transition: 'background 0.5s ease',
        '&:hover': {
          background: 'linear-gradient(160deg, #78755f, #d4af37)',
        },
        ...sx,
      }}
    >
      <ButtonBase
        ref={ref}
        sx={{
          display: 'block',
          width: fullWidth ? '100%' : undefined,
          bgcolor: '#000000',
          px: 5,
          py: 1.5,
          color: '#ffffff',
          letterSpacing: 4,
          textTransform: 'uppercase',
          fontSize: '0.72rem',
          fontFamily: '"Montserrat", "Helvetica Neue", sans-serif',
          fontWeight: 600,
          whiteSpace: 'nowrap',
        }}
        {...props}
      >
        {children}
      </ButtonBase>
    </Box>
  )
})

export default GradientBorderButton
