/** @type {import('tailwindcss/plugin').TailwindPluginCreator} */
// @ts-ignore
const plugin = require('tailwindcss/plugin');

const config = {
  content: ['./src/**/*.{html,js,svelte,ts,md,svx}'],

  theme: {
    extend: {
      colors: {
        primary: '#5374e5'
      }
    }
  },

  plugins: [
    plugin(() => {
      // my plugin do nothing
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ]
};

module.exports = config;