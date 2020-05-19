const HtmlWebpackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
  mode: "production",
  entry: {
    app: "./public/scripts/app",
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: "/static/",
    filename: "[name].[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
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
    new ManifestPlugin({
      fileName: "manifest.assets.json",
    }),
  ],
};
