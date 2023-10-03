import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/auth'
import Sidebar from './Components/sidebar'

const Profile = () => {
  const {currentUser} = useContext(AuthContext);

  if(!currentUser){
    return (
      <div className='bg-[#f3f4f5] font-Roboto'>
          <div className='xs:mx-4 md:mx-8 py-8'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>

              <div className='grid col-span-1'>
                <Sidebar/>
              </div>
              
              <div className='grid col-span-3 w-full overflow-x-auto'>
                <div className='md:block'>
                  <Outlet/>
                </div>
              </div>

            </div>
          </div>
      </div>
    )
  }else{
    return <Navigate to='/login'/>
  }
}

export default Profile