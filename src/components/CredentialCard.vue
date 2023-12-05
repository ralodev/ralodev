<template>
  <div class="card hover:shadow-lg">
    <header class="flex flex-initial">
      <!--icon-->
      <img
        :src="logo"
        alt="Certification icon"
        class="w-[50px] h-[50px] my-auto rounded-lg"
      />
      <span class="my-auto px-2 w-full">
        <!--title-->
        <a
          class="font-bold text-ltext2 dark:text-dtext2 cursor-pointer group"
          :href="url"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ title }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline group-hover:translate-x-1 group-hover:-translate-y-1 duration-300"
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
            <path d="M8 7l9 0l0 9"></path></svg
        ></a>
        <!--subtitle-->
        <p v-if="subtitle" class="italic">
          {{ subtitle }}
        </p>
        <p v-if="platform" class="font-medium text-sm">
          {{ platform }}
        </p>
      </span>
    </header>
    <p v-if="description" class="hidden md:block text-ltext3 dark:text-dtext3">
      {{ description }}
    </p>
  </div>
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
