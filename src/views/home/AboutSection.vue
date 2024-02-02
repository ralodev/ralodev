<template>
  <section
    id="about"
    name="about"
    className="w-full flex flex-col  py-[90px]"
  >
    <!-- Section header -->
    <header class="">
      <h2
        className="dark:text-dtext1 text-ltext1 font-semibold text-4xl text-center my-4"
      >
        More about me
      </h2>
    </header>
    <!-- Introduction -->
    <section class="text-[#14142b] dark:text-dtext2">
      <div class="relative p-4 duration-500">
        <div
          class="col-span-2 my-auto block items-center justify-center pt-10 text-center md:text-start lg:col-span-1 lg:pt-0"
        >
          <p
            className="dark:text-gray-200 pt-3 md:text-lg text-base text-gray-700 my-2"
          >
            <!--name: Soy Raúl López, soy de México-->
            Hello 👋, my name is Raúl López and my friends call me Ralo. I'm
            from Mexico.
            <!--education: Soy un ingeniero en sistemas computacionales-->
            I'm a graduate Computer Systems Engineer with a specialization in
            Emerging Technologies.
            <!--fact: Cuento con 1 año en prácticas profesionales-->
            I have 1+ year of experience in the field.
          </p>
          <p
            className="dark:text-gray-200 pt-3 md:text-lg text-base text-gray-700 my-2"
          >
            <!--what im doing-->
            One of my main achievements is that I've been able to publish a
            scientific research article in a journal indexed by the Harvard
            Library.
            <strong
              >I'm currently enrolled in the Oracle Next Education program and
              working as a Full Stack Developer</strong
            >.
            <!--what i like-->
            <!--hitos-->
            Since I was a child I've been passionate about technology, and I
            always wanted to know how things work. As I grew up, I started to
            learn more about computers and programming, and I decided to study
            Computer Systems Engineering 🚀.
          </p>
          <p
            className="dark:text-gray-200 pt-3 md:text-lg text-base text-gray-700 my-2"
          >
            Currently, I hold a
            <span class="text-yellow-700 dark:text-yellow-100"
              >BCs Degree in Computer Systems Engineering</span
            >
            . I've just started my professional career, and I'm looking forward
            to learning more about software development and computer science.
          </p>
          <span class="flex justify-evenly md:justify-normal md:gap-5">
            <span class="flex gap-5"> </span>
          </span>
        </div>
      </div>
    </section>
    <!-- END OF SECTION -->
    <!-- Education section -->
    <!-- Education -->
    <CollapsiblePanel
      header="Education"
      toggleable
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
      <!-- oracle -->
      <div class="mt-4 flex">
        <span class="w-[90px]">
          <img
            :src="one"
            alt="National Technological Institute Of Mexico"
            class="mx-auto my-auto h-[80px] w-[80px] rounded-full"
          />
        </span>
        <span class="my-auto w-full px-2">
          <!--title-->
          <p class="text-lg font-semibold">AlumniONE, Oracle Next Education</p>
          <!--date-->
          <time class="text-sm uppercase dark:text-gray-400"
            >Jan 2024 - Sep 2024
          </time>
          <!--site-->
          <p class="font-medium">Alura</p>
        </span>
      </div>
      <p class="inline-block">
        I'm currently enrolled in the Oracle Next Education program, where I'm
        currently learning about web development with a focus on Backend using
        Java and Spring Boot.
      </p>
      <!-- tecnm -->
      <div class="mt-4 flex">
        <span class="w-[90px]">
          <img
            :src="tecnm"
            alt="National Technological Institute Of Mexico"
            class="mx-auto my-auto h-[80px] w-[80px]"
          />
        </span>
        <span class="my-auto w-8/12 px-2">
          <!--title-->
          <p class="text-lg font-semibold">
            Bachelor's Degree in Computer Systems Engineering
          </p>
          <!--date-->
          <time class="text-sm uppercase dark:text-gray-400"
            >Aug 2018 - Jul 2023</time
          >
          <!--site-->
          <p class="h">National Technological Institute Of Mexico</p>
        </span>
      </div>

      <p class="mb-4">
        I'm a graduate Computer Systems Engineer with a specialization in
        Emerging Technologies. In my career, I learned about the fundamentals of
        computer science, software development, and emerging technologies such
        as Artificial Intelligence, Augmented Reality, and Virtual Reality.
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
import tecnm from '/src/assets/img/tecnm.webp';
import one from '/src/assets/img/one.webp';
import toefl from '@/assets/img/toefl.webp';
import platzi from '@/assets/img/platzi.webp';
import capacitate from '@/assets/img/capacitate.webp';
import { ref } from 'vue';
import AwardCard from '@/components/AwardCard.vue';
import tehuacan from '@/assets/img/awards/tehuacan.webp';
import salle from '@/assets/img/awards/salle.webp';
import ciencias from '@/assets/img/awards/ciencia-sas.webp';
import omegaup from '@/assets/img/awards/omegaup.webp';
import avatar from '@/assets/img/avatar.webp';

function visitCiencias() {
  window.open('https://rc.cienciasas.org/index.php/rc/Indexacion', '_blank');
}
function visitTehuacan() {
  window.open('https://www.buap.mx/', '_blank');
}
function visitOmegaup() {
  window.open('https://omegaup.com/profile/ralo-dev/#contests', '_blank');
}
function visitSalle() {
  window.open(
    'https://www.instagram.com/dakota_danonino/p/Cigo0eLsOlk/',
    '_blank'
  );
}
function visitIto() {
  window.open(
    'http://201.132.162.254:17000/noticias/img/2022/CONVOCATORIA_ABRIL.pdf',
    '_blank'
  );
}
const showCourses = ref(false);
const showAwards = ref(false);

function toggleCourses() {
  showCourses.value = !showCourses.value;
}
function toggleAwards() {
  showAwards.value = !showAwards.value;
}
</script>
