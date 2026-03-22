import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
      '@sections': path.resolve(__dirname, './src/components/sections'),
      '@layout': path.resolve(__dirname, './src/components/layout'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
})
