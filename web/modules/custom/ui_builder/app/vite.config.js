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
      input: {
        builder: resolve(__dirname, 'src/main.jsx'),
        frontend_styler: resolve(__dirname, 'src/frontend.jsx')
      },
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  }
})
