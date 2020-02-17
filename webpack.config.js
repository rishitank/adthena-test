const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

const environment = process.env.NODE_ENV;
const isDevelopment = environment === 'development';

function resolvePath(relativePath) {
  return path.resolve(__dirname, relativePath);
}

const PATHS = {
  public: resolvePath('public'),
  dist: resolvePath('dist'),
  components: resolvePath('src/components'),
  services: resolvePath('src/services'),
};

module.exports = {
  entry: './src/index.jsx',
  mode: environment,
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@components': PATHS.components,
      '@services': PATHS.services,
    },
  },
  output: {
    filename: 'main.js',
    path: PATHS.dist,
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js|es6)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: ExtractCssChunks.loader,
            options: {
              hot: isDevelopment,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
              includePaths: [
                resolvePath('./node_modules/compass-mixins/lib'),
              ],
            },
          },
        ],
      },
      {
        test: /\.(html)$/,
        use: [
          {
            loader: 'raw-loader',
          },
        ],
        exclude: [/public/],
      },
    ],
  },
  devtool: isDevelopment ? 'inline-source-map' : 'source-map',
  plugins: [
    new ExtractCssChunks({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './public/index.html',
      filename: 'index.html',
      favicon: './public/favicon.ico',
      env: {
        environment,
      },
      chunksSortMode: 'none',
    }),
  ],
  devServer: {
    contentBase: PATHS.public,
    historyApiFallback: true,
    host: '127.0.0.1',
    port: 8082,
  },
};
