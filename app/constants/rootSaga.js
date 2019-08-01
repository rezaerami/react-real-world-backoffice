import { all } from 'redux-saga/effects';
import coreSaga from '../ducks/core/saga';

export default function* rootSaga() {
  yield all([...coreSaga]);
}
