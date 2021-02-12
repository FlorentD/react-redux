const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano');

module.exports = (api) => {
  process.env.NODE_ENV = api.mode;
  return {
    plugins: [
      require('postcss-import'),
      tailwindcss('./tailwind.config.js'),
      api.mode === 'production' ? require('autoprefixer') : null,
      api.mode === 'production' ? cssnano({ preset: 'default' }) : null,
    ],
  };
};
