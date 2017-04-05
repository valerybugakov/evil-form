import { createReducer } from 'redux-act'
import { driverForm } from 'redux/constants'
import { saveFormSuccess } from './actions'

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
