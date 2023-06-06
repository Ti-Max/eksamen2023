/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.{ejs,html}", "./frontend/src/*.{js,ejs,jsx,html}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
