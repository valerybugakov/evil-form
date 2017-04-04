import { createReducer } from 'redux-act'
import { reducer as formReducer } from 'redux-form'
import actions from './actions'

export const initialValues = {
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
      options: ['Yes', 'No'],
    },
    {
      type: 'checkbox',
      title: 'Where do you want to work?',
      options: ['Berkeley', 'Oakland', 'San Mateo'],
    },
    {
      type: 'select',
      title: 'What truck do you want?',
      options: ['Ford', 'BMW', 'AvtoVAZ', 'Tesla'],
    },
    {
      type: 'file',
      title: 'What map will you use?',
    },
    {
      type: 'textarea',
      title: 'Describe your work day?',
    },
  ],
}

const formBuilder = createReducer({
  [actions.test](state) {
    return state
  },
})

export default formReducer.plugin({
  formBuilder,
})
