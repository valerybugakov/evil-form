import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { persistStore } from 'redux-persist'
import 'sanitize.css/sanitize.css'
import 'styles/global'
/* eslint-disable import/no-unresolved */
import '!file-loader?name=[name].[ext]!./manifest.json'
import 'file-loader?name=[name].[ext]!./.htaccess'
/* eslint-enable import/no-unresolved */
import store from 'redux/store'
import Root from 'components/Root'

// Create svg sprite
const svgs = require.context('assets/svg', false, /.*\.svg$/)
svgs.keys().forEach(svgs)

const render = () => {
  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('app')
  )
}

persistStore(store, { blacklist: ['form'] }, render)

if (module.hot) {
  module.hot.accept('components/Root', () => {
    import('components/Root').then(() => render())
  })
}

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install()
}
