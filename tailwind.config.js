/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},

    fill: theme => ({
      red: theme('colors.red.primary'),
    }),

    colors:{
      white: '#FFFFFF',
      blue: {
        medium: '#005C98',
      },
      black: {
        light: '#005C98',
        faded: '#00000059',
      },
      gray: {
        base: '#616161',
        background: '#FAFAFA',
        primary: '#DBDBDB',
      },
      red:{
        primary: '#ED4956',
      },
    },
  },
  plugins: [],
};
