import { all } from 'redux-saga/effects';
import singIn from './simpleSaga';

export default function* mainSaga() {
  yield all(singIn());
}
