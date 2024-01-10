<template>
  <section
    id="awards"
    name="awards"
    className="w-full min-h-[600px] py-[90px] h-auto flex  relative overflow-x-hidden"
  >
    <div class="inset-0 absolute"></div>
    <div class="absolute inset-0 dark:opacity-50 opacity-30 bg-coil"></div>
    <article
      className="px-10 mx-auto justify-center h-full text-center flex flex-col items-center"
    >
      <h2 className="dark:text-gray-300 font-semibold text-4xl mb-5 block ">
        Awards & Honors
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
            class="h-5 w-5 my-auto me-1"
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
            class="h-5 w-5 my-auto me-1"
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
            class="h-5 w-5 my-auto me-1"
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
          @clicked="visitSalle()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 my-auto me-1"
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
          @clicked="visitIto()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 my-auto me-1"
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
    </article>
    <span class="h-[40px] md:h-0" aria-hidden="true"></span>
  </section>
</template>

<script lang="ts" setup>
import AwardCard from '@/components/AwardCard.vue'
import tehuacan from '@/assets/img/awards/tehuacan.webp'
import salle from '@/assets/img/awards/salle.webp'
import ciencias from '@/assets/img/awards/ciencia-sas.webp'
import omegaup from '@/assets/img/awards/omegaup.webp'

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
</script>
