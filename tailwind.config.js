/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0F1F3F',
          primary: '#0B5FFF',
          primaryHover: '#084BDB',
          accent: '#00A3FF',
          sky: '#E6F0FF',
        },
        surface: {
          bg: '#F8FAFC',
          card: '#FFFFFF',
        },
        text: {
          primary: '#1F2937',
          secondary: '#4B5563',
          muted: '#6B7280',
        },
        border: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'Hind', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Hind', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.02), 0 4px 6px rgba(0,0,0,0.02), 0 10px 15px rgba(15, 31, 63, 0.04)',
        soft: '0 10px 30px rgba(11, 95, 255, 0.08)',
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.25, 0.8, 0.25, 1)',
      }
    },
  },
  plugins: [],
}
