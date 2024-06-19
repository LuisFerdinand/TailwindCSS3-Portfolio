/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors : {
        primary: '#fbbf24',
        dark: '#111827',
        secondary: "#64748b"
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

