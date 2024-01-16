<template>
  <!-- Card container -->
  <article class="relative min-h-[300px] w-full rounded-3xl p-2">
    <!-- Background -->
    <span class="" />

    <!-- Image, Info & Buttons Container-->
    <div class="relative flex flex-col-reverse">
      <!-- Image 620 x 350 -->
      <div
        class="group relative col-span-4 overflow-hidden rounded-2xl duration-500 ease-in-out"
      >
        <img
          v-if="image2"
          :src="image2"
          :alt="title + ' alternative image'"
          class="absolute z-[10] max-h-[400px] w-full translate-y-80 object-contain opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-12 group-hover:opacity-100"
        />
        <img
          :src="image"
          :alt="title + ' main image'"
          class="mx-auto max-h-[400px] min-h-[260px] transition-all duration-500 ease-in-out group-hover:brightness-50"
        />
      </div>
      <!-- Tags -->
      <div
        class="mt-2 flex flex-wrap justify-center gap-1 font-medium [&>img]:rounded-full"
      >
        <slot />
      </div>
      <!-- Title and description -->
      <div
        class="col-span-2 flex flex-col justify-center rounded-2xl px-4 py-1 shadow-sm backdrop-blur-sm duration-500 lg:col-span-3"
      >
        <h2 class="text-2xl font-semibold text-ltext1 dark:text-dtext1">
          {{ title }}
        </h2>
        <p class="py-3 text-lg text-ltext2 dark:text-dtext2">
          {{ description }}
        </p>
        <div class="flex justify-evenly">
          <a target="_blank" v-if="source" :href="source">
            <PrimaryButton label="Source code" bg="bg-primary">
              <svg
                class="h-6 w-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
            </PrimaryButton>
          </a>
          <a target="_blank" v-if="demo" :href="demo">
            <PrimaryButton label="Demo site" bg="bg-primary">
              <svg
                class="h-6 w-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </PrimaryButton>
          </a>
          <a target="_blank" v-if="props.live" :href="props.live">
            <PrimaryButton label="Live site" bg="bg-primary">
              <svg
                class="h-6 w-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </PrimaryButton>
          </a>
          <RouterLink v-if="info" :to="{ name: info }">
            <PrimaryButton :label="'Read case study'" bg="bg-primary">
              <svg
                class="h-6 w-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M19 4h-1a1 1 0 1 0 0 2v11a1 1 0 0 1-2 0V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1ZM3 4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm9 13H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Z"
                />
                <path d="M6 5H5v1h1V5Z" />
              </svg>
            </PrimaryButton>
          </RouterLink>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'

import { RouterLink } from 'vue-router'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  image2: {
    type: String,
    required: false
  },
  demo: {
    type: String,
    required: false
  },
  live: {
    type: String,
    required: false
  },
  source: {
    type: String,
    required: false
  },
  info: {
    type: String,
    required: false
  },
  reverse: {
    type: Boolean,
    required: false
  }
})
</script>
