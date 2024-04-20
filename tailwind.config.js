/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'xs': 0,
      'sm': '480px',
      'md': '760px',
      'lg': '1200px',
    }
  },
  variants: {
  extend: {},
  },
  plugins: [],
};

