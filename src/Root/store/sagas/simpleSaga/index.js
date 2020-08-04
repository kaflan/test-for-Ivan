import { call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { SIGN_UP_REQUEST } from '../../constants';

const api = axios.create({
  baseURL: '' // some url
});

function* signIn(action) {
  const { email, password } = action.payload;
  try {
    const response = yield call(api.post('/sign_up', { email, password }));

    console.log(response);
  } catch (error) {
    yield console.error(error);
  }
}

export default function* helloSaga() {
  yield takeLatest(SIGN_UP_REQUEST, signIn);
}
