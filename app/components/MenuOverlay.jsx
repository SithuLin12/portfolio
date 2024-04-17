import React from 'react'
import Navbarlink from './Navbarlink'

const MenuOverlay = ({links}) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
      {
        links.map((link,index) => (
            <li key={index}>
                <Navbarlink href={link.href} title={link.title}/>
            </li>
        ))
      }
    </ul>
  )
}

export default MenuOverlay
