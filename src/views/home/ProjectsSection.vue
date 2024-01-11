<template>
  <section
    id="projects"
    name="projects"
    className="w-full min-h-screen h-auto overflow-x-hidden pt-[90px]"
  >
    <article
      className="xl:px-0 pb-10 mx-auto justify-center h-full text-center"
    >
      <div class="text-start">
        <header>
          <h2
            className="dark:text-dtext1 text-ltext1 font-bold text-4xl text-center md:text-start md:my-4"
          >
            Projects
          </h2>
          <p
            className="dark:text-gray-400 py-3 md:text-xl text-bold text-xl text-gray-700 text-center md:text-start w-full"
          >
            Here are some of my recent projects. You can find more on my GitHub
            profile.
          </p>
        </header>
      </div>
      <div class="mt-5 text-start [&>*]:my-5">
        <ProjectCard
          v-for="project in projectsInfo"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :image2="project.image2"
          :live="project.live ? project.live : ''"
          :source="project.source ? project.source : ''"
          :demo="project.demo"
          :info="project.info"
          :reverse="projectsInfo.indexOf(project) % 2 !== 0"
        >
          <img
            v-for="tag in project.tags"
            :key="tag"
            :src="`https://img.shields.io/badge/${tag.replace(
              / /g,
              '%20'
            )}-%23c7c7c7?style=for-the-badge&logo=${tag.replace(/ /g, '-')}`"
            alt=""
          />
        </ProjectCard>
      </div>
      <div
        v-if="showMore"
        name="showMore"
        class="max-w-[1200px] text-start [&>*]:my-5"
      >
        <ProjectCard
          v-for="project in projectsInfo2"
          :key="project.id"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :source="project.source"
          :reverse="project.id % 2 !== 0"
        >
          <img
            v-for="tag in project.tags"
            :key="tag"
            :src="`https://img.shields.io/badge/${tag.replace(
              / /g,
              '%20'
            )}-%23c7c7c7?style=for-the-badge&logo=${tag.replace(/ /g, '-')}`"
            alt=""
          />
        </ProjectCard>
      </div>
      <PrimaryButton
        v-if="!showMore"
        label="Load more"
        class="mx-auto mb-12 !w-[12rem]"
        @click="showMore = true"
      />
      <a
        v-else
        class="rounded-full"
        href="https://github.com/ralodev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SecondaryButton
          label="See more"
          class="mx-auto mb-12 !w-[12rem] font-semibold"
        >
          <GitHub class="h-8 w-8" />
        </SecondaryButton>
      </a>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import GitHub from '@/components/icons/GitHub.vue'

import sgipdesktop from '@/assets/img/projects/sgip-desktop.webp'
import sgipmobile from '@/assets/img/projects/sgip-mobile.webp'
import fsmdesktop from '@/assets/img/projects/fsm-desktop.webp'
import fsmmobile from '@/assets/img/projects/fsm-mobile.webp'
import dinodesktop from '@/assets/img/projects/dino-desktop.webp'
import crossydesktop from '@/assets/img/projects/crossy-desktop.webp'
import asmdesktop from '@/assets/img/projects/asm-desktop.webp'
import SecondaryButton from '@/components/buttons/SecondaryButton.vue'
import ProjectCard from '@/components/ProjectCard.vue'

const showMore = ref(false)

const projectsInfo = [
  {
    title: 'SGIP (Sistema de Gestión de Información de Personal)',
    description:
      'SGIP is an HRMS (Human Resources Management System) Full-Stack web application that allows you to manage the information of the personnel of a company/institution. It was developed for the Human Resources department of the Technological Institute of Oaxaca (ITO). The application is currently in production, hosted on a private server. The source code, however, is not available due to security reasons.',
    image: sgipdesktop,
    image2: sgipmobile,
    demo: 'https://ralodev.github.io/HRMS-Demo/#/',
    info: 'SGIP',
    tags: [
      'PostgreSQL',
      'Spring',
      'Spring Security',
      'Json Web Tokens',
      'vue.js',
      'Vite',
      'Tailwind CSS',
      'Hibernate'
    ]
  },
  {
    title: 'FSM-Generator',
    description:
      'FSM Generator is a web application that allows you to generate finite state machines (FSM) / Deterministic Finite Automata (DFA) from regular expressions.',
    image: fsmdesktop,
    image2: fsmmobile,
    source: 'https://github.com/ralodev/FSM-Generator',
    live: 'https://ralodev.github.io/FSM-Generator/',
    //info: '#',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap']
  }
]
const projectsInfo2 = [
  {
    id: 4,
    title: 'Crossy Road',
    description:
      'A 3D remake of the popular game Crossy Road. Made with C, C++, Glut, and OpenGL. Made for desktop computers.',
    image: crossydesktop,
    source: 'https://github.com/ralodev/CrossyRoad',
    tags: ['C', 'C%2B%2B', 'OpenGL', 'Visual Studio']
  },
  {
    id: 5,
    title: 'DinoRun',
    description:
      'The classic DinoRun game, this application was made with the Swing and AWT libraries and incorporates a custom-made graphic tool that implements the Bresenham algorithm for rendering.',
    image: dinodesktop,
    source: 'https://github.com/ralodev/DinoRun-2D',
    tags: ['Java', 'NetBeans', 'Swing', 'AWT', 'OpenJDK']
  },
  {
    id: 6,
    title: 'Assembly Language Interactive Menu',
    description:
      'An assembly program demonstrating interactive menu navigation, arithmetic operations, and mouse interaction in x86 assembly (MASM).',
    image: asmdesktop,
    //gif: asmgif,
    source: 'https://github.com/ralodev/ASM-Menu-Mouse',
    tags: ['Assembly', 'MASM', 'x86']
  }
]
</script>
