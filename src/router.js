import Vue from 'vue';
import Router from 'vue-router';
import { outerWidth } from './testWidth';
import Home from './views/Home.vue';
import HomePhone from './views/HomePhone.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: outerWidth() ? HomePhone : Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
