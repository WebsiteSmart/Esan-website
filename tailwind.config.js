/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'esan-pink': {
          DEFAULT: '#EC168C',
          light: '#FFF7FB',
          hover: '#D92791',
          dark: '#B8136C',
        },
        'esan-navy': {
          DEFAULT: '#173A72',
          light: '#234C90',
          dark: '#0E2448',
          deep: '#0A1B36',
        },
        'esan-text': {
          DEFAULT: '#202124',
          muted: '#666666',
        },
        'esan-bg': '#FFF7FB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(23, 58, 114, 0.08)',
        'card': '0 10px 30px -4px rgba(23, 58, 114, 0.1)',
        'pink': '0 8px 25px -4px rgba(236, 22, 140, 0.35)',
      }
    },
  },
  plugins: [],
}
