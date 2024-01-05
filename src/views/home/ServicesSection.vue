<template>
  <section
    id="services"
    name="services"
    className="w-full min-h-screen h-auto flex items-center justify-center content-center overflow-x-hidden"
  >
    <article
      className="relative xl:px-0 px-10 max-w-[1200px] mx-auto h-full text-center "
    >
      <!--background-->
      <div
        :class="
          isMobile
            ? 'absolute inset-0 dark:opacity-50 opacity-30 bg-coil'
            : 'cards-bg'
        "
      />
      <h2 className="dark:text-dtext1 text-ltext1 font-bold text-4xl">
        My services
      </h2>
      <p
        className="dark:text-dtext2 pt-3 md:text-2xl font-extrabold text-xl text-ltext2 mb-5"
      >
        I can provide you with a wide range of services, here are some of them:
      </p>
      <div
        class="relative md:px-2 text-ltext2 dark:text-dtext2 grid md:grid-cols-2 md:gap-x-0 text-start gap-y-10 cursor-default"
        :class="isMobile ? '[&>*]:text-center' : ''"
      >
        <!--card-->
        <div
          class="card md:-translate-x-6 hover:shadow-lg"
          :class="isMobile ? '' : 'hover:-translate-y-1'"
          @mouseenter="mouseenter(player1)"
          @mouseleave="mouseleave(player1)"
        >
          <header>
            <!--icon-->
            <lottie-player
              v-if="!isMobile"
              :src="serverAnimation"
              background="transparent"
              speed="1"
              ref="player1"
              class="bg-[#ebf8ff] dark:bg-gray-600 rounded-xl overflow-hidden"
              :class="
                isMobile ? 'w-[80px] h-[80px] mx-auto' : 'w-[100px] h-[100px]'
              "
              loop
              :autoplay="isMobile"
            />
            <!--title-->
            <span class="text-2xl font-bold backface-hidden"
              >Full Stack Development</span
            >
          </header>
          <p class="backface-hidden">
            I can build you a full stack application using the latest
            technologies and frameworks for both the frontend and the backend
            ensuring a fast and responsive application.
          </p>
        </div>
        <div
          class="card md:translate-x-6 hover:shadow-lg"
          :class="isMobile ? '' : 'hover:-translate-y-1'"
          @mouseenter="mouseenter(player2)"
          @mouseleave="mouseleave(player2)"
        >
          <header>
            <!--icon-->
            <lottie-player
              v-if="!isMobile"
              :src="dashboardAnimation"
              background="transparent"
              speed="1"
              ref="player2"
              class="rounded-xl overflow-hidden bg-[#ffebf6] dark:bg-gray-600"
              :class="
                isMobile ? 'w-[80px] h-[80px] mx-auto' : 'w-[100px] h-[100px]'
              "
              loop
              :autoplay="isMobile"
            />
            <!--title-->
            <span class="text-2xl font-bold">UI/UX Design</span>
          </header>
          <p>
            If you need a website or an application, I can design it for you
            using the latest design trends and tools, providing you with a
            modern and responsive design.
          </p>
        </div>
        <div
          class="card md:-translate-x-6 hover:shadow-lg"
          :class="isMobile ? '' : 'hover:-translate-y-1'"
          @mouseenter="mouseenter(player3)"
          @mouseleave="mouseleave(player3)"
        >
          <header>
            <!--icon-->
            <lottie-player
              v-if="!isMobile"
              :src="seoAnimation"
              background="transparent"
              speed="1"
              ref="player3"
              class="rounded-xl overflow-hidden bg-[#fff5d2] dark:bg-gray-600"
              :class="
                isMobile ? 'w-[80px] h-[80px] mx-auto' : 'w-[100px] h-[100px]'
              "
              loop
              :autoplay="isMobile"
            />
            <!--title-->
            <span class="text-2xl font-bold">Data Analysis</span>
          </header>
          <p>
            I can help you analyze and visualize your data using the latest
            tools and technologies, providing you with a detailed report and
            insights.
          </p>
        </div>
        <div
          class="card md:translate-x-6 hover:shadow-lg"
          :class="isMobile ? '' : 'hover:-translate-y-1'"
          @mouseenter="mouseenter(player4)"
          @mouseleave="mouseleave(player4)"
        >
          <header>
            <!--icon-->
            <lottie-player
              v-if="!isMobile"
              :src="integrationAnimation"
              background="transparent"
              speed="1"
              ref="player4"
              class="rounded-xl overflow-hidden bg-[#f3eeff] dark:bg-gray-600"
              :class="
                isMobile ? 'w-[80px] h-[80px] mx-auto' : 'w-[100px] h-[100px]'
              "
              loop
              :autoplay="isMobile"
            />
            <!--title-->
            <span class="text-2xl font-bold">Technical Problem Solving </span>
          </header>
          <p>
            I can help you solve any technical problem you might have, whether
            it's a bug in your code or a problem with your computer, I can help
            you solve it.
          </p>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref, inject } from 'vue'
import serverAnimation from '@/assets/img/animations/server.json'
import integrationAnimation from '@/assets/img/animations/integration.json'
import seoAnimation from '@/assets/img/animations/seo.json'
import dashboardAnimation from '@/assets/img/animations/dashboard.json'

const isMobile = inject<boolean>('isMobile')

const player1 = ref(null)
const player2 = ref(null)
const player3 = ref(null)
const player4 = ref(null)

function mouseenter(player?: any) {
  if (player && !isMobile) {
    player.play()
  }
}

function mouseleave(player?: any) {
  if (player && !isMobile) {
    player.stop()
  }
}
</script>
