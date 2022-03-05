const config = {
  plugins: [
    require('cssnano'),
    require('tailwindcss/nesting'),
    require('tailwindcss')(),
    require('autoprefixer'),
    require('postcss-import')
  ]
};

module.exports = config;
