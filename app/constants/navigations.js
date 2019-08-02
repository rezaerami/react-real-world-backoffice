import routers from './routers';

const navigations = {
  items: [
    {
      name: 'Articles',
      url: routers.articles.list.path,
      icon: 'icon-list',
      children: [
        {
          name: 'List',
          url: routers.articles.list.path,
          icon: 'icon-list',
        },
        {
          name: 'Add',
          url: routers.articles.add,
          icon: 'icon-pencil',
        },
      ],
    },
  ],
};
export default navigations;
