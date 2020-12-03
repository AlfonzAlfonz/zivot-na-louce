const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
