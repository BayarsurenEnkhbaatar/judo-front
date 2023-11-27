import React, { useEffect, useState } from 'react'
import {Button} from '@nextui-org/react'
import {Link} from 'react-router-dom'
import { ATTYPES } from '../../utils/types'
import { IMAGE_GET } from '../../utils/requests'

const CompCard = ({data}) => {
  const [profile, setProfile] = useState();
  const Get = async () => {
    const res = await IMAGE_GET({key:data.cover_img});
    setProfile(res);
  }
  
  useEffect(() => {
    Get();
  }, [data]);

  return (
    <div className='font-Roboto bg-white hover:shadow-xl'>
        <Link to={`/comptation/${data.id}`} className='bg-white rounded-lg shadow-md cursor-pointer hover:shadow-xl group'>
            <img className='rounded-t-lg h-36' src={profile}/>
            <div className='p-4 '>
                <div className='flex items-center justify-between'>
                  <p className='text-xs'>{new Date(data.start_date).getFullYear()}-{new Date(data.start_date).getMonth()}-{new Date(data.start_date).getDate()} өдөр {data.province}</p>
                      {
                        data.type === ATTYPES.JUNIOR &&
                        <div className='p-1 bg-green-600 rounded-md text-white text-xs'>
                          Өсвөр үе
                        </div>
                      }
                      {
                        data.type === ATTYPES.CADET &&
                        <div className='p-1 bg-green-600 rounded-md text-white text-xs'>
                          Залуучууд
                        </div>
                      }
                      {
                        data.type === ATTYPES.SENIOR &&
                        <div className='p-1 bg-green-600 rounded-md text-white text-xs'>
                          Насанд хүрэгчид
                        </div>
                      }
                      {
                        data.type === ATTYPES.MASTERS &&
                        <div className='p-1 bg-green-600 rounded-md text-white text-xs'>
                          Мастерс
                        </div>
                      }
                </div>
                <h1 className='text-xl font-semibold'>{data.name}</h1>
                <Button size='sm' className='mt-8'>Тэмцээнд бүртгүүлэх</Button>
            </div>
        </Link>
    </div>
  )
}

export default CompCard
