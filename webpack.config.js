const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './public/scripts/app',
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    hot: true,
    static: [path.join(__dirname, 'public'), path.join(__dirname, 'server')],
    historyApiFallback: true,
    port: 3000,
    proxy: {
      '/api': 'http://localhost:8080/graphql',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['react-refresh/babel'],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg|otf)$/,
        type: 'asset',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin()],
};
