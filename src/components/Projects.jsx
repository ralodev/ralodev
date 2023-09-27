import React from 'react';

import sgipLanding from '../assets/images/sgip-landing2.png';
import crossyLanding from '../assets/images/crossy-landing.png';
import fsmLanding from '../assets/images/fsm-landing.png';
import asmLanding from '../assets/images/asm-landing.png';
import asmgif from '../assets/images/asm-gif.gif';
import sgipgif from '../assets/images/sgip-gif.gif';
import fsmgif from '../assets/images/fsm-gif.gif';

import ProjectCard from './ProjectCard';

const Projects = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div name="projects" className="w-full min-h-screen text-gray-300 pt-[10vh]">
      {/* Container */}
      <div className="flex max-w-[1000px] mx-auto md:px-16 p-4 flex-col justify-center w-full h-full">
        {/* Title */}
        <div className="mb-5">
          <p className="text-4xl font-bold inline border-b-4 border-[#60f7d4]">Projects</p>
          <p className="py-4">
            <span className="text-gray-600 text-xl font-semibold"> {'<!--'} </span> Here are some of the projects I've worked on. You can find more on my
            <a href="github.com/ralo-dev" className="text-[#60f7d4]">
              {' '}
              GitHub
            </a>
            <span className="text-gray-600 text-xl font-semibold"> {'-->'} </span>
          </p>
        </div>
        {/* Projects */}
        <ProjectCard
          title={'S.G.I.P.'}
          description={'HRMS that allows the management of employees, departments, positions, and more. Made for the HHRR department at Technological Institute of Oaxaca.'}
          image={sgipLanding}
          imagegif={sgipgif}
          git={'github.com/ralo-dev/'}
          demo={'https://ralo-dev.github.io/HRMS-Demo/'}>
          <img src="https://img.shields.io/badge/PostgreSQL-%2335495e?style=for-the-badge&logo=postgresql&logoColor=white" alt="" />
          <img src="https://img.shields.io/badge/Spring-%2335495e?style=for-the-badge&logo=spring&logoColor=6DB33F" alt="" />
          <img src="https://img.shields.io/badge/Spring_Security-%2335495e?style=for-the-badge&logo=Spring-Security&logoColor=6DB33F" alt="" />
          <img src="https://img.shields.io/badge/JWT-%2335495e?style=for-the-badge&logo=json-web-tokens&logoColor=pink" alt="" />
          <img src="https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" alt="" />
          <img src="https://img.shields.io/badge/Vite-%2335495e?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="" />
          <img src="https://img.shields.io/badge/Tailwind_CSS-%2335495e?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC" alt="" />
          <img src="https://img.shields.io/badge/Hibernate-%2335495e?style=for-the-badge&logo=Hibernate&logoColor=white" alt="" />
        </ProjectCard>
        <hr className='border-[#60f7d4] border-2 opacity-20'/>
        <ProjectCard
          title={'FSM-Generator'}
          description={'FSM Generator is a web application that allows you to generate finite state machines (FSM) / Deterministic Finite Automata (DFA) from regular expressions.'}
          image={fsmLanding}
          imagegif={fsmgif}
          git={'https://github.com/ralo-dev/FSM-Generator'}
          demo={'https://ralo-dev.github.io/FSM-Generator/'}>
          <img src="https://img.shields.io/badge/JavaScript-%2335495e?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="" />
          <img src="https://img.shields.io/badge/HTML5-%2335495e?style=for-the-badge&logo=html5&logoColor=E34F26" alt="" />
          <img src="https://img.shields.io/badge/CSS3-%2335495e?style=for-the-badge&logo=css3&logoColor=1572B6" alt="" />
          <img src="https://img.shields.io/badge/Bootstrap-%2335495e?style=for-the-badge&logo=bootstrap&logoColor=9e5beb" alt="" />
        </ProjectCard>
        { !open &&
        <div className="flex justify-center">
          <button onClick={() => setOpen(true)} className="group text-xl px-4 py-2 mt-4 rounded-full flex justify-center items-center border-2 text-[#60f7d4] border-[#60f7d4]
          transition-all duration-500 hover:bg-[#60f7d41f] w-80">
            See more
          </button>
        </div>
        }
        { open && <>
        <hr className='border-[#60f7d4] border-2 opacity-20'/>
        <ProjectCard
          title={'CrossyRoad'}
          description={'A 3D remake of the popular game Crossy Road. Made with C, C++, Glut, and OpenGL. Made for desktop computers.'}
          image={crossyLanding}
          git={'https://github.com/ralo-dev/CrossyRoad'}>
          <img src="https://img.shields.io/badge/C-%2335495e?style=for-the-badge&logo=c&logoColor=0884cf" alt="" />
          <img src="https://img.shields.io/badge/C%2B%2B-%2335495e?style=for-the-badge&logo=c%2B%2B&logoColor=0884cf" alt="" />
          <img src="https://img.shields.io/badge/OpenGL-%2335495e.svg?style=for-the-badge&logo=opengl&logoColor=5a8aa7" alt="" />
          <img src="https://img.shields.io/badge/Visual_Studio-%2335495e?style=for-the-badge&logo=visual%20studio&logoColor=9e5beb" alt="" />
        </ProjectCard>
        <hr className='border-[#60f7d4] border-2 opacity-20'/>
        <ProjectCard
          title={'DinoRun'}
          description={'The classic DinoRun game, this application was made with the Swing and AWT libraries and incorporates a custom-made graphic tool that implements the Bresenham algorithm for rendering.'}
          image={fsmLanding}
          git={'https://github.com/ralo-dev/FSM-Generator'}>
          <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="" />
        </ProjectCard>
        <hr className='border-[#60f7d4] border-2 opacity-20'/>
        <ProjectCard
          title={'ASM-Menu-Mouse'}
          description={'An assembly program demonstrating interactive menu navigation, arithmetic operations, and mouse interaction in x86 assembly (MASM).'}
          image={asmLanding}
          imagegif={asmgif}
          git={'https://github.com/ralo-dev/ASM-Menu-Mouse'}>
          <img src="https://img.shields.io/badge/Assembly%208086-323330?style=for-the-badge&logo=pastebin&logoColor=white" alt="" />
        </ProjectCard>
        </>}
      </div>
    </div>
  );
};

export default Projects;
