<template>
  <section
    id="projects"
    name="projects"
    className="w-full min-h-screen h-auto overflow-x-hidden pt-[80px]"
  >
    <article
      className="xl:px-0 py-10 max-w-[1200px] mx-auto justify-center h-full text-center"
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
      <div class="mt-5 [&>*]:my-5 max-w-[1200px] text-start">
        <LazyLoadedCard
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
        </LazyLoadedCard>
      </div>
      <div
        v-if="showMore"
        name="showMore"
        class="[&>*]:my-5 max-w-[1200px] text-start"
      >
        <LazyLoadedCard2
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
        </LazyLoadedCard2>
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
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import GitHub from '@/components/icons/GitHub.vue'

import sgipdesktop from '@/assets/img/projects/sgip-desktop.webp'
import sgipmobile from '@/assets/img/projects/sgip-mobile.webp'
import sgipgif from '@/assets/img/projects/sgip-gif.gif'
import estoredesktop from '@/assets/img/projects/estore-desktop.webp'
import estoregif from '@/assets/img/projects/estore-gif.gif'
import estoremobile from '@/assets/img/projects/estore-mobile.webp'
import fsmdesktop from '@/assets/img/projects/fsm-desktop.webp'
import fsmgif from '@/assets/img/projects/fsm-gif.gif'
import fsmmobile from '@/assets/img/projects/fsm-mobile.webp'
import dinodesktop from '@/assets/img/projects/dino-desktop.webp'
import dinogif from '@/assets/img/projects/dino-gif.gif'
import crossydesktop from '@/assets/img/projects/crossy-desktop.webp'
import asmdesktop from '@/assets/img/projects/asm-desktop.webp'
import SecondaryButton from '@/components/buttons/SecondaryButton.vue'
import LoadingCompoVue from '@/components/LoadingCompo.vue'
import { lazyLoadComponentIfVisible } from '@/utils'

const LazyLoadedCard = lazyLoadComponentIfVisible({
  componentLoader: () => import('@/components/ProjectCard.vue'),
  loadingComponent: LoadingCompoVue,
  errorComponent: () => 'Error loading component'
})

const LazyLoadedCard2 = lazyLoadComponentIfVisible({
  componentLoader: () => import('@/components/ProjectCard.vue'),
  loadingComponent: LoadingCompoVue,
  errorComponent: () => 'Error loading component'
})

const showMore = ref(false)

const projectsInfo = [
  {
    title: 'Human Resources Management System',
    description:
      'HRMS that allows the management of employees data, departments, positions, and more. Made for the HHRR  department at Technological Institute.',
    image: sgipdesktop,
    image2: sgipmobile,
    //gif: 'src/assets/img/projects/sgip-gif.gif',
    gif: sgipgif,
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
    title: 'Ecommerce PWA',
    description:
      'Ecommerce web application made with React, Nextjs, and TailwindCSS. UI design inspired by ecommerce standard layouts.',
    image: estoredesktop,
    image2: estoremobile,
    gif: estoregif,
    source: 'https://github.com/ralodev/react-ecommerce',
    demo: 'https://develop--cosmic-lamington-bef4bd.netlify.app/',
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
    source: 'https://github.com/ralodev/FSM-Generator',
    demo: 'https://ralodev.github.io/FSM-Generator/',
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
    gif: dinogif,
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

<style>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
