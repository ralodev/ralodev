<template>
  <section
    id="skills"
    name="skills"
    className="w-full min-h-screen h-auto relative text-center justify-center max-w-[1200px] mx-auto py-[90px]"
  >
    <h2 className="dark:text-gray-300 font-bold text-5xl mb-5 block ">
      Skills
    </h2>
    <div class="grid grid-cols-3 divide-x w-full card [&>*]:px-3 px-0">
      <div>
        <lottie-player
          :src="serverAnimation"
          background="transparent"
          speed="1"
          autoplay
          class="w-[100px] h-[100px] rounded-xl overflow-hidden mb-3 mx-auto bg-[#ebf8ff] dark:bg-gray-600"
          loop
        />
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
        <div class="min-h-[200px] flex flex-col mt-5">
          <h4 class="text-lg text-indigo-500 font-semibold">Frameworks</h4>
          <ul>
            <li>Spring Boot</li>
            <li>Micronaut</li>
            <li>Quarkus</li>
            <li>Express</li>
          </ul>
        </div>

        <div class="min-h-[100px] flex flex-col mt-5">
          <h4 class="text-lg text-indigo-500 font-semibold">Languages</h4>
          <p>Java, JavaScript</p>
        </div>

        <h4 class="text-lg text-indigo-500 font-semibold">Databases</h4>
        <ul>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>Firebase*</li>
          <li>Supabase*</li>
        </ul>
      </div>
      <div>
        <lottie-player
          :src="dashboardAnimation"
          background="transparent"
          speed="1"
          autoplay
          class="w-[100px] h-[100px] rounded-xl overflow-hidden mb-3 mx-auto bg-[#ffebf6] dark:bg-gray-600"
          loop
        />
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
        <div class="min-h-[200px] flex flex-col mt-5">
          <h4 class="text-lg text-indigo-500 font-semibold">Frameworks</h4>
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

        <div class="min-h-[100px] flex flex-col mt-5">
          <h4 class="text-lg text-indigo-500 font-semibold">Languages</h4>
          <p>JavaScript, TypeScript, HTML, CSS</p>
        </div>

        <h4 class="text-lg text-indigo-500 font-semibold">Design</h4>
        <ul>
          <li>Adobe XD</li>
          <li>Figma</li>
          <li>Photoshop</li>
          <li>Canva</li>
        </ul>
      </div>
      <div>
        <lottie-player
          :src="integrationAnimation"
          background="transparent"
          speed="1"
          class="w-[100px] h-[100px] rounded-xl overflow-hidden mb-3 mx-auto bg-[#f3eeff] dark:bg-gray-600"
          loop
          autoplay
        />
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
        <div class="min-h-[200px] flex flex-col mt-5">
          <h4 class="text-lg text-indigo-500 font-semibold">Tools</h4>
          <ul>
            <li>Git, GitHub, GitLab</li>
            <li>Heroku, Netlify, Google Cloud, AWS, Azure</li>
            <li>Postman, Insomnia</li>
            <li>Docker</li>
            <li>VS Code, IntelliJ, Eclipse</li>
          </ul>
        </div>
        <div class="min-h-[100px] flex flex-col mt-5">
          <h4 class="text-lg text-indigo-500 font-semibold">Languages</h4>
          <p>
            C, C++, Python, R, Assembly(x86), Matlab, Octave & Visual Basic.
          </p>
        </div>
        <h4 class="text-lg text-indigo-500 font-semibold">Other</h4>
        <ul>
          <li>Agile (Scrum, Kanban, XP)</li>
          <li>Operative Systems (Windows, Linux, FreeBSD)</li>
          <li>Computer Architecture</li>
          <li>Computer Networks</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import serverAnimation from '@/assets/img/animations/server.json'
import dashboardAnimation from '@/assets/img/animations/dashboard.json'
import integrationAnimation from '@/assets/img/animations/integration.json'
</script>
