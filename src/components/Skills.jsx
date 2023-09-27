import React from 'react';

import { SiSpringboot, SiSpringsecurity, SiMysql, SiCplusplus, SiCoursera, SiJsonwebtokens, SiThymeleaf, SiVite, SiVuetify, SiDocker, SiMariadb } from 'react-icons/si';
import {
  BiLogoJava,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoPostgresql,
  BiLogoCPlusPlus,
  BiLogoPython,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  BiLogoTypescript,
  BiLogoJquery,
  BiLogoNodejs,
  BiLogoVuejs,
  BiLogoAws,
  BiLogoFirebase,
  BiLogoGoogleCloud,
  BiLogoHeroku,
  BiLogoReact,
  BiLogoGit,
  BiLogoMongodb
} from 'react-icons/bi';

import {GrMysql} from 'react-icons/gr';

const Skills = () => {
  return (
    <div name="skills" className="flex w-full h-auto min-h-screen text-gray-300 pt-[10vh]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto md:px-16 p-4 flex flex-col justify-center w-full h-auto">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#60f7d4] ">Skills</p>
          <p className="py-4 description">
            I'm a Full Stack Developer with 1 year of work experience. I'm a fast learner and I'm always looking to improve my skills.
          </p>
        </div>

          {/* Backend */}
        <div className="block [&>div>div>p]:hidden [&>div>div>p]:md:flex [&>div>div]:w-[60px] [&>div>div]:sm:w-[120px] [&>div>div>svg]:h-[30px] [&>div>div>svg]:sm:h-[48px]">
          <p className="text-xl font-semibold inline divider">Backend</p>
          <div className="flex flex-wrap [&>div>*]:m-2  text-center justify-center">
            <div className="flex flex-col items-center group transition-all">
              <BiLogoJava className="text-5xl mx-2 my-2 group-hover:text-blue-500 transition-all duration-300"/>
              <p className="">Java</p>
            </div>
            <div className="flex flex-col items-center group transition-all">
              <SiSpringboot className="text-5xl mx-2 my-2 group-hover:text-[#6DB33F] transition-all duration-300"/>
              <p className="">Spring Boot</p>
            </div>
            <div className="flex flex-col items-center group transition-all">
              <SiSpringsecurity className="text-5xl mx-2 my-2 group-hover:text-[#6DB33F] transition-all duration-300" size={36}/>
              <p className="">Spring Security</p>
            </div>
            <div className="flex flex-col items-center group transition-all">
              <SiCoursera className="text-5xl mx-2 my-2 group-hover:text-blue-500 transition-all duration-300" size={36}/>
              <p className="">C</p>
            </div>
            <div className="flex flex-col items-center group transition-all">
              <BiLogoCPlusPlus className="text-5xl mx-2 my-2 group-hover:text-indigo-500 transition-all duration-300" />
              <p className="">C++</p>
            </div>
            <div className="flex flex-col items-center group transition-all">
              <BiLogoPython className="text-5xl mx-2 my-2 group-hover:text-blue-700 transition-all duration-300" />
              <p className="">Python</p>
            </div>
          </div>
          {/* Frontend */}
          <p className="text-xl font-semibold inline divider">Frontend</p>
          <div className="flex flex-wrap [&>div>*]:m-2 text-center justify-center">
            <div className="flex flex-col items-center group transition-all">
              <BiLogoJavascript className="text-5xl mx-2 my-2 group-hover:text-yellow-400 transition-all duration-300" />
              <p className="">JavaScript</p>
            </div>
            <div className="flex flex-col items-center group transition-all">
              <BiLogoTypescript className="text-5xl mx-2 my-2 group-hover:text-blue-700 transition-all duration-300" />
              <p className="">TypeScript</p>
            </div>
            <div className="flex flex-col items-center group transition-all">
              <BiLogoHtml5 className="text-5xl mx-2 my-2 group-hover:text-orange-600 transition-all duration-300" />
              <p className="">HTML5</p>
            </div>
            <div className="flex flex-col items-center group transition-all">
              <BiLogoCss3 className="text-5xl mx-2 my-2 group-hover:text-blue-600 transition-all duration-300" />
              <p className="">CSS3</p>
            </div>
            <div className="flex flex-col items-center group transition-all">
              <BiLogoNodejs className="text-5xl mx-2 my-2 group-hover:text-lime-500 transition-all duration-300" />
              <p className="">Nodejs</p>
            </div>
            <div className="flex flex-col items-center group transition-all">
              <BiLogoVuejs className="text-5xl mx-2 my-2 group-hover:text-teal-600 transition-all duration-300" />
              <p className="">Vue</p>
            </div>
            <div className="flex flex-col items-center group transition-all">
              <BiLogoReact className="text-5xl mx-2 my-2 group-hover:text-cyan-400 transition-all duration-300" />
              <p className="">React</p>
            </div>
            <div className="flex flex-col items-center group transition-all">
              <SiThymeleaf className="text-5xl mx-2 my-2 group-hover:text-green-700 transition-all duration-300" size={36}/>
              <p className="">Thymeleaf</p>
            </div>
            <div className="flex flex-col items-center group transition-all">
              <SiVite className="text-5xl mx-2 my-2 group-hover:text-violet-500 transition-all duration-300" size={36}/>
              <p className="">Vite</p>
            </div>
            <div className="flex flex-col items-center place-content-between group transition-all">
              <SiVuetify className="text-5xl mx-2 my-2 group-hover:text-blue-500 transition-all duration-300" size={36}/>
              <p className="align-bottom">Vuetify</p>
            </div>
            <div className="flex flex-col items-center group transition-all">
              <BiLogoTailwindCss className="text-5xl mx-2 my-2 group-hover:text-sky-600 transition-all duration-300" />
              <p className="">TailwindCss</p>
            </div>
            <div className="flex flex-col items-center group transition-all">
              <BiLogoBootstrap className="text-5xl mx-2 my-2 group-hover:text-purple-600 transition-all duration-300" />
              <p className="">Bootstrap</p>
            </div>
          </div>
          {/* Database */}
          <p className="text-xl font-semibold inline divider">Databases</p>
          <div className="flex flex-wrap [&>div>*]:m-2 text-center justify-center">
            <div className="flex flex-col items-center group transition-all">
              <GrMysql className="text-5xl mx-2 my-2 group-hover:text-blue-700 transition-all duration-300" size={36}/>
              <p className="">MySQL</p>
            </div>
            <div className="flex flex-col items-center group transition-all">
              <BiLogoPostgresql className="text-5xl mx-2 my-2 group-hover:text-sky-600 transition-all duration-300" />
              <p className="">PostgreSQL</p>
            </div>
            <div className="flex flex-col items-center group transition-all">
              <SiMariadb className="text-5xl mx-2 my-2 group-hover:text-amber-800 transition-all duration-300" />
              <p className="">MariaDB</p>
            </div>
            <div className="flex flex-col items-center group transition-all">
              <BiLogoMongodb className="text-5xl mx-2 my-2 group-hover:text-[#6DB33F] transition-all duration-300" />
              <p className="">MongoDB</p>
            </div>
            <div className="flex flex-col items-center group transition-all">
              <BiLogoFirebase className="text-5xl mx-2 my-2 group-hover:text-yellow-500 transition-all duration-300" />
              <p className="">Firebase</p>
            </div>
          </div>

          <p className="text-xl font-semibold inline divider">Tools & Tech</p>
          <div className="flex flex-wrap [&>div>*]:m-2 text-center justify-center">
            <div className="flex flex-col items-center group transition-all">
              <SiJsonwebtokens className="text-5xl mx-2 my-2 group-hover:text-rose-300 transition-all duration-300" size={36}/>
              <p className="">Json Web Tokens</p>
            </div>
            <div className="flex flex-col items-center group transition-all">
              <SiDocker className="text-5xl mx-2 my-2 group-hover:text-blue-700 transition-all duration-300" size={36}/>
              <p className="">Docker</p>
            </div>
            <div className="flex flex-col items-center group transition-all">
              <BiLogoAws className="text-5xl mx-2 my-2 group-hover:text-orange-500 transition-all duration-300" />
              <p className="">AWS</p>
            </div>
            <div className="flex flex-col items-center group transition-all">
              <BiLogoGoogleCloud className="text-5xl mx-2 my-2 group-hover:text-sky-600 transition-all duration-300" />
              <p className="">Google Cloud</p>
            </div>
            <div className="flex flex-col items-center group transition-all">
              <BiLogoHeroku className="text-5xl mx-2 my-2 group-hover:text-violet-700 transition-all duration-300" />
              <p className="">Heroku</p>
            </div>
            <div className="flex flex-col items-center group transition-all">
              <BiLogoGit className="text-5xl mx-2 my-2 group-hover:text-orange-600 transition-all duration-300" />
              <p className="">Git</p>
            </div>
            <div className="flex flex-col items-center group transition-all">
              <BiLogoJquery className="text-5xl mx-2 my-2 group-hover:text-sky-600 transition-all duration-300" />
              <p className="">JQuery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
