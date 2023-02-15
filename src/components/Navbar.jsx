import React from 'react'
import { useState } from 'react'
import { close, logo, menu } from '../assets';

import {navLinks} from '../constants'

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);

  const handleNavigation = (e) => {
    const sectionId = e.target.getAttribute('data-section-id');
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setToggle(false);
    setActive(nav.title)
  };

  return (
    <nav className='w-full flex py-6 px-10 justify-between items-center navbar fixed -top-0 -right-0 -left-0 z-10 bg-gray-800'>
      <img src={logo} alt="hoobank" className='w-[124] h-[32px]' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? 'text-white' : 'text-dimWhite'}  ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            onClick={handleNavigation}
          >
            <a href={`#${nav.id}`} data-sectionid={nav.title}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu}
          alt="menu"
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? 'text-white' : 'text-dimWhite'} ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};  

export default Navbar