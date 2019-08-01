import { call, takeLatest } from 'redux-saga/effects';

import types from './types';
import api from './api';
import Helpers from '../../utils/Helpers';

export function* getTags(action) {
  const {
    payload: { onSuccess, onFailed },
  } = action;
  try {
    const response = yield call(api.getTags);
    const {
      data: { tags },
    } = response;
    yield call(onSuccess, tags);
  } catch (e) {
    yield call(onFailed, Helpers.promiseFailed(e));
  }
}

const placesSagas = [takeLatest(types.GET_TAGS, getTags)];
export default placesSagas;
