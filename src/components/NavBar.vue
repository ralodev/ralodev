<template>
  <nav
    class="!fixed top-0 w-full h-[80px] flex justify-center items-center border-b dark:border-[#ffffff1f] border-[#0000001f] dark:bg-dbg bg-lsurface text-[#14142b] dark:text-gray-300 z-20"
  >
    <div class="flex max-w-[1200px] w-full items-center justify-between">
      <!-- Logo -->
      <header role="banner">
        <RouterLink
          class="flex text-ltext1 dark:text-dtext1 font-bold text-2xl logo relative group"
          :to="{ name: 'Home' }"
          spy="{true}"
          smooth="{true}"
          offset="{0}"
          duration="{500}"
          isDynamic="{true}"
        >
          <img class="w-16 h-16 z-20 rounded-full" src="/logo.png" alt="Logo" />
          <div
            class="absolute bg-lsurface dark:bg-dbg w-12 h-12 top-2 z-[19] left-2 rounded-full"
          ></div>
          <div
            class="relative -translate-x-10 z-10 group-hover:translate-x-0 duration-300 transition-all"
          >
            <span
              class="text-sky-600 -ms-2 font-semibold top-0 my-2 absolute f-opensans"
              >alo</span
            >
            <span
              class="text-fuchsia-800 -ms-2 font-normal bottom-0 my-2 absolute f-montserrat"
              >ev</span
            >
          </div>
        </RouterLink>
      </header>
      <!-- Content -->
      <div class="flex flex-row">
        <!-- Desktop menu -->
        <div className="hidden md:flex code text-lg me-8">
          <!-- TailwindCSS Dropdown test -->
          <div class="relative group w-full">
            <RouterLink
              class="dark:hover:text-dprimary hover:text-lprimary hover:border-b-2 dark:border-b-dprimary border-b-lprimary text-ltext1 dark:text-dtext1 me-2"
              :to="{ name: 'Home' }"
              active-class="border-b-2 border-[#60f7d4] text-lprimary dark:text-dprimary"
              spy="{true}"
              smooth="{true}"
              offset="{0}"
              duration="{500}"
              isDynamic="{true}"
            >
              Home
              <svg class="w-4 h-4 inline-block" viewBox="0 0 20 20">
                <path
                  fill="currentColor"
                  d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z"
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
                    :to="{ name: 'Home', hash: '#about' }"
                    spy="{true}"
                    smooth="{true}"
                    offset="{0}"
                    duration="{500}"
                    isDynamic="{true}"
                  >
                    About
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
          <!-- End TailwindCSS Dropdown test -->
          <ul
            class="[&>*]:cursor-pointer [&>*]:inline-block flex-row flex [&>li]:px-4"
          >
            <li class="my-auto">
              <RouterLink
                class="dark:hover:text-dtext3 hover:text-ltext3 dark:border-b-dprimary border-b-lprimary text-ltext1 dark:text-dtext1"
                active-class="border-b-2 border-[#60f7d4] text-lprimary dark:text-dprimary"
                :to="{ name: 'About' }"
                spy="{true}"
                smooth="{true}"
                offset="{0}"
                duration="{500}"
                isDynamic="{true}"
              >
                About
              </RouterLink>
            </li>
            <li class="my-auto">
              <RouterLink
                class="dark:hover:text-dtext3 hover:text-ltext3 dark:border-b-dprimary border-b-lprimary text-ltext1 dark:text-dtext1"
                active-class="border-b-2 border-[#60f7d4] text-lprimary dark:text-dprimary"
                :to="{ name: 'Blog' }"
                spy="{true}"
                smooth="{true}"
                offset="{0}"
                duration="{500}"
                isDynamic="{true}"
              >
                Blog
              </RouterLink>
            </li>
            <li>
              <a
                href="mailto:contact@ralo.dev"
                class="flex dark:hover:text-dtext3 hover:text-ltext3 dark:border-b-dprimary border-b-lprimary text-ltext1 dark:text-dtext1"
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
            </li>
          </ul>
        </div>
        <!-- ThemeButton -->
        <SwitchThemeButton class="h-6 w-6 my-auto" />

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
          <RouterLink
            v-for="link in links"
            :key="link.name"
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
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import SwitchThemeButton from './buttons/SwitchThemeButton.vue'
import ThemeSwitch from './buttons/ThemeSwitch.vue'
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
