/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(font-open-san)"],
      },
      screens: {
        md2: "1120px",
      },
      colors: {
        "primary-dark": "#3c3e50",
        "primary-light": "#f1f2f6",
        "primary-accent": "#ffc962",
        "primary-dark-light": "#4a4d5e",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
