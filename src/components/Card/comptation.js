import React, { useEffect, useState, useContext } from 'react'
import {Button, Skeleton, Spinner} from '@nextui-org/react'
import {Link, useNavigate} from 'react-router-dom'
import { ATTYPES } from '../../utils/types'
import { IMAGE_GET } from '../../utils/requests'
import { AuthContext } from '../../context/auth';
import {toast} from 'react-toastify';

const CompCard = ({data}) => {
  const [profile, setProfile] = useState();
  const [load, setLoad] = useState(false);
  const [load_doc, setLoad_doc] = useState(false);
  const {currentUser, logout} = useContext(AuthContext);
  const navigate = useNavigate();

  const Get = async () => {
    setLoad(true);
    const res = await IMAGE_GET({key:data.cover_img});
    setProfile(res);
    setLoad(false);
  }
  
  useEffect(() => {
    Get();
  }, [data]);

  const RegisterNavButton = () => {
    if(!currentUser){
      toast.error("Та өөрийн клубийн бүртгэлээр нэвтэрч тэмцээнд мэдүүлгээ өгнө үү!")
      logout();
      return navigate('/login');
    }else{
      return navigate(`/comptation/${data.id}`)
    }
  }

  const GuideDoc = async () => {
    setLoad_doc(true);
    const res = await IMAGE_GET({key:data.guide_doc});
    setLoad_doc(false);
    window.open(res, '_blank');
  }

  return (
    <div className='font-Roboto bg-white hover:shadow-xl'>
        <div className='bg-white rounded-lg shadow-md cursor-pointer hover:shadow-xl group'>
            {
              load?
              <Skeleton>
                <div className='rounded-t-lg h-36 w-full'></div>
              </Skeleton>
              :
              <img className='rounded-t-lg h-36 w-full' src={profile}/>
            }
            <div className='p-4 '>
                <div className='flex items-center justify-between'>
                  <p className='text-xs'>{new Date(data.start_date).getFullYear()}-{new Date(data.start_date).getMonth()}-{new Date(data.start_date).getDate()} өдөр {data.province}</p>
                      {
                        data.type === ATTYPES.JUNIOR &&
                        <div className='p-1 bg-green-600 rounded-md text-white md:text-xs xs:text-[8px]'>
                          Өсвөр үе
                        </div>
                      }
                      {
                        data.type === ATTYPES.CADET &&
                        <div className='p-1 bg-green-600 rounded-md text-white md:text-xs xs:text-[8px]'>
                          Залуучууд
                        </div>
                      }
                      {
                        data.type === ATTYPES.SENIOR &&
                        <div className='p-1 bg-green-600 rounded-md text-white md:text-xs xs:text-[8px]'>
                          Насанд хүрэгчид
                        </div>
                      }
                      {
                        data.type === ATTYPES.MASTERS &&
                        <div className='p-1 bg-green-600 rounded-md text-white md:text-xs xs:text-[8px]'>
                          Мастерс
                        </div>
                      }
                </div>
                <h1 className='text-xl font-semibold'>{data.name}</h1>
                {/* <Link to={`/comptation/${data.id}`}> */}
                  <Button onClick={RegisterNavButton} size='sm' className='mt-8 w-full hover:bg-gray-400'>Тэмцээнд бүртгүүлэх</Button>
                {/* </Link> */}

                {
                  load_doc?
                  <Button size='sm' className='mt-1 w-full'>
                    <Spinner/>
                  </Button>
                  :
                  <Button size='sm' className='mt-1 w-full hover:bg-gray-400'>
                    <a href="#" onClick={GuideDoc} className='w-full h-full mt-4'>
                      Удирдамж харах
                    </a>
                  </Button>
                }
                
            </div>
        </div>
    </div>
  )
}

export default CompCard
