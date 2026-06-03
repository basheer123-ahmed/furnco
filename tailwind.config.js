/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",
        secondary: "#C5A880",
        background: "#FAFAFA",
        surface: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "Lato", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
}
