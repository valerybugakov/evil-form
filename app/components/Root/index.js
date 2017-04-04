import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import { history } from 'redux/store'
import FormEditor from 'components/FormEditor'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Route exact path="/" component={FormEditor} />
    </Router>
  </Provider>
)

export default Root
