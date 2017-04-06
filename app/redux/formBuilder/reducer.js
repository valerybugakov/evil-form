import { createReducer } from 'redux-act'
import { saveFormSuccess } from './actions'

const driverForm = {
  id: new Date().valueOf(),
  updatedAt: new Date().valueOf(),
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

const initialState = {
  savedForms: {
    [driverForm.id]: driverForm,
  },
}

export default createReducer({
  [saveFormSuccess]: (state, savedForm) => ({
    ...state,
    savedForms: {
      ...state.savedForms,
      ...{
        [savedForm.id]: savedForm,
      },
    },
  }),
}, initialState)
