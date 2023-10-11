import React from 'react'
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className={pathname === '/register'?'hidden':''}>
      <div className='bg-[#0337A6]'>
        <div className='container'>
          <div className='text-white py-10 text-center font-Roboto'>
            <h1>Dojo.mn ХХК</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer