<template>
  <header class="body__header">
    <NavBar :links="links" />
  </header>
  <main class="body__main">
    <RouterView />
  </main>
  <FooterBar />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';
const links = [
  {
    name: 'Home',
    label: 'Home'
  },
  {
    name: 'Home',
    hash: '#experience',
    label: 'Experience'
  },
  {
    name: 'Home',
    hash: '#projects',
    label: 'Projects'
  },
  {
    name: 'Home',
    hash: '#about',
    label: 'About'
  },
  {
    name: 'Home',
    hash: '#contact',
    label: 'Contact'
  }
];
</script>
