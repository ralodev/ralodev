<template>
  <nav
    class="fixed top-0 z-20 flex h-[80px] w-full items-center justify-center border-b border-[#0000001f] bg-lsurface !bg-opacity-90 text-[#14142b] backdrop-blur-lg dark:border-[#ffffff1f] dark:bg-bg_dark dark:text-gray-300"
  >
    <div
      class="flex w-full max-w-[1000px] items-center justify-between px-4 lg:px-0"
    >
      <!-- Logo -->
      <header role="banner">
        <RouterLink
          class="group flex h-12 text-2xl font-bold text-ltext1 dark:text-dtext1"
          :to="{ name: 'Home' }"
          spy="{true}"
          smooth="{true}"
          offset="{0}"
          duration="{500}"
          isDynamic="{true}"
        >
          <RaloDev class="z-20 h-12 w-12 transition-all duration-500" />
          <div
            class="ms- pointer-events-none z-10 -translate-x-12 opacity-0 transition-all delay-100 duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          >
            <span
              class="absolute -top-1 inline-block bg-gradient-to-br from-[#447ffa] to-[#2e57ac] bg-clip-text font-display font-bold text-transparent"
              >alo</span
            >
            <span class="absolute -bottom-1 text-xl font-normal text-[#af39cc]">
              /Dev
            </span>
          </div>
        </RouterLink>
      </header>
      <!-- Content -->
      <div class="flex flex-row">
        <!-- Desktop menu -->
        <div className="hidden md:flex code text-base pe-8">
          <!-- TailwindCSS Dropdown HOME -->
          <div class="flex w-full flex-row">
            <ul class="flex gap-3">
              <li class="">
                <RouterLink
                  class="border-b-lprimary text-ltext1 hover:border-b-2 dark:border-b-dprimary dark:text-dtext1"
                  :to="{ name: 'Home', hash: '#experience' }"
                  spy="{true}"
                  smooth="{true}"
                  offset="{0}"
                  duration="{500}"
                  isDynamic="{true}"
                >
                  Experience
                </RouterLink>
              </li>
              <li class="">
                <RouterLink
                  class="border-b-lprimary text-ltext1 hover:border-b-2 dark:border-b-dprimary dark:text-dtext1"
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

              <li class="">
                <RouterLink
                  class="border-b-lprimary text-ltext1 hover:border-b-2 dark:border-b-dprimary dark:text-dtext1"
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
              <li class="">
                <RouterLink
                  class="border-b-lprimary text-ltext1 hover:border-b-2 dark:border-b-dprimary dark:text-dtext1"
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
              <li class="">
                <RouterLink
                  class="border-b-lprimary text-ltext1 hover:border-b-2 dark:border-b-dprimary dark:text-dtext1"
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
        <!-- ThemeButton -->
        <SwitchThemeButton class="my-auto h-6 w-6 xl:me-0" />

        <!-- Mobile menu button -->
        <div
          @click="handleClick"
          class="z-10 my-auto ms-8 cursor-pointer md:hidden"
        >
          <svg
            v-if="open"
            class="text-ltext dark:text-dtext h-6 w-6"
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
            class="text-ltext dark:text-dtext h-6 w-6"
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
          class="bg-lbg absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center space-y-5 bg-bg transition-all duration-500 dark:bg-dbg"
          :class="[open ? 'opacity-100' : 'pointer-events-none opacity-0']"
        >
          <li v-for="link in links" :key="link.name">
            <RouterLink
              :to="link"
              spy="{true}"
              smooth="{true}"
              offset="{0}"
              duration="{500}"
              isDynamic="{true}"
              class="dark:text-dtext text-ltext my-4 text-2xl"
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
import RaloDev from './icons/RaloDev.vue'
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
