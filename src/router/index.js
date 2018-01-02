import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('components/home/home')
const Me = () => import('components/me/me')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/me',
      component: Me
    }
  ]
})
