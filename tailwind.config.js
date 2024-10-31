/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2c3338', // Rich dark gray
          light: '#384349',
        },
        accent: {
          DEFAULT: '#94785c', // Warm brown
          dark: '#735c46',
        },
        stone: {
          850: '#292524',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Libre Baskerville', 'serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};