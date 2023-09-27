import React from 'react';
import { FaGithub, FaEye, FaInfoCircle, FaExternalLinkAlt, FaRegQuestionCircle } from 'react-icons/fa';
import { GoProjectSymlink } from 'react-icons/go';
const ProjectCard = ({ title, description, image, imageAlt, children, git, demo, info, imagegif }) => {
  const alt = imageAlt || title;
  const gif = imagegif || image;
  return (
    <div className="max-w-6xl mx-auto pb-5 pt-8 sm:px-6 h-full">
      <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-x-6 md:gap-x-8 lg:gap-x-12 xl:gap-x-16 items-center">
        {/* Image */}
        <a className="relative block group" href={info}>
          <div
            className="blur-none absolute inset-0 bg-[#1f2937] hidden
            md:block transform md:translate-y-0 md:translate-x-0
            xl:translate-y-0 xl:translate-x-0
            group-hover:blur-sm
            group-hover:translate-y-6 group-hover:translate-x-8
            group-hover:md:translate-y-2 group-hover:md:translate-x-4
            transition duration-700 ease-out pointer-events-none"
            aria-hidden="true"></div>
          <figure
            className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform
          md:-translate-y-0 xl:-translate-y-0
          group-hover:translate-x-[-10px] group-hover:translate-y-[-8px] transition duration-700 ease-out">
            <img
              className="absolute inset-0 w-full h-full object-cover transform
            group-hover:opacity-100 opacity-0 delay-500"
              src={gif}
              width="540"
              height="303"
              alt={alt}
            />
            <img
              className="absolute inset-0 w-full h-full object-cover transform
            group-hover:opacity-0 delay-500"
              src={image}
              width="540"
              height="303"
              alt={alt}
            />
          </figure>
        </a>
        <div>
          {/* Title and badges */}
          <header>
            <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
              <a className="hover:text-[#60f7d4] transition duration-150 ease-in-out" href={demo || git} target="_blank" rel="noreferrer">
                {title}
              </a>
            </h3>
          </header>
          {/* Description */}
          <p className="text-lg text-gray-400 flex-grow">{description}</p>

          {/* GitHub and Demo buttons */}
          <footer className="flex items-center mt-4">
            <ul className="flex gap-2">
              {git && (
                <li className="flex group hover:border-[#60f7d4] border-[#60f7d470] border-2 text-[#60f7d4] rounded-xl w-[120px] h-[40px]
             transition-all ease-in-out duration-300 hover:bg-[#60f7d41f]">
                  <a
                    href={git}
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-between items-center w-full text-[#60f7d4]
              group:hover:text-black ease-in-out transition-all duration-300">
                    <FaGithub size={25} /> GitHub
                  </a>
                </li>
              )}
              {demo && (
                <li className="flex group hover:border-[#60f7d4] border-[#60f7d470] border-2 text-[#60f7d4] rounded-xl w-[120px] h-[40px]
                transition-all ease-in-out duration-300 hover:bg-[#60f7d41f]">
                  <a href={demo} target="_blank" rel="noreferrer" className="flex justify-between items-center w-full text-[#60f7d4]
              group:hover:text-black ease-in-out transition-all duration-300">
                    <GoProjectSymlink size={25} /> Demo
                  </a>
                </li>
              )}
              {info && (
                <li className="flex group hover:border-[#60f7d4] border-[#60f7d470] border-2 text-[#60f7d4] rounded-xl w-[95px] h-[40px]
                transition-all ease-in-out duration-300 hover:bg-[#60f7d41f]">
                  <a href={info} target="_blank" rel="noreferrer" className="flex justify-between items-center w-full text-[#60f7d4]
              group:hover:text-black ease-in-out transition-all duration-300">
                    <FaRegQuestionCircle size={25} /> Info
                  </a>
                </li>
              )}
            </ul>
          </footer>
        </div>
        {/* Children stack badges */}
        <div className="my-4 col-span-1 md:col-span-2">
          <ul className="flex flex-wrap text-xs font-medium -m-1 gap-1 [&>img]:rounded-full [&>img]:h-[25px]">{children}</ul>
        </div>
      </article>
    </div>
  );
};

export default ProjectCard;
