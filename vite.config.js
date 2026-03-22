import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

/**
 * Vite Configuration
 * Defines aliases for imports and React plugin
 */
export default defineConfig({
  // React plugin for supporting JSX and HMR (Hot Module Replacement)
  plugins: [react()],

  resolve: {
    /**
     * Import aliases
     * Allows using '@ui' instead of '../../src/components/ui'
     * Improves readability and facilitates refactoring
     */
    alias: {
      '@': path.resolve(__dirname, './src'),                      // @/App.jsx
      '@components': path.resolve(__dirname, './src/components'),  // @components/Button
      '@ui': path.resolve(__dirname, './src/components/ui'),       // @ui/Button
      '@sections': path.resolve(__dirname, './src/components/sections'),  // @sections/Hero
      '@layout': path.resolve(__dirname, './src/components/layout'),      // @layout/Header
      '@hooks': path.resolve(__dirname, './src/hooks'),            // @hooks/useForm
      '@constants': path.resolve(__dirname, './src/constants'),    // @constants/colors
      '@assets': path.resolve(__dirname, './src/assets'),          // @assets/logo.svg
    },
  },
})
