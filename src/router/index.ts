import { createRouter, createWebHashHistory } from 'vue-router'
import LandingView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import EasterEgg from '@/views/EasterEgg.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: LandingView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/easter-egg',
      name: 'EasterEgg',
      component: EasterEgg
    }
  ],
  scrollBehavior(to) {
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
