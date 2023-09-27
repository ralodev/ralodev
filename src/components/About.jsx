import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const About = () => {
  return (
    <section name="about" className="w-full h-screen text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full px-8">
        <header className="max-w-[1000px] w-full sm:grid sm:grid-cols-2 sm:gap-8 sm:text-center pb-8 sm:pl-4">
          <h1 className="sm:text-right pb-8 sm:pl-4">
            <span className="text-4xl font-bold inline border-b-4 border-[#60f7d4]">About</span>
          </h1>
        </header>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 sm:gap-8 gap-y-8 sm:px-8">
          <div className="sm:text-right text-3xl font-bold">
            <p>Hello, my name is Raúl López <br />nice to meet you. 👋 </p>
          </div>
          <article>
            <p className='text-lg'>
              I am a Computer Systems Engineer with a BS specialization in Emerging Software Technologies, solution-driven developer with
              proven experience developing consumer-focused web applications.
              Passionate programmer with drive to learn and master new technologies and propose innovative ideas for back-end and front-end applications.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
