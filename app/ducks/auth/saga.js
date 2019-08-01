import { put, call, takeLatest } from 'redux-saga/effects';

import defaultMessages from '../../constants/defaultMessages';

import types from './types';
import actions from './actions';
import api from './api';

export function* login(action) {
  const {
    payload: { email, password, onSuccess, onFailed },
  } = action;
  try {
    const response = yield call(api.login, { email, password });
    const {
      data: { data },
    } = response;
    const { user } = data;
    const { token, ...rest } = user;
    yield put(actions.setAccessToken(token));
    yield put(actions.setUser({ ...rest }));
    yield call(onSuccess, data);
  } catch (e) {
    const message =
      e.response && e.response.errors
        ? e.response.errors
        : defaultMessages.promiseFailed;
    yield call(onFailed, message);
  }
}

export function* register(action) {
  const {
    payload: { email, password, username, onSuccess, onFailed },
  } = action;
  try {
    const response = yield call(api.register, { email, password, username });
    const {
      data: { data },
    } = response;
    const { user } = data;
    const { token, ...rest } = user;
    yield put(actions.setAccessToken(token));
    yield put(actions.setUser({ ...rest }));
    yield call(onSuccess, data);
  } catch (e) {
    const message =
      e.response && e.response.errors
        ? e.response.errors
        : defaultMessages.promiseFailed;
    yield call(onFailed, message);
  }
}

const authSagas = [
  takeLatest(types.LOGIN, login),
  takeLatest(types.REGISTER, register),
];
export default authSagas;
