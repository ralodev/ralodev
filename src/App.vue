<script setup lang="ts">
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
import NavBar from './components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';

onMounted(() => {
  document.body.classList.add('dark:bg-bg_dark', 'bg-bg');
});

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

<template>
  <div class="relative">
    <div
      class="absolute -top-20 bottom-0 z-[-2] min-h-screen w-full dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
    ></div>
  </div>
  <header class="relative">
    <NavBar :links="links" />
  </header>
  <RouterView class="mx-auto mt-[80px] max-w-[1000px]" />
  <FooterBar />
</template>
