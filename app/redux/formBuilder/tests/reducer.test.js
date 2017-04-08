import { saveFormSuccess } from '../actions'
import reducer from '../reducer'

describe('formBuidler reducer', () => {
  const existingForm = { id: 1, title: 'Test form' }
  const initialState = { savedForms: { 1: existingForm } }

  it('saves new form not matched by ID', () => {
    const newForm = { id: 2, title: 'New title' }
    const next = reducer(initialState, saveFormSuccess(newForm))
    expect(next).toMatchSnapshot()
  })

  it('updates existing form matched by ID', () => {
    const updatedForm = { id: 1, title: 'New title' }
    const next = reducer(initialState, saveFormSuccess(updatedForm))
    expect(next).toMatchSnapshot()
  })
})
