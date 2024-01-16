<template>
  <section
    id="introduction"
    name="introduction"
    className="w-full min-h-screen h-auto flex items-center justify-center content-center -mt-[80px]"
  >
    <article
      className="xl:px-0 md:px-10 mx-auto justify-center h-full text-center grid-cols-2 "
    >
      <div class="relative text-start dark:text-gray-300 md:gap-x-0">
        <!--card-->
        <div class="relative p-4 duration-500 md:grid md:grid-cols-2">
          <span
            class="group/x relative col-span-2 h-[400px] w-[400px] lg:col-span-1"
            ref="mediaContainer"
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
            class="col-span-2 my-auto block items-center justify-center pt-10 text-center md:text-start lg:col-span-1 lg:pt-0"
          >
            <h1 className="dark:text-dtext1 font-semibold text-3xl">
              Hello 👋,
              <span class="block text-4xl">
                My name is

                <span class="text-primary dark:text-sky-400"> Raúl López </span>
              </span>
            </h1>
            <p
              className="dark:text-gray-300 pt-3 md:text-lg text-base text-gray-700 my-5"
            >
              I'm a Full Stack Developer with
              <strong class="text-emerald-600 dark:text-emerald-200">
                1+ year of experience</strong
              >. I'm passionate about learning new technologies and building
              innovative
              <strong class="text-yellow-600 dark:text-yellow-200"
                >solutions</strong
              >.
            </p>
            <span class="flex justify-evenly md:justify-normal md:gap-5">
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
