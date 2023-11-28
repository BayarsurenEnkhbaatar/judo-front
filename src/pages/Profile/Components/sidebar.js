import React, { useContext, useEffect,useState } from 'react'
import {  Link, useLocation } from 'react-router-dom';
import {FaUser} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import { Skeleton } from '@nextui-org/react';
import { AuthContext } from '../../../context/auth';
import { IMAGE_GET } from '../../../utils/requests';

const Sidebar = (data) => {
    const location = useLocation();
    const {logout} = useContext(AuthContext);
    const pathname = location.pathname;
    const [profile, setProfile] = useState();

    const Get = async () => {
      const res = await IMAGE_GET({key:data?.data?.logo});
      setProfile(res);
    }

    useEffect(() => {
      Get();
    }, [data]);

  return (
    <div>
      <div className='bg-white rounded-2xl px-6 pt-8 xs:pb-4 md:pb-28'>
        <div className='bg-gray-100 p-4 rounded-xl flex justify-center items-center gap-4'>
          {
            profile?
            <img className='h-20 w-20 rounded-full' src={profile}/>
            :
            <Skeleton>
              <div className='h-20 w-20 rounded-full'></div>
            </Skeleton>
          }
          <h1 className='text-sm font-semibold font-Roboto'>{data?.data?.name}</h1>
        </div>
        <div className='mt-4 md:mx-4  font-Roboto'>
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

          <div className='py-3 px-4 flex items-center gap-4 rounded-xl mt-8 hover:bg-gray-100 cursor-pointer' onClick={logout}>
            <FiLogOut color='#e76a6a' size={14}/>
            <h1 className='text-[13px] text-[#e76a6a]'>Гарах</h1>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sidebar