/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    typography: require('./typography'),
    extend: {
      colors: {
        gray: {
          50: '#E8F4EA',
          100: '#E8F4EA',
          200: '#E8F4EA',
          300: '#E8F4EA',
          400: '#E8F4EA',
          500: '#E8F4EA',
          700: '#E8F4EA',
          800: '#E8F4EA',
          900: '#E8F4EA',
        },
        primary: {
          50: '#E8F4EA',
          100: '#E8F4EA',
          200: '#E8F4EA',
          300: '#A4CAFE',
          600: '#1C64F2',
          700: '#1A56DB',
        },
        blue: {
          500: '#295F48',
        },
        green: {
          50: '#E8F4EA',
          100: '#295F48',
          800: '#03543F',

        },
        yellow: {
          100: '#FDF6B2',
          800: '#723B13',
        },
        purple: {
          50: '#F6F5FF',
        },
        indigo: {
          25: '#F5F8FF',
          100: '#E0EAFF',
          600: '#444CE7',
        },
      },
      screens: {
        mobile: '100px',
        // => @media (min-width: 100px) { ... }
        tablet: '640px', // 391
        // => @media (min-width: 600px) { ... }
        pc: '769px',
        // => @media (min-width: 769px) { ... }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
