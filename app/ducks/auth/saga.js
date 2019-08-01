import { put, call, takeLatest } from 'redux-saga/effects';

import types from './types';
import actions from './actions';
import api from './api';
import Helpers from '../../utils/Helpers';

export function* login(action) {
  const {
    payload: { email, password, onSuccess, onFailed },
  } = action;
  try {
    const response = yield call(api.login, { email, password });
    const {
      data: { user },
    } = response;
    const { token, ...rest } = user;
    yield put(actions.setAccessToken(token));
    yield put(actions.setUser({ ...rest }));
    yield call(onSuccess, user);
  } catch (e) {
    yield call(onFailed, Helpers.promiseFailed(e));
  }
}

export function* register(action) {
  const {
    payload: { email, password, username, onSuccess, onFailed },
  } = action;
  try {
    const response = yield call(api.register, { email, password, username });
    const {
      data: { user },
    } = response;
    const { token, ...rest } = user;
    yield put(actions.setAccessToken(token));
    yield put(actions.setUser({ ...rest }));
    yield call(onSuccess, user);
  } catch (e) {
    yield call(onFailed, Helpers.promiseFailed(e));
  }
}

const authSagas = [
  takeLatest(types.LOGIN, login),
  takeLatest(types.REGISTER, register),
];
export default authSagas;
