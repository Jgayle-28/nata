import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

const routes = ['/', '/about', '/membership', '/contact']

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://nata.vercel.app',
      dynamicRoutes: routes,
    }),
  ],
})
