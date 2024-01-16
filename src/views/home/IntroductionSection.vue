<template>
  <section
    id="introduction"
    name="introduction"
    className="w-full min-h-screen h-auto flex items-center justify-center content-center -mt-[80px]"
  >
    <article
      className="xl:px-0 md:px-10 mx-auto justify-center w-full h-full text-center grid-cols-2 "
    >
      <div class="relative text-start dark:text-gray-300 md:gap-x-0">
        <!--card-->
        <div class="relative grid grid-cols-5 justify-center py-4 duration-500">
          <span
            class="group/x relative col-span-5 mx-auto h-[210px] w-[210px] sm:h-[310px] sm:w-[310px] lg:order-2 lg:col-span-2 lg:h-[400px] lg:w-[400px]"
          >
            <div class="absolute">
              <div class="absolute inset-0 z-[-1]">
                <img
                  :src="avatar"
                  alt="Ralodev's profile picture background"
                  aria-hidden="true"
                  class="absolute inset-0 left-0 right-0 z-0 mx-auto h-[210px] rounded-full object-contain blur-md sm:h-[310px] lg:h-[410px]"
                />
              </div>
              <img
                :src="avatar"
                alt="Ralodev's profile picture"
                class="z-[1] mx-auto h-[200px] rounded-full object-contain p-1 sm:h-[300px] lg:h-[400px]"
              />
            </div>
            <div class="invisible absolute group-hover/x:visible">
              <img
                :src="gif"
                alt="Ralodev's profile picture"
                class="z-[1] mx-auto h-[200px] rounded-full p-1 sm:h-[300px] lg:h-[400px]"
              />
            </div>
          </span>
          <span
            class="col-span-5 my-auto block items-center justify-center text-center md:pt-10 lg:order-1 lg:col-span-3 lg:pt-0 lg:text-start"
          >
            <h1 className="dark:text-dtext1 font-semibold text-3xl">
              Hello 👋,
              <span class="block text-3xl sm:text-4xl md:text-5xl">
                My name is

                <span class="text-primary dark:text-sky-400"> Raúl López </span>
              </span>
            </h1>
            <p
              className="dark:text-gray-100 py-3 md:text-xl text-base text-gray-900"
            >
              I'm a Full Stack Developer with
              <strong class="text-emerald-700 dark:text-emerald-200">
                1+ year of experience</strong
              >. I'm passionate about learning new technologies and building
              innovative
              <strong class="text-yellow-700 dark:text-yellow-200"
                >solutions</strong
              >.
            </p>
            <span class="flex justify-evenly md:gap-5 lg:justify-normal">
              <span class="flex gap-5">
                <SocialButton icon="GitHub" href="https://github.com/ralodev" />
                <SocialButton
                  icon="Linkedin"
                  href="https://www.linkedin.com/in/raul-lc/"
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
import gif from '@/assets/img/gif-variable.webp'
import avatar from '@/assets/img/avatar.webp'

import { useRouter } from 'vue-router'
const router = useRouter()
function goToContact() {
  router.push({ name: 'Home', hash: '#contact' })
}
</script>
