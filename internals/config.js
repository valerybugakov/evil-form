const resolve = require('path').resolve
const pullAll = require('lodash/pullAll')
const uniq = require('lodash/uniq')

const ReactBoilerplate = {
  version: '3.4.0',

  dllPlugin: {
    defaults: {

      // exclude deps which are not intended for the browser
      exclude: [
        'chalk',
        'compression',
        'cross-env',
        'express',
        'ip',
        'minimist',
        'sanitize.css',
      ],

      // additional deps here
      include: ['core-js', 'eventsource-polyfill', 'babel-polyfill', 'lodash'],

      // The path where the DLL manifest and bundle will get built
      path: resolve('../node_modules/react-boilerplate-dlls'),
    },

    entry(pkg) {
      const dependencyNames = Object.keys(pkg.dependencies)
      const exclude = (
        pkg.dllPlugin.exclude ||
        ReactBoilerplate.dllPlugin.defaults.exclude
      )
      const include = (
        pkg.dllPlugin.include ||
        ReactBoilerplate.dllPlugin.defaults.include
      )
      const includeDependencies = uniq(dependencyNames.concat(include))

      return {
        reactBoilerplateDeps: pullAll(includeDependencies, exclude),
      }
    },
  },
}

module.exports = ReactBoilerplate
