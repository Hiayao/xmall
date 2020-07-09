import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    redirec: '/'
  },
  {
    path: '/',
    component: Layout,
    children: [

      // 首页
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
          title: '首页'
        }
      },
       // 全部
       {
        path: '/all',
        name: 'All',
        component: () => import('../views/All'),
        meta: {
          title: '全部'
        }
      },
    ]
  },
  // 注册
  {
    path:'/register',
    name:'Register',
    component: () => import('../views/Register.vue')
  },
  // 登录
  {
    path:'/login',
    name:'Login',
    component: () => import('../views/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 避免冗余路由
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
