import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/gitbanner/',
  build: {
    chunkSizeWarningLimit: 1600,
  },
})
