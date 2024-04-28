<template>
  <section
    id="services"
    name="services"
    class="flex min-h-screen w-full content-center items-center justify-center pt-[90px]"
  >
    <article class="relative mx-auto h-full px-10 text-center xl:px-0">
      <h2 class="text-4xl font-semibold text-ltext1 dark:text-dtext1">
        My services
      </h2>
      <p class="mb-5 pt-3 text-xl text-ltext2 dark:text-dtext2 md:text-2xl">
        I can provide you with a wide range of services, here are some of them:
      </p>
      <div
        class="relative grid cursor-default gap-y-10 text-start text-ltext2 dark:text-dtext2 md:grid-cols-2 md:gap-x-0 md:px-2"
      >
        <!--card-->
        <div
          class="card group hover:shadow-lg md:-translate-x-6"
          :class="'hover:-translate-y-1'"
        >
          <header class="flex h-16">
            <!--title-->
            <span class="my-auto">
              <svg
                class="h-10 w-10 text-primary dark:text-sky-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                />
              </svg>
            </span>
            <p class="my-auto ms-3 inline text-2xl font-bold">
              Full Stack Development
            </p>
          </header>

          <p class="">
            I can build you a full stack application using the latest
            technologies and frameworks, providing you with a highly scalable
            and performant application.
          </p>
        </div>
        <div
          class="card hover:shadow-lg md:translate-x-6"
          :class="'hover:-translate-y-1'"
        >
          <header class="flex h-16">
            <!--title-->
            <span class="my-auto">
              <svg
                class="h-10 w-10 text-primary dark:text-sky-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M4.5 19A3.5 3.5 0 0 1 1 15.5V2a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v13.5A3.5 3.5 0 0 1 4.5 19Zm0 0H18a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-4.938a1 1 0 0 0-.697.283l-4.238 4.124a1.046 1.046 0 0 0-.164.208C6.986 18.228 6.184 18.705 4.5 19Zm0-4h.01m8.925-12.293 3.536 3.536a1 1 0 0 1 0 1.414L8 16.627v-9.9l4.02-4.02a1 1 0 0 1 1.415 0Z"
                />
              </svg>
            </span>
            <p class="my-auto ms-3 inline text-2xl font-bold">UI/UX Design</p>
          </header>
          <p
            class="pro text-pretty"
            style="text-wrap: pretty"
          >
            I take pride in creating interfaces that are not only visually
            appealing but also user-friendly and responsive, ensuring an optimal
            user experience across all devices
          </p>
        </div>
        <div
          class="card group hover:shadow-lg md:-translate-x-6"
          :class="'hover:-translate-y-1'"
        >
          <header class="flex h-16">
            <!--title-->
            <span class="my-auto">
              <svg
                class="h-10 w-10 text-primary dark:text-sky-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 12v5m5-9v9m5-5v5m5-9v9M1 7l5-6 5 6 5-6"
                />
              </svg>
            </span>
            <p class="my-auto ms-3 inline text-2xl font-bold">Data Analysis</p>
          </header>
          <p>
            As a proficient data analyst, I can analyze your data using
            cutting-edge tools and technologies, transforming raw data into
            meaningful insights.
          </p>
        </div>
        <div
          class="card hover:shadow-lg md:translate-x-6"
          :class="'hover:-translate-y-1'"
        >
          <header class="flex h-16">
            <!--title-->
            <span class="my-auto">
              <svg
                class="h-10 w-10 text-primary dark:text-sky-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 19 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 3 6 2V1m5 2 1-1V1M9 7v11M9 7a5 5 0 0 1 5 5M9 7a5 5 0 0 0-5 5m5-5a4.959 4.959 0 0 1 2.973 1H12V6a3 3 0 0 0-6 0v2h.027A4.959 4.959 0 0 1 9 7Zm-5 5H1m3 0v2a5 5 0 0 0 10 0v-2m3 0h-3m-9.975 4H2a1 1 0 0 0-1 1v2m13-3h2.025a1 1 0 0 1 1 1v2M13 9h2.025a1 1 0 0 0 1-1V6m-11 3H3a1 1 0 0 1-1-1V6"
                />
              </svg>
            </span>
            <p class="my-auto ms-3 inline text-2xl font-bold">
              Technical Support
            </p>
          </header>
          <p>
            I can help you solve any technical problem you might have, whether
            it's a bug in your code or a problem with your computer, I can help
            you solve it.
          </p>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup></script>
