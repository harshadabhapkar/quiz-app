/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '840px',
        lg: '1150px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
}

