import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */
  const middleWares = [sagaMiddleware]; // middleWares
  const enhancer = composeEnhancers(applyMiddleware(...middleWares));
  sagaMiddleware.run(rootSaga);
  return createStore(rootReducer, enhancer);
}
