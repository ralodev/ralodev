<template>
  <a
    class="card group cursor-pointer font-bold text-ltext2 hover:shadow-lg dark:text-dtext2"
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
  >
    <header class="flex flex-initial">
      <!--icon-->
      <img
        :src="logo"
        alt="Certification icon"
        class="my-auto h-[50px] w-[50px] rounded-lg"
      />
      <span class="my-auto w-full px-2">
        <!--title-->
        {{ title }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M17 7l-10 10"></path>
          <path d="M8 7l9 0l0 9"></path>
        </svg>
        <!--subtitle-->
        <p v-if="subtitle" class="italic">
          {{ subtitle }}
        </p>
        <p v-if="platform" class="text-sm font-medium">
          {{ platform }}
        </p>
      </span>
    </header>
    <p v-if="description" class="hidden text-ltext3 dark:text-dtext3 md:block">
      {{ description }}
    </p>
  </a>
</template>

<script lang="ts" setup>
defineProps({
  url: String,
  logo: String,
  title: String,
  subtitle: String,
  platform: String,
  description: String
})
</script>
