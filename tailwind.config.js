/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#050505', // Very dark mostly black
          light: '#f8f9fa'
        },
        primary: '#CFB53B', // Premium Gold (adjust if needed based on previous code usually yellow/gold)
        secondary: '#1a1a1a',
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
