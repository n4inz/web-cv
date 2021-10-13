module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Lato': ['Lato', 'Arial', 'sans-serif']
      }
    },
    container: {
      center: true,
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'photo': '#FE0000',

     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
