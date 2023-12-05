<template>
  <div class="relative col-span-2 md:col-span-1 w-full flex">
    <div
      class="relative backdrop-blur-sm rounded-3xl bg-lsurface dark:bg-dsurface text-ltext2 dark:text-dtext2 bg-opacity-80 p-3 overflow-hidden shadow-lg"
    >
      <img
        :src="
          image || 'https://placehold.co/260x220?text=Will+be+added+soon+:)'
        "
        alt=""
        class="relative rounded-3xl shadow-sm hidden md:block overflow-hidden object-cover h-[220px] w-full mx-auto"
        loading="lazy"
      />
      <div class="relative">
        <div
          class="absolute top-2 left-0 bg-indigo-500 text-dtext1 flex rounded-md px-1 pointer-events-none"
        >
          <slot />
        </div>
        <span
          class="uppercase text-xs text-ltext2 absolute top-2 right-0 px-2 pt-1 pointer-events-none dark:text-dtext2"
          >{{ date }}</span
        >
        <div class="flex flex-col w-full h-full justify-between">
          <h3 class="text-base text-start font-semibold pt-8 min-h-[5rem]">
            {{ title }}
          </h3>
          <p class="text-start text-sm text-ltext3 dark:text-dtext3">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//set a random number between 1 and 10
const random = Math.floor(Math.random() * 10) + 1
defineProps({
  title: String,
  description: String,
  date: String,
  image: String
})
</script>
