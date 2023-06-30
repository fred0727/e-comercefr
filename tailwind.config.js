/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        '--primary': '#f85555',
        '--light-gray': '#dcd9d9',
        '--gray': '#c7c7c7',
        '--dark-gray': '#4f4f4f',
        '--text-gray': '#ababab',
      }
    },
  },
  plugins: [],
}

