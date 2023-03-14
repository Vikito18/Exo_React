/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/pages/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["28px", "38px"],
      xl: ["45px", "50px"],
      xxl: ["65px", "75px"],
    },
    extend: {},
  },
  plugins: [],
};
