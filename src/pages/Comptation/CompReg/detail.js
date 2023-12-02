import React, { useContext, useEffect, useState } from 'react'
import {Button} from '@nextui-org/react'
import Comptationregister from '../../../components/Card/comptation-register'
import { useNavigate, useParams } from 'react-router-dom';
import { comptoorg_uri, comp_to_uri } from '../../../utils/url';
import {GET} from '../../../utils/requests'
import {GENDER, STATUS} from '../../../utils/types'
import ComptoOrgRegister from '../../../components/Modals/org-comp-register';
import { AuthContext } from '../../../context/auth';
import axios from 'axios';
import { toast } from 'react-toastify';
import MeduulegBatalgaajuulah from '../../../components/Modals/meduueg-batalgaajuulah';

const CompRegDetail = () => {
  const [categorys, setCategorys] = useState([]);
  const [comp, setComp] = useState({});
  const navigate = useNavigate();
  const [comporg, setComporg] = useState({ath:[], org:''});
  const params = useParams();
  const {currentUser, logout} = useContext(AuthContext);

  useEffect(() => {
    Get();
  }, []);

  const Get = async () => {
    try{
      const res = await axios.get(comp_to_uri + `/${params.slug}`);
      const rest = await axios.get(comptoorg_uri+ `/token?comp_id=${params.slug}&org_id=${currentUser}`);
      setComporg({...comporg, ath:rest.data.athletes, org:rest.data.comp })
      setCategorys(res.data.category.data);
      setComp(res.data.category.comp);
    }catch(err){
      if(err.response.status === 444){
        toast.error("Та нэвтэрнэ үү!")
        logout();
        return navigate('/login');
      }
    }
  }
  return (
    <div className='font-Roboto bg-gray-200'>
      <ComptoOrgRegister/>
      <div className=' bg-blue-900 mt-1'>
        <div className='md:container xs:mx-4'>
          <div className='py-8'>
            <h1 className='text-3xl font-bold uppercase text-white'>{comp.name}</h1>
            <p className='text-white text-xl font-light uppercase mt-1'>Тэмцээний бүртгэл</p>
          </div>
        </div>
      </div>
      <div className='md:container xs:mx-4 py-4'>
     {
       comporg?.org?.status === STATUS.REQUESTED &&
        <div className=''>
          <div className=''>
            <div className='bg-yellow-600 p-2 text-white text-xs flex flex-wrap items-center justify-between'>
              <h1 className='font-bold uppercase'>Мэдүүлэг баталгаажаагүй</h1>
              <MeduulegBatalgaajuulah ath={comporg}/>
            </div>
          </div>
        </div>
     }
     {
       comporg?.org?.status === STATUS.APPROVED &&
       <div className='bg-green-600 p-2 text-white text-xs flex flex-wrap items-center justify-between rounded'>
        <h1 className='text-center'>Таны мандатын төлбөр төлөгдсөн</h1>
        <h1 className='font-bold uppercase'>Мэдүүлэг баталгаажсан</h1>
      </div>
     }
        {
          categorys.map((item, index) => {
            return(
              <div className='mt-4' key={index}>
                <div className='flex items-center justify-between gap-4 mb-2'>
                  <h1 className='mb-2'>{item.category.name}</h1>
                  {item.category.gender === GENDER.MALE && <Button className='bg-green-600 text-white' size='sm'>Эрэгтэй жин</Button> }
                  {item.category.gender === GENDER.FEMALE && <Button className='bg-pink-600 text-white' size='sm'>Эмэгтэй жин</Button> }
                </div>
                {
                  item.category.jin.map((it, idx) => {
                    const a = {
                      gender: item.category,
                      data: it
                    };
                    return(
                      <Comptationregister key={idx} data={a} org={comporg?.org?.status}/>
                    )
                  })
                }
              </div>
            )
          })
        }
        
      </div> 
    </div>
  )
}

export default CompRegDetail
