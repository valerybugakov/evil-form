import {
  transduce,
  compose,
  map,
  ifElse,
  identity,
  filter,
  prop,
  flip,
  append,
} from 'ramda'
import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import request from 'redux/request'

export function* fetchEntity(
  actions,
  { payload: initialPayload = {}, meta = {} } = {},
) {
  const { failure, success } = actions
  const payload = initialPayload

  const {
    resolve,
    reject,
    requestOptions,
    serializer = identity,
  } = meta

  try {
    const resp = yield call(request, {
      ...requestOptions,
      data: serializer(payload),
    })

    if (resolve) resolve(resp)
    yield put(success(resp))
  } catch ({ response, message, stack }) {
    const error = { message, stack, ...response }
    if (reject) reject(error)
    yield put(failure(error))
    console.error(error) // eslint-disable-line
  }
}

export function bindFetcher(actions) {
  const fetch = fetchEntity.bind(null, actions)
  return takeLatest(actions.init.getType(), fetch)
}

export const bindOnlyRequestActions = actions => transduce(compose(
  filter(v => typeof v === 'object'),
  map(ifElse(prop('init'), bindFetcher, bindOnlyRequestActions)),
), flip(append), [], Object.values(actions))
