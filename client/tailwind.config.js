/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Euxodus Sans" , "sans-serif"],
      },
      colors: {
        dark_purple: "#6F2DBD",  // Lagega !!
        lavender: "#CE68FE",     // Form Color + Buttons
        light_purple: "#B298DC", // Optional
        blue: "#95BFEF",         // Optional
        light_blue: "#B8D0EB",   // Optional
        cyan: "#B9FAF8",
        gray: "#1C233D",   // Main background color.
        light_gray: "#202B47"   // Will be useful for cards

      }
      ,transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
}