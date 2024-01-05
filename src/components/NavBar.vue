<template>
  <nav
    class="!fixed top-0 w-full h-[80px] flex justify-center items-center border-b dark:border-[#ffffff1f] border-[#0000001f] dark:bg-dbg bg-lsurface text-[#14142b] dark:text-gray-300 z-20"
  >
    <div class="flex max-w-[1200px] w-full items-center justify-between">
      <!-- Logo -->
      <header role="banner">
        <RouterLink
          class="flex text-ltext1 dark:text-dtext1 font-bold text-2xl relative group h-12"
          :to="{ name: 'Home' }"
          spy="{true}"
          smooth="{true}"
          offset="{0}"
          duration="{500}"
          isDynamic="{true}"
        >
          <img
            class="w-12 h-12 z-20 ms-8 xl:ms-0"
            src="/r_plain.svg"
            alt="Logo"
            style="width: 48px; height: 48px"
          />
          <div class="absolute w-12 h-12 z-[19] rounded-full"></div>
          <div
            class="relative z-10 group-hover:translate-x-0 duration-300 transition-all ms- -translate-x-12 opacity-0 group-hover:opacity-100"
          >
            <span
              class="bg-gradient-to-br from-[#447ffa] to-[#2e57ac] inline-block text-transparent bg-clip-text font-semibold -top-0 absolute f-opensans"
              >alo</span
            >
            <span
              class="text-ltext3 font-normal -bottom-0 absolute f-opensans text-xl"
              >>Dev</span
            >
          </div>
        </RouterLink>
      </header>
      <!-- Content -->
      <div class="flex flex-row">
        <!-- Desktop menu -->
        <div className="hidden md:flex code text-lg me-8">
          <!-- TailwindCSS Dropdown HOME -->
          <div class="relative group w-full">
            <RouterLink
              class="dark:hover:text-dprimary hover:text-lprimary border-b-2 border-transparent text-ltext3 dark:text-dtext1 mx-4 flex items-center"
              :to="{ name: 'Home' }"
              active-class="dark:border-b-dprimary border-b-lprimary text-lprimary dark:text-dprimary"
              spy="{true}"
              smooth="{true}"
              offset="{0}"
              duration="{500}"
              isDynamic="{true}"
            >
              Home
              <svg
                class="w-3 h-3 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 8"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                />
              </svg>
            </RouterLink>

            <div
              class="absolute hidden group-hover:block bg-white dark:bg-dbg backdrop-blur-sm dark:bg-opacity-90 bg-opacity-90 rounded-md shadow-md w-40 py-2 text-base font-normal text-ltext1 dark:text-dtext1"
            >
              <ul class="space-y-2 ps-4">
                <li class="hover:text-lprimary dark:hover:text-dprimary">
                  <RouterLink
                    class="dark:hover:text-dprimary hover:text-lprimary hover:border-b-2 dark:border-b-dprimary border-b-lprimary text-ltext1 dark:text-dtext1"
                    :to="{ name: 'Home', hash: '#services' }"
                    spy="{true}"
                    smooth="{true}"
                    offset="{0}"
                    duration="{500}"
                    isDynamic="{true}"
                  >
                    Services
                  </RouterLink>
                </li>
                <li class="hover:text-lprimary dark:hover:text-dprimary">
                  <RouterLink
                    class="dark:hover:text-dprimary hover:text-lprimary hover:border-b-2 dark:border-b-dprimary border-b-lprimary text-ltext1 dark:text-dtext1"
                    :to="{ name: 'Home', hash: '#about' }"
                    spy="{true}"
                    smooth="{true}"
                    offset="{0}"
                    duration="{500}"
                    isDynamic="{true}"
                  >
                    Info
                  </RouterLink>
                </li>
                <li class="hover:text-lprimary dark:hover:text-dprimary">
                  <RouterLink
                    class="dark:hover:text-dprimary hover:text-lprimary hover:border-b-2 dark:border-b-dprimary border-b-lprimary text-ltext1 dark:text-dtext1"
                    :to="{ name: 'Home', hash: '#resume' }"
                    spy="{true}"
                    smooth="{true}"
                    offset="{0}"
                    duration="{500}"
                    isDynamic="{true}"
                  >
                    Resume
                  </RouterLink>
                </li>
                <li class="hover:text-lprimary dark:hover:text-dprimary">
                  <RouterLink
                    class="dark:hover:text-dprimary hover:text-lprimary hover:border-b-2 dark:border-b-dprimary border-b-lprimary text-ltext1 dark:text-dtext1"
                    :to="{ name: 'Home', hash: '#projects' }"
                    spy="{true}"
                    smooth="{true}"
                    offset="{0}"
                    duration="{500}"
                    isDynamic="{true}"
                  >
                    Projects
                  </RouterLink>
                </li>
                <li class="hover:text-lprimary dark:hover:text-dprimary">
                  <RouterLink
                    class="dark:hover:text-dprimary hover:text-lprimary hover:border-b-2 dark:border-b-dprimary border-b-lprimary text-ltext1 dark:text-dtext1"
                    :to="{ name: 'Home', hash: '#contact' }"
                    spy="{true}"
                    smooth="{true}"
                    offset="{0}"
                    duration="{500}"
                    isDynamic="{true}"
                  >
                    Contact
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
          <!-- TailwindCSS Dropdown ABOUT -->
          <div class="relative group w-full">
            <RouterLink
              class="dark:hover:text-dprimary hover:text-lprimary border-b-2 border-transparent text-ltext3 dark:text-dtext1 mx-4 flex items-center"
              :to="{ name: 'About' }"
              active-class="dark:border-b-dprimary border-b-lprimary text-lprimary dark:text-dprimary"
              spy="{true}"
              smooth="{true}"
              offset="{0}"
              duration="{500}"
              isDynamic="{true}"
            >
              About
              <svg
                class="w-3 h-3 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 8"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                />
              </svg>
            </RouterLink>

            <div
              class="absolute hidden group-hover:block bg-white dark:bg-dbg backdrop-blur-sm dark:bg-opacity-90 bg-opacity-90 rounded-md shadow-md w-40 py-2 text-base font-normal text-ltext1 dark:text-dtext1"
            >
              <ul class="space-y-2 ps-4">
                <li class="hover:text-lprimary dark:hover:text-dprimary">
                  <RouterLink
                    class="dark:hover:text-dprimary hover:text-lprimary hover:border-b-2 dark:border-b-dprimary border-b-lprimary text-ltext1 dark:text-dtext1"
                    :to="{ name: 'About', hash: '#experience' }"
                    spy="{true}"
                    smooth="{true}"
                    offset="{0}"
                    duration="{500}"
                    isDynamic="{true}"
                  >
                    Experience
                  </RouterLink>
                </li>
                <li class="hover:text-lprimary dark:hover:text-dprimary">
                  <RouterLink
                    class="dark:hover:text-dprimary hover:text-lprimary hover:border-b-2 dark:border-b-dprimary border-b-lprimary text-ltext1 dark:text-dtext1"
                    :to="{ name: 'About', hash: '#awards' }"
                    spy="{true}"
                    smooth="{true}"
                    offset="{0}"
                    duration="{500}"
                    isDynamic="{true}"
                  >
                    Awards
                  </RouterLink>
                </li>
                <li class="hover:text-lprimary dark:hover:text-dprimary">
                  <RouterLink
                    class="dark:hover:text-dprimary hover:text-lprimary hover:border-b-2 dark:border-b-dprimary border-b-lprimary text-ltext1 dark:text-dtext1"
                    :to="{ name: 'About', hash: '#skills' }"
                    spy="{true}"
                    smooth="{true}"
                    offset="{0}"
                    duration="{500}"
                    isDynamic="{true}"
                  >
                    Skills
                  </RouterLink>
                </li>
                <li class="hover:text-lprimary dark:hover:text-dprimary">
                  <RouterLink
                    class="dark:hover:text-dprimary hover:text-lprimary hover:border-b-2 dark:border-b-dprimary border-b-lprimary text-ltext1 dark:text-dtext1"
                    :to="{ name: 'About', hash: '#education' }"
                    spy="{true}"
                    smooth="{true}"
                    offset="{0}"
                    duration="{500}"
                    isDynamic="{true}"
                  >
                    Education
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
          <!-- End TailwindCSS Dropdown test -->

          <a
            href="mailto:contact@ralo.dev"
            class="flex dark:hover:text-dprimary hover:text-lprimary dark:border-b-dprimary border-b-lprimary text-ltext3 dark:text-dtext1 mx-1"
          >
            <svg
              class="w-4 h-4 me-1 my-auto"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"
              />
            </svg>
            contact@ralo.dev</a
          >
        </div>
        <!-- ThemeButton -->
        <SwitchThemeButton class="h-6 w-6 my-auto me-8 xl:me-0" />

        <!-- Mobile menu button -->
        <div
          @click="handleClick"
          class="md:hidden z-10 cursor-pointer ms-8 me-8 my-auto"
        >
          <svg
            v-if="open"
            class="w-6 h-6 text-ltext dark:text-dtext"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <svg
            v-else
            class="w-6 h-6 text-ltext dark:text-dtext"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </div>
        <!-- Mobile menu -->
        <ul
          class="absolute flex top-0 left-0 w-full h-screen dark:bg-dbg bg-lbg flex-col justify-center items-center transition-all duration-500"
          :class="[open ? 'opacity-100' : 'opacity-0 pointer-events-none']"
        >
          <li v-for="link in links" :key="link.name">
            <RouterLink
              :to="link"
              exactActiveClass="border-b-2 border-[#60f7d4]"
              spy="{true}"
              smooth="{true}"
              offset="{0}"
              duration="{500}"
              isDynamic="{true}"
              class="text-2xl dark:text-dtext text-ltext my-4"
              @click="handleClick"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import SwitchThemeButton from './buttons/SwitchThemeButton.vue'
const open = ref(false)

type LinkInterface = {
  name: string
  hash?: string
  label: string
}

defineProps({
  links: {
    type: Array as () => LinkInterface[],
    required: true
  }
})

const handleClick = () => {
  open.value = !open.value
}
</script>
