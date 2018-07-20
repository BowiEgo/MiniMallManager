import Vue from 'vue'
import Router from 'vue-router'

import CategoryPage from '../pages/Category/CategoryPage'
import GoodsAddPage from '../pages/Goods/GoodsAddPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
    },{
      path: '/category',
      name: 'CategoryPage',
      component: CategoryPage
    },
    {
      path: '/goods/add',
      name: 'GoodsAddPage',
      component: GoodsAddPage
    }
  ]
})