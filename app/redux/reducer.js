import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import formBuilder from './formBuilder/reducer'

const rootReducer = combineReducers({
  form,
  formBuilder,
})

export default rootReducer
