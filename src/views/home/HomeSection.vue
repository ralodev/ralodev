<template>
  <section
    id="home"
    name="home"
    className="relative flex w-full min-h-screen overflow-x-hidden -mt-[80px]"
  >
    <div
      class="landing inset-0 my-auto before:bg-gradient-to-tr dark:before:from-[#2f4fb3] dark:before:to-[#2f50b386] before:bg-transparent"
    ></div>
    <article
      className="grid xl:px-0 px-10 grid-cols-8 max-w-[1200px] h-full mx-auto my-auto"
    >
      <div
        class="lg:col-span-4 md:col-span-5 xl:col-span-5 col-span-8 flex flex-wrap content-center md:justify-normal md:text-start justify-center text-center"
      >
        <div
          class="relative flex flex-col-reverse md:flex justify-center items-center h-12 md:flex-row"
        >
          <h1
            className="text-2xl md:text-3xl xl:text-5xl dark:text-dtext2 flex font-bold text-ltext2 align-middle"
          >
            Hello,
            <lottie-player
              v-if="!isMobile"
              :src="handAnimation"
              background="transparent"
              speed="1"
              class="-rotate-[20deg] h-[30px] w-[30px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px] mx-1 rounded-full"
              loop
              autoplay
            />
            I'm Raúl López
          </h1>
        </div>
        <h3
          className="title text-5xl md:text-5xl xl:text-7xl dark:text-dtext1 text-ltext1 font-extrabold w-full"
        >
          Full Stack Developer
        </h3>
        <h2
          className="text-xl md:text-2xl xl:text-2xl dark:text-gray-400 text-ltext3 pt-3 font-medium"
        >
          Welcome to my portfolio
        </h2>
        <div
          className="flex gap-5 w-full mb-8 mt-3 justify-center md:justify-start"
        >
          <RouterLink
            class="rounded-full"
            :to="{ name: 'Home', hash: '#contact' }"
            spy="{true}"
            smooth="{true}"
            offset="{0}"
            duration="{500}"
            isDynamic="{true}"
          >
            <PrimaryButton label="Get in touch" />
          </RouterLink>
        </div>
        <span
          class="[&>*]:w-8 [&>*]:h-8 [&>*]:rounded-md [&>*]:text-ltext1 [&>*]:dark:text-dtext1 [&>*]:my-auto [&>*:not(:first-child)]:ml-3 flex"
        >
          <a
            href="https://github.com/ralodev"
            target="_blank"
            class="dark:bg-gray-800 bg-gray-200 hover:bg-gray-100 font-semibold text-white inline-flex items-center space-x-2 rounded transition-all duration-300 ease-in-out dark:hover:bg-gray-700"
            aria-label="GitHub"
            title="GitHub"
          >
            <GitHub class="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/raul-lopez-cruz/"
            target="_blank"
            class="dark:bg-gray-800 bg-gray-200 hover:bg-gray-100 font-semibold text-white inline-flex items-center space-x-2 rounded transition-all duration-300 ease-in-out dark:hover:bg-gray-700"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedIn class="w-5 h-5" />
          </a>
          <a
            href="https://www.youtube.com/@ralodev"
            target="_blank"
            class="dark:bg-gray-800 bg-gray-200 hover:bg-gray-100 font-semibold text-white inline-flex items-center space-x-2 rounded transition-all duration-300 ease-in-out dark:hover:bg-gray-700"
            aria-label="YouTube"
            title="YouTube"
          >
            <YouTube class="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/ralodev"
            target="_blank"
            class="dark:bg-gray-800 bg-gray-200 hover:bg-gray-100 font-semibold text-white inline-flex items-center space-x-2 rounded transition-all duration-300 ease-in-out dark:hover:bg-gray-700"
            aria-label="Twitter"
            title="Twitter"
          >
            <Twitter class="w-6 h-6" />
          </a>
        </span>
      </div>
      <div
        v-if="!isMobile"
        class="lg:col-span-4 md:col-span-3 xl:col-span-3 col-span-8 flex content-center justify-end items-center h-full"
      >
        <lottie-player
          :src="homeAnimation"
          background="transparent"
          speed="1"
          class="mx-auto my-auto max-h-[200px] max-w-[200px] md:max-w-[300px] md:max-h-[300px] lg:max-w-[400px] lg:max-h-[400px] xl:max-w-[400px] xl:max-h-[400px]"
          loop
          autoplay
        />
      </div>
    </article>
    <div
      v-if="!isMobile"
      class="absolute bottom-10 left-1/2 transform -translate-x-1/2"
    >
      <lottie-player
        :src="scrollAnimation"
        background="transparent"
        speed="2"
        class="w-[50px] h-[50px]"
        loop
        autoplay
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import { RouterLink } from 'vue-router'
import GitHub from '@/components/icons/GitHub.vue'
import LinkedIn from '@/components/icons/LinkedIn.vue'
import YouTube from '@/components/icons/YouTube.vue'
import Twitter from '@/components/icons/TwitterIcon.vue'
import handAnimation from '@/assets/img/animations/hand.json'
import homeAnimation from '@/assets/img/animations/home_animation.json'
import scrollAnimation from '@/assets/img/animations/scroll.json'
// import { ref, onBeforeMount } from 'vue'

const isMobile = inject<boolean>('isMobile', false)
// const scrollAnimation = ref()

// onBeforeMount(() => {
//   console.log('isMobile', isMobile)
//   if (!isMobile) {
//     scrollAnimation.value = new URL(
//       '@/assets/img/animations/scroll.json',
//       import.meta.url
//     ).href
//     return
//   }
// })
</script>
