import axios from 'axios';

import axiosConfig from '../../utils/axiosConfig';
import URI from '../../constants/uri';

const api = {
  getArticles({ offset, limit }) {
    const url = URI.ARTICLES.LIST({ offset, limit });
    const config = axiosConfig({
      url,
      method: 'get',
    });
    return axios(config);
  },
  getArticle({ slug }) {
    const url = URI.ARTICLES.SINGLE({ slug });
    const config = axiosConfig({
      url,
      method: 'get',
    });
    return axios(config);
  },
  deleteArticle({ slug }) {
    const url = URI.ARTICLES.SINGLE({ slug });
    const config = axiosConfig({
      url,
      method: 'delete',
    });
    return axios(config);
  },
  addArticle({ title, description, body, tagList }) {
    const url = URI.ARTICLES.INDEX();
    const config = axiosConfig({
      url,
      method: 'post',
      data: {
        article: {
          title,
          description,
          body,
          tagList,
        },
      },
    });
    return axios(config);
  },
  editdArticle({ slug, title, description, body, tagList }) {
    const url = URI.ARTICLES.SINGLE({ slug });
    const config = axiosConfig({
      url,
      method: 'put',
      data: {
        article: {
          title,
          description,
          body,
          tagList,
        },
      },
    });
    return axios(config);
  },
};

export default api;
