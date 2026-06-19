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
        luxDark: '#0A0A0A',
        luxGray: '#111111',
        luxLight: '#F5EBE1',
        luxGold: '#C8A96B',
      },
      fontFamily: {
        sans: ["Inter", "Lato", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        playfair: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
