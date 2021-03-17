module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      translate: {
        '1/20': '5%',
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
