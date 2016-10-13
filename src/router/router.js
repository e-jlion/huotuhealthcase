export default (router) => router[{
  '/': {
    name: 'index',
    component: require('../views/circle'),
  },

  '/attention': {
    name: 'attention',
    component: require('../views/attention'),
  },

  '/science': {
    name: 'science',
    component: require('../views/science'),
  },
}];
