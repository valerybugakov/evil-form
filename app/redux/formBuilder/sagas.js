import { call } from 'redux-saga/effects'
import { takeLatest, delay } from 'redux-saga'
import { redirect } from 'redux/utils/redirect'
import { saveForm, saveFormSuccess, saveFormFailure } from './actions'

export function* backendRequest(payload) {
  yield call(delay, 100)

  // ID would come from the server, so just for a demo
  // we use unix timestamp as an ID :)
  const timestamp = new Date().valueOf()
  return ({
    id: timestamp,
    ...payload,
    updatedAt: timestamp,
  })
}

export function* onFormSave({ payload, meta = {} }) {
  try {
    // Emulate save form backend request
    const formData = yield call(backendRequest, payload)
    yield call(saveFormSuccess, formData)

    if (meta.resolve) yield call(meta.resolve, formData)
    yield call(redirect, '/')
  } catch (err) {
    if (meta.reject) yield call(meta.reject, err)
    yield call(saveFormFailure, err)
  }
}

export default function* formBuilderSaga() {
  yield [
    takeLatest(saveForm.getType(), onFormSave),
  ]
}
