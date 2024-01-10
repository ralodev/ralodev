<script lang="ts" setup>
import Portfolio from './home/PortfolioSection.vue'
import Resume from './home/ResumeSection.vue'
import Services from './home/ServicesSection.vue'
import ContactSection from './home/ContactSection.vue'
import IntroductionSection from './about/IntroductionSection.vue'
import TimelineSection from './about/TimelineSection.vue'
</script>

<template>
  <div class="relative">
    <IntroductionSection />
    <TimelineSection />
    <Services />
    <Resume />
    <Portfolio />
    <ContactSection />
  </div>
</template>
