<template>
  <div
    class="relative col-span-1 mx-auto flex h-full max-w-[350px] overflow-hidden p-3 md:w-full"
  >
    <div class="">
      <div
        class="group relative h-[228px] select-none overflow-hidden rounded-lg text-ltext2 dark:text-dtext2"
      >
        <img
          :src="image || placeholder"
          alt=""
          class="pointer-events-none block h-[228px] w-full overflow-hidden shadow-sm"
          :class="object + ' ' + bg"
          loading="lazy"
        />
        <div
          class="pointer-events-none absolute top-[200px] h-full w-full flex-col bg-neutral-950 bg-opacity-70 p-1 pe-2 text-sm font-light text-dtext1 backdrop-blur-0 transition-all duration-500 ease-in-out group-hover:top-0 group-hover:bg-opacity-70 group-hover:backdrop-blur-md"
        >
          <div class="flex justify-between">
            <span class="my-auto flex">
              <slot />
            </span>
            <span class="my-auto">
              {{ date }}
            </span>
          </div>
          <div
            class="-mt-2 flex h-full w-full flex-col justify-center px-3 text-base"
          >
            <p class="text-pretty">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
      <div class="relative pt-1">
        <div class="flex w-full flex-col justify-center">
          <h3
            class="text-balance my-auto text-lg font-semibold text-ltext2 dark:text-dtext2"
          >
            {{ title }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import placeholder from '@/assets/img/placeholder.svg';
defineProps({
  title: String,
  description: String,
  date: String,
  image: String,
  bg: {
    type: String,
    required: false,
    default: `bg-gray-100 dark:bg-gray-800`
  },
  object: {
    type: String,
    required: false,
    default: `cover`
  }
});
</script>
