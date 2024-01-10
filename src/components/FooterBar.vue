<template>
  <!-- ====== Footer Section Start -->
  <footer
    class="bg-lbg relative z-10 mt-5 overflow-hidden bg-gray-300 pb-10 pt-5 dark:bg-gradient-to-b dark:from-dbg dark:to-dsurface dark:text-dtext1 lg:pt-[120px]"
  >
    <div class="container mx-auto max-w-[1200px] font-display">
      <div class="flex flex-wrap">
        <div class="w-full px-4">
          <div class="flex w-full gap-3">
            <div class="">
              <RouterLink
                class="group relative"
                :to="{ name: 'Home' }"
                offset="{0}"
                duration="{500}"
                isDynamic="{true}"
              >
                <img
                  src="/r_plain.svg"
                  alt="logo"
                  class="max-w-[64px]"
                  style="width: 48px; height: 48px"
                />
              </RouterLink>
            </div>
            <p class="text-body-color dark:text-dark-6 text-base">
              Made with ❤️ by Raúl López.
              <br />Thanks for visiting!
            </p>
          </div>
          <p class="text-dark flex items-center pt-2 text-sm dark:text-white">
            <span>
              This website is licensed under the GNU General Public License
              v3.0. The source code is available in
              <a
                href="https://github.com/ralodev/ralodev/tree/Vuejs"
                target="_blank"
                rel="noopener noreferrer"
                class="text-lprimary hover:text-primary dark:text-cyan-400 dark:hover:text-blue-400"
                >GitHub</a
              >. Feel free to use it for your own projects. 🫡</span
            >
          </p>
        </div>
      </div>
    </div>
    <div>
      <div
        class="custom-shape-divider-top-1704854337 text-[#fff] dark:text-[#0c1323]"
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  </footer>
  <!-- ====== Footer Section End -->
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.custom-shape-divider-top-1704854337 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1704854337 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 70px;
}
</style>
