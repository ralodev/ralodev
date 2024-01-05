<template>
  <section
    id="about"
    name="about"
    className="w-full min-h-screen h-auto flex items-center justify-center content-center relative overflow-x-hidden mt-[40px]"
  >
    <article
      className="xl:px-0 md:px-10 max-w-[1200px] mx-auto justify-center h-full text-center grid-cols-2"
    >
      <div class="relative dark:text-gray-300 md:gap-x-0 text-start">
        <!--card-->
        <div class="relative md:grid md:grid-cols-2 p-4 duration-500">
          <span class="col-span-2 md:col-span-1">
            <img
              src="https://placehold.co/600x600?text=Will+be+added+soon+:)"
              alt="Ralodev's profile picture"
              class="rounded-full mx-auto mb-3 h-[200px] md:h-[400px]"
            />
          </span>
          <span
            class="block col-span-2 md:col-span-1 justify-center my-auto items-center text-center md:text-start"
          >
            <h1 className="dark:text-gray-300 font-bold text-3xl md:text-5xl">
              Hello, my name is Raúl López Cruz
            </h1>
            <p
              className="dark:text-gray-400 pt-3 md:text-lg text-base text-gray-700 my-5"
            >
              I'm a Software Engineer with more than 1 year of experience in web
              development. I'm a solution-driven developer adept at contributing
              to highly collaborative work environment, finding solutions and
              determining customer satisfaction. Proven experience developing
              consumer focused web applications. Passionate programmer with
              drive to learn and master new technologies.
            </p>
            <span
              v-if="!isMobile"
              class="flex justify-evenly md:justify-normal md:gap-5"
            >
              <a href="./cv.pdf" target="_blank" rel="noopener noreferrer">
                <PrimaryButton label="Download CV" class="mb-4" />
              </a>
            </span>
          </span>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import { inject } from 'vue'
const isMobile = inject<boolean>('isMobile')
</script>
