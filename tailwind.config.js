/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',  // dark blue-gray
        secondary: '#1F2937',  // slightly lighter gray
        accent: '#DCFF50',  // neon green
      },
    },
  },
  plugins: [],
};
