import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Signup from '../pages/Signup'
import Signin from '../pages/Signin'
import Information from '../pages/Information'

Vue.use(Router)

export default new Router({
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
      component: Information
    }
  ]
})
