<template>
  <section
    id="awards"
    name="awards"
    className="w-full min-h-[600px] py-[90px] h-auto flex  relative overflow-x-hidden"
  >
    <div class="inset-0 absolute"></div>
    <div class="absolute inset-0 dark:opacity-50 opacity-30 bg-coil"></div>
    <article
      className="px-10 max-w-[1800px] mx-auto justify-center h-full text-center flex flex-col items-center"
    >
      <h2 className="dark:text-gray-300 font-bold text-5xl mb-5 block ">
        Awards & Honors
      </h2>

      <div
        class="grid 2xl:grid-cols-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
      >
        <!--card-->
        <AwardCard
          title="International Scientific Writing Competition"
          description="Drafted and presented a research article on sustainability behaviors. Received a free publication and translation of the article into a second language as an award."
          date="Sep 2023"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 my-auto me-1 text-red-300"
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
            <path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
            <path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889" />
            <path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889" />
          </svg>
          Award
        </AwardCard>
        <!--card end-->
        <!--card-->
        <AwardCard
          title="3rd National Scientific Conference"
          description="Display and presentation of a manuscript about sustainability behaviors"
          date="Jun 2023"
          image="/src/assets/img/awards/tehuacan.png"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 my-auto me-1 text-red-300"
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
            <path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
            <path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889" />
            <path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889" />
          </svg>
          Honor
        </AwardCard>
        <!--card end-->
        <!--card-->
        <AwardCard
          title="Competitive Programming Contest ITO"
          date="Jun 2023"
          description="Participated in the 1st Competitive Programming Contest at ITO, achieving first place in the competition."
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 my-auto me-1 text-yellow-300"
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
            <path d="M10 10l2 -2v8" />
            <path
              d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l
              -.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1"
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
          image="/src/assets/img/awards/salle.jpg"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 my-auto me-1 text-gray-300"
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
              d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3"
            />
            <path
              d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1"
            />
          </svg>
          Second place
        </AwardCard>
        <!--card end-->
        <!--card-->
        <AwardCard
          title="2nd National Scientific Conference"
          description="Writing and presentation of the research article 'Analysis of Access to Internet Services in Oaxaca during the period 2013-2021', achieving second place in the event."
          date="Mar 2023"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 my-auto me-1 text-gray-300"
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
              d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3"
            />
            <path
              d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1"
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
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import AwardCard from '@/components/AwardCard.vue'
function handleClick() {
  console.log('clicked')
}
</script>
