module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.vue',
  ],
  darkMode: 'class', // set to use system color scheme by default, then use localStorage to store user-selected preference via methods in /src/layouts/Default.vue layout file
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // https://github.com/tailwindlabs/tailwindcss-forms
    require('@tailwindcss/typography'), // https://github.com/tailwindlabs/tailwindcss-typography
  ],
}
