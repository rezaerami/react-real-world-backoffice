import { all } from 'redux-saga/effects';
import coreSaga from '../ducks/core/saga';
import authSaga from '../ducks/auth/saga';
import articlesSaga from '../ducks/articles/saga';
import tagsSaga from '../ducks/tags/saga';

export default function* rootSaga() {
  yield all([...coreSaga, ...authSaga, ...articlesSaga, ...tagsSaga]);
}
