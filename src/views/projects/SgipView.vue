<template>
  <section
    id="about"
    name="about"
    class="body__section"
  >
    <article
      class="text-xl"
    >
      <header>
        <h1
          class=" dark:text-dtext1 text-ltext1 font-bold text-7xl text-center md:text-start md:my-4"
        >
          SGIP
        </h1>
        <h2
          class="dark:text-dtext1 font-bold text-ltext1 text-2xl text-center md:text-start md:my-4 "
        >
          Personnel Information Management System
          <span class="italic font-normal dark:text-dtext3 text-ltext3 text-lg f-lora">
            (Sistema de Gestión de Información de Personal)
          </span>
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-4 text-start max-w-5xl mx-auto text-lg my-5 px-3 md:px-0">
          <p class="flex flex-col">
            <span class="font-bold dark:text-dtext2 text-ltext2"
              >Expertise</span
            >
            <span class="dark:text-dtext3 text-ltext3 "
              >Full Stack Development</span
            >
          </p>
          <p class="flex flex-col md:text-center text-end" title="Start: August 2022 - End: July 2023">
            <span class="font-bold dark:text-dtext2 text-ltext2">Date</span>
            <span class="dark:text-dtext3 text-ltext3">
              <time datetime="2022-08" >08/2022</time> -
              <time datetime="2023-07" >07/2023</time>
            </span>
          </p>
          <p class="flex flex-col md:text-center">
            <span class="font-bold dark:text-dtext2 text-ltext2">Status</span>
            <span class="dark:text-dtext3 text-ltext3">Finished</span>
          </p>
          <p class="flex flex-col text-end">
            <span class="font-bold dark:text-dtext2 text-ltext2">Website</span>
            <span class="dark:text-dtext3 text-ltext3">
              <a
                href="https://itoaxaca.tech/"
                target="_blank"
                class="text-blue-500 hover:underline"
                >Visit Website</a
              >
            </span>
          </p>
        </div>

        <img :src="sgipdesktop" alt="Desktop view" class="w-full h-auto" />
      </header>
        <h3
          class="dark:text-dtext2 text-ltext2 text-3xl  font-bold text-center md:text-start md:my-4 f-opensans"
        >
          Description
        </h3>
        <p
          class="md:text-start md:my-4 text-start px-3 md:px-0"
        >
          This is a web application developed for the Human Resources department
          of the National Technological Institute of Mexico, Oaxaca campus,
          which allows the management of the information of the personnel of the
          institution, as well as the generation of reports and the management
          of the information of the different areas of the Human Resources
          department.
        </p>
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <img :src="sgipmobile" alt="Mobile view" class="" />

          <div
            class="flex items-center flex-col justify-around text-start md:my-4 px-3 md:px-0"
          >
            <span>
              <h3 class="dark:text-dtext2 text-ltext2 text-3xl  font-bold md:my-4 f-opensans">
                Execution
              </h3>
              <p>
                The application was developed using the
                <strong class="text-lg inline"> Spring Boot </strong> framework
                for the backend and the
                <strong class="text-lg inline">Vue.js</strong> for the frontend.
                The database used was
                <strong class="text-lg">PostgreSQL</strong>. The application was
                deployed on a server using Docker and Nginx.
              </p>
            </span>
            <p>
              Ensuring optimal responsiveness and accessibility were top
              priorities in the development of the application. To achieve this,
              the mobile-first approach was employed, and the implementation
              adhered to the best practices
            </p>
          </div>
        </div>
        <p class="pt-3 text-start px-3 md:px-0">
          The project was extensively documented covering the following topics:

          <ul class="list-disc list-inside px-5">
            <li>Project description and planning</li>
            <li>Requirements</li>
            <li>Analysis</li>
            <li>Design</li>
            <li>Implementation</li>
            <li>Testing</li>
            <li>Deployment</li>
          </ul>
        </p>

        <p class="">

          Since the project is not open source, the full documentation is not
          available. However, you can find part of the documentation in the
          following links:
          <span class=" text-blue-500 f-lora" href="#"
          >
          Links coming soon
        </span>

      </p>

      <h3
          class="dark:text-dtext2 text-ltext2 text-3xl  font-bold text-center md:text-start pt-3 md:my-4 f-opensans"
        >
          Results
        </h3>
        <p
          class="dark:text-dtext3 text-ltext3 text-xl text-start  f-montserrat px-3 md:px-0"
        >
        The application was successfully delivered and deployed, currently in active use by the Human Resources, Planning, and Budgeting departments of the Technological Institute of Oaxaca. One of the most noteworthy achievements is the remarkable
        </p>
        <p class="text-2xl text-ltext1 dark:text-dtext1 px-5 py-3">
          90% reduction in report generation times
        </p>
        <p class="dark:text-dtext3 text-ltext3 text-xl text-start  f-montserrat px-3 md:px-0">compared to previous years. This accomplishment underscores the significant impact and efficiency gains brought about by the implemented solution.
        </p>
    </article>
  </section>
</template>

<script lang="ts" setup>
import sgipdesktop from '@/assets/img/projects/sgip-desktop.webp'
import sgipmobile from '@/assets/img/projects/sgip-mobile-crop.webp'
</script>
