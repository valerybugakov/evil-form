/* eslint-disable react/prefer-stateless-function, react/no-multi-comp */
import React, { Component, Children, PropTypes } from 'react'

export class Passthrough extends Component {
  render() {
    return <div />
  }
}

export class ProviderMock extends Component {
  getChildContext() {
    return { store: this.props.store }
  }

  render() {
    return Children.only(this.props.children)
  }
}

ProviderMock.childContextTypes = {
  store: PropTypes.object.isRequired,
}
