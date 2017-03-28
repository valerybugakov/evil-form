import { connect } from 'react-redux'
import { formBuilderSelector } from 'redux/form/selectors'

export const injectBuilderValues = getPaths => connect((state, props) => {
  const paths = typeof getPaths === 'function' ? getPaths(props) : getPaths

  return Object.entries(paths).reduce((injectedValues, [key, path]) => {
    injectedValues[key] = formBuilderSelector(state, path)
    return injectedValues
  }, {})
})

export * from './actions'
export * from './sagas'
