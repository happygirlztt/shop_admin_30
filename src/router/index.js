import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'

Vue.use(Router)
const router = new Router({
  routes: [

    {
      path: '/',

      redirect: '/login'
    },
    {
      path: '/login',

      component: Login
    },
    {
      path: '/home',

      component: Home
    }

  ]
})
// 给router对象注册导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
    return
  }
  let token = localStorage.getItem('token')
  if (token) {
    next()
  } else {
    next('/login')
  }
})

export default router
