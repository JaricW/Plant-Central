module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        Green: "#008000",
        lightGreen: "#7dde3f"
      },
      fontFamily: {
        RocknRoll: "RocknRoll One",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
