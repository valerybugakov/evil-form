import { connect } from 'react-redux'
import { formBuilderSelector } from 'redux/formBuilder/selectors'

export const injectBuilderValues = getPaths => connect((state, props) => {
  const paths = typeof getPaths === 'function' ? getPaths(props) : getPaths

  return Object.entries(paths).reduce((injectedValues, [key, path]) => {
    injectedValues[key] = formBuilderSelector(state, path)
    return injectedValues
  }, {})
})

