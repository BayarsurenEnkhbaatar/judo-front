import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Onoolt8 from './Onooltuud/8';
import {GET} from '../../../../utils/requests';
import { comp_to_uri, final_uri, group_uri, matches_uri, repechage_uri } from '../../../../utils/url';
import Onoolt16 from './Onooltuud/16';
import Onoolt4 from './Onooltuud/4';
import {ATTYPES, GENDER, TYPES} from '../../../../utils/types'
import Repechage from './RepechageAndFinal/repechage';
import Final from './RepechageAndFinal/final';
import Onoolt32 from './Onooltuud/32';

const SubDraw = () => {
  const params = useParams();
  const [data, setData] = useState({modal:false, kg:-60, athletes:[], groups:[], load:true, category:[], repechage:[],final:[] })

  useEffect(() => {
    Get();
  }, [data.kg]);

  const Get = async () => {
    setData({...data, load:true});
    const res = await GET(matches_uri + `/draw?comp_id=${params.slug}&kg=${data.kg}`);
    const groups = await GET(group_uri+`?comp_id=${params.slug}&kg=${data.kg}`);
    const categorys = await GET(comp_to_uri + `/${params.slug}`);
    const repeAndFinal = await GET(repechage_uri+`/final?comp_id=${params.slug}&kg=${data.kg}`);
    setData({...data, athletes:res.data, groups:groups.data, category:categorys.data.category.data, repechage:repeAndFinal.data.repechage, final:repeAndFinal.data.final, load:false});
  }

  const MobileChangeKg = (value) => {
    setData({...data, kg:value, modal:false});
    console.log(data)
  }

  return (
    <div className='md:py-4 flex md:gap-2 font-Roboto'>

      {
        data.modal ?
        <div className='bg-blue-700 bottom-4 rounded-md right-4 fixed px-4 py-2 text-xs text-white w-34 md:hidden '>
          <div className='text-xl flex justify-end' >
              <img onClick={()=> setData({...data, modal:false})} src='../../icons/cancel.png' className='h-4 rounded-full cursor-pointer bg-white p-[1px] hover:bg-gray-200'/>
          </div>
            <div className='flex'>
              {
                data.category.map((it, index) => {
                  return(
                    <div key={index}>
                      {it.category.gender === GENDER.MALE && <h1 className='border-b p-2 font-bold text-center flex flex-col'>
                        <label>Эр</label>
                        <label>{it.category.name.slice(0, 4)}</label>
                      </h1>}
                      {it.category.gender === GENDER.FEMALE && <h1 className='border-b p-2 font-bold text-center flex flex-col'>
                        <label>Эм</label>
                        <label>{it.category.name.slice(0, 4)}</label>
                      </h1>}
                      {
                        it.category.jin.map((jin, idx) => {
                          return(
                            <div key={idx} className={parseInt(data.kg) === parseInt(jin.kg) ? 'border p-2 cursor-pointer bg-gray-100 text-black w-12 text-center':
                            'border w-12 text-center p-2 cursor-pointer'} onClick={()=> MobileChangeKg(jin.kg)}>
                              {jin.kg}
                            </div>
                          )
                        })
                      }
                    </div>
                  )
                })
              }
            </div>
        </div>
        :
        <div onClick={()=> setData({...data, modal:true})} className='bg-blue-800 bottom-4 cursor-pointer rounded-md right-4 fixed px-4 py-2 text-xs text-white md:hidden xs:block'>
          <h1>{data.kg} кг</h1>
        </div>
      }

      <div className='xs:hidden md:block'>

      {
        
      }

        <div className='bg-white rounded shadow-lg'>
          <div className='flex'>
            {
              data.category.map((it, index) => {
                return(
                  <>
                    {
                      it.category.type === ATTYPES.JUNIOR ?

                      <div key={index}>
                        {it.category.gender === GENDER.MALE && <h1 className='border-b p-2 font-bold text-center flex flex-col'>
                          <label>Эр</label>
                          <label>{it.category.name.slice(0, 4)}</label>
                        </h1>}
                        {it.category.gender === GENDER.FEMALE && <h1 className='border-b p-2 font-bold text-center flex flex-col'>
                          <label>Эм</label>
                          <label>{it.category.name.slice(0, 4)}</label>
                        </h1>}
                        {
                          it.category.jin.map((jin, idx) => {
                            return(
                              <div key={idx} className={parseInt(data.kg) === parseInt(jin.kg) ? 'border-r p-2 border-b cursor-pointer hover:bg-blue-500 bg-blue-600 text-white w-12 text-center':
                              'border-r w-12 text-center p-2 border-b cursor-pointer hover:bg-gray-200'} onClick={()=> setData({...data, kg:jin.kg})}>
                                {jin.kg}
                              </div>
                            )
                          })
                        }
                      </div>
                      :
                      <div key={index}>
                        {it.category.gender === GENDER.MALE && <h1 className='border-b p-2 font-bold text-center'>Эр</h1>}
                        {it.category.gender === GENDER.FEMALE && <h1 className='border-b p-2 font-bold text-center'>Эм</h1>}
                        {
                          it.category.jin.map((jin, idx) => {
                            return(
                              <div key={idx} className={parseInt(data.kg) === parseInt(jin.kg) ? 'border-r p-2 border-b cursor-pointer hover:bg-blue-500 bg-blue-600 text-white w-12 text-center':
                              'border-r w-12 text-center p-2 border-b cursor-pointer hover:bg-gray-200'} onClick={()=> setData({...data, kg:jin.kg})}>
                                {jin.kg}
                              </div>
                            )
                          })
                        }
                      </div>
                    }
                  </>
                )
              })
            }
          </div>
        </div>

      </div>

      <div className='p-4 bg-white w-full'>
        {
          data.load ?
          <div>
            <h1 className='text-center'>Уншиж байна ...</h1>
          </div>
          :
          <>
            {
              data.groups.length === 0 ?
              <>
                <h1 className='text-center mt-4'>Оноолт хийгдээгүй байна.</h1>
              </>
              :
              <div>
                <>
                  {
                    data.groups.map((group, index) => {
                      return(
                        <div className={index%2 === 0 ? 'border-b pb-4 bg-gray-50 pt-2' : 'border-b pb-4'}key={index}>
                          <h1 className='text-center font-Roboto font-bold mt-4'> Хэсэг {group.group_name} {data.kg} кг</h1>
                          {
                            group.group_number === 32 &&
                            <Onoolt32 data={data.athletes} group={group.group_name}/>
                          }
                          {
                            group.group_number === 16 &&
                            <Onoolt16 data={data.athletes} group={group.group_name}/>
                          }
                          {
                            group.group_number === 8 &&
                            <Onoolt8 data={data.athletes} group={group.group_name}/>
                          }
                          {
                            group.group_number === 4 &&
                            <Onoolt4 data={data.athletes} group={group.group_name}/>
                          }
                        </div>
                      )
                    })
                  }
                </>
              <div className='mt-8'>
                <h1 className='text-center font-Roboto font-bold'> Торгуулийн тойрог {data.kg} кг</h1>
                <Repechage data={data.repechage}/>
              </div>
              <div className='mt-8'>
                <h1 className='text-center font-Roboto font-bold'> Шигшээ {data.kg} кг</h1>
                <Final data={data.final}/>
              </div>
              </div>
            }
          </>
        }
      </div>
    </div>
  )
}

export default SubDraw