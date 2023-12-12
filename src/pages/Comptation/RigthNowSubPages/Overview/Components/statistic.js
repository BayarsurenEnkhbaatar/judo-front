import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DateFormat from '../../../../../components/Date'
import { GET } from '../../../../../utils/requests'
import { comp_uri } from '../../../../../utils/url'
import MedaliCard from './medaliCard'

const Statistic = ({data}) => {
  const params = useParams();
  const [jin, setJin] = useState({male:[], female:[], ranking:[]});

  const Get = async () => {
    const res = await GET(comp_uri+`-statistic?comp_id=${params.slug}`)
    const ress = await GET(comp_uri+`-medali-chanar?comp_id=${params.slug}`)
    setJin({...jin, male:res.data.maleJins, female:res.data.femaleJins, ranking: ress.data});
  }

  useEffect(() => {
    Get()
  }, [data]);

  return (
    <div>
        <div className='grid xs:grid-cols-1 md:grid-cols-3 xs:gap-0 md:gap-2 mt-4 '>
          <div className='grid col-span-1 border p-2'>
            <div className=''>
              <h1 className='border-b p-4 text-sm font-bold'>Хугацаа</h1>
              <h1 className='border-b p-2 text-xs'>Эхлэх : <DateFormat dateString={data?.start_date}/></h1>
              <h1 className='border-b text-xs p-2'>Дуусах : <DateFormat dateString={data?.end_date}/></h1>
            </div>
          </div>
          <div className='grid col-span-2 border p-2'>
            <div className=''>
              <h1 className='border-b p-4 text-sm font-bold'>Статистик</h1>
              <h1 className='border-b p-2 font-bold xs:text-[8px] md:text-xs flex justify-between'><span className='w-10'>Эрэгтэй</span>
                {
                  jin.male.map((data, index) => {
                    return(
                      <span key={index}>{data.jin.kg} кг</span>
                    )
                  })
                }
              </h1>
              <h1 className='border-b p-2 font-light xs:text-[8px] md:text-xs flex justify-between'><span className='w-10'>Оролцогчид</span>
                {
                  jin.male.map((data, index) => {
                    return(
                      <span key={index}>{data.number}</span>
                    )
                  })
                }
              </h1>
              <h1 className='border-b p-2 font-bold xs:text-[8px] md:text-xs flex justify-between'><span className='w-10'>Эмэгтэй</span>
                {
                  jin.female.map((data, index) => {
                    return(
                      <span key={index}>{data.jin.kg} кг</span>
                    )
                  })
                }
              </h1>
              <h1 className='border-b p-2 font-light xs:text-[8px] md:text-xs flex justify-between'><span className='w-10'>Оролцогчид</span>
                {
                  jin.female.map((data, index) => {
                    return(
                      <span key={index}>{data.number}</span>
                    )
                  })
                }
              </h1>
            </div>
          </div>
        </div>

        <div className='grid xs:grid-cols-1 md:grid-cols-1 xs:gap-0 md:gap-2 mt-4 '>
          <div className='grid col-span-1 border p-2'>
            <div className=''>
              <h1 className='border-b p-4 text-sm font-bold'>Медалийн чанараар тэргүүлж байгаа багууд</h1>

              <div>
                  <div className='flex justify-between p-2'>
                    <div className='w-1/4'>
                        
                    </div>
                    <div className='w-1/4'>
                        <div className='flex justify-center'>
                            <div className='w-4 h-4 bg-yellow-300 rounded-full'></div>
                        </div>
                    </div>
                    <div className='w-1/4'>
                        <div className='flex justify-center'>
                            <div className='w-4 h-4 bg-gray-300 rounded-full'></div>
                        </div>
                    </div>
                    <div className='w-1/4'>
                        <div className='flex justify-center'>
                            <div className='w-4 h-4 bg-orange-400 rounded-full'></div>
                        </div>
                    </div>
                  </div>
                  {
                    jin.ranking.map((data, index) => {
                      return(
                        <MedaliCard key={index} data={data} index={index + 1}/>
                      )
                    })
                  }
              </div>
            
            </div>
          </div>
        </div>
    </div>
  )
}

export default Statistic