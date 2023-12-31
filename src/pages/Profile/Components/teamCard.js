import { Button, Skeleton } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import AthleteMoreModal from './athletemoremodal'
import {STATUS} from '../../../utils/types'
import { IMAGE_GET } from '../../../utils/requests'
import AthleteDeleteModal from './athletedeletemodal'

const TeamCard = ({data, callback}) => {
  const [profile, setProfile] = useState();

  const Get = async () => {
    const res = await IMAGE_GET({key:data.profile_img});
    setProfile(res);
  }

  
  useEffect(() => {
    Get();
  }, [data]);


  return (
    <div className=''>
      <div className=''>
        <div className='bg-white rounded-lg w-full shadow-lg hover:shadow-2xl hover:cursor-pointer'>
            {
              data.status === STATUS.REQUESTED &&
              <h1 className='absolute z-10 text-white bg-yellow-600 rounded-md text-[8px] px-2 mt-2 ml-2  py-1'>
                  Хүлээгдэж байгаа
              </h1>
            }
            {
              new Date(data.expiry_date) < new Date() && data.status === STATUS.APPROVED &&
              <h1 className='absolute z-10 text-white bg-red-600 rounded-md text-[8px] xs:px-1 md:px-2 md:mt-2 md:ml-2 py-1'>
                  Гишүүнчлэл дууссан
              </h1>
            }
            {
              new Date(data.expiry_date) > new Date() && data.status === STATUS.APPROVED &&
              <h1 className='absolute z-10 text-white bg-green-600 rounded-md text-[8px] xs:px-1 md:px-2 md:mt-2 md:ml-2 py-1'>
                  Баталгаажсан
              </h1>
            }
            {
              data.status === STATUS.DECLINED &&
              <h1 className='absolute z-10 text-white bg-red-600 rounded-md text-[8px] px-2 mt-2 ml-2  py-1'>
                  Татгалзсан
              </h1>
            }
            <div>
              {
                profile?
                <img src={profile} className='rounded-t-lg w-full xs:h-36 md:h-52'/>
                :
                <Skeleton>
                  <div className='w-full rounded-t-lg xs:h-40 md:h-60'></div>
                </Skeleton>
              }
            </div>
            <div className='xs:p-2 md:p-4'>
              <div className='flex justify-between'>
                <div>
                  <h1 className='text-xs'>Овог, Нэр</h1>
                  <h1 className='text-xs md:ml-2 mt-1'>{data.lastname}</h1>
                  <h1 className='text-sm md:ml-2 font-bold'>{data.username}</h1>
                </div>
                <div>
                  <h1 className='text-xs'>Нас</h1>
                  <h1 className='text-sm font-bold'>{new Date().getFullYear() - new Date(data.birth_date).getFullYear()}</h1>
                </div>
              </div>
              <div className='mt-2'>
                <AthleteMoreModal data={data}/>
                {
                  data.status === STATUS.REQUESTED || data.status === STATUS.DECLINED &&
                  <AthleteDeleteModal data={data}/>
                }
              </div>
            </div>
        </div>
      </div>

      {/* <div className='hidden xs:block'>
        <div className='bg-white rounded w-full shadow-lg hover:shadow-2xl hover:cursor-pointer p-2'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              {
                profile?
                <img src={profile} className='w-6 h-8'/>
                :
                <Skeleton>
                  <div className='w-6 h-8'></div>
                </Skeleton>
              }
              <div>
                <h1 className='text-xs'>{data.lastname}</h1>
                <h1 className='text-xs font-bold'>{data.username}</h1>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <div>
                {
                  data.status === STATUS.REQUESTED &&
                  <h1 className='text-white bg-yellow-600 rounded-md text-[8px] p-1'>
                      Хүлээгдэж байгаа
                  </h1>
                }
                {
                  data.status === STATUS.APPROVED &&
                  <h1 className='text-white bg-green-600 rounded-md text-[8px]'>
                      Баталгаажсан
                  </h1>
                }
                {
                  data.status === STATUS.DECLINED &&
                  <h1 className='absolute z-10 text-white bg-red-600 rounded-md text-[8px] px-2 mt-2 ml-2  py-1'>
                      Татгалзсан
                  </h1>
                }
              </div>
              <AthleteMoreModal data={data}/>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default TeamCard
