import React, { useEffect, useState } from 'react'
import NowCompCard from '../Card/now-comp-card'
import {GET} from '../../utils/requests';
import { comp_uri } from '../../utils/url';

const NowComptation = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    Get();
  }, []);

  const Get = async () => {
    setLoad(true);
    const res = await GET(comp_uri + `/all`);
    setData(res.data);
    setLoad(false);
  }

  return (
    <div className='font-Roboto md:container'>
        <div className='mt-10'>
            <h1 className='text-center uppercase text-xl font-light'>Яг одоо болж байгаа тэмцээнүүд</h1>
            <div className='flex justify-center animate-bounce'>
              <img src='../icons/down-arrow.png' className='h-8'/>
            </div>
            {
              load?
              <div>
                <h1 className='text-center mt-4'>Уншиж байна ...</h1>
              </div>
              :
              <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-4 my-4'>
                {
                  data.map((it, index) => {
                    return(
                      <NowCompCard key={index} data={it}/>
                    )
                  })
                } 
              </div>
            }
        </div>
    </div>
  )
}

export default NowComptation