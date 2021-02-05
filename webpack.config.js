const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

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
    static: [path.join(__dirname, 'public'), path.join(__dirname, 'server')],
    compress: true,
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
        use: 'url-loader?limit=100000',
      },
    ],
  },
  optimization: {
    moduleIds: 'named',
  },
  plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
};
