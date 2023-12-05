<script lang="ts" setup>
import About from './home/AboutSection.vue'
import Home from './home/HomeSection.vue'
import Portfolio from './home/PortfolioSection.vue'
import Resume from './home/ResumeSection.vue'
import Services from './home/ServicesSection.vue'
import ContactSection from './home/ContactSection.vue'
</script>

<template>
  <div>
    <Home />
    <div class="relative">
      <div class="absolute bg-grid inset-0"></div>
      <Services />
      <About />
      <Resume />
      <Portfolio />
      <ContactSection />
    </div>
  </div>
</template>
