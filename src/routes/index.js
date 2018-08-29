import Vue from 'vue'
import Router from 'vue-router'

import CategoryPage from '../pages/Category/CategoryPage'
import BrandPage from '../pages/Brand/BrandPage'
import GoodsAddPage from '../pages/Goods/GoodsAddPage'
import GoodsListPage from '../pages/Goods/GoodsListPage'
import OrderListPage from '../pages/Order/OrderListPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
    },
    {
      path: '/category',
      name: 'CategoryPage',
      component: CategoryPage
    },
    {
      path: '/brand',
      name: 'BrandPage',
      component: BrandPage
    },
    {
      path: '/goods/add',
      name: 'GoodsAddPage',
      component: GoodsAddPage
    },
    {
      path: '/goods/list',
      name: 'GoodsListPage',
      component: GoodsListPage
    },
    {
      path: '/order/list',
      name: 'OrderListPage',
      component: OrderListPage
    }
  ]
})