import { Record } from 'immutable';

import {
  SIGN_UP_REQUEST,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_IN_ERROR,
  SIGN_OUT_SUCCESS
} from '../../constants';

const ReducerRecord = Record({
  user: null,
  error: null,
  loading: false
});

const simpleReducer = (state = new ReducerRecord(), action) => {
  const { type, payload, error } = action;
  switch (type) {
    case SIGN_UP_REQUEST:
    case SIGN_IN_REQUEST:
      return state.set('loading', true);

    case SIGN_IN_SUCCESS:
      return state
        .set('loading', false)
        .set('user', payload.user)
        .set('error', null);

    case SIGN_UP_ERROR:
    case SIGN_IN_ERROR:
      return state.set('loading', false).set('error', error);

    case SIGN_OUT_SUCCESS:
      return new ReducerRecord();

    default:
      return state;
  }
};

export default simpleReducer;
