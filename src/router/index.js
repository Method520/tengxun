import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: '首页',
    //   component: index,
    //   redirect: '/home'
    // }
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'index',
      component: index
    }
  ]
})
