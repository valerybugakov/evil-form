import { createReducer } from 'redux-act'
import { fakeStore } from 'redux/utils/dispatch'
import { configureStore } from 'redux/utils/configureStore'

describe('configureStore', () => {
  const initialState = { foo: 'bar' }
  const reducer = createReducer()
  const store = configureStore(reducer, initialState)

  it('returns valid redux-store', () => {
    expect(typeof store.getState).toBe('function')
    expect(typeof store.dispatch).toBe('function')
    expect(typeof store.subscribe).toBe('function')
    expect(typeof store.replaceReducer).toBe('function')
  })

  it('uses provided initialState', () => {
    expect(store.getState()).toEqual(initialState)
  })

  it('assigns real distpatch instead of the fake one', () => {
    expect(fakeStore.dispatch).toBe(store.dispatch)
  })
})
