import { createReducer } from 'redux-act'
import { reducer as formReducer } from 'redux-form'
import actions from './actions'

const initialState = {
  values: {
    title: 'San Francisco Driver Form',
    description: 'Welcome aboard!',
    fields: [
      {
        type: 'text',
        title: 'SSN',
        required: true,
      },
      {
        type: 'radio',
        title: 'Have you driven a car before?',
      },
      {
        type: 'checkbox',
        title: 'Where do you want to work?',
      },
      {
        type: 'select',
      },
      {
        type: 'file',
      },
      {
        type: 'textarea',
      },
    ],
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
