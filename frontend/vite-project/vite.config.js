import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // Replace with your backend server
        changeOrigin: true,
      },
      '/images': {
        target: 'https://openweathermap.org', // Base URL for the icons
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
})
