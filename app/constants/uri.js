// import Map from './Map';
const baseApi = process.env.BASE_API;
const URI = {
  AUTH: {
    INDEX: () => `${baseApi}/users`,
    LOGIN: () => `${baseApi}/users/login`,
  },
};
export default URI;
