<template>
  <!-- Education section -->
  <CollapsiblePanel
    header="Education"
    toggleable
    :collapsed="false"
  >
    <template #icon>
      <svg
        class="my-auto mr-2 h-8 w-8"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          stroke="none"
          d="M0 0h24v24H0z"
          fill="none"
        />
        <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
        <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
      </svg>
    </template>
    <!-- tecnm -->
    <div class="flex">
      <a
        class="relative hidden h-[90px] w-[90px] md:me-2 md:flex"
        href="http://www.oaxaca.tecnm.mx/"
        target="_blank"
      >
        <img
          :src="tecnm"
          alt="Technological Institute Of Oaxaca"
          class="m-auto h-[60px] w-[60px]"
        />
      </a>
      <span class="w-full">
        <p class="experience__title">
          Bachelor's Degree in Computer Systems Engineering
        </p>
        <time class="experience__time">Aug 2018 - Jul 2023</time>
        <p class="experience__company">@ Technological Institute Of Oaxaca</p>
      </span>
    </div>
    <p class="experience__description">
      I'm a graduate Computer Systems Engineer with a specialization in Emerging
      Technologies. In my career, I learned about the fundamentals of computer
      science, software development, and emerging technologies such as
      Artificial Intelligence, Augmented Reality, and Virtual Reality.
    </p>
    <!-- oracle -->
    <div class="mt-5 flex">
      <a
        class="hidden h-[90px] w-[90px] md:me-2 md:flex"
        href="https://oracle.com/lad/one"
        target="_blank"
      >
        <img
          :src="one"
          alt="Oracle Next Education"
          class="m-auto h-[60px] w-[60px] object-contain"
        />
      </a>
      <span class="w-full">
        <p class="experience__title">AlumniONE, Oracle Next Education</p>
        <time class="experience__time">Jan 2024 - Sep 2024 </time>
        <p class="experience__company">@ Alura</p>
      </span>
    </div>
    <p class="experience__description">
      I'm currently enrolled in the Oracle Next Education program, where I'm
      learning about web development with a focus on Backend using Java and
      Spring Boot.
    </p>
  </CollapsiblePanel>
</template>

<script lang="ts" setup>
import CollapsiblePanel from '../CollapsiblePanel.vue';
import tecnm from '/src/assets/img/ito.webp';
import one from '/src/assets/img/one.webp';
</script>
