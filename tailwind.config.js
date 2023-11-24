/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        customCyan: {
          DEFAULT: 'rgb(39, 205, 206)',
        },
        customred:{
          DEFAULT: 'rgb(255, 127, 128)',
        },
      },
    },
  },
  plugins: [],
}