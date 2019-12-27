import { takeLatest, call, put, select } from 'redux-saga/effects';
import {
  signIn,
} from 'services/api/auth-service';
import * as actions from './actions';
import AuthRequest from 'models/request/auth-request';
import { RestResult } from 'models/response/rest-result';
import { AuthResponse } from 'models/response/auth-response';
import ActionTypes from './constants';

export function* requestSignIn() {
  const request: AuthRequest = {
    username: 'thint',
    password: '123456',
  };
  try {
    const result: AuthResponse = yield call(signIn, request);
    console.log('-----', result);
    yield put(actions.signInSuccess());

  } catch (err) {
    console.log('err: ', err);
  }
}

export default function* authenticationSaga() {
  yield takeLatest(ActionTypes.SIGN_IN, requestSignIn);
}
