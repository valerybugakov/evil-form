import { createReducer } from 'redux-act'
import { reducer as formReducer } from 'redux-form'
import actions from './actions'

const initialState = {
  values: {
    description: 'Welcome aboard!',
  },
}

const formBuilder = createReducer({
  [actions.test](state) {
    return state
  },
}, initialState)

export default formReducer.plugin({
  formBuilder,
})
