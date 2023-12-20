/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      staatliches: ['Staatliches', 'serif'],

    },
    // colors: {
    //   'black': '#161616',
    //   'orange': '#FF5E01',

    // },

  },
  plugins: [
    typography,
  ],
}

