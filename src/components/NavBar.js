import React from 'react'
import Link from 'next/link'
import navData from '@data/nav.json'
import Button from '@components/Button'
import { MenuIcon } from '@heroicons/react/solid'
import useComponentVisible from '../hooks/useComponentVisible';


const navLinks = navData.filter(item => item.id !== "contact");


const MenuDropDown = ({links}) => {

  return (
        <div className="container mt-2 absolute z-10 sm:w-2/3 divide-y menu-dropdown rounded-lg shadow-md bg-white flex flex-col">
        {
          links.map( (nav, i) => (
            <Link key={`navbar-link-${i}`} 
              href={nav.href} 
              >
              <a className="w-full rounded-t-sm px-5 py-3 hover:bg-gray-700 hover:text-white">{nav.displayName}</a>
            </Link>
          ))
        }
    </div>
  )
}

const NavBar = () => {
  
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  const toggleMenu = () => setIsComponentVisible(!isComponentVisible)


  const contactLink = '/#contact'

  return (
  <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container flex justify-between items-center">

          <div className="navbar-left flex justify-between items-center">
            <div className="brand font-bold text-2xl">
                <Link href="/"><a>Alex Haynes</a></Link>
               
            </div>

            <div className="navbar-links hidden lg:block">
              {
                navLinks.map( (nav, i) => (
                  <span key={`navbar-link-${i}`} className="ml-6">
                     <Link href={nav.href}><a>{nav.displayName}</a></Link> 
                  </span>
                ))
              }
            </div>
          </div>

          <div className="navbar-right flex justify-end">
              
               <Link href={contactLink} passHref>
                <div className="hidden lg:block">
                  <Button>Get in Touch</Button>
                </div>
              </Link> 

              {
                isComponentVisible 
                ? <button className="pointer-events-none block lg:hidden">
                    <MenuIcon className="h-6 w-6 text-gray-800 hover:text-gray-500" />
                  </button>

                :  <button className="block lg:hidden" onClick={toggleMenu}>
                    <MenuIcon className="h-6 w-6 text-gray-800 hover:text-gray-500" />
                  </button>
              }
          </div>  
        </div>
        <div className="lg:hidden container flex justify-end h-10" ref={ref}>
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