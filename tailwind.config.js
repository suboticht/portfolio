/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '0.75': '0.1875rem',
        '2.25': '0.5325rem',
        '2.75': '0.6875rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}