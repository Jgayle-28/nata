import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import MainNav from '../navigation/MainNav'
import Footer from './Footer'

function MainLayout() {
  return (
    <Box>
      <MainNav />
      <Outlet />
      <Footer />
    </Box>
  )
}

export default MainLayout
