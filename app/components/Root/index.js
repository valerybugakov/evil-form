import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Redirect } from 'react-router-dom'
import { history } from 'redux/utils'
import FormEditor from 'components/FormEditor'
import SavedForms from 'components/SavedForms'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route exact path="/edit/:formId?" component={FormEditor} />
        <Route exact path="/" component={SavedForms} />
        <Route path="*" render={() => <Redirect to="/" />} />
      </div>
    </Router>
  </Provider>
)

export default Root
