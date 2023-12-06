<template>
  <section
    id="about"
    name="about"
    className="w-full min-h-screen h-auto flex items-center justify-center content-center relative overflow-x-hidden"
  >
    <div class="inset-0 absolute"></div>
    <div class="absolute inset-0 dark:opacity-50 opacity-30 bg-coil"></div>
    <article
      className="xl:px-0 px-10 max-w-[1200px] mx-auto justify-center h-full text-center grid-cols-2"
    >
      <div
        class="relative px-2 my-10 dark:text-gray-300 md:gap-x-0 text-start py-10"
      >
        <!--card-->
        <div
          class="card bg-[#fcfcfcc2] relative grid grid-cols-2 p-4 duration-500"
        >
          <span class="order-2 md:order-1 col-span-2 md:col-span-1">
            <lottie-player
              src="/src/assets/img/home_animation.json"
              background="transparent"
              speed="1"
              mode="normal"
              class="md:w-full md:h-full w-60 h-60 mx-auto rounded-xl overflow-hidden mb-3"
              autoplay
              loop
            />
          </span>
          <span
            class="block order-1 md:order-2 col-span-2 md:col-span-1 justify-center my-auto items-center text-center md:text-start"
          >
            <h1 className="dark:text-gray-300 font-bold text-5xl">About me</h1>
            <p
              className="dark:text-gray-400 pt-3 md:text-lg text-lg text-gray-700 my-5"
            >
              I'm a Software Engineer with more than 1 year of experience in web
              development. I'm a solution-driven developer adept at contributing
              to highly collaborative work environment, finding solutions and
              determining customer satisfaction. Proven experience developing
              consumer focused web applications. Passionate programmer with
              drive to learn and master new technologies.
            </p>
            <span class="flex justify-evenly md:justify-normal md:gap-5">
              <RouterLink
                class="rounded-full"
                :to="{ name: 'About' }"
                spy="{true}"
                smooth="{true}"
                offset="{0}"
                duration="{500}"
                isDynamic="{true}"
              >
                <PrimaryButton label="More about me" />
              </RouterLink>
            </span>
          </span>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
function handleClick() {
  console.log('clicked')
}
</script>
