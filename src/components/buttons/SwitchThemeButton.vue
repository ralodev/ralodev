<template>
  <!-- button using before and after -->
  <button
    ref="theme_button"
    class="relative h-[20px] w-[20px]"
    @click="toggleDark()"
    :title="isDark ? 'Light mode' : 'Dark mode'"
    :class="isDark ? '' : ''"
  >
    <div
      name="box_1"
      class="box_1 absolute inset-0 rotate-45 transform bg-neutral-600 !transition-all !duration-700"
      :class="isDark ? ' ' : ''"
    ></div>
    <div
      name="box_2"
      class="box_2 absolute inset-0 h-full w-full transform bg-neutral-600 !transition-all !duration-700"
      :class="isDark ? '' : ''"
    ></div>
    <div class="absolute inset-0">
      <div
        name="circle_1"
        class="circle_1 absolute inset-0 left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 transform overflow-hidden border-none !transition-all"
        :class="isDark ? 'bg-neutral-200' : 'bg-neutral-100'"
      ></div>
      <div
        name="circle_2"
        class="circle_2 absolute inset-0"
        :class="isDark ? 'bg-[#0c1323]' : 'bg-neutral-600'"
      ></div>
    </div>
  </button>
</template>

<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core';
import { ref, onMounted } from 'vue';
const isDark = useDark();
const theme_button = ref<HTMLElement | null>(null);
const toggle = useToggle(isDark);
function toggleDark() {
  toggle();
  if (theme_button.value) {
    theme_button.value.classList.toggle('dark_mode');
  }
}
onMounted(() => {
  if (isDark.value) {
    if (theme_button.value) {
      theme_button.value.classList.add('dark_mode');
    }
  }
});
</script>

<style scoped>
.box_1 {
  clip-path: circle(100%);
}

.box_2 {
  clip-path: circle(100%);
}

.dark_mode .box_1 {
  clip-path: circle(50%);
}

.dark_mode .box_2 {
  clip-path: circle(50%);
}
.circles_container {
  clip-path: circle(50%);
  transition-property: all !important;
  transition-duration: 700ms !important;
}

.dark_mode .circles_container {
  width: 100%;
  height: 100%;
}
.circle_1 {
  clip-path: circle(50%);
  transition-property: all !important;
  transition-duration: 700ms !important;
}

.dark_mode .circle_1 {
  width: 100%;
  height: 100%;
}

.circle_2 {
  clip-path: circle(30%);
  transition-property: all !important;
  transition-duration: 300ms !important;
}
.dark_mode .circle_2 {
  transform: translateX(-30%) translateY(-20%);
  clip-path: circle(40%);
}
</style>
