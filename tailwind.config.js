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
      backgroundImage: {
        sunny:
          'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/Images/sunny.jpg)',
        cloudy:
          'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/Images/cloudy.jpg)',
        rain: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/Images/rain.jpg)',
        storm:
          'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/Images/storm.jpg)',
      },
    },
  },
  plugins: [],
};
