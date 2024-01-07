import { Skeleton } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'
import { IMAGE_GET } from '../../../utils/requests';

const Image = ({data}) => {
    const [profile, setProfile] = useState();

    const Get = async () => {
      const res = await IMAGE_GET({key:data});
      setProfile(res);
    }
  
    
    useEffect(() => {
      Get();
    }, [data]);

  return (
    <div>
        {
            profile?
            <img src={profile} className='w-6 h-8'/>
            :
            <Skeleton>
                <div className='w-6 h-8'></div>
            </Skeleton>
        }
    </div>
  )
}

export default Image