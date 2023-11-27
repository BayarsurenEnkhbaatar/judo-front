import React, { useEffect, useState } from 'react'
import CompCard from '../../components/Card/comptation'
import {GET} from '../../utils/requests'
import {comp_uri} from '../../utils/url'

const Comptation = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Get();
  }, []);

  const Get = async () => {
    const res = await GET(comp_uri+`/all`);
    setData(res.data);
  }

  return(
    <div className='font-Roboto bg-gray-100 h-full'>
        <div className='xs:mx-4 md:container'>
        <div className='pt-20 pb-6'>
            <h1 className='xs:text-xl md:text-2xl font-semibold'>Одоо Болох Тэмцээнүүд</h1>
        </div>
            <div className='grid xs:grid-cols-1 md:grid-cols-4 gap-4 pb-20'>
                {
                  data.map((item, index) => {
                    return(
                      <CompCard data={item} key={index}/>
                    )
                  })
                }
            </div>
        </div>
    </div>
  )
}

export default Comptation