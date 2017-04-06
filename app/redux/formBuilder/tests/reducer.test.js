import { configureStore } from 'redux/utils/configureStore'
import { saveFormSuccess } from '../actions'
import reducer from '../reducer'

describe('formBuidler reducer', () => {
  let store
  const existingForm = { id: 1, title: 'Test form' }

  beforeEach(() => {
    store = configureStore(reducer, { savedForms: { 1: existingForm } })
  })

  it('saves new form not matched by ID', () => {
    const newForm = { id: 2, title: 'New title' }
    saveFormSuccess(newForm)

    expect(store.getState()).toEqual({
      savedForms: {
        1: existingForm,
        2: newForm,
      },
    })
  })

  it('updates existing form matched by ID', () => {
    const updatedForm = { id: 1, title: 'New title' }
    saveFormSuccess(updatedForm)

    expect(store.getState()).toEqual({
      savedForms: { 1: updatedForm },
    })
  })
})
