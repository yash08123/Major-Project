/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "Blue": "#DCEDF4",
      "Black" : "#000000",
    },
    extend: {},
    
  },
  plugins: [
    daisyui
  ],
}

