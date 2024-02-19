<template>
  <section
    id="hero"
    name="hero"
    class="body__section"
  >
    <div class="grid grid-cols-5 justify-center gap-5">
      <span
        class="col-span-5 mx-auto flex flex-col gap-2 lg:order-2 lg:col-span-2"
      >
        <a
          class="hero__img-container"
          href="https://www.linkedin.com/in/raul-lc/"
          target="_blank"
        >
          <img
            :src="avatar_b"
            alt="Ralodev's profile picture"
          />
          <img
            :src="frame"
            alt="Ralodev's profile picture with a frame"
            class="absolute inset-0"
          />
        </a>
        <a
          class="hero__linkedin-top-voice"
          href="https://www.linkedin.com/in/raul-lc/overlay/top-voice-detail/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADeR5MkBVhq7q3uVeJHFy3ZIblQCO50vydA"
          target="_blank"
          title="LinkedIn Top Voice"
        >
          <lightbulb-icon class="my-auto inline h-5 w-5 pb-0.5" />
          Top Software Development Voice
        </a>
      </span>
      <span
        class="col-span-5 my-auto block items-center justify-center lg:order-1 lg:col-span-3"
      >
        <span class="text-3xl font-bold dark:text-white"> Hello 👋, </span>
        <h1 class="text-4xl font-bold dark:text-white sm:text-5xl">
          My name is
          <span class="text-cyan-700 dark:text-cyan-500"> Raúl López </span>
        </h1>
        <p class="text-pretty py-3 text-lg">
          I'm a Full Stack Developer with
          <strong class="text-teal-700 dark:text-teal-500">
            1+ year of experience</strong
          >. I'm from México, specialized in Backend Development and Software
          Architecture.
        </p>
        <span class="flex md:gap-5 lg:justify-normal">
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
            />
          </span>
        </span>
      </span>
    </div>
  </section>
</template>

<script lang="ts" setup>
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import frame from '@/assets/img/open-to-work.webp';
import avatar_b from '@/assets/img/avatar_blur.webp';
import GitHub from '@/components/icons/GitHub.vue';
import LinkedIn from '@/components/icons/LinkedIn.vue';
import lightbulbIcon from '@/components/icons/lightbulb-icon.vue';

import { useRouter } from 'vue-router';
const router = useRouter();
function goToContact() {
  router.push({ name: 'Home', hash: '#contact' });
}
</script>
