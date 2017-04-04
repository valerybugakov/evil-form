import { createAction } from 'redux-act'
import dispatch from 'redux/utils/dispatch'

export const createActionBinded = (value, process, meta) => (
  createAction(value, process, meta).assignTo({ dispatch })
)

export const promisifyAction = (action, payload) => (
  new Promise((resolve, reject) => action(payload, resolve, reject))
)
