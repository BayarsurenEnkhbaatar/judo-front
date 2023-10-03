import React, { useState } from 'react'
import {  Link, useLocation, useNavigate } from 'react-router-dom';
import {FaUser} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'

import {Button} from '@nextui-org/react'

const Sidebar = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const navigate = useNavigate();
    const [loading , setLoading] = useState(false);

  return (
    <div>
      <div className='bg-white rounded-2xl px-6 pt-8 pb-28'>
        <div className='bg-gray-100 p-4 rounded-xl flex justify-center items-center gap-4'>
          <img className='h-20 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlEeWpglDIVyMkQfb6tLH28TwsbsZlL5U3zwHS-RKWULsv8LsVCV_vf6eFSLQfhYX2o6o&usqp=CAU"/>
          <h1 className='text-sm font-semibold font-Roboto'>Монголын жүдо академи</h1>
        </div>
        <div className='mt-4 mx-4  font-Roboto'>
          <Link to='/profile' className={pathname === "/profile"?'bg-gray-100 py-3 px-4 flex items-center gap-4 rounded-xl mt-1':
          'py-3 px-4 flex items-center gap-4 rounded-xl mt-1 hover:bg-gray-100 cursor-pointer'}>
            <FaUser color='#777B89' size={14}/>
            <h1 className='text-[13px]'>Дэвжээний мэдээлэл</h1>
          </Link>
          <Link to='/profile/teams' className={pathname === "/profile/teams"?'bg-gray-100 py-3 px-4 flex items-center gap-4 rounded-xl mt-1':
          'py-3 px-4 flex items-center gap-4 rounded-xl mt-1 hover:bg-gray-100 cursor-pointer'}>
            <FaUser color='#777B89' size={14}/>
            <h1 className='text-[13px]'>Тамирчдын мэдээлэл</h1>
          </Link>

          <div className='py-3 px-4 flex items-center gap-4 rounded-xl mt-8 hover:bg-gray-100 cursor-pointer'>
            <FiLogOut color='#e76a6a' size={14}/>
            <h1 className='text-[13px] text-[#e76a6a]'>Гарах</h1>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sidebar