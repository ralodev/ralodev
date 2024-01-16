<template>
  <section id="about" name="about" className="w-full flex flex-col  py-[90px]">
    <!-- Section header -->
    <header class="">
      <h2
        className="dark:text-dtext1 text-ltext1 font-semibold text-4xl text-center my-4"
      >
        More about me
      </h2>
    </header>
    <!-- Education section -->
    <section class="text-[#14142b] dark:text-dtext2">
      <div class="relative p-4 duration-500">
        <span class="relative">
          <div class="absolute inset-0 z-[-1]">
            <img
              :src="avatar_2"
              alt="Ralodev's profile picture background"
              aria-hidden="true"
              class="absolute inset-0 left-0 right-0 z-0 mx-auto h-[100px] rounded-full blur-sm sm:h-[150px]"
            />
          </div>
          <img
            :src="avatar_2"
            alt="Ralodev's profile picture"
            class="z-1 mx-auto h-[100px] rounded-full p-1 sm:h-[150px] lg:h-[150px]"
          />
        </span>
        <span
          class="col-span-2 my-auto block items-center justify-center pt-10 text-center md:text-start lg:col-span-1 lg:pt-0"
        >
          <p
            className="dark:text-gray-200 pt-3 md:text-lg text-base text-gray-700 my-2"
          >
            My name is Raúl López, I'm a developer from
            <span class="text-green-800 dark:text-green-400">México</span>. I'm
            always looking for new challenges and opportunities to learn new
            technologies.
          </p>
          <p
            className="dark:text-gray-200 pt-3 md:text-lg text-base text-gray-700 my-2"
          >
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
        </span>
      </div>
      <!-- Section Header -->
      <header class="pb-3 text-2xl font-semibold dark:text-dtext1">
        Education
      </header>
      <!--Section Body -->
      <div class="">
        <!--Section Description -->
        <div
          class="sticky top-20 z-[2] flex border-b-2 border-[#464646] bg-bg pb-2 dark:border-[#838383] dark:bg-bg_dark"
        >
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
          <PrimaryButton
            :label="showCourses ? 'Show Less' : 'Show More'"
            width="150"
            class="my-auto ms-auto"
            bg="bg-secondary"
            @click="toggleCourses"
          />
        </div>
        <!--Section Content-->
        <div
          class="overflow-hidden transition-all duration-500"
          :class="showCourses ? 'h-[1100px] lg:h-[600px]' : 'h-0'"
        >
          <div class="bg-[#e9e9e9] p-3 dark:bg-[#1b1f2b]">
            <p class="">
              Obtained a BSc in Computer Systems Engineering with a
              specialization in Emerging Technologies.
            </p>
            <p class="py-3 text-lg font-semibold text-ltext1 dark:text-dtext1">
              Certifications and courses.
            </p>
            <div
              class="gird-cols-1 grid w-full grid-flow-row-dense gap-3 py-3 text-start lg:grid-cols-12"
            >
              <CredentialCard
                url="#"
                :logo="toefl"
                title="English level C1"
                subtitle="Inglés nivel C1"
                platform="TOEFL ITP"
                class="lg:col-span-4"
              />
              <CredentialCard
                url="https://capacitateparaelempleo.org/verifica/c5acc254-e6c7-4afc-ad61-f1dd0fa73907/35d333fc-1821-4ccf-a025-34bcdb5e801a"
                :logo="capacitate"
                title="Machine Learning Fundamentals"
                subtitle="Fundamentos de Machine Learning"
                platform="Aprende.org"
                class="lg:col-span-6"
              />
              <CredentialCard
                url="https://capacitateparaelempleo.org/verifica/c5acc254-e6c7-4afc-ad61-f1dd0fa73907/e736f7f1-5979-483f-b109-505c5125f023"
                :logo="capacitate"
                title="Computer Security (risk analysis)"
                subtitle="Seguridad informática (análisis de riesgos)"
                platform="Aprende.org"
                class="lg:col-span-6"
              />
              <CredentialCard
                url="https://capacitateparaelempleo.org/verifica/c5acc254-e6c7-4afc-ad61-f1dd0fa73907/61e325ea-a725-44a3-bbb9-dc00b593e7f4"
                :logo="capacitate"
                title="Finder"
                platform="Aprende.org"
                class="lg:col-span-3"
              />
              <CredentialCard
                url="https://capacitateparaelempleo.org/verifica/c5acc254-e6c7-4afc-ad61-f1dd0fa73907/86d249cc-2f01-4606-96e5-bc95c7390610"
                :logo="capacitate"
                title="Data Curator"
                subtitle="Curador de datos"
                platform="Aprende.org"
                class="lg:col-span-4"
              />
              <CredentialCard
                url="https://platzi.com/p/lopez.cruz.raul/curso/2881-avanzado-aumentada/diploma/detalle/"
                :logo="platzi"
                title="Advanced Augmented Reality"
                subtitle="Realidad Aumentada Avanzada"
                platform="Platzi"
                class="lg:col-span-5"
              />
              <CredentialCard
                url="https://platzi.com/p/lopez.cruz.raul/curso/2789-blender/diploma/detalle/"
                :logo="platzi"
                title="3D Modeling"
                subtitle="Modelado 3D"
                platform="Platzi"
                class="lg:col-span-3"
              />
              <CredentialCard
                url="https://platzi.com/p/lopez.cruz.raul/curso/2667-spark-ar-3d/diploma/detalle/"
                :logo="platzi"
                title="3D Filters Creation"
                subtitle="Creación de Filtros 3D"
                platform="Platzi"
                class="lg:col-span-4"
              />
              <CredentialCard
                url="https://platzi.com/p/lopez.cruz.raul/curso/2647-filtros-spark-ar/diploma/detalle/"
                :logo="platzi"
                title="Facial Filter Creation"
                subtitle="Creación de Filtros Faciales"
                platform="Platzi"
                class="lg:col-span-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END OF SECTION -->
    <!-- Awards section -->
    <section class="mt-5 text-[#14142b] dark:text-dtext2">
      <!-- Section Header -->
      <header class="pb-3 text-2xl font-semibold dark:text-dtext1">
        Awards
      </header>
      <!--Section Body -->
      <div class="">
        <!--Section Description -->
        <div
          class="sticky top-20 z-[2] flex border-b-2 border-[#464646] bg-bg pb-2 dark:border-[#838383] dark:bg-bg_dark"
        >
          <span>
            <img
              :src="trophy"
              alt="Awards"
              class="mx-auto my-auto h-[80px] w-[80px] rounded-full"
            />
          </span>
          <span class="my-auto w-8/12 px-2">
            <!--title-->
            <p class="text-lg font-semibold">Awards won during my career.</p>
            <!--date-->
            <time class="text-sm uppercase dark:text-gray-400"
              >Mar 2022 - PRESENT</time
            >
          </span>
          <PrimaryButton
            :label="showAwards ? 'Hide Awards' : 'Show Awards'"
            width="150"
            class="my-auto ms-auto"
            bg="bg-secondary"
            @click="toggleAwards"
          />
        </div>
        <!--Section Content-->
        <div
          class="overflow-hidden transition-all duration-500"
          :class="showAwards ? 'h-[2500px] sm:h-[1550px] md:h-[1050px]' : 'h-0'"
        >
          <div class="bg bg-[#e9e9e9] p-3 dark:bg-[#1b1f2b]">
            <p class="">
              There are some of the awards I have won during my career. I am
              proud of each of them, as they represent the effort and dedication
              I have put into my studies and projects.
            </p>
            <p class="py-3 text-lg font-semibold text-ltext1 dark:text-dtext1">
              Awards & Honors.
            </p>
            <div
              class="mx-auto grid grid-cols-1 gap-3 pb-3 sm:grid-cols-2 md:grid-cols-3"
            >
              <!--card-->
              <AwardCard
                title="International Scientific Writing Competition"
                description="Drafted the research article 'Sustainability Behaviors: An Application of VBN Theory in Engineering Students' achieving the publication of the article."
                date="Sep 2023"
                :image="ciencias"
                object="object-contain"
                bg="bg-gradient-to-br from-slate-700 to-indigo-500 dark:from-gray-800 dark:to-gray-900 px-3"
                @clicked="visitCiencias()"
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
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
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
                title="Third National Scientific Conference"
                description="Display and presentation of the research report 'Sustainability behaviors among students at the Technological Institute of Oaxaca'"
                date="Jun 2023"
                :image="tehuacan"
                @clicked="visitTehuacan()"
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
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
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
                title="Competitive Programming Contest ITO"
                date="Jun 2023"
                description="First place achieved in the programming contest organized by the Technological Institute of Oaxaca, obtaining the highest score in the competition."
                :image="omegaup"
                object="object-contain"
                bg="bg-gradient-to-tr from-blue-200 to-white dark:bg-gradient-to-r dark:from-gray-500 dark:to-gray-800 px-3"
                @clicked="visitOmegaup()"
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
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
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
                title="Programming Contest at La Salle Oaxaca 2022"
                description="Second place achieved with the project 'Goods for Good' which addresses the issue of distributing and donating goods to nonprofit charitable organizations."
                date="Sep 2022"
                :image="salle"
                object="object-cover"
                @clicked="visitSalle()"
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
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
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
                title="Second National Scientific Conference"
                description="Draft and presentation of the research article 'Analysis of Access to Internet Services in Oaxaca during the period 2013-2021'"
                date="Mar 2023"
                object="object-cover"
                @clicked="visitIto()"
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
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
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
          </div>
        </div>
      </div>
    </section>
    <!-- END OF SECTION -->
  </section>
</template>

<script lang="ts" setup>
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import tecnm from '/src/assets/img/tecnm.webp'
import trophy from '/src/assets/img/achievement.webp'
import toefl from '@/assets/img/toefl.webp'
import platzi from '@/assets/img/platzi.webp'
import CredentialCard from '@/components/CredentialCard.vue'
import capacitate from '@/assets/img/capacitate.webp'
import { ref } from 'vue'
import AwardCard from '@/components/AwardCard.vue'
import tehuacan from '@/assets/img/awards/tehuacan.webp'
import salle from '@/assets/img/awards/salle.webp'
import ciencias from '@/assets/img/awards/ciencia-sas.webp'
import omegaup from '@/assets/img/awards/omegaup.webp'
import avatar_2 from '@/assets/img/avatar_2.webp'

function visitCiencias() {
  window.open('https://rc.cienciasas.org/index.php/rc/Indexacion', '_blank')
}
function visitTehuacan() {
  window.open('https://www.buap.mx/', '_blank')
}
function visitOmegaup() {
  window.open('https://omegaup.com/profile/ralo-dev/#contests', '_blank')
}
function visitSalle() {
  window.open(
    'https://www.instagram.com/dakota_danonino/p/Cigo0eLsOlk/',
    '_blank'
  )
}
function visitIto() {
  window.open(
    'http://201.132.162.254:17000/noticias/img/2022/CONVOCATORIA_ABRIL.pdf',
    '_blank'
  )
}
const showCourses = ref(false)
const showAwards = ref(false)

function toggleCourses() {
  showCourses.value = !showCourses.value
}
function toggleAwards() {
  showAwards.value = !showAwards.value
}
</script>
