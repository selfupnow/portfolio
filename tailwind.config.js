/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        charcoal: {
          DEFAULT: '#161616',
          50: '#222222',
          100: '#1C1C1C',
          200: '#161616',
          300: '#121212',
          400: '#0E0E0E'
        },
        surface: {
          DEFAULT: '#141414',
          subtle: '#181818',
          elevated: '#1F1F1F'
        },
        warmWhite: {
          DEFAULT: '#F3F0EA',
          muted: '#D8D4CC',
          dim: '#A8A49D'
        },
        mutedGrey: {
          DEFAULT: '#8B8B8B',
          light: '#A5A5A5',
          dark: '#5A5A5A'
        },
        lime: {
          DEFAULT: '#C7FF3D',
          hover: '#D4FF5E',
          glow: 'rgba(199, 255, 61, 0.18)',
          subtle: 'rgba(199, 255, 61, 0.08)'
        }
      },
      fontFamily: {
        sans: ['"Inter Tight"', 'Inter', 'sans-serif'],
        display: ['"Inter Tight"', 'sans-serif'],
        body: ['Inter', 'Manrope', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.03em',
        normal: '0em',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.18em'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
