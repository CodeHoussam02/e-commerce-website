/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: "poppins, sans-serif", 
      inter: "Inter, sans-serif"
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
