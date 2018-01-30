import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    }
    // {
    //   path: '/user',
    //   name: 'user',
    //   component: MyUser
    // },
    // {
    //   path: '/recommend',
    //   name: 'recommend',
    //   component: MyRecommend,
    //   children: [
    //     {
    //       path: ':id',
    //       name: 'songlistdetail',
    //       component: MySongListDetail
    //     }
    //   ]
    // }
  ]
})
