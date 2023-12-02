import React, { useContext, useEffect, useState } from 'react'
import {Input} from '@nextui-org/react'
import TeamCard from '../Components/teamCard'
import TeamAdd from '../Components/team-add'
import { GET } from '../../../utils/requests'
import { athlete_uri } from '../../../utils/url'
import { AuthContext } from '../../../context/auth'
import { Link, useNavigate } from 'react-router-dom'
import Paginations from '../../../components/Paginations'
import { toast } from 'react-toastify'
import axios from 'axios'

const Teams = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const {currentUser, logout} = useContext(AuthContext);
  const [load, setLoad] = useState(false);
  const [pagination, setPagination] = useState({limit:10, all:'', totalPage:'',username:''});
  const [page, setPage] = useState(1)

  const Get = async () => {
    try{
      const b = await axios.get(athlete_uri+ `?token=${currentUser}&limit=${pagination.limit}&username=${pagination.username}&page=${page}`);
      setData(b.data.data);
      setPagination({...pagination, all:b.data.all, totalPage:b.data.totalPage})
    }catch(err){
      if(err.response.status === 444){
        toast.error("Таны нэвтрэх хугацаа дууссан байна дахин нэвтэрнэ үү!")
        logout();
        return navigate('/login');
      }
    }
  }
  
  useEffect(() => {
    Get();
  }, [pagination.username, page]);

  const callback = () =>{
    Get();
  }

  const changePage = (page) => {
    setPage(page)
  };

  return (
    <div className='bg-white p-8 rounded-xl xs:mt-2'>
      <div className='flex items-center justify-between'>
        <h1 className='font-semibold xs:text-sm md:text-2xl'>Тамирчдын бүртгэл</h1>
        {/* <TeamAdd callback={callback}/> */}
        {/* <Link to='/profile/teams-register'>Тамирчин бүртгүүлэх</Link> */}
      </div>
      <h1 className='xs:text-xs md:text-sm mt-2'>Тамирчны мэдээллийг үнэн зөв илгээх болон зөв бөглөх талаас нь анхаарах хэрэгтэй</h1>
      <h1 className='xs:text-xs md:text-sm'>мөн тамирчдыг жагсаалтаас хасах болон хайх боломжтой.</h1>
      <div className=''>
      <div className='my-2'>
        <Input placeholder='Хайлт хийх' value={pagination.username} onChange={(e) => setPagination({...pagination, username:e.target.value})}/>
      </div>
        <div className=''>
          <div className='mt-4 grid xs:grid-cols-2 md:grid-cols-5 gap-2'>
            {
              data.map((item, index) => {
                return(
                  <TeamCard key={index} data={item} callback={callback}/>
                )
              })
            }
          </div>
        </div>
          {
            data.length === 0 &&
            <h1 className="text-center text-sm">Бүртгэлтэй тамирчин байхгүй байна.</h1>
          }
          <Paginations initialPage={1} total={pagination.totalPage} alldata={pagination.all} onChange={changePage}/> 
      </div>
    </div>
  )
}

export default Teams
