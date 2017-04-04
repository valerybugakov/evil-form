import { createReducer } from 'redux-act'
import { saveFormSuccess } from './actions'

const initialState = {
  savedForms: [],
}

export default createReducer({
  [saveFormSuccess]: (state, savedForm) => ({
    ...state,
    savedForms: [...state.savedForms, savedForm],
  }),
}, initialState)
