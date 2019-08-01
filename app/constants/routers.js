const routers = {
  base: '/',
  auth: {
    path: '/auth',
    index: '/auth/:step',
    login: '/auth/login',
    register: '/auth/register',
  },
  articles: {
    index: '/articles/:step?/:param?',
    add: '/articles/add',
    list: {
      path: '/articles/list',
      index: '/articles/list/:param',
    },
    edit: {
      path: '/articles/edit/',
      index: '/articles/edit/:param',
    },
  },
};
export default routers;
