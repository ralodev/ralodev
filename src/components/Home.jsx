import React from 'react';
import { useEffect, useState } from 'react';
import { HiArrowNarrowRight, HiDocumentText, HiBriefcase} from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';


const Home = () => {
  const carouselText = ['Backend Developer', 'Frontend Developer', 'Full Stack Developer'];

  return (
    <section name="home" className={"w-full h-screen"}>
      <article className="max-w-[700px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-6xl text-gray-300 font-bold">
          Hi, I'm <span className="text-gray-300">Raúl López</span>
        </h1>
        <h2 className="text-3xl sm:text-5xl text-[#60f7d4]">
            <TypeAnimation
              sequence={[
                ' Full Stack Developer',
                1000,
                ' Backend Passionate',
                1000,
                ' Active Researcher',
                800,
                ' Dedicated Learner',
                1000,
              ]}
              preRenderFirstString={true}
              wrapper="span"
              speed={{type: 'keyStrokeDelayInMs', value: 50}}
              deletionSpeed={{type: 'keyStrokeDelayInMs', value: 30}}
              cursor={true}
              repeat={Infinity}
            />
        </h2>
        <p className="text-gray-400 pt-3">
          I'm a Full Stack Developer with 1 year of work experience. I'm a fast learner and I'm always looking to improve my skills.
        </p>
        <div className='flex gap-5'>
          <button className="group px-4 py-2 mt-4 rounded-md flex justify-center items-center border-2 text-[#60f7d4] border-[#60f7d4]
          transition-all duration-500 hover:bg-[#60f7d41f] hover:animate-pulse">
            <span className="mr-2 code text-lg group-hover:font-semibold">Download Resume</span>
            <HiDocumentText className="transition-all ease-in-out duration-300" size={20} />
          </button>
          <button className="group px-4 py-2 mt-4 rounded-md flex justify-center items-center border-2 text-[#60f7d4] border-[#60f7d4]
          transition-all duration-500 hover:bg-[#60f7d41f]">
            <span className="mr-2 code text-lg group-hover:font-semibold">See my projects</span>
            <HiArrowNarrowRight className="group-hover:rotate-90 transition-all ease-in-out duration-300" size={20} />
          </button>
        </div>
      </article>
    </section>
  );
};

export default Home;
