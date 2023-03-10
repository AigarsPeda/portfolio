/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#34ffaa",
        "primary-gray": "#d9d9d9",
        "primary-yellow": "#ffe86d",
      },
    },
  },
  plugins: [],
};
