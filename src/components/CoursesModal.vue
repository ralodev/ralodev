<template>
  <div
    class="grid 2xl:grid-cols-3 xl:grid-cols-3 grid-cols-1 md:grid-cols-2 w-full text-start gap-y-3 md:gap-5 max-w-7xl mx-auto"
  >
    <CredentialCard
      url="#"
      :logo="toefl"
      title="English level C1"
      subtitle="Inglés nivel C1"
      platform="TOEFL ITP"
      class="md:col-span-2 xl:col-span-1"
    />
    <CredentialCard
      url="https://app.voxy.com/certificates/proficiency-test/62545608da6a440abedeb7ba/"
      :logo="voxy"
      title="Low Advanced English"
      subtitle="Inglés Avanzado Bajo"
      platform="Voxy"
      class="md:col-span-2 xl:col-span-1"
    />
    <CredentialCard
      url="https://capacitateparaelempleo.org/verifica/c5acc254-e6c7-4afc-ad61-f1dd0fa73907/35d333fc-1821-4ccf-a025-34bcdb5e801a"
      :logo="capacitate"
      title="Machine Learning Fundamentals"
      subtitle="Fundamentos de Machine Learning"
      platform="Aprende.org"
      class="md:col-span-2 xl:col-span-1"
    />
    <CredentialCard
      url="https://capacitateparaelempleo.org/verifica/c5acc254-e6c7-4afc-ad61-f1dd0fa73907/e736f7f1-5979-483f-b109-505c5125f023"
      :logo="capacitate"
      title="Computer Security Technician (risk analysis)"
      subtitle="Técnico en seguridad informática (análisis de riesgos)"
      platform="Aprende.org"
      class="col-span-1 md:col-span-2"
    />
    <CredentialCard
      url="https://capacitateparaelempleo.org/verifica/c5acc254-e6c7-4afc-ad61-f1dd0fa73907/61e325ea-a725-44a3-bbb9-dc00b593e7f4"
      :logo="capacitate"
      title="Finder"
      platform="Aprende.org"
      class="col-span-1"
    />
    <CredentialCard
      url="https://capacitateparaelempleo.org/verifica/c5acc254-e6c7-4afc-ad61-f1dd0fa73907/86d249cc-2f01-4606-96e5-bc95c7390610"
      :logo="capacitate"
      title="Data Curator"
      subtitle="Curador de datos"
      platform="Aprende.org"
      class="col-span-1"
    />
    <CredentialCard
      url="https://platzi.com/p/lopez.cruz.raul/curso/2881-avanzado-aumentada/diploma/detalle/"
      :logo="platzi"
      title="Advanced Augmented Reality Course"
      subtitle="Curso Avanzado de Realidad Aumentada"
      platform="Platzi"
      class="md:col-span-2"
    />
    <CredentialCard
      url="https://platzi.com/p/lopez.cruz.raul/curso/2789-blender/diploma/detalle/"
      :logo="platzi"
      title="3D Modeling Course"
      subtitle="Curso de Modelado 3D"
      platform="Platzi"
      class="col-span-1"
    />
    <CredentialCard
      url="https://platzi.com/p/lopez.cruz.raul/curso/2667-spark-ar-3d/diploma/detalle/"
      :logo="platzi"
      title="3D Filters Creation"
      subtitle="Creación de Filtros 3D"
      platform="Platzi"
    />
    <CredentialCard
      url="https://platzi.com/p/lopez.cruz.raul/curso/2647-filtros-spark-ar/diploma/detalle/"
      :logo="platzi"
      title="Facial Filters Creation"
      subtitle="Creación de Filtros Faciales"
      platform="Platzi"
    />
  </div>
</template>

<script setup lang="ts">
import CredentialCard from '@/components/CredentialCard.vue'
import toefl from '@/assets/img/toefl.webp'
import platzi from '@/assets/img/platzi.webp'
import capacitate from '@/assets/img/capacitate.webp'
import voxy from '@/assets/img/voxy.webp'
</script>
