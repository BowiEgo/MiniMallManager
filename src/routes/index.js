import Vue from 'vue'
import Router from 'vue-router'

import GoodsAddPage from '../pages/Goods/GoodsAddPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
    },
    {
      path: '/goods/add',
      name: 'GoodsAddPage',
      component: GoodsAddPage
    }
  ]
})