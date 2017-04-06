import { redirect } from 'redux/utils/redirect'
import { call } from 'redux-saga/effects'
import { saveFormSuccess } from '../actions'
import { onFormSave, backendRequest } from '../sagas'

describe('formBuidler saga', () => {
  let stepResult
  const payload = { foo: 'bar' }
  const meta = { resolve: () => {} }

  describe('saves form successfully', () => {
    const onSaveGenerator = onFormSave({ payload, meta })

    beforeEach(() => {
      stepResult = onSaveGenerator.next(payload).value
    })

    it('calls `backendRequest` with form payload', () => {
      expect(stepResult).toEqual(call(backendRequest, payload))
    })

    it('saves form to redux-store', () => {
      expect(stepResult).toEqual(call(saveFormSuccess, payload))
    })

    it('resolves meta function provided by action', () => {
      expect(stepResult).toEqual(call(meta.resolve, payload))
    })

    it('redirects to root url on success', () => {
      expect(stepResult).toEqual(call(redirect, '/'))
    })
  })
})
