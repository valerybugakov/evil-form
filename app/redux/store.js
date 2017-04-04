import { get } from 'lodash/fp'
import { autoRehydrate } from 'redux-persist'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { fakeStore } from 'redux/utils/dispatch'
import rootReducer from 'redux/reducer'
import rootSaga from 'redux/sagas'

const sagaMiddleware = createSagaMiddleware()
const initialState = {}
const context = {}

const eventsFilter = () => next => reduxAction => {
  if (get('payload.nativeEvent', reduxAction)) {
    reduxAction.payload = undefined
  }

  next(reduxAction)
}

const enhancers = [
  applyMiddleware(sagaMiddleware, eventsFilter),
  autoRehydrate(),
]

const composeEnhancers = (
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose
)

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(...enhancers),
)

sagaMiddleware.run(rootSaga, context)
store.runSaga = sagaMiddleware.run
store.asyncReducers = {}

// Assign real dispatch for autobinded actions
fakeStore.dispatch = store.dispatch
export const dispatch = store.dispatch

/* istanbul ignore next */
if (module.hot) {
  module.hot.accept('redux/reducer', () => {
    import('redux/reducer').then(reducerModule => {
      const createReducers = reducerModule.default
      const nextReducers = createReducers(store.asyncReducers)

      store.replaceReducer(nextReducers)
    })
  })
}

export default store
