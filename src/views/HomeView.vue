<script lang="ts" setup>
import Projects from './home/ProjectsSection.vue'
import About from './home/AboutSection.vue'
import Services from './home/ServicesSection.vue'
import Contact from './home/ContactSection.vue'
import Introduction from './home/IntroductionSection.vue'
import Experience from './home/ExperienceSection.vue'
</script>

<template>
  <div class="relative">
    <Introduction />
    <Experience />
    <Services />
    <About />
    <Projects />
    <Contact />
  </div>
</template>
