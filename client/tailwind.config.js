/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#394867',
        pink: '#ffeaea',
        error: '#ff0303',
        purple: '#d14d72',
      },
    },
  },
  plugins: [],
};
