/**  @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sustainability': "url('/src/assets/sustainability.jpg')"
      }
    },
  },
  plugins: [],
}