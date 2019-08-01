const routers = {
  base: '/',
  auth: {
    path: '/auth',
    index: '/auth/:step',
    login: '/auth/login',
    register: '/auth/register',
  },
  articles: {
    index: '/articles/:step?/:placeId?',
    add: '/articles/add',
    list: {
      path: '/articles/list',
      index: '/articles/list/:page',
    },
    edit: {
      base: '/articles/edit/',
      index: '/articles/edit/:placeId',
    },
  },
};
export default routers;
