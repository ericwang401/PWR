module.exports = {
  //purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      translate: {
        '1/20': '5%',
        '1/5': '20%',
      },
      zIndex: {
        '-1': '-1',
        '2': '2',
      },
    },
  },
  variants: {
    extend: {
      zIndex: ['hover'],
      scale: ['hover'],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
