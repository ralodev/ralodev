<template>
  <section
    id="about"
    name="about"
    class="body__section flex-col"
  >
    <article>
      <!-- Section header -->
      <header class="w-full text-start">
        <h2 class="body__section__title">About me</h2>
      </header>
      <!-- Introduction -->
      <div class="my-auto space-y-3 pb-5 text-start text-base md:text-lg">
        <p>
          Hello 👋, my name is Raúl López. I'm from México. I'm a graduate
          Computer Systems Engineer with a specialization in Emerging
          Technologies and I have
          <strong class="experience__description--highlight"
            >1+ year of experience</strong
          >
          in the field.
        </p>
        <p>
          I'm currently enrolled in the
          <strong class="experience__description--highlight"
            >Oracle Next Education</strong
          >
          program and working as part-time
          <strong class="experience__description--highlight"
            >Full Stack Developer</strong
          >.
        </p>
        <p>
          One of my main achievements is that I've been able to publish a
          scientific research article in a recognized journal indexed by the
          Harvard Library, and I've also won several awards in different
          scientific conferences and programming contests.
        </p>
      </div>
    </article>
    <EducationSection />

    <AchievementsSection />
    <!-- END OF SECTION -->
  </section>
</template>

<script lang="ts" setup>
import EducationSection from '@/components/sections/EducationSection.vue';
import AchievementsSection from '@/components/sections/AchievementsSection.vue';
import SkillsSectionVue from '@/components/sections/SkillsSection.vue';
</script>
