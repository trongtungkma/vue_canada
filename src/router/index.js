import Vue from 'vue'
import Router from 'vue-router'
import s0100 from '../views/s0100.vue';
import s1000 from '../views/s1000.vue'
import s3000 from '../views/s3000.vue';
import s3100 from '../views/s3100.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/0100'
    },
    {
      path: '/0100',
      name: 's0100',
      component: s0100
    },
    {
      path: '/1000',
      name: 's1000',
      component: s1000
    },
    {
      path: '/3000',
      name: 's3000',
      component: s3000
    },
    {
      path: '/3100',
      name: 's3100',
      component: s3100
    }
  ]
})
