/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2A2D5F', // Deep blue
          dark: '#1A1B3D',
          light: '#3E4180',
        },
        secondary: {
          DEFAULT: '#5E2A76', // Deep purple
          dark: '#3A1A4D',
          light: '#7E3A96',
        },
        accent: {
          turquoise: '#40E0D0',
          pink: '#FF36AB',
          yellow: '#FFDE03',
        },
        background: {
          dark: '#0F0F1A',
          light: '#1A1A2E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 5px rgba(64, 224, 208, 0.5)' },
          '100%': { textShadow: '0 0 20px rgba(64, 224, 208, 0.9), 0 0 30px rgba(64, 224, 208, 0.7)' },
        },
      },
    },
  },
  plugins: [],
}