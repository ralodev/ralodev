<template>
  <!-- button using before and after -->
  <button
    class="relative group min-w-[20px] min-h-[20px] flex"
    @click="toggleDark()"
    :title="isDark ? 'Light mode' : 'Dark mode'"
  >
    <div
      name="sun_rays"
      class="inset-0 before:transform before:absolute after:absolute after:transform before:inset-0 after:inset-0 after:rotate-45 before:h-full before:w-full before:!transition-all before:!duration-700 after:!transition-all after:!duration-700"
      :class="
        isDark
          ? 'before:bg-gray-300 after:bg-gray-300'
          : 'before:rotate-[180deg] after:rotate-[225deg] before:bg-gray-500 after:bg-gray-500'
      "
    />
    <div
      name="sun_moon"
      class="inset-0 before:transform before:absolute before:inset-0 before:rounded-full before:w-3/4 before:h-3/4 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 after:inset-0 after:absolute after:rounded-full after:w-1/2 after:h-1/2 after:transform before:!transition-all before:!duration-700 after:!transition-all after:!duration-700"
      :class="
        isDark
          ? 'before:bg-[#0d0f14] after:-translate-x-1/2 after:-translate-y-1/2 after:top-1/2 after:left-1/2 after:bg-gray-300'
          : 'before:bg-gray-200 after:left-1/2 after:-translate-x-full after:translate-y-1/2  after:bg-gray-500'
      "
    />
  </button>
</template>

<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
