<template>
  <section
    id="projects"
    name="projects"
    className="w-full min-h-screen h-auto pt-[90px]"
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
      <div class="flex flex-col gap-y-8 pt-5 text-start">
        <ProjectCard
          v-for="project in projectsInfo"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :image2="project.image2"
          :source="!!project.source"
          @open-src="() => window.open(project.source)"
          :site="!!project.site"
          @open-live="() => window.open(project.site)"
          :read="!!project.read"
          @open-read="router.push({ name: project.read })"
          :tags="project.tags"
        />
      </div>
      <h2
        className="dark:text-dtext1 text-ltext1 font-bold text-4xl text-center md:text-start mt-8"
      >
        Other Projects
      </h2>
      <div class="mt-8 grid grid-cols-1 gap-4 text-start md:grid-cols-2">
        <ProjectCardSmall
          v-for="project in projectsInfo2"
          :key="project.id"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :source="!!project.source"
          @open-src="() => window.open(project.source)"
          :tags="project.tags"
        >
        </ProjectCardSmall>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

import sgipdesktop from '@/assets/img/projects/sgip-desktop.webp'
import sgipmobile from '@/assets/img/projects/sgip-mobile.webp'
import fsmdesktop from '@/assets/img/projects/fsm-desktop.webp'
import fsmmobile from '@/assets/img/projects/fsm-mobile.webp'
import dinodesktop from '@/assets/img/projects/dino-desktop.webp'
import crossydesktop from '@/assets/img/projects/crossy-desktop.webp'
import asmdesktop from '@/assets/img/projects/asm-desktop.webp'
import ProjectCard from '@/components/ProjectCard.vue'
import ProjectCardSmall from '@/components/ProjectCardSmall.vue'

const router = useRouter()

const projectsInfo = [
  {
    title: 'SGIP (Sistema de Gestión de Información de Personal)',
    description:
      'SGIP is an HRMS (Human Resources Management System) Full-Stack web application that allows you to manage the information of the personnel of a company/institution. It was developed for the Human Resources department of the Technological Institute of Oaxaca (ITO). The application is currently in production, hosted on a private server. The source code, however, is not available due to security reasons.',
    image: sgipdesktop,
    image2: sgipmobile,
    site: 'https://ralodev.github.io/HRMS-Demo/#/',
    read: 'SGIP',
    tags: [
      'Full-Stack',
      'Spring MVC',
      'Spring Security',
      'Vue.js',
      'PostgreSQL',
      'Tailwind',
      'JWT',
      'JUnit',
      'Mockito',
      'Java Mail (SMTP)'
    ]
  },
  {
    title: 'FSM-Generator',
    description:
      'FSM Generator is a web application that allows you to generate finite state machines (FSM) / Deterministic Finite Automata (DFA) from regular expressions.',
    image: fsmdesktop,
    image2: fsmmobile,
    source: 'https://github.com/ralodev/FSM-Generator',
    site: 'https://ralodev.github.io/FSM-Generator/',
    //info: '#',
    tags: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'jQuery',
      'Vis-Network',
      'Regex'
    ]
  }
]
const projectsInfo2 = [
  {
    id: 3,
    title: 'Spring Security + JWT + Java Mail',
    description:
      'Spring Boot template with prebuilt authentication and authorization using Spring Security and Json Web Tokens. It also includes a Java Mail service for sending emails.',
    image: crossydesktop,
    source: 'https://github.com/ralodev/SpringSecurity-Jwt-JavaMail',
    tags: ['Spring', 'Spring Security', 'Json Web Tokens', 'Java Mail']
  },
  {
    id: 4,
    title: 'Crossy Road',
    description:
      'A 3D remake of the popular game Crossy Road. This version has a multiplayer mode, where you can play against a friend on the same computer.',
    image: crossydesktop,
    source: 'https://github.com/ralodev/CrossyRoad',
    tags: ['C', 'C++', 'OpenGL', 'GLUT', 'Game Development']
  },
  {
    id: 5,
    title: 'DinoRun',
    description:
      'The classic DinoRun game, made with the Swing and AWT libraries and a custom-made graphic tool that implements the Bresenham algorithm for rendering.',
    image: dinodesktop,
    source: 'https://github.com/ralodev/DinoRun-2D',
    tags: ['Java', 'Swing', 'AWT', 'Game Development', 'Rendering']
  },
  {
    id: 6,
    title: 'Assembly Language Interactive Menu',
    description:
      'An assembly program demonstrating interactive menu navigation, arithmetic operations, and mouse interaction in x86 assembly (MASM).',
    image: asmdesktop,
    //gif: asmgif,
    source: 'https://github.com/ralodev/ASM-Menu-Mouse',
    tags: ['Assembly', 'MASM', 'x86', 'Low-Level Programming']
  }
]

const window = globalThis.window
</script>
