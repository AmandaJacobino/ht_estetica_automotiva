/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],

  theme: {
    extend: {

      // ─── Colors ───────────────────────────────────────────────────
      colors: {
        // Backgrounds — sections alternate between these two
        'bg-dark':  '#101114',   
        'bg-light': '#1B1D22',   

        // Primary orange palette — used as gradient stops
        primary: {
          from: '#F23207',   // 0%   — gradient start
          via:  '#F25C05',   // 50%  — gradient mid
          to:   '#F28705',   // 100% — gradient end
        },

        // Text
        muted: '#9CA3AF',   // secondary / supporting text
      },

      // ─── Typography ───────────────────────────────────────────────
      fontFamily: {
        display: ['"Montserrat"', 'sans-serif'],  // headlines and titles
        body:    ['"Inter"', 'sans-serif'],        // body text and UI
      },

      fontWeight: {
        thin:      '100',
        light:     '300',
        regular:   '400',
        medium:    '500',
        semibold:  '600',
        bold:      '700',
        extrabold: '800',
        black:     '900',
      },

      // ─── Gradients ────────────────────────────────────────────────
      backgroundImage: {
        // Horizontal orange gradient — buttons, highlights 
        'gradient-primary':
          'linear-gradient(to right, #F23207 0%, #F25C05 50%, #F28705 100%)',

        // Diagonal card fill — 
        'gradient-card':
          'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, #18181B 100%)',
      },

      // ─── Shadows ──────────────────────────────────────────────────
      boxShadow: {
        'glow-primary':    '0 0 28px rgba(242, 92, 5, 0.40)',  // strong orange glow
        'glow-primary-sm': '0 0 14px rgba(242, 92, 5, 0.25)',  // subtle orange glow
        'card':            '0 4px 32px rgba(0, 0, 0, 0.50)',   // card depth shadow
      },

      // ─── Border Radius ────────────────────────────────────────────
      borderRadius: {
        card:  '16px',    // service and content cards
        btn:   '9999px',  // pill-shaped buttons
        badge: '9999px',  // badge labels
        icon:  '12px',    // icon container boxes
      },

      // ─── Animations ───────────────────────────────────────────────
      animation: {
        'fade-up':   'fadeUp 0.6s ease forwards',
        'fade-in':   'fadeIn 0.5s ease forwards',
        'fade-down': 'fadeDown 0.5s ease forwards',
      },

      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeDown: {
          '0%':   { opacity: '0', transform: 'translateY(-16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

    },
  },

  plugins: [],
}