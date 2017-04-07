import { createReducer } from 'redux-act'
import { configureStore } from '../configureStore'
import { createActionBinded, promisifyAction } from '../actions'

describe('action utils', () => {
  describe('createActionBinded', () => {
    it('creates action with already binded dispatch', () => {
      const testAction = createActionBinded()

      const reducer = createReducer({
        [testAction]: (state, payload) => ({
          value: state.value + payload,
        }),
      })

      const store = configureStore(reducer, { value: 0 })

      testAction(7)
      expect(store.getState()).toEqual({ value: 7 })
    })
  })

  describe('promisifyAction', () => {
    it('wraps action into a promise with resolve fn in meta', async () => {
      const testAction = createActionBinded()

      const reducer = createReducer({
        [testAction]: (state, payload, { resolve }) => {
          const value = state.value + payload
          resolve(value)
          return { value }
        },
      })

      const store = configureStore(reducer, { value: 0 })
      const value = await promisifyAction(testAction, 7)

      expect(value).toEqual(7)
      expect(store.getState()).toEqual({ value: 7 })
    })
  })
})
