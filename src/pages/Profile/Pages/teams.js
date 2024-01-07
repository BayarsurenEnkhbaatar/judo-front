import React, { useContext, useEffect, useState } from 'react';
import {Button, Input, Spinner} from '@nextui-org/react';
import TeamCard from '../Components/teamCard';
import { athlete_uri } from '../../../utils/url';
import { AuthContext } from '../../../context/auth';
import { useNavigate } from 'react-router-dom';
import Paginations from '../../../components/Paginations';
import { toast } from 'react-toastify';
import axios from 'axios';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import DateFormat from '../../../components/Date';
import { GENDER, STATUS } from '../../../utils/types';
import Image from '../Components/image';

const Teams = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const {currentUser, logout} = useContext(AuthContext);
  const [load, setLoad] = useState(false);
  const [pagination, setPagination] = useState({limit:10, all:'', totalPage:'',username:''});
  const [page, setPage] = useState(1)

  const Get = async () => {
    setLoad(true);
    try{
      const b = await axios.get(athlete_uri+ `?token=${currentUser}&limit=${pagination.limit}&username=${pagination.username}&page=${page}`);
      setData(b.data.data);
      setPagination({...pagination, all:b.data.all, totalPage:b.data.totalPage})
      setLoad(false);
    }catch(err){
      setLoad(false);
      if(err.response.status === 444){
        toast.error("Таны нэвтрэх хугацаа дууссан байна дахин нэвтэрнэ үү!")
        logout();
        return navigate('/login');
      }
    }
  }
  
  useEffect(() => {
    Get();
  }, [pagination.username, page]);

  const callback = () =>{
    Get();
  }

  const changePage = (page) => {
    setPage(page)
  };

  return (
    <div className='bg-white p-8 rounded-xl xs:mt-2'>
      <div className='flex items-center justify-between'>
        <h1 className='font-semibold xs:text-sm md:text-2xl'>Тамирчдын мэдээлэл</h1>
        {/* <TeamAdd callback={callback}/> */}
        {/* <Link to='/profile/teams-register'>Тамирчин бүртгүүлэх</Link> */}
      </div>
      <div className=''>
      <div className='my-2'>
        <Input placeholder='Хайлт хийх' value={pagination.username} onChange={(e) => setPagination({...pagination, username:e.target.value})}/>
      </div>
        {/* <div className=''>
          <div className='mt-4 grid xs:grid-cols-2 md:grid-cols-5 gap-2'>
            {
              data.map((item, index) => {
                return(
                  <TeamCard key={index} data={item} callback={callback}/>
                )
              })
            }
          </div>
        </div> */}

        <div className='mt-2'>
          <Table aria-label="Example static collection table" >
            <TableHeader className=''>
              <TableColumn>Зураг</TableColumn>
              <TableColumn>Овог, Нэр</TableColumn>
              <TableColumn>Төрсөн огноо</TableColumn>
              <TableColumn>Хүйс</TableColumn>
              <TableColumn>Гишүүнчлэлэлийн хугацаа</TableColumn>
              <TableColumn></TableColumn>
            </TableHeader>
            <TableBody>
              {data.map((item, index) => {
                return(
                  <TableRow key={index} className={ index%2 === 0 ? 'border-b bg-gray-50' : 'border-b'}>
                    <TableCell><Image data={item.profile_img}/></TableCell>
                    <TableCell>{item.lastname} <span className='uppercase'>{item.username}</span></TableCell>
                    <TableCell><DateFormat dateString={item.birth_date}/></TableCell>
                    <TableCell>
                      {
                        item.gender === GENDER.MALE &&
                        <h1>Эр</h1>
                      }
                      {
                        item.gender === GENDER.FEMALE &&
                        <h1>Эм</h1>
                      }
                    </TableCell>
                    <TableCell>
                      {
                        new Date(item.expiry_date) < new Date() && item.status === STATUS.APPROVED &&
                        <div className='bg-red-600 w-40 text-white rounded-md p-1 font-bold text-xs text-center'>
                          <DateFormat dateString={item.expiry_date}/>
                        </div>
                      }
                      {
                        new Date(item.expiry_date) > new Date() && item.status === STATUS.APPROVED &&
                        <div className='bg-green-600 w-40 text-white rounded-md font-bold p-1 text-xs text-center'>
                          <DateFormat dateString={item.expiry_date}/>
                        </div>
                      }
                    </TableCell>
                    <TableCell className='flex gap-1 mt-1 justify-end'>
                      <div className='flex items-center'>
                      {
                        item.status === STATUS.REQUESTED &&
                        <h1 className='text-white bg-yellow-600 rounded-md text-[10px] px-2 py-0'>
                            Хүлээгдэж байгаа
                        </h1>
                      }
                      {
                        item.status === STATUS.APPROVED &&
                        <h1 className='text-white bg-green-600 rounded-md text-[10px] px-2 py-0'>
                          Баталгаажсан
                        </h1>
                      }
                      {
                        item.status === STATUS.DECLINED &&
                        <h1 className='text-white bg-red-600 rounded-md text-[10px] px-2 py-0'>
                          Татгалзсан
                        </h1>
                      }
                      </div>
                      {/* <Button size='sm' className='text-[10px]'>Дэлгэрэнгүй</Button> */}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
          {load && <div className='flex justify-center gap-2 items-center'><Spinner /> <h1>Уншиж байна...</h1></div>}
        </div>

          {
            data.length === 0 &&
            <h1 className="text-center text-sm">Бүртгэлтэй тамирчин байхгүй байна.</h1>
          }
          <Paginations initialPage={1} total={pagination.totalPage} alldata={pagination.all} onChange={changePage}/> 
      </div>
    </div>
  )
}

export default Teams
