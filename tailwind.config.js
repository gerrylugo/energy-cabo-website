/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'energy-navy': '#2B4C7E',
        'energy-teal': '#3CBBB1',
      },
    },
  },
  plugins: [],
};
