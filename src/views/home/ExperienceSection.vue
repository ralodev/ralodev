<template>
  <section id="experience" name="experience" class="body__section">
    <div>
      <h3 class="body__section__title">Experience</h3>
      <div class="relative grid gap-4 sm:grid-cols-12">
        <div class="col-span-12 sm:col-span-3">
          <div
            class="text-center sm:text-left sm:before:block before:w-full before:mx-auto before:h-4 before:mt-[5px] before:mb-5 before:rounded-lg before:hidden sm:before:mx-0 before:bg-gradient-to-l before:from-sky-800  before:dark:from-sky-500  sticky top-24">
            <span class="text-base ">
              You can download my CV by clicking the button below.
            </span>
            <PrimaryButton label="Download CV" class="mt-2 mx-auto" @click="gotoCV" />
          </div>
        </div>
        <div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
          <div
            class="col-span-12 relative px-4 sm:col-span-8 before:absolute before:top-[5px] before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-300 dark:before:bg-gray-700">
            <div
              class="flex flex-col relative before:absolute before:top-[5px] before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-sky-800 before:dark:bg-sky-500 pb-8">
              <h3 class="experience__title">
                Full Stack Developer
              </h3>
              <time class="experience__time ">
                Jan 2024 - Present
              </time>
              <h4 class="experience__company">
                @ Technologial Institute of Oaxaca
              </h4>
              <div class="experience__description">
                <p>
                  For the last
                  <strong class="experience__description--highlight">
                    {{ new Date().getMonth() - 11 + 12 * (new Date().getFullYear() - 2023) }}
                  </strong>
                  months, I've been working as a Full-Stack developer for the Systems and Computing department,
                  contributing to the development of an institutional system intended to manage the academic and
                  administrative processes of the institute. My main responsibilities include:
                <ul class="list-disc list-inside">
                  <li>Analyzing administrative processes and identifying areas for improvement.</li>
                  <li>Designing and mantaining server-side logic using
                    <strong class="experience__description--highlight">Typescript</strong>,
                    <strong class="experience__description--highlight">Nextjs</strong> and
                    <strong class="experience__description--highlight">Nestjs</strong>.
                  </li>
                  <li>Collaborating with other developers and stakeholders.</li>
                </ul>
                </p>
              </div>
            </div>
            <div
              class="flex flex-col relative before:absolute  before:top-[5px] before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-sky-800 before:dark:bg-sky-500 pb-8">
              <h3 class="experience__title">
                Full Stack Developer Intern
              </h3>
              <time class="experience__time">
                May 2022 - Jul 2023
              </time>
              <h4 class="experience__company">
                @ Technologial Institute of Oaxaca
              </h4>
              <div class="experience__description">
                <p>
                  In this job I was responsible for the development of a web application for the management of the
                  company's
                  HR department. My tasks included:
                  <ul class="list-disc list-inside">
                    <li>Meeting with the HR department to gather requirements.</li>
                    <li>Designing the database schema.</li>
                    <li>Analysing vulnerabilities and implementing security measures.</li>
                  </ul>
                  As a result of my work, I:
                  <ul class="list-disc list-inside">
                    <li>
                      <strong class="experience__description--highlight">
                        Optimized report generation times by 90%
                      </strong>
                      </li>
                    <li>Developed a fully functional HRMS (Human Resources Management System)
                      using
                      <strong class="experience__description--highlight">Spring Boot</strong> for the backend and
                      <strong class="experience__description--highlight">Vue.js</strong> for the frontend.
                    </li>
                    <li>Succesfully deployed and mantained the HRMS hosted at <a href="https://itoaxaca.tech"
                        target="_blank" rel="noreferrer" class="underline">https://itoaxaca.tech/</a></li>
                  </ul>
                </p>
              </div>
            </div>
            <div
              :class="more && 'flex flex-col relative before:absolute  before:top-[5px] before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-sky-800 before:dark:bg-sky-500'">
              <div class="duration-500 transition-all overflow-y-hidden"
                :class="more ? 'h-[310px] sm:h-[310px] md:h-[260px]' : 'h-[0px]'">
                <h3 class="experience__title">
                  Touristic Ambassador
                </h3>
                <time class="experience__time">Jun 2019 - Aug 2019</time>
                <h4 class="experience__company">
                  @ SECTUR Oaxaca
                </h4>
                <div class="experience__description">
                  <p>
                    Worked as Turistic Ambassador for the <a href="https://www.oaxaca.gob.mx/ageo/la-guelaguetza/"
                      class="underline">Guelaguetza</a> 2019. Some of the tasks I was involved in included:
                  <ul class="list-disc list-inside">
                    <li>Multilingual Communication: Facilitating communication between visitors and locals, acting as an
                      interpreter when necessary</li>
                    <li>Logistics and Organization: Planning and coordinating activities and ensuring logistical
                      details.</li>
                  </ul>
                  </p>
                </div>
              </div>
            </div>
            <PrimaryButton :label="more ? 'Show less' : 'Show more'" icon-left severity="secondary" @click="more = !more">
              <svg v-if="more" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
              </svg>
              <svg v-else viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5l0 14" />
                <path d="M5 12l14 0" />
              </svg>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
</section></template>

<script lang="ts" setup>
import { ref } from 'vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
const more = ref(false)
function gotoCV() {
  window.open('./cv.pdf', '_blank')
}
</script>