<template>
  <section
    id="home"
    name="home"
    className="relative flex w-full min-h-screen overflow-x-hidden"
  >
    <div
      class="landing inset-0 my-auto before:bg-gradient-to-tr dark:before:from-[#3245ff] dark:before:to-[#bc52ee] before:bg-transparent"
    ></div>
    <article
      className="grid xl:px-0 px-10 grid-cols-7 max-w-[1200px] h-full mx-auto my-auto"
    >
      <div
        class="lg:col-span-4 md:col-span-4 col-span-7 flex flex-wrap content-center md:justify-normal md:text-start justify-center text-center"
      >
        <div class="relative flex justify-center items-center h-12">
          <h1
            className="dark:text-dtext2 flex font-bold text-xl lg:text-4xl text-ltext3"
          >
            Hello, I'm Raúl López
          </h1>
          <lottie-player
            src="/src/assets/img/hand.json"
            background="transparent"
            speed="1"
            class="-rotate-[20deg] h-[30px] w-[30px] lg:w-[50px] lg:h-[50px] mx-1 rounded-full"
            :count="2"
            loop
            autoplay
          />
        </div>
        <h2
          className="title text-4xl md:text-5xl xl:text-7xl dark:text-dtext1 text-ltext1 font-extrabold"
        >
          Software Engineer and Full Stack Developer
        </h2>
        <p
          className="title dark:text-gray-400 pt-3 text-4xl md:text-5xl font-extrabold"
        ></p>
        <div
          className="flex gap-5 w-full mb-8 mt-3 justify-center md:justify-start"
        >
          <PrimaryButton label="Get in touch" @click="clicked" />
        </div>
        <span
          class="[&>*]:w-8 [&>*]:h-8 [&>*]:rounded-md [&>*]:text-ltext1 [&>*]:dark:text-dtext1 [&>*]:my-auto [&>*:not(:first-child)]:ml-3 flex"
        >
          <a
            href="https://github.com/ralodev"
            target="_blank"
            class="dark:bg-gray-800 bg-gray-200 hover:bg-gray-100 font-semibold text-white inline-flex items-center space-x-2 rounded transition-all duration-300 ease-in-out dark:hover:bg-gray-700"
          >
            <GitHub class="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/raul-lopez-cruz/"
            target="_blank"
            class="dark:bg-gray-800 bg-gray-200 hover:bg-gray-100 font-semibold text-white inline-flex items-center space-x-2 rounded transition-all duration-300 ease-in-out dark:hover:bg-gray-700"
          >
            <LinkedIn class="w-5 h-5" />
          </a>
          <a
            href="https://www.youtube.com/@ralodev"
            target="_blank"
            class="dark:bg-gray-800 bg-gray-200 hover:bg-gray-100 font-semibold text-white inline-flex items-center space-x-2 rounded transition-all duration-300 ease-in-out dark:hover:bg-gray-700"
          >
            <YouTube class="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/ralodev"
            target="_blank"
            class="dark:bg-gray-800 bg-gray-200 hover:bg-gray-100 font-semibold text-white inline-flex items-center space-x-2 rounded transition-all duration-300 ease-in-out dark:hover:bg-gray-700"
          >
            <Twitter class="w-6 h-6" />
          </a>
        </span>
      </div>
      <div
        class="lg:col-span-3 md:col-span-3 col-span-7 flex content-center justify-end items-center h-full"
      >
        <lottie-player
          src="/src/assets/img/home_animation.json"
          background="transparent"
          speed="1"
          class="mx-auto my-auto max-w-[400px] max-h-[400px]"
          loop
          autoplay
        />
      </div>
    </article>
    <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2">
      <lottie-player
        src="/src/assets/img/scroll.json"
        background="transparent"
        speed="1"
        class="w-[50px] h-[50px]"
        loop
        autoplay
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import GitHub from '@/components/icons/GitHub.vue'
import LinkedIn from '@/components/icons/LinkedIn.vue'
import YouTube from '@/components/icons/YouTube.vue'
import Twitter from '@/components/icons/TwitterIcon.vue'

function clicked() {
  console.log('clicked')
}
</script>
