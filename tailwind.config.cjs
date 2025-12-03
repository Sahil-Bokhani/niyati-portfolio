/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        primary: {
          500: '#f97316',
          600: '#ea580c',
        },
        accent: '#22d3ee',
      },
      boxShadow: {
        'soft-lg': '0 20px 60px rgba(15,23,42,0.8)',
      },
    },
  },
  plugins: [],
};
