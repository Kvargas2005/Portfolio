"use client";

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#161618] sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-24 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <div>
                  <Image
                    className="h-16 w-16 rounded-full" // Hacer la imagen más grande
                    src="/images/Perfil.jpeg"
                    alt="Img de perfil"
                    width={1600} // Ajustar el tamaño según la escala
                    height={1600} // Ajustar el tamaño según la escala
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-shrink-0 items-center">
              <p className='text-[#8E94BC]  sm:ps-6'>Kendall Vargas Ramírez</p>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link href="#home-section" className="rounded-md px-3 py-2 text-sm font-medium text-[#8E94BC] hover:bg-[#1C1C20] hover:text-white">
                    Home
                  </Link>
                  <Link href="#experience-section" className="rounded-md px-3 py-2 text-sm font-medium text-[#8E94BC] hover:bg-[#1C1C20] hover:text-white">
                    Experience
                  </Link>
                  <Link href="#projects-section" className="rounded-md px-3 py-2 text-sm font-medium text-[#8E94BC] hover:bg-[#1C1C20] hover:text-white">
                    My Projects
                  </Link>
                  <Link href="#about-section" className="rounded-md px-3 py-2 text-sm font-medium text-[#8E94BC] hover:bg-[#1C1C20] hover:text-white">
                    About Me
                  </Link>
                  <Link href="#technologies-section" className="rounded-md px-3 py-2 text-sm font-medium text-[#8E94BC] hover:bg-[#1C1C20] hover:text-white">
                    Technologies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">

            <Link href="#home-section" className="block rounded-md px-3 py-2 text-base font-medium text-[#8E94BC] hover:bg-[#1C1C20] hover:text-white">
              Home
            </Link>
            <Link href="#experience-section" className="block rounded-md px-3 py-2 text-base font-medium text-[#8E94BC] hover:bg-[#1C1C20] hover:text-white">
              Experience
            </Link>
            <Link href="#projects-section" className="block rounded-md px-3 py-2 text-base font-medium text-[#8E94BC] hover:bg-[#1C1C20] hover:text-white">
              My Projects
            </Link>
            <Link href="#about-section" className="block rounded-md px-3 py-2 text-base font-medium text-[#8E94BC] hover:bg-[#1C1C20] hover:text-white">
              About Me
            </Link>
            <Link href="#technologies-section" className="block rounded-md px-3 py-2 text-base font-medium text-[#8E94BC] hover:bg-[#1C1C20] hover:text-white">
              Technologies
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
