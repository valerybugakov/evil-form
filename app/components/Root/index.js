import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Router, Route, Redirect } from 'react-router-dom'
import { history } from 'redux/utils'
import Header from 'components/Header'
import FormEditor from 'components/FormEditor'
import SavedForms from 'components/SavedForms'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/forms/*" component={FormEditor} />
          <Route exact path="/" component={SavedForms} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </Router>
  </Provider>
)

export default Root
