const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "production",
  entry: {
    app: "./public/scripts/app",
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: "/static/",
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: 1,
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"',
      },
    }),
  ],
};
