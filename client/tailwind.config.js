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
          DEFAULT: '#ffffff',
          snow: '#f6f6f6'
        },
        black: {
          DEFAULT: '#000000',
          75: '#000000bf'
        },
        blue: {
          DEFAULT: '#0C1B54'
        }
      }
    },
  },
  plugins: [],
}

