<template>
  <button
    class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 border-gray-500 hover:delay-200 hover:bg-gray-500 rounded-full shadow-md group/button"
  >
    <span
      class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gray-500 group-hover/button:translate-x-0 ease rounded-full"
    >
      <slot />
    </span>
    <span
      class="absolute flex items-center justify-center w-full h-full text-gray-500 dark:text-gray-300 transition-all duration-300 transform group-hover/button:translate-x-full ease"
      >{{ label }}</span
    >
    <span class="relative invisible">{{ label }}</span>
  </button>
</template>

<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    required: true
  }
})
</script>
