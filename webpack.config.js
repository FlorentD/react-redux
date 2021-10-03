const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './public/scripts/app',
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname),
    filename: '[name].js',
  },
  devServer: {
    hot: true,
    static: [path.join(__dirname, 'server')],
    historyApiFallback: true,
    port: 3001,
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
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '[React-Redux DEV]',
      template: 'public/index.html',
    }),
  ],
};
