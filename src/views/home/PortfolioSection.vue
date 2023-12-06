<template>
  <section
    id="projects"
    name="projects"
    className="w-full min-h-screen h-auto overflow-x-hidden pt-[80px]"
  >
    <article
      className="xl:px-0 py-10 max-w-[1200px] mx-auto justify-center h-full text-center"
    >
      <div class="text-start grid grid-cols-4">
        <header class="col-span-3">
          <h1 className="dark:text-gray-300 font-bold text-5xl md:my-4">
            Projects
          </h1>
          <p
            className="dark:text-gray-400 pt-3 md:text-2xl text-xl text-gray-700"
          >
            Here are some of my recent projects. You can find more on my GitHub
            profile.
          </p>
        </header>
      </div>
      <div class="mt-5 [&>*]:my-5 max-w-[1200px] text-start">
        <ProjectCard
          v-for="project in projectsInfo"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :image2="project.image2"
          :gif="project.gif"
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

        <div v-if="showMore">
          <ProjectCard
            v-for="project in projectsInfo2"
            :key="project.id"
            :title="project.title"
            :description="project.description"
            :image="project.image"
            :gif="project.gif"
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
      </div>
      <PrimaryButton
        v-if="!showMore"
        label="Load more"
        class="!w-[12rem] mb-12 mx-auto"
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
          class="!w-[12rem] mb-12 mx-auto font-semibold"
        >
          <GitHub class="w-8 h-8" />
        </SecondaryButton>
      </a>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import GitHub from '@/components/icons/GitHub.vue'

import sgipdesktop from '@/assets/img/projects/sgip-desktop.png'
import sgipmobile from '@/assets/img/projects/sgip-mobile.png'
import sgipgif from '@/assets/img/projects/sgip-gif.gif'
import estoredesktop from '@/assets/img/projects/estore-desktop.png'
import estoregif from '@/assets/img/projects/estore-gif.gif'
import estoremobile from '@/assets/img/projects/estore-mobile.png'
import fsmdesktop from '@/assets/img/projects/fsm-desktop.png'
import fsmgif from '@/assets/img/projects/fsm-gif.gif'
import fsmmobile from '@/assets/img/projects/fsm-mobile.png'
import dinodesktop from '@/assets/img/projects/dino-desktop.png'
import dinogif from '@/assets/img/projects/dino-gif.gif'
import crossydesktop from '@/assets/img/projects/crossy-desktop.png'
import asmdesktop from '@/assets/img/projects/asm-desktop.png'
import asmgif from '@/assets/img/projects/asm-gif.gif'
import SecondaryButton from '@/components/buttons/SecondaryButton.vue'

const showMore = ref(false)

const projectsInfo = [
  {
    title: 'Human Resources Management System',
    description:
      'HRMS that allows the management of employees data, departments, positions, and more. Made for the HHRR  department at Technological Institute.',
    image: sgipdesktop,
    image2: sgipmobile,
    gif: sgipgif,
    demo: '#',
    info: '#',
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
    title: 'Ecommerce PWA',
    description:
      'Ecommerce web application made with React, Nextjs, and TailwindCSS. UI design inspired by ecommerce standard layouts.',
    image: estoredesktop,
    image2: estoremobile,
    gif: estoregif,
    source: '#',
    demo: '#',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'webpack',
      'eslint',
      'prettier',
      'Tailwind CSS'
    ]
  },
  {
    title: 'FSM-Generator',
    description:
      'FSM Generator is a web application that allows you to generate finite state machines (FSM) / Deterministic Finite Automata (DFA) from regular expressions.',
    image: fsmdesktop,
    image2: fsmmobile,
    gif: fsmgif,
    source: '#',
    demo: '#',
    info: '#',
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
    source: '#',
    tags: ['C', 'C%2B%2B', 'OpenGL', 'Visual Studio']
  },
  {
    id: 5,
    title: 'DinoRun',
    description:
      'The classic DinoRun game, this application was made with the Swing and AWT libraries and incorporates a custom-made graphic tool that implements the Bresenham algorithm for rendering.',
    image: dinodesktop,
    gif: dinogif,
    source: '#',
    tags: ['Java', 'NetBeans', 'Swing', 'AWT', 'OpenJDK']
  },
  {
    id: 6,
    title: 'Assembly Language Interactive Menu',
    description:
      'An assembly program demonstrating interactive menu navigation, arithmetic operations, and mouse interaction in x86 assembly (MASM).',
    image: asmdesktop,
    //gif: asmgif,
    source: '#',
    tags: ['Assembly', 'MASM', 'x86']
  }
]
</script>
