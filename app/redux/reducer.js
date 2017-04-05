import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import formBuilder from './formBuilder/reducer'

export default combineReducers({
  form,
  formBuilder,
})
