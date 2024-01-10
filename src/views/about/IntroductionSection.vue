<template>
  <section
    id="about"
    name="about"
    className="w-full min-h-[600px] h-auto flex items-center justify-center content-center "
  >
    <article
      className="xl:px-0 md:px-10 max-w-[1200px] mx-auto justify-center h-full text-center grid-cols-2"
    >
      <div class="relative text-start dark:text-gray-300 md:gap-x-0">
        <!--card-->
        <div class="relative p-4 duration-500 md:grid md:grid-cols-2">
          <span class="relative col-span-2 lg:col-span-1">
            <!--

              <img
              src="https://placehold.co/600x600?text=Will+be+added+soon+:)"
              alt="Ralodev's profile picture"
              class="rounded-full mx-auto mb-3 h-[200px] sm:h-[300px] lg:h-[400px]"
              />
            -->
            <div class="absolute inset-0 z-[-1]">
              <img
                :src="landing"
                alt="Ralodev's profile picture"
                class="absolute inset-0 left-0 right-0 z-0 mx-auto h-[210px] rounded-full blur-md sm:h-[310px] lg:h-[300px]"
              />
            </div>
            <img
              :src="landing"
              alt="Ralodev's profile picture"
              class="z-1 mx-auto h-[200px] rounded-full p-1 sm:h-[300px] lg:h-[300px]"
            />
          </span>
          <span
            class="col-span-2 my-auto block items-center justify-center text-center md:text-start lg:col-span-1"
          >
            <h1 className="dark:text-gray-300 font-semibold text-4xl">
              Hello, I'm Raúl López
            </h1>
            <p
              className="dark:text-gray-400 pt-3 md:text-lg text-base text-gray-700 my-5"
            >
              I'm a Full Stack Developer with
              <strong> 1+ year of experience</strong>. I'm passionate about
              learning new technologies and building innovative
              <strong>solutions</strong>.
            </p>
            <span class="flex justify-evenly md:justify-normal md:gap-5">
              <span class="flex gap-5">
                <SocialButton icon="GitHub" href="https://github.com/ralodev" />
                <SocialButton
                  icon="Linkedin"
                  href="https://github.com/ralodev"
                />
                <PrimaryButton
                  label="Get in touch"
                  bg="bg-primary"
                  @click="goToContact"
                />
              </span>
            </span>
          </span>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import SocialButton from '@/components/buttons/SocialButton.vue'
import landing from '@/assets/img/landing.webp'

import { useRouter } from 'vue-router'

const router = useRouter()
function goToContact() {
  router.push({ name: 'Home', hash: '#contact' })
}
</script>
