import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/example1',
    name: 'Example1',
    component: () => import(/* webpackChunkName: "about" */ '../views/Example1.vue')
  },
  {
    path: '/example2',
    name: 'Example2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Example2.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
