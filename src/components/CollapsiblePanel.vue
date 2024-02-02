<template>
  <div
    class="panel rounded-2xl border-2 text-black dark:border-gray-600 dark:text-white"
  >
    <div
      class="sticky top-20 z-[2] flex cursor-pointer rounded-t-2xl border-b-2 bg-bg px-2 py-2 dark:bg-bg_dark"
      :class="
        collapsed ? 'rounded-b-2xl border-transparent ' : 'dark:border-gray-600'
      "
      @click="toggle"
    >
      <!-- Icono del panel -->
      <slot name="icon"></slot>
      <!-- Header del panel -->
      <span
        v-if="header"
        class="my-auto text-2xl font-semibold"
        >{{ header }}</span
      >

      <button
        v-if="toggleable"
        type="button"
        class="panel-toggler my-auto ml-auto h-6 w-6 self-end rounded-full border-2 border-black border-opacity-50 dark:border-gray-600"
      >
        <svg
          v-if="!collapsed"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            stroke="none"
            d="M0 0h24v24H0z"
            fill="none"
          />
          <path d="M5 12l14 0" />
        </svg>
        <svg
          v-else
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            stroke="none"
            d="M0 0h24v24H0z"
            fill="none"
          />
          <path d="M12 5l0 14" />
          <path d="M5 12l14 0" />
        </svg>
      </button>
    </div>
    <div
      ref="content"
      class="overflow-hidden transition-all duration-500 ease-in-out"
      :style="{ maxHeight: maxHeight.valueOf() }"
    >
      <!-- Contenido del panel -->
      <div class="p-3">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
  header: {
    type: String,
    default: '',
    required: false
  },
  toggleable: {
    type: Boolean,
    default: true
  },
  collapsed: {
    type: Boolean,
    default: true
  }
});

const collapsed = ref(props.collapsed);
const maxHeight = ref<string>('0');
const content = ref<HTMLElement | null>(null);

const calculateMaxHeight = () => {
  return content.value?.scrollHeight + 'px';
};

const toggle = () => {
  collapsed.value = !collapsed.value;
  maxHeight.value = collapsed.value ? '0' : calculateMaxHeight();
};

watch(
  () => props.collapsed,
  (newValue) => {
    collapsed.value = newValue;
    maxHeight.value = collapsed.value ? '0' : calculateMaxHeight();
  }
);

onMounted(() => {
  maxHeight.value = collapsed.value ? '0' : calculateMaxHeight();
});
</script>

<style></style>
