import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../js/dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'builder.js',
        assetFileNames: 'builder.[ext]'
      }
    }
  }
})
