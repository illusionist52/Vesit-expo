/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Eudoxus-Sans",
      },
      colors: {
        dark_purple: "#6F2DBD",
        lavender: "#A663CC",
        light_purple: "#B298DC",
        light_blue: "#B8D0EB",
        cyan: "#B9FAF8",
        gray: "#334155"

      }
    },
  },
  plugins: [],
}