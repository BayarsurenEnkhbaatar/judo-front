import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../context/auth'
import { org_uri } from '../../utils/url'
import Sidebar from './Components/sidebar'

const Profile = () => {
  const {currentUser, logout} = useContext(AuthContext);
  const [user, setUser] = useState({})
  const navigate = useNavigate();
  
  const Get = async () => {
    try{
      const res = await axios.get(org_uri+`/${currentUser}`)
      setUser(res.data)
      if(res.data === null){
        toast.error("Таны нэвтрэх хугацаа дууссан байна дахин нэвтэрнэ үү!")
        logout();
        return navigate('/login');
      }
    }catch(err){
      console.log(err)
      if(err.response.status === 444){
        toast.error("Таны нэвтрэх хугацаа дууссан байна дахин нэвтэрнэ үү!")
        logout();
        return navigate('/login');
      }
    }
  }

  useEffect(()=>{
    Get();
  }, []);

  if(currentUser){
    return (
      <div className='bg-[#f3f4f5] font-Roboto'>
          <div className='xs:mx-4 md:mx-8 py-8'>
            <div className='grid xs:grid-cols-1 md:grid-cols-4 md:gap-2'>

              <div className='grid col-span-1'>
                <Sidebar data={user}/>
              </div>
              
              <div className='grid col-span-3 w-full overflow-x-auto'>
                <div className='md:block'>
                  <Outlet context={user}/>
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
