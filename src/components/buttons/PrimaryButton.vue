<template>
  <button
    class="relative flex h-[50px] w-40 items-center justify-center rounded-full overflow-hidden bg-[#1e40af] text-white hover:text-[#1e40af] shadow-xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full dark:before:bg-gray-200 before:bg-gray-50 before:duration-500 before:ease-out hover:shadow-[#4969cf70] dark:hover:shadow-[#1e40af73] hover:before:h-56 hover:before:w-56"
  >
    <span class="relative z-10 font-bold duration-300">{{ label }}</span>
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
