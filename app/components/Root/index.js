import React from 'react'
import { Provider } from 'react-redux'
import styled from 'styled-components'
import { Switch, Router, Route, Redirect } from 'react-router-dom'
import { history } from 'redux/utils'
import { media } from 'styles'
import Header from 'components/Header'
import FormEditor from 'components/FormEditor'
import SavedForms from 'components/SavedForms'

const AppWrapper = styled.div`
  padding-top: 64px;

  ${media.upToPhone`
    padding-top: 0;
  `}
`

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <AppWrapper>
        <Header />
        <Switch>
          <Route exact path="/forms/*" component={FormEditor} />
          <Route exact path="/" component={SavedForms} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </AppWrapper>
    </Router>
  </Provider>
)

export default Root
