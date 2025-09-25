import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'gsap-vendor': ['gsap'],
          'i18n-vendor': ['react-i18next', 'i18next']
        }
      }
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000
  },
  // Enable resource preloading
  optimizeDeps: {
    include: [
      'react',
      'react-dom', 
      'react-router-dom',
      'gsap',
      'react-i18next'
    ]
  }
})