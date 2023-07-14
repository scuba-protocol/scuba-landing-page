/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      app: ['Montserrat', 'system-ui', 'sans-serif']
    },
    colors: {
      white: colors.white,
      black: colors.black,
      primary: '#060E18',
      secondary: '#86AAA4',
      active: '#1EE0BD',
      header: '#253D3880',
      back: '#253D38',
      footer: '#DDEBE3',
      radial: '#00FFD1',
      blue: '#0066FF'
    },
    extend: {
      spacing: {
        app: '375px'
      },
      maxWidth: {
        app: '82rem'
      }
    },
  },
  plugins: [],
}
