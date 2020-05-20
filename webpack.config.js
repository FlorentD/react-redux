const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./public/scripts/app",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    contentBase: [
      path.join(__dirname, "public"),
      path.join(__dirname, "server"),
    ],
    watchContentBase: true,
    compress: true,
    port: 3000,
    proxy: {
      "/info": "http://localhost:8080",
    },
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg|otf)$/,
        use: "url-loader?limit=100000",
      },
    ],
  },
  optimization: {
    moduleIds: "named",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
