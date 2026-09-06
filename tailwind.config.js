/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#09233F',
          50: '#E8EDF1',
          100: '#C5D1DB',
          200: '#9DB0C2',
          300: '#6D8AA5',
          400: '#436A8B',
          500: '#234B6E',
          600: '#133356',
          700: '#09233F',
          800: '#061829',
          900: '#040F1C',
        },
        brand: {
          blue: '#0879D9',
          green: '#21843A',
          fresh: '#4CAF35',
          lime: '#78C83A',
        },
        cream: '#F7FAF7',
        ink: '#10231D',
        muted: '#5F6F68',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 6vw, 4.75rem)', { lineHeight: '1.05', fontWeight: '700', letterSpacing: '-0.02em' }],
        'heading': ['clamp(2rem, 4.5vw, 3.5rem)', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.01em' }],
        'subheading': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
