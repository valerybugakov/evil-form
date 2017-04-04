/* flow */
import { createAction } from 'redux-act'
import { identity, noop } from 'lodash/fp'
import { fakeStore } from 'redux/utils/dispatch'

export const INIT = 'init'
export const SUCCESS = 'success'
export const FAILURE = 'failure'

const requestMetaReducer = (actionName, {
  serializer,
  deserializer,
  applySerializerToPayload,
  ...rest
}) => ((payload, resolve = noop, reject = noop) => ({
  resolve,
  reject,
  serializer,
  deserializer,
  type: actionName,
  requestStatus: INIT,
  applySerializerToPayload,
  requestOptions: typeof rest.requestOptions === 'function'
    ? rest.requestOptions(payload)
    : rest,
}))

const createRequestStatusAction = (actionName, status) => (
  createAction(`${actionName} ${status}`, identity, (_, payload) => ({
    type: actionName,
    requestStatus: status,
    ...payload,
  }))
)

export const createRequestActions = ({
  desc: actionName,
  ...metaData
}) => {
  const res = {
    id: actionName,
    [INIT]: createAction(
      `${actionName} ${INIT}`,
      identity,
      requestMetaReducer(actionName, metaData),
    ).assignTo(fakeStore),
  }

  return [SUCCESS, FAILURE].reduce((reqs, type) => {
    reqs[type] = createRequestStatusAction(actionName, type)
    return reqs
  }, res)
}

export const createActionBinded = (value, process, meta) => (
  createAction(value, process, meta).assignTo(fakeStore)
)

export const promisifyAction = (action, payload) => (
  new Promise((resolve, reject) => action(payload, resolve, reject))
)

export function actionsGenerator(actionConfig, path = []) {
  const minimumActionConfig = {
    desc: path.join('.'),
  }

  // Create ordinary action if null provided as config
  if (actionConfig === null) {
    return createActionBinded(minimumActionConfig.desc)
  }

  // Create requestActions if requestOptions or url provided in config
  if (actionConfig.requestOptions || actionConfig.url) {
    return createRequestActions({
      ...minimumActionConfig,
      ...actionConfig,
    })
  }

  // Recursively call actionsGenerator on all config keys
  if (typeof actionConfig === 'object') {
    return Object.entries(actionConfig).reduce((acc, [key, value]) => {
      acc[key] = actionsGenerator(value, [...path, key])
      return acc
    }, {})
  }

  return actionConfig
}
