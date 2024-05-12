/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        white: {
          snow: '#f6f6f6'
        }
      }
    },
  },
  plugins: [],
}

