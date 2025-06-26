/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0A1121',
        darkCard: '#1a202c',
        lightText: '#E2E8F0',
        midText: '#A0AEC0',
        accentTeal: '#00BCD4',
        'accentTeal-dark': '#0097A7', 
      },
    },
  },
  plugins: [],
};