import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import navData from '@data/nav.json'
import Button from '@components/Button'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import useComponentVisible from '../hooks/useComponentVisible';
import { useScrollData } from "scroll-data-hook";


const navLinks = navData.filter(item => item.id !== "contact");


const MenuDropDown = ({links}) => {

  return (
        <div className="transition-opacity opacity-100 duration-500 container w-full mt-2 absolute z-10 sm:w-2/3 divide-y rounded-lg shadow-md bg-white flex flex-col">
        {
          links.map( (nav, i) => (
            <Link key={`navbar-link-${i}`} 
              href={nav.href} 
              >
              <a className="w-full rounded-t-sm px-5 py-3 hover:bg-gray-700 transition duration-100 hover:text-white">{nav.displayName}</a>
            </Link>
          ))
        }
    </div>
  )
}

const NavBar = () => {
  const scrollPosY = useScrollData().position.y
  const [heroSectionHeight, setHeroSectionHeight] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(0);
  
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  const navRef = useRef(null);

  useEffect(() => {
    const heroSection = document.getElementById('hero');
    const heroHeight = heroSection.offsetHeight;
    const navHeight = navRef.current.clientHeight;

    setHeroSectionHeight(heroHeight)
    setNavbarHeight(navHeight)
  })



  const toggleMenu = () => setIsComponentVisible(!isComponentVisible)

 
  return (
  <header className={`navbar w-full py-2 sticky top-0 z-50  ${scrollPosY > navbarHeight && scrollPosY < heroSectionHeight ? 'bg-yellow-100 opacity-95' : ''} transition duration-150 ${scrollPosY > heroSectionHeight ? 'bg-white shadow-lg' : ''}`} ref={navRef}>
      <nav role="navigation" className="w-11/12 py-3 mx-auto" aria-label="main navigation">
        <div className="container flex justify-between items-center">

          <div className="navbar-left flex justify-between items-center">
            <div className="brand font-bold text-2xl">
                <Link href="/"><a>Alex Haynes</a></Link>
               
            </div>

            <div className="navbar-links hidden lg:block">
              {
                navLinks.map( (nav, i) => (
                  <span key={`navbar-link-${i}`} className="ml-6">
                     <Link href={nav.href}><a className="hover:underline">{nav.displayName}</a></Link> 
                  </span>
                ))
              }
            </div>
          </div>

          <div className="navbar-right flex justify-end">
              
               <Link href='/#contact' passHref>
                <div className="hidden lg:block">
                  <Button variant="link">Get in Touch</Button>
                </div>
              </Link> 

              {
                isComponentVisible 
                ? <button className="pointer-events-none block lg:hidden focus:outline-none">
                    <XIcon className="h-6 w-6 text-gray-800" />
                  </button>

                :  <button className="block lg:hidden focus:outline-none" onClick={toggleMenu}>
                    <MenuIcon className="h-6 w-6 text-gray-800 hover:text-gray-500" />
                  </button>
              }
          </div>  
        </div>
        <div className={`h-0 lg:hidden container flex z-10
              justify-center sm:justify-end
              transition-opacity duration-100 opacity-0 ${isComponentVisible && 'opacity-100'}
              `} ref={ref}>
                  { //dropdown
                    isComponentVisible 
                    ? <MenuDropDown links={navData} />
                    : ''
                  }
          </div>
      </nav>
  </header>

  )
}

export default NavBar;