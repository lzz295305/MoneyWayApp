import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/login')
  },
  {
    path: '/login/rest',
    name: 'login/rest',
    component: () => import('pages/login/rest')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('pages/home'),
    children: [
      {
        path: 'taskDetail/:id',
        name: 'home-taskDetail',
        component: () => import('pages/taskDetail')
      }
    ]
  },
  {
    path: '/skill',
    name: 'skill',
    component: () => import('pages/skill')
  },
  {
    path: '/community',
    name: 'community',
    component: () => import('pages/community')
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import('pages/personal')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('pages/search')
  },
  {
    path: '/skillDetail',
    name: 'skillDetail',
    component: () => import('pages/skillDetail')
  },
  {
    path: '/moreTask',
    name: 'home-moreTask',
    component: () => import('pages/moreTask')
  },
  {
    path: '*',
    redirect: '/home'
  }
];

export default new Router({
  routes
});
