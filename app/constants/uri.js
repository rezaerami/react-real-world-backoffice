// import Map from './Map';
const baseApi = process.env.BASE_API;
const URI = {
  AUTH: {
    INDEX: () => `${baseApi}/users`,
    LOGIN: () => `${baseApi}/users/login`,
  },
  ARTICLES: {
    INDEX: () => `${baseApi}/articles`,
    LIST: ({ offset, limit }) =>
      `${baseApi}/articles?offset=${offset}&limit=${limit}`,
    SINGLE: ({ slug }) => `${baseApi}/articles/${slug}`,
  },
  TAGS: {
    INDEX: () => `${baseApi}/tags`,
  },
};
export default URI;
