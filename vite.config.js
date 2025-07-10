import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/rock-paper-scissors/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Generate source maps for debugging
    sourcemap: true,
    // Use terser for minification (now included in devDependencies)
    minify: 'terser',
    // Terser options for better compression
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          firebase: ['firebase/app', 'firebase/firestore']
        }
      }
    }
  },
  server: {
    port: 3000,
    host: true
  },
  preview: {
    port: 4173,
    host: true
  },
  // Optimize dependencies and resolve Firebase modules properly
  optimizeDeps: {
    include: [
      'firebase/app', 
      'firebase/firestore',
      'firebase/analytics'
    ]
  },
  resolve: {
    alias: {
      // Fix Firebase compatibility issues with Vite
      '@': '/src'
    }
  },
  define: {
    // Fix Firebase issues in production build
    global: 'globalThis',
  }
})