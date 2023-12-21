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
    container: {
      center: true,
    },
    // colors: {
    //   'black': '#161616',
    //   'orange': '#FF5E01',

    // },
    extend: {
      scale: {
          '-100': '-1',
      }
  }
  },
  plugins: [
    typography,
  ],
}

