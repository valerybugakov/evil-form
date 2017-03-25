const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const logger = require('../../server/logger')
const cheerio = require('cheerio')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const pkg = require(path.resolve(process.cwd(), 'package.json'))
const dllPlugin = pkg.dllPlugin

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new HtmlWebpackPlugin({
    inject: true,
    templateContent: templateContent(), // eslint-disable-line
  }),
  new CircularDependencyPlugin({
    exclude: /a\.js|node_modules/, // exclude node_modules
    failOnError: false, // show a warning when there is a circular dependency
  }),
  new CopyWebpackPlugin([{ from: 'static' }]),
]

module.exports = require('./webpack.base.babel')({
  devtool: 'eval',

  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=false',
    path.join(process.cwd(), 'app/index.js'),
  ],

  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  // eslint-disable-next-line no-use-before-define
  plugins: dependencyHandlers().concat(plugins),

  babelQuery: {
    // require.resolve solves the issue of relative presets when dealing with
    // locally linked packages. This is an issue with babel and webpack.
    // See https://github.com/babel/babel-loader/issues/149 and
    // https://github.com/webpack/webpack/issues/1866
    presets: ['babel-preset-react-hmre'].map(require.resolve),
  },

  performance: {
    hints: false,
  },
})

/**
 * Select which plugins to use to optimize the bundle's handling of
 * third party dependencies.
 *
 * If there is a dllPlugin key on the project's package.json, the
 * Webpack DLL Plugin will be used.  Otherwise the CommonsChunkPlugin
 * will be used.
 *
 */
function dependencyHandlers() {
  // Don't do anything during the DLL Build step
  if (process.env.BUILDING_DLL) { return [] }

  // If the package.json does not have a dllPlugin property,
  // use the CommonsChunkPlugin
  if (!dllPlugin) {
    return [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        children: true,
        minChunks: 2,
        async: true,
      }),
    ]
  }

  const dllPath = path.resolve(
    process.cwd(),
    dllPlugin.path || 'node_modules/react-boilerplate-dlls'
  )

  if (!dllPlugin.dlls) {
    const manifestPath = path.resolve(dllPath, 'reactBoilerplateDeps.json')

    if (!fs.existsSync(manifestPath)) {
      logger.error('Please run `npm run build:dll`')
      process.exit(0)
    }

    return [
      new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require(manifestPath), // eslint-disable-line global-require
      }),
    ]
  }

  // If DLLs are explicitly defined,
  // we automatically create a DLLReferencePlugin for each of them.
  const dllManifests = Object.keys(
    dllPlugin.dlls).map(name => path.join(dllPath, `/${name}.json`)
  )

  return dllManifests.map(manifestPath => {
    if (!fs.existsSync(path)) {
      if (!fs.existsSync(manifestPath)) {
        logger.error(`DLL manifest is missing: ${path.basename(manifestPath)}`)
        logger.error(`Expected to find it in ${dllPath}`)
        logger.error('Please run: npm run build:dll')

        process.exit(0)
      }
    }

    return new webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest: require(manifestPath), // eslint-disable-line global-require
    })
  })
}

function templateContent() {
  const html = fs.readFileSync(
    path.resolve(process.cwd(), 'app/index.html')
  ).toString()

  if (!dllPlugin) { return html }

  const doc = cheerio(html)
  const body = doc.find('body')
  const dllNames = !dllPlugin.dlls
    ? ['reactBoilerplateDeps']
    : Object.keys(dllPlugin.dlls)

  dllNames.forEach(dllName =>
    body.append(`<script data-dll='true' src='/${dllName}.dll.js'></script>`)
  )

  return doc.toString()
}
