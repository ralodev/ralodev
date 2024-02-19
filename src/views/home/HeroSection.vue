<template>
  <section
    id="hero"
    name="hero"
    className="w-full min-h-screen h-auto flex items-center justify-center content-center -mt-[80px]"
  >
    <article
      className="xl:px-0 md:px-10 mx-auto justify-center w-full h-full text-center grid-cols-2 "
    >
      <div class="relative text-start dark:text-gray-300 md:gap-x-0">
        <!--card-->
        <div class="relative grid grid-cols-5 justify-center duration-500">
          <span
            class="relative col-span-5 mx-auto flex flex-col gap-2 lg:order-2 lg:col-span-2"
          >
            <a
              class="relative mx-auto h-[100px] w-[100px] overflow-hidden rounded-full sm:h-[200px] sm:w-[200px] lg:h-[200px] lg:w-[200px]"
              href="https://www.linkedin.com/in/raul-lc/"
              target="_blank"
            >
              <img
                :src="avatar_b"
                alt="Ralodev's profile picture"
              />
              <img
                :src="frame"
                alt="Ralodev's profile picture"
                class="absolute inset-0 duration-500"
              />
            </a>
            <a
              class="self-center rounded-full bg-amber-600 bg-opacity-30 px-2 pb-0.5 pt-1 text-xs font-semibold text-amber-700 hover:cursor-pointer dark:bg-amber-300 dark:bg-opacity-20 dark:text-amber-500"
              href="https://www.linkedin.com/in/raul-lc/overlay/top-voice-detail/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADeR5MkBVhq7q3uVeJHFy3ZIblQCO50vydA"
              target="_blank"
              title="LinkedIn Top Voice"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="my-auto inline h-5 w-5 pb-0.5"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                />
                <path
                  d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"
                />
                <path
                  d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"
                />
                <path d="M9.7 17l4.6 0" />
              </svg>
              Top Software Development Voice
            </a>
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
import frame from '@/assets/img/open-to-work.webp';
import avatar_b from '@/assets/img/avatar_blur.webp';
import GitHub from '@/components/icons/GitHub.vue';
import LinkedIn from '@/components/icons/LinkedIn.vue';

import { useRouter } from 'vue-router';
const router = useRouter();
function goToContact() {
  router.push({ name: 'Home', hash: '#contact' });
}
</script>
