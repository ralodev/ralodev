import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/github.png'
import { Link } from 'react-scroll'

const Navbar = () => {

  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <nav className='fixed w-full h-[80px] flex justify-center items-center border-b border-[#ffffff1f] bg-[#0000001e] backdrop-blur-md	 text-gray-300 z-10'>
      <div className='flex max-w-[1200px] w-full justify-between items-center px-4'>

        <div>
          <span className='flex text-[#60f7d4] logo'>
            R
          </span>
        </div>
        {/* Desktop menu */}
        <ul className='hidden md:block code text-lg'>
          <li className='inline-block mx-2 hover:text-[#60f7d4]'>
            <Link activeClass="border-b-4 border-[#60f7d4]" to="home" spy={true} smooth={true} offset={0} duration={300} isDynamic={true}>
              Home
            </Link>
          </li>
          <li className='inline-block mx-2 hover:text-[#60f7d4]'>
          <Link activeClass="border-b-4 border-[#60f7d4]" to="about" spy={true} smooth={true} offset={0} duration={300} isDynamic={true}
>
              About
            </Link>
          </li>
          <li className='inline-block mx-2 hover:text-[#60f7d4]'>
          <Link activeClass="border-b-4 border-[#60f7d4]" to="skills" spy={true} smooth={true} offset={0} duration={300} isDynamic={true}
>
              Skills
            </Link>
          </li>
          <li className='inline-block mx-2 hover:text-[#60f7d4]'>
          <Link activeClass="border-b-4 border-[#60f7d4]" to="projects" spy={true} smooth={true} offset={0} duration={300} isDynamic={true}
>
              Projects
            </Link>
          </li>
          <li className='inline-block mx-2 hover:text-[#60f7d4]'>
          <Link activeClass="border-b-4 border-[#60f7d4]" to="contact" spy={true} smooth={true} offset={0} duration={300} isDynamic={true}
>
              Contact
            </Link>
          </li>
        </ul>
        {/* Hambuerguer */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {open ? <FaTimes className='text-3xl' /> : <FaBars className='text-3xl' />}
        </div>
        {/* Mobile menu */}
        <ul className={!open ? 'hidden' : 'absolute flex top-0 left-0 w-full h-screen bg-[#0a192f] flex-col justify-center items-center transition-all duration-500'}>
          <li className='inline-block mx-2 py-6 text-4xl'>Home</li>
          <li className='inline-block mx-2 py-6 text-4xl'>About</li>
          <li className='inline-block mx-2 py-6 text-4xl'>Experience</li>
          <li className='inline-block mx-2 py-6 text-4xl'>Projects</li>
          <li className='inline-block mx-2 py-6 text-4xl'>Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar