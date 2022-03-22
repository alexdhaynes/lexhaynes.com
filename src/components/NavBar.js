import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import navData from '@data/nav.json'
import useComponentVisible from '../hooks/useComponentVisible';
import { useScrollData } from "scroll-data-hook";

const navLinks = navData.filter(item => item.id !== "contact");


const MenuDropDown = ({links}) => {

  return (
        <div>
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
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  const navRef = useRef(null);
  const toggleMenu = () => setIsComponentVisible(!isComponentVisible)


  return (
  <header ref={navRef}>
      <nav role="navigation" className="w-11/12 py-3 mx-auto" aria-label="main navigation">

        <Link href="/"><a>Alex Haynes</a></Link>
               
          
          {
          navLinks.map( (nav, i) => (
            <span key={`navbar-link-${i}`} className="ml-6">
                <Link href={nav.href}><a className="hover:underline">{nav.displayName}</a></Link> 
            </span>
          ))
          }
      
{/*         <div ref={ref}>
          { //dropdown
            isComponentVisible && <MenuDropDown links={navData} />
          }
        </div> */}
      </nav>
  </header>

  )
}

export default NavBar;