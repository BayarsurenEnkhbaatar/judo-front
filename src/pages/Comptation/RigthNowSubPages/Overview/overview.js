import React,{useEffect, useState} from 'react'
import { GET } from '../../../../utils/requests';
import { comp_uri } from '../../../../utils/url';
import OverviewHeader from './Components/header'
import {CiLocationOn} from 'react-icons/ci'
import {useParams} from 'react-router-dom';
import DateFormat from '../../../../components/Date';

const SubOverview = () => {
  const [comp, setComp] = useState([]);
  const params= useParams();

  const Get = async () => {
    const res = await GET(comp_uri+`/findId?id=${params.slug}`)
    setComp(res.data)
  } 

  useEffect(() => {
    Get()
  }, []);

  return (
    <div className=''>
      <div className='bg-white p-4 mt-4 rounded-md'>
        {/* <OverviewHeader data={comp}/> */}
        <div className='mt-4'>
          <div className='flex justify-between items-center'>
            <h1 className='text-lg uppercase'>Тэмцээний зорилго</h1>
            <div className='bg-green-600 text-white text-sm rounded-lg px-2'>
              <DateFormat dateString={comp.start_date}/> - <DateFormat dateString={comp.start_date}/>
            </div>
          </div>
          <p className='text-sm mt-2'>{comp.desc}</p>

          <div className='mt-4'>
            <h1 className='flex items-center gap-2'><span><CiLocationOn/></span>{comp.more_address}</h1>
            <h1 className='flex items-center gap-2 mt-2'><span><CiLocationOn/></span>{comp.orgenizer}</h1>
          </div>

        </div>
      </div>

    </div>
  )
}

export default SubOverview