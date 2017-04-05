import { takeLatest } from 'redux-saga'
import { redirect } from 'redux/utils/redirect'
import { saveForm, saveFormSuccess, saveFormFailure } from './actions'

function* onFormSave({ payload, meta = {} }) {
  try {
    // Emulate backend request
    yield new Promise(resolve => {
      // ID would come from the server, so just for a demo
      // we use unix timestamp as an ID :)
      const timestamp = new Date().valueOf()
      const formData = {
        id: timestamp,
        updatedAt: timestamp,
        ...payload,
      }

      saveFormSuccess(formData)

      if (meta.resolve) meta.resolve(formData)
      resolve(formData)
      redirect('/')
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
