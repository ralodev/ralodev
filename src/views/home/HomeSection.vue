<template>
  <section
    id="home"
    name="home"
    className="relative w-full md:px-0 px-10 flex flex-col content-center justify-center min-h-[600px] border-2"
  >
    <header>
      <img
        class="relative h-20 w-20 rounded-full"
        :src="avatar"
        alt="ralodev avatar"
      />
      <h1
        className="text-2xl md:text-3xl xl:text-5xl dark:text-dtext2  font-bold text-ltext2 "
      >
        Hello, I'm Raúl López
      </h1>

      <h2
        className="text-5xl md:text-5xl xl:text-7xl dark:text-dtext1 text-ltext1 font-extrabold w-full"
      >
        I'm a Full Stack Developer
      </h2>
    </header>

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
    <span class="flex gap-5">
      <SocialButton icon="GitHub" href="https://github.com/ralodev" />
      <SocialButton icon="Linkedin" href="https://github.com/ralodev" />
    </span>
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 transform"></div>
  </section>
</template>

<script lang="ts" setup>
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import { RouterLink } from 'vue-router'
import SocialButton from '@/components/buttons/SocialButton.vue'
import avatar from '@/assets/img/avatar.webp'
</script>
