<template>
  <!-- Card container -->
  <article class="relative w-full rounded-3xl p-5 shadow-lg">
    <!-- Background -->
    <span class="absolute inset-0 rounded-3xl border-2 dark:border-gray-600" />
    <!-- Card Content -->
    <div
      class="relative my-2 flex flex-col flex-wrap justify-center gap-2 font-medium"
    >
      <!-- Title -->
      <h2 class="text-2xl font-semibold text-ltext1 dark:text-dtext1">
        {{ title }}
      </h2>
      <!-- Description -->
      <p class="text-base text-ltext2 dark:text-dtext2">
        {{ description }}
      </p>
      <!-- Tags -->
      <div class="my-2 flex flex-wrap gap-2 font-medium">
        <div
          v-for="tag in tags"
          :key="tag.toLowerCase()"
          class="relative flex flex-nowrap whitespace-nowrap rounded-md bg-gray-300 px-2 py-1 text-sm font-normal dark:bg-gray-700 dark:text-white"
        >
          {{ tag }}
        </div>
      </div>
      <!-- Project images -->
      <div
        class="group relative cursor-pointer overflow-hidden"
        @click="emits('open-live')"
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
          class="mx-auto max-h-[400px] min-h-[260px] object-contain transition-all duration-500 ease-in-out group-hover:brightness-50"
        />
      </div>
      <!-- Buttons -->
      <div class="flex justify-center gap-5">
        <PrimaryButton
          v-if="source"
          label="Source code"
          :disabled="!source"
          @click="emits('open-src')"
        />
        <PrimaryButton
          v-if="site"
          label="Live site"
          :disabled="!site"
          @click="emits('open-live')"
        />
        <PrimaryButton
          v-if="read"
          :label="'Read case study'"
          :disabled="!read"
          @click="emits('open-read')"
        />
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';

const emits = defineEmits(['open-src', 'open-demo', 'open-live', 'open-read']);

defineProps({
  title: {
    type: String,
    required: true
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
  site: {
    type: Boolean,
    required: false
  },
  source: {
    type: Boolean,
    required: false
  },
  read: {
    type: Boolean,
    required: false
  },
  tags: {
    type: Array<String>,
    required: false
  }
});
</script>
