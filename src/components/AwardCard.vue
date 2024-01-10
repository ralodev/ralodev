<template>
  <div
    class="relative col-span-1 mx-auto flex max-w-[350px] overflow-hidden rounded-3xl border-2 p-3 shadow-lg md:w-full"
  >
    <div class="">
      <div
        class="absolute inset-0 rounded-3xl bg-lsurface bg-opacity-80 dark:bg-dsurface"
      />
      <div class="relative text-ltext2 dark:text-dtext2">
        <img
          :src="
            image || 'https://placehold.co/260x220?text=Will+be+added+soon+:)'
          "
          alt=""
          class="block h-[220px] w-full overflow-hidden rounded-2xl shadow-sm"
          :class="object + ' ' + bg"
          loading="lazy"
        />
        <div
          class="pointer-events-none absolute bottom-2 left-2 flex rounded-md bg-slate-900 bg-opacity-70 p-1 font-display text-dtext1"
        >
          <slot />
        </div>
      </div>
      <div class="relative pt-3">
        <div
          class="flex h-[12rem] flex-col justify-between sm:min-h-[9rem] lg:h-[12rem]"
        >
          <h3
            class="text-start text-base font-semibold text-ltext2 dark:text-dtext2"
          >
            {{ title }}
          </h3>
          <p
            class="text-start text-sm text-ltext3 dark:text-dtext3"
            style="text-wrap: pretty"
          >
            {{ description }}
          </p>
          <div class="mt-1">
            <PrimaryButton
              label="Read More"
              bg="bg-gray-500 inline"
              class="text-sm"
              height="35"
              @click="$emit('clicked')"
            />
            <span
              class="pointer-events-none absolute bottom-0 right-0 text-xs uppercase text-ltext2 dark:text-dtext2"
              >{{ date }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
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
})
</script>
