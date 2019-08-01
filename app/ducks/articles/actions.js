import types from './types';

const actions = {
  getArticles: payload => ({
    type: types.GET_ARTICLES,
    payload,
  }),
  getArticle: payload => ({
    type: types.GET_ARTICLE,
    payload,
  }),
  addArticle: payload => ({
    type: types.ADD_ARTICLE,
    payload,
  }),
  editArticle: payload => ({
    type: types.EDIT_ARTICLE,
    payload,
  }),
  deleteArticle: payload => ({
    type: types.DELETE_ARTICLE,
    payload,
  }),
};
export default actions;
