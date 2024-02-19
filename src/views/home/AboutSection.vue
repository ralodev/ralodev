<template>
  <section
    id="about"
    name="about"
    class="body__section flex-col"
  >
    <!-- Section header -->
    <header class="w-full text-start">
      <h2 class="body__section__title">About me</h2>
    </header>
    <!-- Introduction -->
    <section>
      <div
        class="col-span-2 my-auto block items-center justify-center space-y-3 text-center text-base md:text-start md:text-lg"
      >
        <p>
          Hello 👋, my name is Raúl López but my friends call me Ralo. I'm from
          México. I'm a graduate Computer Systems Engineer with a specialization
          in Emerging Technologies and I have 1+ year of experience in the
          field.
        </p>
        <p>
          I'm currently enrolled in the
          <strong>Oracle Next Education</strong> program and working as
          part-time <strong>Full Stack Developer</strong> at
          <strong>TECNM</strong>.
        </p>
        <p>
          One of my main achievements is that I've been able to publish a
          scientific research article in a recognized journal indexed by the
          Harvard Library, and I've also won several awards in different
          scientific conferences and programming contests.
        </p>
        <span class="flex justify-evenly md:justify-normal md:gap-5">
          <span class="flex gap-5"> </span>
        </span>
      </div>
    </section>
    <!-- Education section -->
    <CollapsiblePanel
      header="Education"
      toggleable
      :collapsed="false"
    >
      <template #icon>
        <svg
          class="my-auto mr-2 h-8 w-8"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            stroke="none"
            d="M0 0h24v24H0z"
            fill="none"
          />
          <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
          <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
        </svg>
      </template>
      <!-- tecnm -->
      <div class="flex">
        <a
          class="relative hidden h-[90px] w-[90px] md:me-2 md:flex"
          href="http://www.oaxaca.tecnm.mx/"
          target="_blank"
        >
          <img
            :src="tecnm"
            alt="Technological Institute Of Oaxaca"
            class="m-auto h-[60px] w-[60px]"
          />
        </a>
        <span class="w-full">
          <p class="experience__title">
            Bachelor's Degree in Computer Systems Engineering
          </p>
          <time class="experience__time">Aug 2018 - Jul 2023</time>
          <p class="experience__company">@ Technological Institute Of Oaxaca</p>
        </span>
      </div>
      <p class="experience__description">
        I'm a graduate Computer Systems Engineer with a specialization in
        Emerging Technologies. In my career, I learned about the fundamentals of
        computer science, software development, and emerging technologies such
        as Artificial Intelligence, Augmented Reality, and Virtual Reality.
      </p>
      <!-- oracle -->
      <div class="mt-5 flex">
        <a
          class="hidden h-[90px] w-[90px] md:me-2 md:flex"
          href="https://oracle.com/lad/one"
          target="_blank"
        >
          <img
            :src="one"
            alt="Oracle Next Education"
            class="m-auto h-[60px] w-[60px] object-contain"
          />
        </a>
        <span class="w-full">
          <p class="experience__title">AlumniONE, Oracle Next Education</p>
          <time class="experience__time">Jan 2024 - Sep 2024 </time>
          <p class="experience__company">@ Alura</p>
        </span>
      </div>
      <p class="experience__description">
        I'm currently enrolled in the Oracle Next Education program, where I'm
        learning about web development with a focus on Backend using Java and
        Spring Boot.
      </p>
    </CollapsiblePanel>
    <!-- Awards section -->
    <CollapsiblePanel
      header="Awards"
      toggleable
      class="mt-5"
    >
      <template #icon>
        <svg
          class="my-auto mr-2 h-8 w-8"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            stroke="none"
            d="M0 0h24v24H0z"
            fill="none"
          />
          <path d="M8 21l8 0" />
          <path d="M12 17l0 4" />
          <path d="M7 4l10 0" />
          <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
          <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        </svg>
      </template>
      <p class="">
        There are some of the awards I have won during my career. I am proud of
        each of them, as they represent the effort and dedication I have put
        into my studies and projects.
      </p>
      <p class="py-3 text-lg font-semibold text-ltext1 dark:text-dtext1">
        Awards & Honors.
      </p>
      <div
        class="mx-auto grid grid-cols-1 gap-3 pb-3 sm:grid-cols-2 md:grid-cols-3"
      >
        <!--card-->
        <AwardCard
          title="Publication of a Scientific Research Article in a Journal Indexed by the Harvard Library"
          description="Drafted the research article 'Sustainability Behaviors: An Application of VBN Theory in Engineering Students' achieving its publication in the 'Región Científica' journal."
          date="Sep 2023"
          :image="ciencias"
          object="object-contain"
          bg="bg-gradient-to-br from-slate-700 to-indigo-500 dark:from-gray-800 dark:to-gray-900 px-3"
        >
          <svg
            class="my-auto me-1 h-5 w-5"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            />
            <path
              d="M19.496 13.983l1.966 3.406a1.001 1.001 0 0 1 -.705 1.488l-.113 .011l-.112 -.001l-2.933 -.19l-1.303 2.636a1.001 1.001 0 0 1 -1.608 .26l-.082 -.094l-.072 -.11l-1.968 -3.407a8.994 8.994 0 0 0 6.93 -3.999z"
              stroke-width="0"
              fill="currentColor"
            />
            <path
              d="M11.43 17.982l-1.966 3.408a1.001 1.001 0 0 1 -1.622 .157l-.076 -.1l-.064 -.114l-1.304 -2.635l-2.931 .19a1.001 1.001 0 0 1 -1.022 -1.29l.04 -.107l.05 -.1l1.968 -3.409a8.994 8.994 0 0 0 6.927 4.001z"
              stroke-width="0"
              fill="currentColor"
            />
            <path
              d="M12 2l.24 .004a7 7 0 0 1 6.76 6.996l-.003 .193l-.007 .192l-.018 .245l-.026 .242l-.024 .178a6.985 6.985 0 0 1 -.317 1.268l-.116 .308l-.153 .348a7.001 7.001 0 0 1 -12.688 -.028l-.13 -.297l-.052 -.133l-.08 -.217l-.095 -.294a6.96 6.96 0 0 1 -.093 -.344l-.06 -.271l-.049 -.271l-.02 -.139l-.039 -.323l-.024 -.365l-.006 -.292a7 7 0 0 1 6.76 -6.996l.24 -.004z"
              stroke-width="0"
              fill="currentColor"
            />
          </svg>
          Honor
        </AwardCard>
        <!--card end-->
        <!--card-->
        <AwardCard
          title='Third National Scientific Conference "Sustainable balance between Technology, Environment and Society"'
          description="Display and presentation of the research report 'Sustainability behaviors among students at the Technological Institute of Oaxaca'"
          date="Jun 2023"
          :image="tehuacan"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="my-auto me-1 h-5 w-5"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            />
            <path
              d="M19.496 13.983l1.966 3.406a1.001 1.001 0 0 1 -.705 1.488l-.113 .011l-.112 -.001l-2.933 -.19l-1.303 2.636a1.001 1.001 0 0 1 -1.608 .26l-.082 -.094l-.072 -.11l-1.968 -3.407a8.994 8.994 0 0 0 6.93 -3.999z"
              stroke-width="0"
              fill="currentColor"
            />
            <path
              d="M11.43 17.982l-1.966 3.408a1.001 1.001 0 0 1 -1.622 .157l-.076 -.1l-.064 -.114l-1.304 -2.635l-2.931 .19a1.001 1.001 0 0 1 -1.022 -1.29l.04 -.107l.05 -.1l1.968 -3.409a8.994 8.994 0 0 0 6.927 4.001z"
              stroke-width="0"
              fill="currentColor"
            />
            <path
              d="M12 2l.24 .004a7 7 0 0 1 6.76 6.996l-.003 .193l-.007 .192l-.018 .245l-.026 .242l-.024 .178a6.985 6.985 0 0 1 -.317 1.268l-.116 .308l-.153 .348a7.001 7.001 0 0 1 -12.688 -.028l-.13 -.297l-.052 -.133l-.08 -.217l-.095 -.294a6.96 6.96 0 0 1 -.093 -.344l-.06 -.271l-.049 -.271l-.02 -.139l-.039 -.323l-.024 -.365l-.006 -.292a7 7 0 0 1 6.76 -6.996l.24 -.004z"
              stroke-width="0"
              fill="currentColor"
            />
          </svg>
          Honor
        </AwardCard>
        <!--card end-->
        <!--card-->
        <AwardCard
          title="1st Competitive Programming Contest at the Technological Institute of Oaxaca"
          date="Jun 2023"
          description="First place achieved in the programming contest organized by the Technological Institute of Oaxaca, obtaining the highest score in the competition."
          :image="omegaup"
          object="object-contain"
          bg="bg-gradient-to-tr from-blue-200 to-white dark:bg-gradient-to-r dark:from-gray-500 dark:to-gray-800 px-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="my-auto me-1 h-5 w-5"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            />
            <path
              d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z"
              stroke-width="0"
              fill="currentColor"
            />
          </svg>
          First place
        </AwardCard>
        <!--card end-->
        <!--card-->
        <AwardCard
          title="Programming Contest in the Fourth Academic Day at La Salle Oaxaca 2022 - 1st Edition"
          description="Second place achieved with the project 'Goods for Good' which addresses the issue of distributing and donating goods to nonprofit charitable organizations."
          date="Sep 2022"
          :image="salle"
          object="object-cover"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="my-auto me-1 h-5 w-5"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            />
            <path
              d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z"
              stroke-width="0"
              fill="currentColor"
            />
          </svg>
          Second place
        </AwardCard>
        <!--card end-->
        <!--card-->
        <AwardCard
          title='Second national scientific conference "MSMEs and Sustainability in the context of the New Normal"'
          description='Draft and presentation of the research article "Analysis of Access to Internet Services in Oaxaca during the period 2013-2021" achieving its publication in the "I+D=Dinámica del saber" journal.'
          date="Mar 2023"
          object="object-cover"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="my-auto me-1 h-5 w-5"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            />
            <path
              d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z"
              stroke-width="0"
              fill="currentColor"
            />
          </svg>
          Second place
        </AwardCard>
        <!--card end-->
      </div>
    </CollapsiblePanel>
    <!-- END OF SECTION -->
  </section>
</template>

<script lang="ts" setup>
import CollapsiblePanel from '@/components/CollapsiblePanel.vue';
import tecnm from '/src/assets/img/ito.webp';
import one from '/src/assets/img/one.webp';
import AwardCard from '@/components/AwardCard.vue';
import tehuacan from '@/assets/img/awards/tehuacan.webp';
import salle from '@/assets/img/awards/salle.webp';
import ciencias from '@/assets/img/awards/ciencia-sas.webp';
import omegaup from '@/assets/img/awards/omegaup.webp';
</script>
