/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['../components/page/Home.vue'], resolve),
      children: [
        {
          path: '/menua',
          name: 'MenuA',
          component: resolve => require(['../components/page/MenuA.vue'], resolve),
        },
        {
          path: '/menub',
          name: 'MenuB',
          component: resolve => require(['../components/page/MenuB.vue'], resolve),
        },
      ],
    },
  ],
});
