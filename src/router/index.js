import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import TestView from '../views/TestView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: LandingView
    },
    {
      path: '/blog',
      name: 'Blog',
      component: BlogView
    },
    {
      path: '/test',
      name: 'test',
      component: TestView
    }
    ,
    {
      path: '/about',
      name: 'About',
      component: AboutView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return {
        top: 0,
        behavior: 'smooth'
      }
    }
  },
})

export default router
