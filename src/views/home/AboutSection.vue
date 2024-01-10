<template>
  <section
    id="about"
    name="about"
    className="w-full min-h-screen h-auto flex items-center justify-center content-center relative overflow-x-hidden"
  >
    <div class="bg-coil absolute inset-0 opacity-30 dark:opacity-50"></div>
    <article
      className="xl:px-0 px-10 max-w-[1200px] mx-auto justify-center h-full text-center grid-cols-2"
    >
      <div
        class="relative my-10 text-start dark:text-gray-300 md:gap-x-0 md:px-2 md:py-10"
      >
        <h2
          className="dark:text-dtext1 text-ltext1 font-bold text-4xl text-center"
        >
          About me
        </h2>
        <!--card-->
        <div class="relative grid grid-cols-2 bg-[#fcfcfcc2] p-4 duration-500">
          <span class="order-2 col-span-2 md:order-1 md:col-span-1"> </span>
          <span
            class="order-1 col-span-2 my-auto block items-center justify-center text-center md:order-2 md:col-span-1 md:text-start"
          >
            <h2 className="dark:text-dtext1 text-ltext1 font-bold text-4xl ">
              About me
            </h2>
            <p
              className="dark:text-gray-400 md:text-xl pe-3 text-lg text-gray-700 mb-5 md:my-5"
            >
              I'm a Software Engineer with
              <strong> 1+ year of experience </strong> in web development. I'm a
              solution-driven developer adept at contributing to highly
              collaborative work environment, finding solutions and determining
              customer satisfaction.
            </p>
            <span class="flex justify-evenly md:justify-normal md:gap-5">
            </span>
          </span>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
</script>
