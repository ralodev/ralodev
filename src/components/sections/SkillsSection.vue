<template>
  <!-- Education section -->
  <CollapsiblePanel
    header="Education"
    toggleable
    :collapsed="false"
  >
    <template #icon>
      <svg
        class="my-auto mr-2 h-8 w-8"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          stroke="none"
          d="M0 0h24v24H0z"
          fill="none"
        />
        <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
        <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
      </svg>
    </template>
    <!-- tecnm -->
    <h2 class="mb-5 block text-5xl font-bold dark:text-gray-300">Skills</h2>
    <div class="grid w-full divide-x px-0 md:grid-cols-3 [&>*]:px-3">
      <div class="mb-3 border-b-2 pb-3 md:mb-0 md:border-0 md:pb-0">
        <h3 class="text-xl font-bold text-ltext1 dark:text-dtext1">
          Backend Developer
        </h3>

        <p>
          I value clean, maintainable, and scalable code. A good architecture is
          key to a successful project.
        </p>
        <!-- REMOVED
        <div class="min-h-[100px] flex flex-col mt-5">
          <h4 class="text-lg text-indigo-500 font-semibold">Services</h4>
          <p>REST, Microservices, Serverless, Monolith, APIs, Unit Testing</p>
        </div>
        -->
        <div class="mt-5 flex flex-col md:min-h-[200px]">
          <h4 class="text-lg font-semibold text-indigo-500">Frameworks</h4>
          <ul>
            <li>Spring Boot</li>
            <li>Micronaut</li>
            <li>Quarkus</li>
            <li>Express</li>
          </ul>
        </div>

        <div class="mt-5 flex flex-col md:min-h-[100px]">
          <h4 class="text-lg font-semibold text-indigo-500">Languages</h4>
          <p>Java, JavaScript</p>
        </div>

        <h4 class="text-lg font-semibold text-indigo-500">Databases</h4>
        <ul>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>Firebase*</li>
          <li>Supabase*</li>
        </ul>
      </div>
      <div class="mb-3 border-b-2 pb-3 md:mb-0 md:border-0 md:pb-0">
        <h3 class="text-xl font-bold text-ltext1 dark:text-dtext1">
          Frontend Developer
        </h3>
        <p>
          UX/UI is important to me. I like to create responsive, accessible, and
          beautiful websites.
        </p>
        <!-- REMOVED
        <div class="min-h-[100px] flex flex-col mt-5">
          <h4 class="text-lg text-indigo-500 font-semibold">Web Dev</h4>
          <p>Responsive, Component-based, Accessible, SEO, UX/UI</p>
        </div>
        -->
        <div class="mt-5 flex flex-col md:min-h-[200px]">
          <h4 class="text-lg font-semibold text-indigo-500">Frameworks</h4>
          <ul>
            <li>Vue.js</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Vuetify</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>Materialize</li>
          </ul>
        </div>

        <div class="mt-5 flex flex-col md:min-h-[100px]">
          <h4 class="text-lg font-semibold text-indigo-500">Languages</h4>
          <p>JavaScript, TypeScript, HTML, CSS</p>
        </div>

        <h4 class="text-lg font-semibold text-indigo-500">Design</h4>
        <ul>
          <li>Adobe XD</li>
          <li>Figma</li>
          <li>Photoshop</li>
          <li>Canva</li>
        </ul>
      </div>
      <div>
        <h3 class="text-xl font-bold text-ltext1 dark:text-dtext1">
          Other Skills
        </h3>
        <p>
          A good developer is always learning. Here are some other skills I have
          acquired.
        </p>
        <!-- REMOVED
        <div class="min-h-[100px] flex flex-col mt-5">
          <h4 class="text-lg text-indigo-500 font-semibold">
            Project Management
          </h4>
          <p>
            I have experience with project management tools such as Jira,
            Trello, and Asana.
          </p>
        </div>
        -->
        <div class="mt-5 flex flex-col md:min-h-[200px]">
          <h4 class="text-lg font-semibold text-indigo-500">Tools</h4>
          <ul>
            <li>Git, GitHub, GitLab</li>
            <li>Heroku, Netlify, Google Cloud, AWS, Azure</li>
            <li>Postman, Insomnia</li>
            <li>Docker</li>
            <li>VS Code, IntelliJ, Eclipse</li>
          </ul>
        </div>
        <div class="mt-5 flex flex-col md:min-h-[100px]">
          <h4 class="text-lg font-semibold text-indigo-500">Languages</h4>
          <p>
            C, C++, Python, R, Assembly(x86), Matlab, Octave & Visual Basic.
          </p>
        </div>
        <h4 class="text-lg font-semibold text-indigo-500">Other</h4>
        <ul>
          <li>Agile (Scrum, Kanban, XP)</li>
          <li>Operative Systems (Windows, Linux, FreeBSD)</li>
          <li>Computer Architecture</li>
          <li>Computer Networks</li>
        </ul>
      </div>
    </div>
  </CollapsiblePanel>
</template>

<script lang="ts" setup>
import CollapsiblePanel from '../CollapsiblePanel.vue';
import tecnm from '/src/assets/img/ito.webp';
import one from '/src/assets/img/one.webp';
</script>
