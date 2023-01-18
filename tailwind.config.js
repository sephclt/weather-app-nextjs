const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        wrapper: '1280px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      screens: {
        sm: '360px',
      },
      backgroundColor: {
        darkBg: 'rgb(0, 32, 41)',
        darkFg: 'rgb(0, 96, 122)',
      },
    },
  },
  plugins: [],
};
