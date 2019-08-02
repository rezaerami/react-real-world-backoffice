import { put, call, takeLatest } from 'redux-saga/effects';

import types from './types';
import actions from './actions';

import authActions from '../auth/actions';

export function* initialize() {
  try {
    yield put(actions.loading());
    yield put(actions.finished());
  } catch (e) {
    console.log('err', e);
  }
}

export function* purge(action) {
  const {
    payload: { onSuccess },
  } = action;
  yield put(actions.clearCore());
  yield put(authActions.clearAuth());
  yield call(onSuccess);
}

const coreSagas = [
  takeLatest(types.INITIALIZE, initialize),
  takeLatest(types.PURGE, purge),
];
export default coreSagas;
