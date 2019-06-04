import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Signup from '../pages/Signup'
import Signin from '../pages/Signin'
import Information from '../pages/Information'
import CompanyList from '../pages/CompanyList'
import CompanyDetail from '../pages/CompanyDetail'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/Signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/Information',
      component: Information,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/CompanyList',
      component: CompanyList
    },
    {
      path: '/CompanyList/:keyword',
      name: CompanyDetail,
      component: CompanyDetail,
      props: true
    }
  ]
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/Signin') {
    next()
  } else {
    let token = localStorage.getItem('Authorization')
    console.log(token)
    if (to.meta.requiresAuth) {
      if (token) {
        next()
      } else {
        next({
          path: '/Signin'
          // query: {redirect: to.fullPath} // 将刚刚要去的路由path作为参数，方便登录成功后直接跳转到该路由
        })
      }
    } else {
      next()
    }
  }
})

export default router
