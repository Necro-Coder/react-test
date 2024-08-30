import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // Cambia esto por la URL y puerto de tu backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
})
