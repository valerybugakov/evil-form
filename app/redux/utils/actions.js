import { identity } from 'lodash/fp'
import { createAction } from 'redux-act'
import dispatch from 'redux/utils/dispatch'

export const createActionBinded = (
  value,
  process = identity,
  meta = (_, metaData) => metaData,
) => (
  createAction(value, process, meta).assignTo({ dispatch })
)

export const promisifyAction = (action, payload) => (
  new Promise((resolve, reject) => action(payload, { resolve, reject }))
)
