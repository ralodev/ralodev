<template>
  <section
    id="projects"
    name="projects"
    class="body__section"
  >
    <article>
      <header>
        <h2 class="body__section__title">Projects</h2>
      </header>
      <div class="flex flex-col gap-8 py-5">
        <ProjectCard
          v-for="project in projectsInfo"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :source="!!project.source"
          @open-src="() => window.open(project.source)"
          :site="!!project.site"
          @open-live="() => window.open(project.site)"
          :read="!!project.read"
          @open-read="router.push({ name: project.read })"
          :tags="project.tags"
        />
      </div>
      <h2 class="body__section__title">Other Projects</h2>
      <div class="grid grid-cols-1 gap-4 py-5 md:grid-cols-2">
        <ProjectCardSmall
          v-for="project in projectsInfo2"
          :key="project.id"
          :title="project.title"
          :description="project.description"
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
import { useRouter } from 'vue-router';
import sgip_image from '@/assets/img/projects/sgip-pan.webp';
import fsm_image from '@/assets/img/projects/fsm-pan.webp';
import ProjectCard from '@/components/ProjectCard.vue';
import ProjectCardSmall from '@/components/ProjectCardSmall.vue';
const router = useRouter();
const projectsInfo = [
  {
    title: 'SGIP - Sistema de Gestión de Información de Personal',
    description:
      'An HRMS web application that allows to manage the information of the personnel in a company. Developed for the Technological Institute of Oaxaca (ITO). The application is currently in production, hosted on a private server.',
    image: sgip_image,
    site: 'https://ralodev.github.io/HRMS-Demo/#/',
    read: 'SGIP',
    tags: [
      'Spring Boot',
      'Spring Security',
      'Vue.js',
      'PostgreSQL',
      'TailwindCSS'
    ]
  },
  {
    title: 'FSM Generator - Generate Automata from Regular Expressions',
    description:
      'FSM Generator is a web application that allows you to generate finite state machines (FSM) / Deterministic Finite Automata (DFA) from regular expressions.',
    image: fsm_image,
    source: 'https://github.com/ralodev/FSM-Generator',
    site: 'https://ralodev.github.io/FSM-Generator/',
    //info: '#',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'Vis-Network']
  }
];
const projectsInfo2 = [
  {
    id: 3,
    title: 'Spring Security + JWT + Java Mail',
    description:
      'Spring Boot template with prebuilt authentication and authorization using Spring Security and Json Web Tokens. It also includes a Java Mail service for sending emails.',
    source: 'https://github.com/ralodev/SpringSecurity-Jwt-JavaMail',
    tags: ['Spring', 'Spring Security', 'Json Web Tokens', 'Java Mail']
  },
  {
    id: 4,
    title: 'Crossy Road',
    description:
      'A 3D remake of the popular game Crossy Road. This version has a multiplayer mode, where you can play against a friend on the same computer.',
    source: 'https://github.com/ralodev/CrossyRoad',
    tags: ['C', 'C++', 'OpenGL', 'GLUT', 'Game Development']
  },
  {
    id: 5,
    title: 'DinoRun',
    description:
      'The classic DinoRun game, made with the Swing and AWT libraries and a custom-made graphic tool that implements the Bresenham algorithm for rendering.',
    source: 'https://github.com/ralodev/DinoRun-2D',
    tags: ['Java', 'Swing', 'AWT', 'Game Development', 'Rendering']
  },
  {
    id: 6,
    title: 'Assembly Language Interactive Menu',
    description:
      'An assembly program demonstrating interactive menu navigation, arithmetic operations, and mouse interaction in x86 assembly (MASM).',
    source: 'https://github.com/ralodev/ASM-Menu-Mouse',
    tags: ['Assembly', 'MASM', 'x86', 'Low-Level Programming']
  }
];

const window = globalThis.window;
</script>
