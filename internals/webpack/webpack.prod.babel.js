const path = require('path')
const OfflinePlugin = require('offline-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = require('./webpack.base.babel')({
  entry: [
    path.join(process.cwd(), 'app/index.js'),
  ],

  // Utilize long-term caching by adding
  // content hashes (not compilation hashes) to compiled assets
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),

    // Put it in the end to capture all the HtmlWebpackPlugin's
    // assets manipulations and do leak its manipulations to HtmlWebpackPlugin
    new OfflinePlugin({
      relativePaths: false,
      publicPath: '/',

      // No need to cache .htaccess. See http://mxs.is/googmp,
      // this is applied before any match in `caches` section
      excludes: ['.htaccess'],

      caches: { main: [':rest:'] },
      AppCache: false,
    }),
    new CopyWebpackPlugin([{ from: 'static' }]),
  ],

  performance: {
    assetFilter: assetFilename =>
      !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename)),
  },
})
