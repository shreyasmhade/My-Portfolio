/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        suco: {
          emerald: '#047857',
          citrus: '#F59E0B'
        }
      }
    }
  },
  plugins: []
}
