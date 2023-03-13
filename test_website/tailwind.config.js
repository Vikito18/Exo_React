/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/pages/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["28px", "32px"],
      xxl: ["65px", "55px"],
    },
    extend: {},
  },
  plugins: [],
};
