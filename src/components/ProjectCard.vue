<template>
  <!-- Card container -->
  <article
    class="relative w-full rounded-3xl p-2 min-h-[300px]"
    :class="isMobile ? '' : 'group'"
  >
    <!-- Background -->
    <span
      class="absolute rounded-3xl lg:mb-9 z-0 group-hover:-mb-0 inset-0 border-dtext-3 dark:bg-dsurface bg-[#c9c9c9] border-2 backdrop-blur-lg duration-500 dark:border-ltext3 opacity-50"
    />
    <!-- Layout: Vertical on mobile, Horizontal for wider viewports -->
    <!-- Mobile: Image > Info > Buttons > Tags -->
    <!-- Desktop: Left: Image, Right: Info & Buttons, Bottom: tags -->

    <!-- Image, Info & Buttons Container-->
    <div class="relative flex flex-col lg:grid lg:grid-cols-6">
      <!-- Image 620 x 350 -->
      <div
        class="relative col-span-4 lg:col-span-3 overflow-hidden duration-500 ease-in-out rounded-2xl"
        :class="
          reverse
            ? 'lg:order-2 lg:group-hover:rounded-r-2xl lg:group-hover:rounded-l-none group-hover:rounded-t-none'
            : ' lg:group-hover:rounded-l-2xl lg:group-hover:rounded-r-none group-hover:rounded-b-none '
        "
      >
        <!-- Gif: Position on bottom right corner of image container -->
        <img
          v-if="gif && !isMobile"
          :src="gif"
          class="absolute z-[9] bottom-[-5px] right-[-5px] group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out w-1/2 translate-y-80 group-hover:translate-y-0"
        />
        <span
          v-else
          class="absolute z-[9] group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out top-0 right-0 w-1/2 h-full text-gray-100 text-xl font-bold flex justify-center items-center"
        >
          {{ description }}
        </span>
        <img
          v-if="image2 && !isMobile"
          :src="image2"
          class="absolute z-[10] group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out -translate-x-1/3 translate-y-80 group-hover:translate-y-12"
        />
        <span
          class="absolute z-[10] group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out top-0 left-0 w-1/2 h-full text-gray-100 text-3xl font-bold flex px-3 justify-center items-center"
          v-else
        >
          {{ title }}
        </span>
        <img
          :src="image"
          class="group-hover:brightness-50 transition-all duration-500 ease-in-out group-hover:scale-150 min-h-[260px]"
        />
      </div>
      <!-- Title and description -->
      <div
        class="px-4 py-1 col-span-2 lg:col-span-3 justify-center flex flex-col backdrop-blur-sm border-2 border-white dark:border-ltext2 dark:bg-transparent bg-white border-opacity-20 bg-opacity-20 group-hover:!bg-opacity-100 duration-500 shadow-sm rounded-2xl"
        :class="
          reverse
            ? 'lg:order-1 lg:group-hover:rounded-l-2xl lg:group-hover:rounded-r-none group-hover:rounded-b-none'
            : 'lg:group-hover:rounded-r-2xl lg:group-hover:rounded-l-none group-hover:rounded-t-none'
        "
      >
        <h2 class="text-2xl font-bold text-ltext1 dark:text-dtext1">
          {{ title }}
        </h2>
        <p class="py-3 text-ltext2 dark:text-dtext2">
          {{ description }}
        </p>
        <div class="justify-evenly flex">
          <a target="_blank" v-if="source" :href="source">
            <SecondaryButton label="Source">
              <svg
                class="w-6 h-6 text-white"
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
            </SecondaryButton>
          </a>
          <a target="_blank" v-if="demo" :href="demo">
            <SecondaryButton label="Demo">
              <svg
                class="w-6 h-6 text-white"
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
            </SecondaryButton>
          </a>
          <RouterLink v-if="info" :to="{ name: info }">
            <SecondaryButton :label="isMobile ? 'Info' : 'Read case study'">
              <svg
                class="w-6 h-6 text-white"
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
            </SecondaryButton>
          </RouterLink>
        </div>
      </div>
      <!-- Tags -->
      <div
        v-if="!isMobile"
        class="flex flex-wrap overflow-hidden duration-500 lg:col-span-6 order-10 justify-center mt-2 text-xs font-medium gap-1 [&>img]:rounded-full [&>img]:group-hover:translate-y-0 [&>img]:lg:-translate-y-20 [&>img]:duration-500"
      >
        <slot />
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import SecondaryButton from '@/components/buttons/SecondaryButton.vue'
import { inject } from 'vue'
import { RouterLink } from 'vue-router'

const isMobile = inject<boolean>('isMobile')

defineProps({
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
  gif: {
    type: String,
    required: false
  },
  demo: {
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
