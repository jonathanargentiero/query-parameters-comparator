import Vue from 'vue';
import Router from 'vue-router';
import Comparator from '@/components/Comparator';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Comparator',
      component: Comparator,
    },
  ],
});
