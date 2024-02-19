<template>
  <!-- Card container -->
  <article class="relative w-full">
    <!-- Card Content -->
    <div class="relative flex flex-col gap-2 font-medium md:flex-row">
      <!-- Info -->
      <div
        class="order-2 flex w-full flex-col justify-between px-6 md:w-1/2 md:px-2"
      >
        <!-- Title -->
        <h2 class="text-2xl font-semibold text-ltext1 dark:text-neutral-100">
          {{ title }}
        </h2>
        <!-- Tags -->
        <div class="my-2 flex flex-wrap gap-2 font-medium">
          <div
            v-for="tag in tags"
            :key="tag.toLowerCase()"
            class="relative flex flex-nowrap whitespace-nowrap rounded-md bg-gray-300 px-2 py-1 text-xs font-normal dark:bg-gray-700 dark:text-white"
          >
            {{ tag }}
          </div>
        </div>
        <!-- Description -->
        <p class="pt-2 text-base text-ltext2 dark:text-neutral-400">
          {{ description }}
        </p>

        <!-- Buttons -->
        <div class="flex gap-5 pt-3">
          <PrimaryButton
            v-if="source"
            label="Source code"
            icon-left
            size="small"
            :disabled="!source"
            @click="emits('open-src')"
            ><svg
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
          <PrimaryButton
            v-if="site"
            label="Live site"
            :disabled="!site"
            @click="emits('open-live')"
            icon-left
            size="small"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-world-www"
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
              <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
              <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
              <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
              <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
              <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
              <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
              <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
              <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
              <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
            </svg>
          </PrimaryButton>
          <PrimaryButton
            v-if="read"
            :label="'Read case study'"
            :disabled="!read"
            @click="emits('open-read')"
            icon-left
            size="small"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-info-circle-filled"
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
                d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"
                stroke-width="0"
                fill="currentColor"
              />
            </svg>
          </PrimaryButton>
        </div>
      </div>
      <!-- Images -->
      <div class="group px-6 md:w-1/2 md:px-0">
        <img
          :src="image"
          :alt="title + ' main image'"
          class="transform cursor-pointer rounded-xl object-cover object-center opacity-90 transition duration-500 ease-in-out group-hover:opacity-100"
          @click="emits('open-live')"
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
