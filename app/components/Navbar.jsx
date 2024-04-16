'use client';
import React from 'react'
import Navbarlink from './Navbarlink'
import Link from 'next/link'

const navLinks  = [
    {
        title : "About",
        href : "#about"
    },
    {
        title : "Projects",
        href : "#project"
    },
    {
        title : "Contact",
        href : "#contact"
    },
]

function Navbar() {
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
        <div className='flex flex-warp items-center justify-between mx-auto py-4'>
            <Link href={'/'} className='text-2xl md:text-4xl text-white font-semibold'>
                PortFolio
            </Link>
            <div className='menu hidden md:block md:w-auto' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {
                        navLinks.map((link,index) => (
                            <li key={index}>
                                 <Navbarlink title={link.title} href={link.href}/>
                             </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar