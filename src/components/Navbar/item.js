import React from 'react'
import { Link } from 'react-router-dom'
import { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge';

const NavItem = ({label, activate, href}) => {
  return (
    <Link to={href} className={twMerge(`text-sm`, activate && "font-bold text-sm")}>
        {/* <Icon size={26}/> */}
        <p className='w-full mx-4'>{label}</p>
    </Link>
  )
}

export default NavItem