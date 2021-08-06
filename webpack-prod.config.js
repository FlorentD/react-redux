const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    app: './public/scripts/app',
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/static/',
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'jsx',
          target: 'es2015',
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  optimization: {
    minimizer: [new ESBuildMinifyPlugin({ target: 'es2015' })],
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: 1,
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new WebpackManifestPlugin({
      fileName: 'manifest.assets.json',
    }),
    new GenerateSW({ cleanupOutdatedCaches: true }),
  ],
};
