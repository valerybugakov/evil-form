const path = require('path')
const webpack = require('webpack')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')

module.exports = options => ({
  entry: options.entry,
  output: Object.assign({ // Compile into js/build.js
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
  }, options.output),
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: options.babelQuery,
    }, {
      test: /\.css$/,
      include: /node_modules/,
      loaders: ['style-loader', 'css-loader'],
    }, {
      test: /\.svg?$/,
      loader: 'svg-sprite-loader',
    }],
  },
  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      fetch: 'exports-loader?self.fetch!whatwg-fetch',
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        __DEV__: process.env.NODE_ENV === 'development',
      },
    }),
    new webpack.NamedModulesPlugin(),
    // new BundleAnalyzerPlugin.BundleAnalyzerPlugin(),
  ]),
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: ['.js'],
    mainFields: [
      'browser',
      'jsnext:main',
      'main',
    ],
  },
  devtool: options.devtool,
  target: 'web',
  performance: options.performance || {},
})
