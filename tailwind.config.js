/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#1e7a5f',
          DEFAULT: '#0f4c3a',
          dark: '#073024',
        },
        secondary: {
          light: '#fde047',
          DEFAULT: '#eab308',
          dark: '#ca8a04',
        },
        solarbg: {
          light: '#f4f9f6',
          DEFAULT: '#ffffff',
          dark: '#0a1d17',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
