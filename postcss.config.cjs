const autoprefixer = require('autoprefixer');
const nesting = require('postcss-nesting');

module.exports = {
  syntax: 'postcss',
  plugins: [
    // Some plugins, like postcss-nested, need to run before Tailwind
    nesting(),
    // But others, like autoprefixer, need to run after
    autoprefixer(),
    // !dev &&
    //  cssnano({
    //      preset: 'default',
    //  }),
  ]
};