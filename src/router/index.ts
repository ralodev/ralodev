import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/HomeView.vue'
import SgipView from '@/views/projects/SgipView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: LandingView
    },
    {
      path: '/projects/SGIP',
      name: 'SGIP',
      component: SgipView
    },
    {
      path: '/404',
      name: '404',
      component: LandingView
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // if coming from SGIP page, scroll to project section
    if (from.name === 'SGIP' && savedPosition) {
      return {
        el: '#projects',
        behavior: 'smooth'
      }
    }
    // if link has anchor, scroll to anchor
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    // else scroll to top
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router
