<template>
  <section id="experience"
    name="experience" class="dark:text-gray-100 py-[90px]">
    <div class="container max-w-5xl px-4 mx-auto">
      <h3 class="text-5xl font-semibold text-center mb-5">Experience</h3>
      <div class="grid gap-4 mx-4 sm:grid-cols-12">
        <div class="col-span-12 sm:col-span-3">
          <div
          class="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-indigo-400">
          <span class="text-base font-bold  dark:text-gray-400">
            Take a look at my most recent jobs 💼
          </span>
          <a href="./cv.pdf" target="_blank" rel="noopener noreferrer">
                <PrimaryButton label="Download CV" class="mt-12" />
          </a>
        </div>
        </div>
        <div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
          <div
            class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300 dark:before:bg-gray-700">
            <div
              class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-indigo-400">
              <h3 class="text-xl font-semibold tracki">
                Software Engineer Freelance
              </h3>
              <time class="text-xs tracki uppercase dark:text-gray-400">Aug 2023 - Present</time>
              <p class="mt-3">
                For the last 3 months, I’ve been working as a freelance software engineer. My tasks have included:
              <ul class="list-disc ps-5">
                <li>Teaching several courses on web development.</li>
                <li>Providing guidance on technologies and tools to use.</li>
                <li>Advising on how to improve the performance of the applications.</li>
                <li>Instructing on requirements gathering methodologies and documentation.</li>
              </ul>
              </p>
            </div>
            <div
              class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-indigo-400">
              <h3 class="text-xl font-semibold tracki">
                Full Stack Developer Intern
              </h3>
              <time class="text-xs tracki uppercase dark:text-gray-400">Aug 2022 - Jul 2023</time>
              <h4 class="text-lg font-medium tracki dark:text-gray-400">
                Technologial Institute of Oaxaca
              </h4>
              <p class="mt-3">
                In this job I was responsible for the development of a web application for the management of the company's
                HR department. My tasks included:
              <ul class="list-disc ps-5">
                <li>Collaborated with clients to identify and define software requirements.</li>
                <li>Gathered, defined, and translated user requirements into project designs and
                  implementation plans.</li>
                <li>Provided technical leadership and direction in the project to ensure code quality.
                </li>
                <li>Analized vulnerabilities, and implemented
                  security measures.
                </li>
                <li>Participated in the full software development lifecycle, from planning and design
                  to implementation and testing.</li>
                <li>Optimized report generation times by 90%</li>
                <li>Developed a fully functional HRMS (Human Resources Management System)
                  using Spring Boot for the backend and Vue.js for the frontend.</li>
                <li>Succesfully deployed and mantained the HRMS hosted at <a href="https://itoaxaca.tech" target="_blank" rel="noreferrer"
                  class="underline">https://itoaxaca.tech/</a></li>
              </ul>
              </p>
            </div>
            <div
              v-if="more"
              class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-indigo-400">
              <h3 class="text-xl font-semibold tracki">
                Touristic Ambassador
              </h3>
              <time class="text-xs tracki uppercase dark:text-gray-400">Jun 2019 - Aug 2019</time>
              <h4 class="text-lg font-medium tracki dark:text-gray-400">
                SECTUR Oaxaca
              </h4>
              <p class="mt-3">
                Worked as Turistic Ambassador for the <a href="https://www.oaxaca.gob.mx/ageo/la-guelaguetza/" class="underline">Guelaguetza</a> 2019. Some of the tasks I was involved in included:
                <ul class="list-disc ps-5">
                  <li>Multilingual Communication: Facilitating communication between visitors and locals, acting as an interpreter when necessary, and overcoming language barriers</li>
                    <li>Logistics and Organization: Planning and coordinating activities, visits to points of interest, meals, and breaks according to the itinerary, managing reservations and tickets, and ensuring logistical details.</li>
              </ul>
              </p>
            </div>
          </div>
          <SecondaryButton
            v-if="!more"
            label="Show more"
            @click="more = true"
            >
            <svg class="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
  </svg>
          </SecondaryButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import SecondaryButton from '@/components/buttons/SecondaryButton.vue';
const more = ref(false)
</script>