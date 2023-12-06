<template>
  <section
    id="resume"
    name="resume"
    className="w-full min-h-screen h-auto flex items-center justify-center content-center overflow-x-hidden"
  >
    <article
      className="xl:px-0 px-10 max-w-[1200px] mx-auto justify-center h-full text-center"
    >
      <header class="lg:flex lg:justify-between justify-center">
        <h1 className="dark:text-gray-300 font-bold text-5xl md:my-4">
          Take a look at my resume
        </h1>
        <RouterLink
          class="rounded-full"
          :to="{ name: 'About', hash: '#experience' }"
          spy="{true}"
          smooth="{true}"
          offset="{0}"
          duration="{500}"
          isDynamic="{true}"
        >
          <PrimaryButton
            label="See full resume"
            class="!w-[12rem] mt-4 md:!my-auto"
          />
        </RouterLink>
      </header>
      <div
        class="relative px-2 text-[#14142b] my-10 dark:text-dtext2 grid md:grid-cols-2 md:gap-x-0 text-start py-10 gap-y-10"
      >
        <!--background-->
        <div class="surface bg-coil"></div>
        <!--card 1 -->
        <div class="card md:-translate-x-6 hover:shadow-lg">
          <header class="flex flex-initial mb-2 min-h-[100px]">
            <!--icon-->
            <img
              :src="ito"
              alt="Technological Institute Of Oaxaca"
              class="w-[90px] h-[90px] my-auto"
            />
            <span class="my-auto px-2 w-full">
              <!--title-->
              <RouterLink
                class="text-xl font-bold text-ltext2 dark:text-dtext2 cursor-pointer group"
                :to="{ name: 'About', hash: '#experience' }"
                spy="{true}"
                smooth="{true}"
                offset="{0}"
                duration="{500}"
                isDynamic="{true}"
              >
                Experience
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline group-hover:translate-x-1 group-hover:-translate-y-1 duration-300"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M17 7l-10 10"></path>
                  <path d="M8 7l9 0l0 9"></path>
                </svg>
              </RouterLink>
              <a
                class="text-xl font-bold text-ltext2 dark:text-dtext2 cursor-pointer group"
              ></a>
              <!--subtitle-->
              <p class="text-lg font-semibold">Full Stack Developer Intern</p>
              <p class="font-medium">Technological Institute Of Oaxaca</p>
            </span>
          </header>
          <p class="hidden md:block">
            Provided technical leadership and direction in the project to ensure
            code quality, developed a fully functional HRMS, and optimized
            report generation times by 90%.
          </p>
        </div>
        <!--card 2 -->
        <div class="card md:translate-x-6 hover:shadow-lg">
          <header class="flex flex-initial mb-2 min-h-[100px]">
            <!--icon-->
            <img
              :src="tecnm"
              alt="National Technological Institute Of Mexico"
              class="w-[100px] h-[100px] my-auto"
            />
            <span class="my-auto px-2 w-full">
              <!--title-->
              <RouterLink
                class="text-xl font-bold text-ltext2 dark:text-dtext2 cursor-pointer group"
                :to="{ name: 'About', hash: '#education' }"
                spy="{true}"
                smooth="{true}"
                offset="{0}"
                duration="{500}"
                isDynamic="{true}"
              >
                Education
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline group-hover:translate-x-1 group-hover:-translate-y-1 duration-300"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M17 7l-10 10"></path>
                  <path d="M8 7l9 0l0 9"></path>
                </svg>
              </RouterLink>
              <!--subtitle-->
              <p class="text-lg font-semibold">Bachelor of Science Degree</p>
              <p class="font-medium">
                <span class="hidden md:block"
                  >National Technological Institute Of Mexico</span
                ><abbr
                  class="block md:hidden"
                  title="National Technological Institute Of Mexico"
                  >TECNM</abbr
                >
              </p>
            </span>
          </header>
          <p class="hidden md:block">
            Obtained a BSc in Computer Systems Engineering with a specialization
            in Emerging Technologies. Currently pursuing a Master's degree in
            Computer Science.
          </p>
        </div>
        <!--card 3 -->
        <div class="card md:-translate-x-6 hover:shadow-lg">
          <header class="flex flex-initial mb-2 min-h-[100px]">
            <!--icon-->
            <img
              :src="toefl"
              alt="Test Of English as a Foreign Language"
              class="w-[90px] h-[90px] my-auto rounded-full"
            />
            <span class="my-auto px-2 w-full">
              <!--title-->
              <RouterLink
                class="text-xl font-bold text-ltext2 dark:text-dtext2 cursor-pointer group"
                :to="{ name: 'About', hash: '#experience' }"
                spy="{true}"
                smooth="{true}"
                offset="{0}"
                duration="{500}"
                isDynamic="{true}"
              >
                Certifications
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline group-hover:translate-x-1 group-hover:-translate-y-1 duration-300"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M17 7l-10 10"></path>
                  <path d="M8 7l9 0l0 9"></path>
                </svg>
              </RouterLink>
              <!--subtitle-->
              <p class="font-medium">Online & In-person</p>
            </span>
          </header>
          <p class="hidden md:block">
            I've completed several courses in web development, machine learning,
            data science, and more. Additionally, I hold a TOEFL certification
            at the C1 level.
          </p>
        </div>
        <!--card 4 -->
        <div class="card md:translate-x-6 hover:shadow-lg">
          <header class="flex flex-initial mb-2 min-h-[100px]">
            <!--icon-->
            <img
              :src="trophy"
              alt="Trophy"
              class="w-[100px] h-[100px] my-auto rounded-full"
            />
            <span class="my-auto px-2 w-full">
              <!--title-->
              <RouterLink
                class="text-xl font-bold text-ltext2 dark:text-dtext2 cursor-pointer group"
                :to="{ name: 'About', hash: '#awards' }"
                spy="{true}"
                smooth="{true}"
                offset="{0}"
                duration="{500}"
                isDynamic="{true}"
              >
                Achievements
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline group-hover:translate-x-1 group-hover:-translate-y-1 duration-300"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M17 7l-10 10"></path>
                  <path d="M8 7l9 0l0 9"></path>
                </svg>
              </RouterLink>
              <!--subtitle-->
              <p class="font-medium">Online & In-person</p>
            </span>
          </header>
          <p class="hidden md:block">
            I've earned accolades in programming, and research contests,
            including a publication in a globally recognized scientific journal
            indexed in the Harvard Library.
          </p>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import tecnm from '/src/assets/img/tecnm.png'
import ito from '/src/assets/img/ito-logo.svg'
import trophy from '/src/assets/img/achievement.png'
import toefl from '/src/assets/img/toefl.png'
</script>
