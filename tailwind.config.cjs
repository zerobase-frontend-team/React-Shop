/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{ts,tsx,jsx,html,css}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
