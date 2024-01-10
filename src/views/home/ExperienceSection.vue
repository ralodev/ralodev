<template>
  <section id="experience" name="experience" class="dark:text-gray-100 py-[90px] z-50">
    <div class="container max-w-5xl px-4 mx-auto relative">
      <h3 class="text-4xl font-semibold text-center mb-5">Experience</h3>
      <div class="relative grid gap-4 mx-4 sm:grid-cols-12">
        <div class="col-span-12 sm:col-span-3 ">
          <div
            class="text-center sm:text-left  sm:before:block before:w-24 before:h-3 before:mt-2 before:mb-5 before:rounded-md before:mx-auto before:hidden sm:before:mx-0 before:bg-primary sticky top-24 ">
            <span class="text-base font-semibold  dark:text-gray-400">
              This is my experience so far, you can download my CV by clicking the button below.
            </span>
            <PrimaryButton label="Download CV" bg="bg-primary" class="mt-2 mx-auto" @click="gotoCV" />
          </div>
        </div>
        <div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
          <div
            class="col-span-12 relative px-4 sm:col-span-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-300 dark:before:bg-gray-700">
            <div
              class="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-primary pb-8">
              <time class="time text-sm" title="From 2022-08 to 2021-07">
                Aug 2023 - Present
              </time>
              <h3 class="text-xl font-semibold ">
                Freelance Software Engineer
              </h3>
              <p class="mt-3" >
                For the last
                <!-- calculate the months from Aug 2023 til today -->
                {{ new Date().getMonth() - 7 + 12 * (new Date().getFullYear() - 2023) }}
                months, I've been working as a freelance software engineer. Offering services such as:
              <ul class="list-disc ps-5">
                <li>Developing web applications using the latest technologies.</li>
                <li>Teaching and mentoring on software development.</li>
                <li>Providing guidance on how to improve the performance of web applications.</li>
                <li>Adivising on the best practices for software development.</li>
              </ul>
              </p>
            </div>
            <div
              class="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-primary pb-8">
              <time class="time text-sm" title="From 2022-08 to 2021-07">
                Aug 2022 - Jul 2023
              </time>
              <h3 class="text-xl font-semibold ">
                Full Stack Developer Intern
              </h3>
              <h4 class="text-lg font-medium  dark:text-gray-400">
                @ Technologial Institute of Oaxaca
              </h4>
              <p class="mt-3" >
                In this job I was responsible for the development of a web application for the management of the company's
                HR department. My tasks included:
              <ul class="list-disc ps-5 pb-3">
                <li>Meeting with the HR department to gather requirements.</li>
                <li>Designing the database schema.</li>
                <li>Analysing vulnerabilities and implementing security measures.</li>
                </ul>
                As a result of my work, I:
                <ul class="list-disc ps-5">
                <li>Optimized report generation times by 90%</li>
                <li>Developed a fully functional HRMS (Human Resources Management System)
                  using <strong>Spring Boot</strong> for the backend and <strong>Vue.js</strong> for the frontend.</li>
                <li>Succesfully deployed and mantained the HRMS hosted at <a href="https://itoaxaca.tech" target="_blank"
                    rel="noreferrer" class="underline">https://itoaxaca.tech/</a></li>
              </ul>
              </p>
            </div>
            <div
            :class=" more && 'flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-primary'">
            <div class="duration-500 transition-all overflow-y-hidden" :class="more ? 'h-[450px] sm:h-[300px] md:h-[250px]' : 'h-[0px]'">
            <time class="time text-sm">Jun 2019 - Aug 2019</time>
              <h3 class="text-xl font-semibold ">
                Touristic Ambassador
              </h3>
              <h4 class="text-lg font-medium dark:text-gray-400">
                @ SECTUR Oaxaca
              </h4>
              <p class="mt-3" >
                Worked as Turistic Ambassador for the <a href="https://www.oaxaca.gob.mx/ageo/la-guelaguetza/"
                  class="underline">Guelaguetza</a> 2019. Some of the tasks I was involved in included:
              <ul class="list-disc ps-5">
                <li>Multilingual Communication: Facilitating communication between visitors and locals, acting as an
                  interpreter when necessary</li>
                <li>Logistics and Organization: Planning and coordinating activities and ensuring logistical
                  details.</li>
              </ul>
              </p>
            </div>
            </div>

            <PrimaryButton :label="more ? 'Show less' : 'Show more'"
            bg="bg-secondary" @click="more = !more">
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
const more = ref(false)

function gotoCV() {
  window.open('./cv.pdf', '_blank')
}
</script>