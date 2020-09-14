import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/login',
    name: 'login',
    component: ()=>import('../pages/login')
    ,
    meta:{
      istrun:false
    },
  }, {
    path: '/home',
    name: 'home',
    component: () => import('../pages/home/home') ,
    meta:{
      istrun:true
    },
  },{
    path: '/cart',
    name: 'cart',
    component: () => import('../pages/cart/cart') ,
    meta:{
      istrun:true
    },
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../pages/news/news') ,
    meta:{
      istrun:true
    },
  },{
    path: '/info',
    name: 'info',
    component: () => import('../pages/info/info') ,
    meta:{
      istrun:true
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
