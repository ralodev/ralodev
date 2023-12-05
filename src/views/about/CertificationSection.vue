<template>
  <section
    id="certifications"
    name="certifications"
    className="w-full min-h-screen h-auto relative text-center justify-center max-w-[1800px] mx-auto px-10 dark:text-dtext2"
  >
    <h2 className="dark:text-gray-300 font-bold text-5xl mb-5 pt-[80px] block ">
      Education
    </h2>
    <div class="max-w-7xl mx-auto">
      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-indigo-400 text-start"
      >
        <h3 class="text-2xl font-semibold text-ltext2 dark:text-dtext2">
          Bachelor's Degree in Computer Systems Engineering
        </h3>
        <time class="text-sm tracki uppercase dark:text-gray-400"
          >Aug 2018 - Jul 2023</time
        >
        <time class="text-sm tracki uppercase dark:text-gray-400"
          >National Technological Institute of Mexico</time
        >
        <p class="my-3">
          <span class="font-semibold">Capstone Project:</span> Developed a HRMS
          (Human Resource Management System) for a local university campus using
          the SCRUM methodology and the following technologies: Java, Spring
          Boot, PostgreSQL and Vue.js
        </p>
        <details>
          <summary class="cursor-pointer select-none font-semibold">
            Achievements
          </summary>
          <ul class="list-disc ps-5">
            <li>
              Winner of the International Scientific Writing Competition
              (CIENCIA-SAS)
            </li>
            <li>
              Honorable Mention in the 2023 National Scientific Conference
            </li>
            <li>
              1st Place in the 2023 Internal Competitive Programming Contest
            </li>
            <li>2nd Place in 1st Programming Contest at La Salle University</li>
            <li>2nd Place in the 2022 National Scientific Conference</li>
          </ul>
        </details>
        <br />
        <details>
          <summary class="cursor-pointer select-none font-semibold">
            Relevant Coursework
          </summary>
          <ul class="list-disc ps-5">
            <li>Algorithms</li>
            <li>Programming (OOP, Data Structures, Advanced Programming)</li>
            <li>Computer Graphics</li>
            <li>Databases</li>
            <li>Web Development</li>
            <li>Computer Architecture</li>
            <li>Computer Networks</li>
            <li>Interface Languages</li>
            <li>Simulation</li>
            <li>Software Project Management</li>
            <li>Software Engineering</li>
            <li>Design Patterns</li>
            <li>Operating Systems</li>
            <li>Data Science</li>
            <li>Artificial Intelligence</li>
          </ul>
        </details>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-indigo-400 text-start mt-5 mb-3"
      >
        <h3 class="text-xl font-semibold text-ltext2 dark:text-dtext2">
          Courses & Certifications
        </h3>
      </div>
    </div>
    <div
      class="grid 2xl:grid-cols-3 xl:grid-cols-3 grid-cols-1 md:grid-cols-2 w-full text-start gap-5 max-w-7xl mx-auto"
    >
      <CredentialCard
        url="#"
        logo="/src/assets/img/toefl.png"
        title="English level C1"
        subtitle="Inglés nivel C1"
        platform="TOEFL ITP"
      />
      <CredentialCard
        url="https://app.voxy.com/certificates/proficiency-test/62545608da6a440abedeb7ba/"
        logo="/src/assets/img/voxy.png"
        title="Low Advanced English"
        subtitle="Inglés Avanzado Bajo"
        platform="Voxy"
      />
      <CredentialCard
        url="https://capacitateparaelempleo.org/verifica/c5acc254-e6c7-4afc-ad61-f1dd0fa73907/35d333fc-1821-4ccf-a025-34bcdb5e801a"
        logo="/src/assets/img/capacitate.png"
        title="Machine Learning Fundamentals"
        subtitle="Fundamentos de Machine Learning"
        platform="Aprende.org"
        class="md:col-span-2 xl:col-span-1"
      />
      <CredentialCard
        url="https://capacitateparaelempleo.org/verifica/c5acc254-e6c7-4afc-ad61-f1dd0fa73907/e736f7f1-5979-483f-b109-505c5125f023"
        logo="/src/assets/img/capacitate.png"
        title="Computer Security Technician (risk analysis)"
        subtitle="Técnico en seguridad informática (análisis de riesgos)"
        platform="Aprende.org"
        class="col-span-2"
      />
      <CredentialCard
        url="https://capacitateparaelempleo.org/verifica/c5acc254-e6c7-4afc-ad61-f1dd0fa73907/61e325ea-a725-44a3-bbb9-dc00b593e7f4"
        logo="/src/assets/img/capacitate.png"
        title="Finder"
        platform="Aprende.org"
      />
      <CredentialCard
        url="https://capacitateparaelempleo.org/verifica/c5acc254-e6c7-4afc-ad61-f1dd0fa73907/86d249cc-2f01-4606-96e5-bc95c7390610"
        logo="/src/assets/img/capacitate.png"
        title="Data Curator"
        subtitle="Curador de datos"
        platform="Aprende.org"
      />
      <CredentialCard
        url="https://platzi.com/p/lopez.cruz.raul/curso/2881-avanzado-aumentada/diploma/detalle/"
        logo="/src/assets/img/platzi.png"
        title="Advanced Augmented Reality Course"
        subtitle="Curso Avanzado de Realidad Aumentada"
        platform="Platzi"
        class="col-span-2"
      />
      <CredentialCard
        url="https://platzi.com/p/lopez.cruz.raul/curso/2789-blender/diploma/detalle/"
        logo="/src/assets/img/platzi.png"
        title="3D Modeling Course"
        subtitle="Curso de Modelado 3D"
        platform="Platzi"
      />
      <CredentialCard
        url="https://platzi.com/p/lopez.cruz.raul/curso/2667-spark-ar-3d/diploma/detalle/"
        logo="/src/assets/img/platzi.png"
        title="3D Filters Creation"
        subtitle="Creación de Filtros 3D"
        platform="Platzi"
      />
      <CredentialCard
        url="https://platzi.com/p/lopez.cruz.raul/curso/2647-filtros-spark-ar/diploma/detalle/"
        logo="/src/assets/img/platzi.png"
        title="Facial Filters Creation"
        subtitle="Creación de Filtros Faciales"
        platform="Platzi"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import CredentialCard from '@/components/CredentialCard.vue'
</script>
