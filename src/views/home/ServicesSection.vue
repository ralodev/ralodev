<template>
  <section
    id="services"
    name="services"
    className="w-full min-h-screen h-auto flex items-center justify-center content-center overflow-x-hidden"
  >
    <article
      className="xl:px-0 px-10 max-w-[1200px] mx-auto h-full text-center "
    >
      <h1 className="dark:text-dtext1 text-ltext1 font-bold text-5xl">
        My services
      </h1>
      <p
        className="dark:text-dtext2 pt-3 md:text-2xl font-extrabold text-2xl text-ltext2 mb-5"
      >
        I can provide you with a wide range of services, here are some of them:
      </p>
      <div
        class="relative md:px-2 text-ltext2 dark:text-dtext2 grid md:grid-cols-2 md:gap-x-0 text-start gap-y-10"
      >
        <!--background-->
        <div class="cards-bg" />
        <!--card-->
        <div
          class="card md:-translate-x-6 hover:-translate-y-1 hover:shadow-lg"
          @mouseenter="mouseenter(player1)"
          @mouseleave="mouseleave(player1)"
        >
          <header class="">
            <!--icon-->
            <lottie-player
              src="/src/assets/img/server.json"
              background="transparent"
              speed="1"
              ref="player1"
              class="w-[100px] h-[100px] rounded-xl overflow-hidden mb-3 bg-[#ebf8ff] dark:bg-gray-600"
              loop
            />
            <!--title-->
            <span class="text-2xl font-bold backface-hidden"
              >Full Stack Development</span
            >
          </header>
          <p class="backface-hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            libero autem qui maxime deleniti nesciunt enim numquam quae earum
            rem.
          </p>
        </div>
        <div
          class="card md:translate-x-6 hover:-translate-y-1 hover:shadow-lg"
          @mouseenter="mouseenter(player2)"
          @mouseleave="mouseleave(player2)"
        >
          <header>
            <!--icon-->
            <lottie-player
              src="/src/assets/img/dashboard.json"
              background="transparent"
              speed="1"
              ref="player2"
              class="w-[100px] h-[100px] rounded-xl overflow-hidden mb-3 bg-[#ffebf6] dark:bg-gray-600"
              loop
            />
            <!--title-->
            <span class="text-2xl font-bold">UI/UX Design</span>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            deleniti doloribus porro modi? Cumque minus corrupti ut! Eligendi,
            voluptatibus quaerat?
          </p>
        </div>
        <div
          class="card md:-translate-x-6 hover:-translate-y-1 hover:shadow-lg"
          @mouseenter="mouseenter(player3)"
          @mouseleave="mouseleave(player3)"
        >
          <header>
            <!--icon-->
            <lottie-player
              src="/src/assets/img/seo.json"
              background="transparent"
              speed="1"
              ref="player3"
              class="w-[100px] h-[100px] rounded-xl overflow-hidden mb-3 bg-[#fff5d2] dark:bg-gray-600"
              loop
            />
            <!--title-->
            <span class="text-2xl font-bold">Data Analysis</span>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quod.
            Quisquam, voluptatum. Quisquam, voluptatum.
          </p>
        </div>
        <div
          class="card md:translate-x-6 hover:-translate-y-1 hover:shadow-lg"
          @mouseenter="mouseenter(player4)"
          @mouseleave="mouseleave(player4)"
        >
          <header>
            <!--icon-->
            <lottie-player
              src="/src/assets/img/integration.json"
              background="transparent"
              speed="1"
              ref="player4"
              class="w-[100px] h-[100px] rounded-xl overflow-hidden mb-3 bg-[#f3eeff] dark:bg-gray-600"
              loop
            />
            <!--title-->
            <span class="text-2xl font-bold">Technical Problem Solving </span>
          </header>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ut
            qui quis reiciendis architecto hic quasi itaque veniam ducimus
            deleniti.
          </p>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const player1 = ref(null)
const player2 = ref(null)
const player3 = ref(null)
const player4 = ref(null)

function mouseenter(player?: any) {
  if (player) {
    player.play()
  }
}

function mouseleave(player?: any) {
  if (player) {
    player.stop()
  }
}
</script>
