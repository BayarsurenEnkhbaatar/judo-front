
import React, { useContext, useEffect, useState } from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button} from "@nextui-org/react";
import CompCard from '../../components/Card/comptation'
import {GET, IMAGE_GET} from '../../utils/requests'
import {comp_uri} from '../../utils/url'
import { ATTYPES } from '../../utils/types';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import moment from 'moment'

const Comptation = () => {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);
  const [load_doc, setLoad_doc] = useState(false);
  const {currentUser, logout} = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    Get();
  }, []);

  const Get = async () => {
    setLoad(true)
    const res = await GET(comp_uri+`/all`);
    setData(res.data);
    setLoad(false);
  }

  const GuideDoc = async (e) => {
    setLoad_doc(true);
    const res = await IMAGE_GET({key:e});
    setLoad_doc(false);
    window.open(res, '_blank');
  }


  function RegisterNavButton({id, deadline}){
    if(new Date(deadline) < new Date()){
      return toast.error("Мэдүүлэг өгөх хугацаа дууссан байна !")
    }

    if(!currentUser){
      toast.error("Та өөрийн клубийн бүртгэлээр нэвтэрч тэмцээнд мэдүүлгээ өгнө үү!")
      logout();
      return navigate('/login');
    }else{
      return navigate(`/comptation/${id}`)
    }
  }

  return(
    <div className='font-Roboto bg-gray-100 h-full'>
        <div className='xs:mx-4 md:container'>
          <div className='pt-20 pb-3'>
              <h1 className='xs:text-xl md:text-2xl font-semibold'>Одоо болох тэмцээнүүд</h1>
          </div>
           <>
            {
              load?
              <div>
                <h1 className='text-center'>Уншиж байна ...</h1>
              </div>
              :
              <Table aria-label="Example static collection table" className='pb-4'>
                <TableHeader>
                  <TableColumn>Ангилал</TableColumn>
                  <TableColumn>Зохиогдох огноо</TableColumn>
                  <TableColumn>Мэдүүлэг өгөх хугацаа</TableColumn>
                  <TableColumn>Газар</TableColumn>
                  <TableColumn>Тэмцээний нэр</TableColumn>
                  <TableColumn></TableColumn>
                </TableHeader>
                <TableBody>
                  {
                    data.map((item, index) => {
                      return(
                        <TableRow key={index}>
                          <TableCell>
                          {
                            item.type === ATTYPES.JUNIOR &&
                            <div className='p-1 bg-green-600 rounded-md text-white md:text-xs xs:text-[8px] text-center'>
                              Өсвөр үе
                            </div>
                          }
                          {
                            item.type === ATTYPES.CADET &&
                            <div className='p-1 bg-pink-600 rounded-md text-white md:text-xs xs:text-[8px] text-center'>
                              Залуучууд
                            </div>
                          }
                          {
                            item.type === ATTYPES.SENIOR &&
                            <div className='p-1 bg-blue-600 rounded-md text-white md:text-xs xs:text-[8px] text-center'>
                              Насанд хүрэгчид
                            </div>
                          }
                          {
                            item.type === ATTYPES.MASTERS &&
                            <div className='p-1 bg-orange-600 rounded-md text-white md:text-xs xs:text-[8px] text-center'>
                              Мастерс
                            </div>
                          }
                          </TableCell>
                          <TableCell>
                            <p className='text-xs'>{new Date(item.start_date).getFullYear()}.{new Date(item.start_date).getMonth()+1}.{new Date(item.start_date).getDate()} - {new Date(item.end_date).getFullYear()}.{new Date(item.end_date).getMonth()+1}.{new Date(item.end_date).getDate()}</p>
                          </TableCell>
                          <TableCell className='text-green-700'>
                            {moment(item.deadline).format('MMMM Do YYYY, h:mm:ss a')}
                          </TableCell>
                          <TableCell>
                            {item.province}, {item.sum}
                          </TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell className='flex gap-1 items-center'>
                            {/* <Button size='sm' onClick={RegisterNavButton} className='w-full hover:bg-gray-400'>Тэмцээнд бүртгүүлэх</Button> */}
                            {/* <button className='bg-gray-200 rounded-md text-center p-1 text-xs w-2/3 hover:bg-gray-300'> */}
                              <a href="#" onClick={()=>GuideDoc(item.guide_doc)} className='w-36 h-full mt-4 bg-gray-200 rounded-md text-center p-1 text-xs hover:bg-gray-300'>
                                Удирдамж харах
                              </a>
                              <a href="#" onClick={() => RegisterNavButton({id:item.id, deadline: item.deadline})} className='w-28 h-full mt-4 bg-gray-200 rounded-md text-center p-1 text-xs hover:bg-gray-300'>
                                Бүртгүүлэх
                              </a>
                          </TableCell>
                        </TableRow>
                      )
                    })
                  }
                </TableBody>
              </Table>
             
            }
           </>
        </div>
    </div>
  )
}

export default Comptation


 {/* <div className='grid xs:grid-cols-2 md:grid-cols-4 gap-4 pb-20'>
                  {
                    data.map((item, index) => {
                      return(
                        <CompCard data={item} key={index}/>
                      )
                    })
                  }
              </div> */}