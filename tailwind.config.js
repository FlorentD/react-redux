module.exports = {
  purge: ['./public/scripts/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        button: 'var(--bg-button)',
        buttonFocused: 'var(--bg-button__hover)',
      }),
      backgroundImage: (theme) => ({
        hero: `url("../server/image/background.jpg")`,
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
    },
  },
  plugins: [],
};
