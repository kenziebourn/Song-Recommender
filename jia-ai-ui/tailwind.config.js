/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'ocean' : '#13C1DB',
      'mint' : '#86CF9C',
      'sun' : '#F8DD5D',
      'white': '#FFFFFF',
      'black' : '#000000'
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'] 
    }
  },
  plugins: [],
}

