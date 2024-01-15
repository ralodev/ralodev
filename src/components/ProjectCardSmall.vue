<template>
  <!-- Card container -->
  <article class="relative h-full w-full rounded-xl p-5 shadow-lg">
    <!-- Background -->
    <span class="absolute inset-0 rounded-xl border-2" />
    <!-- Card Content -->
    <div class="relative flex h-full flex-col flex-wrap gap-2 font-medium">
      <!-- Title -->
      <h2 class="text-2xl font-semibold text-ltext1 dark:text-dtext1">
        {{ title }}
      </h2>
      <!-- Description -->
      <p class="text-base text-ltext2 dark:text-dtext2">
        {{
          description.length > 150
            ? description.substring(0, 150) + '...'
            : description
        }}
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
      <!-- Buttons -->
      <div class="mt-auto flex justify-end gap-5">
        <PrimaryButton
          label="Source code"
          bg="bg-primary"
          :disabled="!source"
          @click="emits('open-src')"
        />
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'

const emits = defineEmits(['open-src', 'open-demo', 'open-live', 'open-read'])

const props = defineProps({
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
})
</script>
