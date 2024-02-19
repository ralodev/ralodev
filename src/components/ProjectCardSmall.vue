<template>
  <!-- Card container -->
  <article class="relative h-full w-full rounded-xl p-5 shadow-lg">
    <!-- Background -->
    <span class="absolute inset-0 rounded-xl border-2 dark:border-gray-600" />
    <!-- Card Content -->
    <div class="relative flex h-full flex-col flex-wrap gap-2 font-medium">
      <!-- Title -->
      <h2
        class="text-xl font-semibold text-ltext1 dark:text-dtext1 md:text-2xl"
      >
        {{ props.title }}
      </h2>
      <!-- Description -->
      <p class="text-sm text-ltext2 dark:text-dtext2 md:text-base">
        {{
          description.length > 150
            ? description.substring(0, 150) + '...'
            : description
        }}
      </p>
      <!-- Tags -->
      <div class="my-2 flex flex-wrap gap-2 font-medium">
        <div
          v-for="tag in props.tags"
          :key="tag.toLowerCase()"
          class="relative flex flex-nowrap whitespace-nowrap rounded-md bg-gray-300 px-2 py-1 text-xs font-normal dark:bg-gray-700 dark:text-white"
        >
          {{ tag }}
        </div>
      </div>
      <!-- Buttons -->
      <div class="mt-auto flex justify-end gap-5">
        <PrimaryButton
          label="Source code"
          :disabled="!source"
          @click="emits('open-src')"
          btn-class="text-sm "
          height="35"
          icon-left
          size="small"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-github"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
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
            <path
              d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
            />
          </svg>
        </PrimaryButton>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';

const emits = defineEmits(['open-src', 'open-demo', 'open-live', 'open-read']);

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  site: {
    type: Boolean,
    required: false
  },
  source: {
    type: Boolean,
    required: false
  },
  tags: {
    type: Array<String>,
    required: false
  }
});
</script>
