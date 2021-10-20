import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Skills from '../views/Skills.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
