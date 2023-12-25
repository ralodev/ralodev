<template>
  <!-- Card container -->
  <article
    class="relative group w-full rounded-3xl group p-2 animate-pulse min-h-[349px]"
  >
    <!-- Background -->
    <span
      class="absolute rounded-3xl lg:mb-9 z-0 inset-0 border-dtext-3 dark:bg-dsurface bg-[#c9c9c971] border-2 backdrop-blur-lg duration-500 dark:border-ltext3 opacity-50 h-full"
    />
    <!-- Layout: Vertical on mobile, Horizontal for wider viewports -->
    <!-- Mobile: Image > Info > Buttons > Tags -->
    <!-- Desktop: Left: Image, Right: Info & Buttons, Bottom: tags -->

    <!-- Image, Info & Buttons Container-->
    <div class="relative flex flex-col lg:grid lg:grid-cols-6">
      <!-- Image 620 x 350 -->
      <div
        class="col-span-4 lg:col-span-3 overflow-hidden duration-500 ease-in-out rounded-2xl h-[333px] flex"
        :class="reverse ?? 'lg:order-2'"
      >
        <!-- IMG placeholder -->
        <div
          class="transition-all duration-500 ease-in-out min-h-[260px] h-[260px] w-[492px] bg-neutral-300 mx-auto my-auto dark:bg-gray-700 rounded-md"
        />
      </div>
      <!-- Title and description -->
      <div
        class="px-4 py-1 col-span-2 lg:col-span-3 justify-center flex flex-col backdrop-blur-sm border-2 border-white dark:border-ltext2 dark:bg-transparent bg-white border-opacity-20 bg-opacity-20 duration-500 shadow-sm rounded-2xl"
        :class="reverse ?? 'lg:order-1 '"
      >
        <div
          class="text-2xl h-8 font-bold text-ltext1 dark:text-dtext1 dark:bg-gray-700 bg-neutral-300 mb-3 rounded-full"
        ></div>
        <div
          class="py-3 text-ltext2 dark:text-dtext2 h-2 dark:bg-gray-700 bg-neutral-300 mb-1 rounded-full"
        ></div>
        <div
          class="py-3 text-ltext2 dark:text-dtext2 h-2 dark:bg-gray-700 bg-neutral-300 mb-1 rounded-full w-4/5"
        ></div>
        <div
          class="py-3 text-ltext2 dark:text-dtext2 h-4 dark:bg-gray-700 bg-neutral-300 mb-1 rounded-full w-3/4"
        ></div>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
defineProps({
  reverse: {
    type: Boolean,
    required: false
  }
})
</script>
