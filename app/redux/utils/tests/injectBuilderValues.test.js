import React from 'react'
import { createStore } from 'redux'
import TestUtils from 'react-addons-test-utils'
import { ProviderMock, Passthrough } from 'mocks'
import { injectBuilderValues } from '../injectBuilderValues'

const renderTestComponents = injectConfig => {
  const store = createStore(() => ({
    form: {
      formBuilder: {
        values: {
          foo: 'bar',
          baz: 42,
          hello: 'world',
        },
      },
    },
  }))

  const ContainerComponent = props => <Passthrough {...props} />
  const Container = injectBuilderValues(injectConfig)(ContainerComponent)

  return TestUtils.renderIntoDocument(
    <ProviderMock store={store}>
      <Container pathForConnector="hello" baz={50} />
    </ProviderMock>
  )
}

describe('injectBuilderValues', () => {
  it('returns correct connector with object config', () => {
    const container = renderTestComponents({ foo: 'foo', baz: 'baz' })
    const stub = TestUtils.findRenderedComponentWithType(container, Passthrough)
    expect(stub.props.foo).toEqual('bar')
    expect(stub.props.baz).toEqual(42)
    expect(stub.props.hello).toEqual(undefined)
  })


  it('returns correct connector with function config', () => {
    const container = renderTestComponents(({ pathForConnector }) => ({
      foo: 'foo',
      [pathForConnector]: pathForConnector,
    }))
    const stub = TestUtils.findRenderedComponentWithType(container, Passthrough)
    expect(stub.props.foo).toEqual('bar')
    expect(stub.props.baz).toEqual(50)
    expect(stub.props.hello).toEqual('world')
  })
})
