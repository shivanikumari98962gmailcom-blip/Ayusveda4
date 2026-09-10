/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cleanLight: {
          bg: '#ffffff',
          surface: '#f8fafc',
          surfaceAlt: '#f1f5f9',
          card: '#ffffff',
          border: '#e2e8f0',
          text: '#0f172a',
          textMuted: '#475569',
          primary: '#2563eb',
          primaryHover: '#1d4ed8',
          secondary: '#059669',
          gold: '#d97706',
          red: '#dc2626',
        }
      },
      fontFamily: {
        hindi: ['Mukta', 'Tiro Devanagari Hindi', 'Noto Sans Devanagari', 'sans-serif'],
        sans: ['Inter', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
