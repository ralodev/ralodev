<script lang="ts" setup>
import Projects from './home/ProjectsSection.vue';
import About from './home/AboutSection.vue';
import Contact from './home/ContactSection.vue';
import HeroSection from './home/HeroSection.vue';
import Experience from './home/ExperienceSection.vue';
</script>

<template>
  <div class="relative">
    <HeroSection />
    <Experience />
    <Projects />
    <About />
    <Contact />
  </div>
</template>
