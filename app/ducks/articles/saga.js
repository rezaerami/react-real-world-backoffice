import { call, takeLatest } from 'redux-saga/effects';

import types from './types';
import api from './api';
import Helpers from '../../utils/Helpers';

export function* getArticles(action) {
  const {
    payload: { offset, onSuccess, onFailed },
  } = action;
  try {
    const response = yield call(api.getArticles, { offset });
    const {
      data: { articles },
    } = response;
    yield call(onSuccess, articles);
  } catch (e) {
    yield call(onFailed, Helpers.promiseFailed(e));
  }
}
export function* getArticle(action) {
  const {
    payload: { slug, onSuccess, onFailed },
  } = action;
  try {
    const response = yield call(api.getArticle, { slug });
    const {
      data: { articles },
    } = response;
    yield call(onSuccess, articles[0]);
  } catch (e) {
    yield call(onFailed, Helpers.promiseFailed(e));
  }
}
export function* addArticle(action) {
  const {
    payload: { title, description, body, tagList, onSuccess, onFailed },
  } = action;
  try {
    const response = yield call(api.addArticle, {
      title,
      description,
      body,
      tagList,
    });
    const {
      data: { articles },
    } = response;
    yield call(onSuccess, articles[0]);
  } catch (e) {
    yield call(onFailed, Helpers.promiseFailed(e));
  }
}
export function* editArticle(action) {
  const {
    payload: { slug, title, description, body, tagList, onSuccess, onFailed },
  } = action;
  try {
    const response = yield call(api.editArticle, {
      slug,
      title,
      description,
      body,
      tagList,
    });
    const {
      data: { articles },
    } = response;
    yield call(onSuccess, articles[0]);
  } catch (e) {
    yield call(onFailed, Helpers.promiseFailed(e));
  }
}
export function* deleteArticle(action) {
  const {
    payload: { slug, onSuccess, onFailed },
  } = action;
  try {
    yield call(api.editArticle, { slug });
    yield call(onSuccess);
  } catch (e) {
    yield call(onFailed, Helpers.promiseFailed(e));
  }
}

const placesSagas = [
  takeLatest(types.GET_ARTICLES, getArticles),
  takeLatest(types.GET_ARTICLE, getArticle),
  takeLatest(types.ADD_ARTICLE, addArticle),
  takeLatest(types.EDIT_ARTICLE, editArticle),
  takeLatest(types.DELETE_ARTICLE, deleteArticle),
];
export default placesSagas;
