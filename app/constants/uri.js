// import Map from './Map';
const baseApi = process.env.BASE_API;
const URI = {
  AUTH: {
    INDEX: () => `${baseApi}/users`,
    LOGIN: () => `${baseApi}/users/login`,
  },
  ARTICLES: {
    INDEX: ({ offset = false }) =>
      `${baseApi}/articles${offset ? `?offset=${offset}` : ''}`,
    SINGLE: ({ slug }) => `${baseApi}/articles/${slug}`,
  },
};
export default URI;
