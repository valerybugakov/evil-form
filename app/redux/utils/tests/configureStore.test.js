import { configureStore, fakeStore } from 'redux/utils'

describe('configureStore', () => {
  it('assigns real distpatch instead of a fake one', () => {
    const store = configureStore()
    expect(fakeStore.dispatch).toEqual(store.dispatch)
  })
})
