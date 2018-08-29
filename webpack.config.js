const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './public/scripts/app',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
    compress: true,
    port: 3000,
    proxy: {
      '/info': 'http://localhost:8080',
    },
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modudes/, use: 'babel-loader' },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg|otf)$/,
        use: 'url-loader?limit=100000',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
