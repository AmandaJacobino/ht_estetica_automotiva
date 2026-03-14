/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#fdf8ec',
          100: '#faefd0',
          200: '#f4dc9a',
          300: '#edc45f',
          400: '#e6ac35',
          500: '#d4921e',
          600: '#b97218',
          700: '#8f5418',
          800: '#75431a',
          900: '#62391b',
          950: '#391d0b',
        },
        dark: {
          900: '#0a0a0a',
          800: '#111111',
          700: '#1a1a1a',
          600: '#242424',
          500: '#2e2e2e',
        },
      },
    },
  },
  plugins: [],
}
