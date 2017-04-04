import { fork } from 'redux-saga/effects'
import formBuilder from './formBuilder/sagas'

export default function* rootSaga() {
  yield [
    fork(formBuilder),
  ]
}
