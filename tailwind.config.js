module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'body': ['Nunito'],
      },
      colors: {
        gray: {
          darkest: '#0a0b10',
          dark: '#0f1016',
          DEFAULT: '#c0ccda',
          light: '#14151d',
          lightest: '#171923',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
