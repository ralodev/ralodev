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
            class="group/x relative col-span-5 mx-auto h-[110px] w-[110px] sm:h-[210px] sm:w-[210px] lg:order-2 lg:col-span-2 lg:h-[300px] lg:w-[300px]"
          >
            <div class="absolute">
              <div class="absolute inset-0 z-[-1]">
                <img
                  :src="avatar"
                  alt="Ralodev's profile picture background"
                  aria-hidden="true"
                  class="absolute top-[-5px] z-0 mx-auto h-[110px] rounded-full object-contain opacity-0 blur-md duration-500 group-hover/x:opacity-100 sm:h-[210px] lg:h-[310px]"
                />
              </div>
              <img
                :src="avatar"
                alt="Ralodev's profile picture"
                class="z-[1] mx-auto h-[100px] rounded-full object-contain p-1 sm:h-[200px] lg:h-[300px]"
              />
            </div>
            <div
              class="absolute opacity-0 duration-300 group-hover/x:opacity-100"
            >
              <img
                :src="avatar_b"
                alt="Ralodev's profile picture"
                class="z-[1] mx-auto h-[100px] rounded-full p-1 sm:h-[200px] lg:h-[300px]"
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

                <span class="text-sky-800 dark:text-sky-400"> Raúl López </span>
              </span>
            </h1>
            <p
              className="text-pretty dark:text-gray-100 py-3 md:text-xl text-base text-gray-900"
            >
              Full Stack Developer with
              <strong class="text-emerald-700 dark:text-emerald-200">
                1+ year of experience</strong
              >. I'm from México, specialized in Backend Development and
              Software Architecture.
            </p>
            <span class="flex justify-evenly md:gap-5 lg:justify-normal">
              <span class="flex gap-5">
                <a
                  href="https://github.com/ralodev"
                  target="_blank"
                >
                  <PrimaryButton
                    severity="bg-neutral-800"
                    title="GitHub"
                    type="icon"
                  >
                    <GitHub />
                  </PrimaryButton>
                </a>
                <a
                  href="https://www.linkedin.com/in/raul-lc/"
                  target="_blank"
                >
                  <PrimaryButton
                    severity="bg-[#0e72a3]"
                    title="LinkedIn"
                    type="icon"
                  >
                    <LinkedIn />
                  </PrimaryButton>
                </a>
                <PrimaryButton
                  label="Get in touch"
                  @click="goToContact"
                >
                </PrimaryButton>
              </span>
            </span>
          </span>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import avatar from '@/assets/img/avatar.webp';
import avatar_b from '@/assets/img/avatar_blur.webp';
import GitHub from '@/components/icons/GitHub.vue';
import LinkedIn from '@/components/icons/LinkedIn.vue';

import { useRouter } from 'vue-router';
const router = useRouter();
function goToContact() {
  router.push({ name: 'Home', hash: '#contact' });
}
</script>
