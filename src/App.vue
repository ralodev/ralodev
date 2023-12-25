<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'

onMounted(() => {
  document.body.classList.add('dark:bg-dbg', 'bg-lbg')
})

const links = [
  {
    name: 'Home',
    hash: '#home',
    label: 'Home'
  },
  {
    name: 'Home',
    hash: '#about',
    label: 'About'
  },
  {
    name: 'Home',
    hash: '#projects',
    label: 'Projects'
  },
  {
    name: 'Home',
    hash: '#contact',
    label: 'Contact'
  }
]
</script>

<template>
  <header>
    <NavBar :links="links" />
  </header>
  <RouterView />
  <FooterBar />
</template>
