export default {
  root: {
    path: '/',
    name: 'Home',
  },
  about: {
    path: '/about',
    name: 'About',
  },
  article: {
    path: '/blog/:category/:id',
    name: 'Article',
  },
  articles: {
    path: '/blog/:category?',
    name: 'Articles',
  },
  login: {
    path: '/login',
    name: 'Login',
  },
  adminPanel: {
    path: '/admin-panel',
    name: 'AdminPanel',
  },
}
