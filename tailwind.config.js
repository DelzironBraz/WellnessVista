/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hoverColor: "#FFC000",
        brightColor: "#DD8836",
        backgroundColor: "#36AE9A"
      }
    },
  },
  plugins: [],
}