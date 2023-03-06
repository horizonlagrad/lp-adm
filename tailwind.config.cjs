/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Saira', 'sans-serif'],
      },
    },
    colors: {
      white: '#ffffff',
      black: '#000',
      gray: '#e0e0e0',
      graylight: '#f9feff',
      purple: '#753bbd',
      green: '#25d366',
      transparent: 'transparent',
    },
  },
  plugins: [],
}
