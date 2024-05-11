/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        beach: "url('/src/assets/road.jpg')",
      },
    },
  },
  plugins: [],
};
