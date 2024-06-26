import React from 'react'
import Link from 'next/link'
const Navbarlink = ({href,title}) => {
  return (
    <Link href={href} className='block pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>
    {title}
    </Link>
  )
}

export default Navbarlink
