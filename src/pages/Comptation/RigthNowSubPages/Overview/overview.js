import React,{useEffect, useState} from 'react'
import { GET } from '../../../../utils/requests';
import { comp_uri } from '../../../../utils/url';
import OverviewHeader from './Components/header'
import {CiLocationOn} from 'react-icons/ci'
import {useParams} from 'react-router-dom';
import DateFormat from '../../../../components/Date';
import Statistic from './Components/statistic';

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
      <div className='bg-white p-4 mt-4 rounded-md w-full'>
        <OverviewHeader data={comp}/>
        <Statistic data={comp}/>
      </div>

    </div>
  )
}

export default SubOverview