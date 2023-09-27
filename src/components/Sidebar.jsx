import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Sidebar = () => {
  return (
    <>
      <ul className="fixed flex-col top-[37%] 2xl:ml-[0] left-0 md:ml-[-100px] ml-[-200px] sm:flex hidden rounded-e-lg overflow-hidden transition-all duration-300  [&>li]:bg-[#111a2731] [&>li]:backdrop-blur-sm z-50">
        <li className="flex group hover:border-2 hover:border-[#60f7d4] border-2 border-transparent hover:rounded-e-3xl w-[160px] h-[60px] hover:ml-[90px] transition-all duration-300 2xl:hover:ml-[0px] 2xl:hover:rounded-tr-lg 2xl:hover:rounded-br-sm">
          <a href="https://github.com/ralo-dev" target="_blank" rel="noreferrer" className="flex justify-between items-center w-full text-gray-300 group-hover:text-[#60f7d4]">
            GitHub <FaGithub size={30} />
          </a>
        </li>
        <li className="flex group hover:border-2 hover:border-[#60f7d4] border-2 border-transparent hover:rounded-e-3xl w-[160px] h-[60px] hover:ml-[90px] transition-all duration-300 2xl:hover:ml-[0px] 2xl:hover:rounded-e-sm">
          <a href="www.linkedin.com/in/raul-lc" target="_blank" rel="noreferrer" className="flex justify-between items-center w-full text-gray-300 group-hover:text-[#60f7d4]">
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>
        <li className="flex group hover:border-2 hover:border-[#60f7d4] border-2 border-transparent hover:rounded-e-3xl w-[160px] h-[60px] hover:ml-[90px] transition-all duration-300 2xl:hover:ml-[0px] 2xl:hover:rounded-e-sm">
          <a href="mailto:mail" target="_blank" rel="noreferrer" className="flex justify-between items-center w-full text-gray-300 group-hover:text-[#60f7d4]">
            Mail me <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="flex group hover:border-2 hover:border-[#60f7d4] border-2 border-transparent hover:rounded-e-3xl w-[160px] h-[60px] hover:ml-[90px] transition-all duration-300 2xl:hover:ml-[0px] 2xl:hover:rounded-tr-sm 2xl:hover:rounded-br-lg ">
          <a href="resume" target="_blank" rel="noreferrer" className="flex justify-between items-center w-full text-gray-300 group-hover:text-[#60f7d4]">
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
