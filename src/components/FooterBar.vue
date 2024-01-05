<template>
  <!-- ====== Footer Section Start -->
  <footer
    class="relative z-10 bg-lbg dark:bg-gradient-to-b dark:from-dbg dark:to-dsurface dark:text-dtext1 pt-5 mt-5 lg:pt-[120px] lg:pb-20 pb-10 overflow-hidden"
  >
    <div class="container mx-auto max-w-[1200px]">
      <div class="flex flex-wrap">
        <div class="w-full px-4 sm:w-2/3 lg:w-5/12">
          <div class="w-full mb-10">
            <div class="max-w-[100px]">
              <RouterLink
                class="group relative"
                :to="{ name: 'EasterEgg' }"
                offset="{0}"
                duration="{500}"
                isDynamic="{true}"
              >
                <img
                  src="/r_plain.svg"
                  alt="logo"
                  class="max-w-[64px] group-hover:animate-bounce"
                  style="width: 48px; height: 48px"
                />
                <span
                  class="absolute -top-8 w-full h-full group-hover:animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                  >Click me!</span
                >
              </RouterLink>
            </div>
            <p class="text-base text-body-color dark:text-dark-6 mb-7">
              Made with ❤️ by Raúl López.
              <br />Thanks for visiting!
            </p>
            <p
              class="flex items-center text-sm font-medium text-dark dark:text-white"
            >
              <span>
                This website is licensed under the GNU General Public License
                v3.0 (open source 🚀). The source code is available in
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
        <div v-if="!isMobile" class="w-full px-4 sm:w-1/2 lg:w-2/12">
          <div class="w-full mb-10">
            <h4 class="text-lg font-semibold text-dark dark:text-white mb-9">
              Home
            </h4>
            <ul class="space-y-3">
              <li>
                <RouterLink
                  class="dark:hover:text-dprimary hover:text-lprimary hover:border-b-2 dark:border-b-dprimary border-b-lprimary text-ltext1 dark:text-dtext1"
                  :to="{ name: 'Home' }"
                  spy="{true}"
                  smooth="{true}"
                  offset="{0}"
                  duration="{500}"
                  isDynamic="{true}"
                >
                  Landing page
                </RouterLink>
              </li>
              <li>
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
              <li>
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
              <li>
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
            </ul>
          </div>
        </div>
        <div v-if="!isMobile" class="w-full px-4 sm:w-1/2 lg:w-2/12">
          <div class="w-full mb-10">
            <h4 class="text-lg font-semibold text-dark dark:text-white mb-9">
              About me
            </h4>
            <ul class="space-y-3">
              <li>
                <RouterLink
                  class="dark:hover:text-dprimary hover:text-lprimary hover:border-b-2 dark:border-b-dprimary border-b-lprimary text-ltext1 dark:text-dtext1"
                  :to="{ name: 'About' }"
                  spy="{true}"
                  smooth="{true}"
                  offset="{0}"
                  duration="{500}"
                  isDynamic="{true}"
                >
                  Introduction
                </RouterLink>
              </li>
              <li>
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
              <li>
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
              <li>
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
              <li>
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
        <div v-if="!isMobile" class="w-full px-4 sm:w-1/2 lg:w-3/12">
          <div class="w-full mb-10">
            <h4 class="text-lg font-semibold text-dark dark:text-white mb-9">
              Contact
            </h4>
            <div class="flex items-center mb-6">
              <a
                href="https://www.linkedin.com/in/raul-lopez-cruz/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center w-8 h-8 mr-3 border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-white hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                aria-label="Linkedin"
                title="Linkedin"
              >
                <svg
                  class="w-3 h-3 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                    clip-rule="evenodd"
                  />
                  <path d="M3 5.012H0V15h3V5.012Z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/ralodev"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center w-8 h-8 mr-3 border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-white hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                aria-label="Twitter"
                title="Twitter"
              >
                <svg
                  class="w-3 h-3 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
                  />
                </svg>
              </a>
              <a
                href="mailto:contact@ralo.dev"
                class="flex items-center justify-center w-8 h-8 mr-3 border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-white hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                aria-label="Email"
                title="Email"
              >
                <svg
                  class="w-3 h-3 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path
                    d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
                  />
                  <path
                    d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/ralodev"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center w-8 h-8 mr-3 border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-white hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                aria-label="Github"
                title="Github"
              >
                <svg
                  class="w-4 h-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <p class="text-base text-body-color dark:text-dark-6">
              &copy; 2024 Ralodev
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <span v-if="!isMobile" class="absolute top-10 right-10 z-[-1]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          width="2200"
          height="600"
          preserveAspectRatio="none"
          viewBox="0 0 2200 600"
        >
          <g mask='url("#SvgjsMask1057")' fill="none">
            <path
              d="M146.281,512.716C172.565,514.971,202.122,510.826,216.002,488.392C230.385,465.146,223.313,435.187,208.437,412.253C194.903,391.388,171.149,381.221,146.281,380.907C120.766,380.585,93.338,388.124,81.346,410.648C69.825,432.288,81.442,457.291,94.602,477.976C106.544,496.746,124.115,510.814,146.281,512.716"
              fill="rgba(26, 89, 157, 0.2)"
              class="triangle-float2"
            ></path>
            <path
              d="M643.858,535.708C662.624,535.341,681.922,531.174,692.394,515.596C704.096,498.188,706.593,475.56,696.737,457.044C686.306,437.448,666.051,424.923,643.858,424.415C620.755,423.886,597.863,434.337,586.609,454.521C575.602,474.261,578.898,499.087,591.923,517.558C603.25,533.621,624.207,536.092,643.858,535.708"
              fill="rgba(26, 89, 157, 0.2)"
              class="triangle-float2"
            ></path>
            <path
              d="M1563.385,678.608C1601.097,678.94,1634.923,657.586,1654.543,625.379C1675.059,591.702,1682.596,549.458,1662.861,515.317C1643.141,481.202,1602.722,465.373,1563.385,467.678C1527.765,469.765,1499.825,494.853,1482.241,525.9C1464.957,556.417,1458.507,592.828,1474.964,623.799C1492.404,656.62,1526.219,678.281,1563.385,678.608"
              fill="rgba(26, 89, 157, 0.2)"
              class="triangle-float1"
            ></path>
            <path
              d="M2119.318,119.153C2138.671,120.663,2158.732,112.703,2168.416,95.879C2178.082,79.086,2173.329,58.722,2163.82,41.84C2154.093,24.57,2139.129,9.338,2119.318,8.711C2098.572,8.055,2078.411,20.041,2069.656,38.86C2061.859,55.621,2072.183,73.41,2081.907,89.132C2090.922,103.706,2102.233,117.82,2119.318,119.153"
              fill="rgba(26, 89, 157, 0.2)"
              class="triangle-float3"
            ></path>
            <path
              d="M1802.362,409.791C1848.782,410.048,1879.379,367.54,1902.959,327.554C1927.07,286.668,1949.674,239.177,1927.82,197.041C1904.695,152.454,1852.531,131.192,1802.362,133.598C1756.054,135.819,1717.27,166.883,1696.151,208.154C1676.859,245.854,1683.941,288.981,1703.677,326.45C1725.183,367.279,1756.216,409.535,1802.362,409.791"
              fill="rgba(26, 89, 157, 0.2)"
              class="triangle-float1"
            ></path>
          </g>
          <defs>
            <mask id="SvgjsMask1057">
              <rect width="2200" height="600" fill="#ffffff"></rect>
            </mask>
          </defs>
        </svg>
      </span>
    </div>
  </footer>
  <!-- ====== Footer Section End -->
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { inject } from 'vue'

const isMobile = inject<boolean>('isMobile')

function handleClick() {
  alert('Is this an easter egg? 🥚')
}
</script>

<style>
@keyframes float1 {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-10px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}

.triangle-float1 {
  animation: float1 5s infinite;
}

@keyframes float2 {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  100% {
    transform: translate(0, 0);
  }
}

.triangle-float2 {
  animation: float2 4s infinite;
}

@keyframes float3 {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, -10px);
  }
  100% {
    transform: translate(0, 0);
  }
}

.triangle-float3 {
  animation: float3 6s infinite;
}
</style>
