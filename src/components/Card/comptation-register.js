import { Button } from '@nextui-org/react'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../context/auth'
import { GET } from '../../utils/requests'
import { comp_uri } from '../../utils/url'
import AthleteDelete from '../Modals/athlete-delete'
import ComptationRegisterModal from '../Modals/comptation-register-modal'

const Comptationregister = ({ data }) => {
  const {currentUser} = useContext(AuthContext);
  const params = useParams();
  const [athlete, setAthlete] = useState([]);

  useEffect(() => {
    Get();
  }, [data]);

  const Get = async () => {
    const res = await GET(comp_uri + `-to-athlete-category?comp_id=${params.slug}&kg=${data.data.kg}&category_id=${data.data.category_id}&org_id=${currentUser}`);
    setAthlete(res.data);
  }

  function callback(){
    Get();
  }

  return (
    <div className='bg-white rounded-md px-4 py-2 mt-1'>
        <div className='flex justify-between items-center flex-wrap'>
            <h1 className='font-bold'>{data.data.kg} кг</h1>
            <div className='flex items-center gap-2 flex-wrap'>
                {
                  athlete.map((data, index) => {
                    return(
                      <h1 key={index} className='bg-gray-200 px-2 text-xs py-1 rounded-md flex items-center'>
                        <span className='uppercase'>{data.athlete.lastname.substring(0, 1)}</span>
                        .
                        <span className='uppercase font-bold'>{data.athlete.username}</span>
                        <span className='ml-2'>
                          <AthleteDelete data={data} callback={callback}/>
                        </span>
                      </h1>
                    )
                  })
                }
            </div>
            <ComptationRegisterModal data={data} callback={callback}/>
        </div>
    </div>
  )
}

export default Comptationregister
