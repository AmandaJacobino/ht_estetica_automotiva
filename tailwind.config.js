/** @type {import('tailwindcss').Config} */
/**
 * Tailwind CSS Configuration
 * Defines design tokens, colors, typography, animations and spacing
 */
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
        'bg-dark':  '#101114',    // Dark background for main sections
        'bg-light': '#1B1D22',    // Lighter background for alternation

        // Primary orange palette — used as gradient stops
        primary: {
          from: '#F23207',   // Gradient start - vibrant orange (0%)
          via:  '#F25C05',   // Gradient middle (50%)
          to:   '#F28705',   // Gradient end (100%)
        },

        // Text
        muted: '#9CA3AF',   // Color for secondary and supporting text
      },

      // ─── Typography ───────────────────────────────────────────────
      fontFamily: {
        display: ['"Montserrat"', 'sans-serif'],  // Headlines, titles and accent text
        body:    ['"Inter"', 'sans-serif'],        // Body text and UI components
      },

      fontWeight: {
        thin:      '100',
        light:     '300',
        regular:   '400',
        medium:    '500',
        semibold:  '600',    // Default weight for highlights
        bold:      '700',    // Default weight for titles
        extrabold: '800',
        black:     '900',
      },

      // ─── Gradients ────────────────────────────────────────────────
      backgroundImage: {
        // Horizontal orange gradient — used in buttons, highlights, and badges
        'gradient-primary':
          'linear-gradient(to right, #F23207 0%, #F25C05 50%, #F28705 100%)',

        // Diagonal card fill — subtle glass-morphism effect with transparency
        'gradient-card':
          'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, #18181B 100%)',
      },

      // ─── Shadows ──────────────────────────────────────────────────
      boxShadow: {
        'glow-primary':    '0 0 28px rgba(242, 92, 5, 0.40)',  // Strong glow shadow - hover on primary buttons
        'glow-primary-sm': '0 0 14px rgba(242, 92, 5, 0.25)',  // Subtle glow shadow - hover on cards
        'card':            '0 4px 32px rgba(0, 0, 0, 0.50)',   // Depth shadow for cards
      },

      // ─── Border Radius ────────────────────────────────────────────
      borderRadius: {
        card:  '16px',    // Rounded corners for service cards
        btn:   '9999px',  // Fully rounded corners (pill shape) for buttons
        badge: '9999px',  // Fully rounded corners for badges/labels
        icon:  '12px',    // Softly rounded corners for icon containers
      },

      // ─── Animations ───────────────────────────────────────────────
      animation: {
        'fade-up':   'fadeUp 0.6s ease forwards',     // Fade in with upward movement (titles)
        'fade-in':   'fadeIn 0.5s ease forwards',     // Simple fade in (neutral elements)
        'fade-down': 'fadeDown 0.5s ease forwards',   // Fade in with downward movement (top elements)
      },

      keyframes: {
        // Appearance with upward translation
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Simple appearance
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // Appearance with downward translation
        fadeDown: {
          '0%':   { opacity: '0', transform: 'translateY(-16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

    },
  },

  plugins: [],
}