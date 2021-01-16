module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        appear: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        appear: "appear 2s forwards",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
