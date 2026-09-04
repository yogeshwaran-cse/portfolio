/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violentRed: {
          DEFAULT: '#FF0033',
          hover: '#E60026',
          muted: 'rgba(255, 0, 51, 0.08)',
          glow: 'rgba(255, 0, 51, 0.35)',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          surface: '#111111',
          card: '#141414',
          border: '#222222',
        }
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
