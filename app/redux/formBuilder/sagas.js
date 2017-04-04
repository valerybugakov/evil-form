import { uniqueId } from 'lodash/fp'
import { takeLatest } from 'redux-saga'
import { redirect } from 'redux/utils/redirect'
import { saveForm, saveFormSuccess, saveFormFailure } from './actions'

function* onFormSave({ payload, meta = {} }) {
  try {
    // Emulate backend request
    yield new Promise(resolve => {
      const formData = { id: uniqueId('form'), ...payload }
      console.log('Saving to redux state:', formData)
      saveFormSuccess(formData)

      if (meta.resolve) meta.resolve(formData)
      resolve(formData)
      redirect('/forms')
    })
  } catch (err) {
    if (meta.reject) meta.reject(err)
    saveFormFailure(err)
  }
}

export default function* formBuilderSaga() {
  yield [
    takeLatest(saveForm.getType(), onFormSave),
  ]
}
