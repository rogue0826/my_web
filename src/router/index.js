import Vue from 'vue'
import VueRouter from 'vue-router'

import IndexPage from '@/page/IndexPage'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/indexPage'
},
{
  path: '/indexPage',
  component: IndexPage
},
]


const router = new VueRouter({
  mode: 'history',
  routes
})

// 4.向外共享路由的实例对象
export default router
