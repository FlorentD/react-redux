module.exports = {
  mode: 'production',
  entry: {
    app: './public/scripts/app',
  },
  output: {
    path: `${__dirname}/dist/js`,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: 1,
          chunks: 'all',
        },
      },
    },
  },
};
