import { Skeleton } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'
import { IMAGE_GET } from '../../../utils/requests';

const ClubCard = ({data}) => {
    const [profile, setProfile] = useState();

    const Get = async () => {
      const res = await IMAGE_GET({key:data.logo});
      setProfile(res);
    }
  
    
    useEffect(() => {
      Get();
    }, [data]);

  return (
    <div>
        <div className='flex flex-col justify-center'>
            {
                profile?
                <img className='xs:h-20 md:h-40 rounded-md' src={profile}/>
                :
                <Skeleton className='xs:-20 md:h-40'>
                </Skeleton>
            }
            <div className=''>
                <h1 className='text-center my-3 font-light font-Roboto text-gray-700 cursor-pointer'>{data.name}</h1>
            </div>
        </div>
    </div>
  )
}

export default ClubCard