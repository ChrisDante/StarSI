import Vue from 'vue'
import Router from 'vue-router'
import Select from '@/components/Select';
import Finish from '@/components/Finish';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Select',
      component: Select
    },
    {
      path: '/finish',
      name: 'Finish',
      component: Finish
    }
  ]
})
