/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  // darkmode
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        title: "40px",
        mid: "30px",
        low: "15px",
      },
      dropShadow: {
        light: "2px 1px 1px rgb(249,115,22,1)",
        lightSM: "1px 1px 1px rgb(249,115,22,1)",

        dark: "2px 1px 1px rgb(14,165,233,1)",
        darkSm: "1px 1px 1px rgb(14,165,233,1)",
      },
    },
  },
  plugins: [],
};
