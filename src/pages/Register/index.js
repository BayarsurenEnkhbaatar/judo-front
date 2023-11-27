import { Button, Input, Spinner, Textarea } from '@nextui-org/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GET, IMAGE_UPLOAD, POST } from '../../utils/requests';
import { STATUS, TYPES } from '../../utils/types';
import { org_uri } from '../../utils/url';
import {toast} from 'react-toastify'

const Register = () => {
  const navigate = useNavigate();
  const [stage, setStage] = useState(1);
  const [data, setData] = useState({name:"",phone_no:"",description:"",email:"",address:"",created_date:"", type:TYPES.CLUB, status:STATUS.REQUESTED, logo:"", province:"", sum:""});
  const [load, setLoad] = useState(false);
  const [imgload, setImgload] = useState(false);

  const Submit = async () => {
    setLoad(true)
    // setError("")
    // setResult("")
    if (
      !data.name ||
      !data.phone_no ||
      !data.description ||
      !data.email ||
      !data.address ||
      !data.created_date ||
      !data.province ||
      !data.sum ||
      !data.logo
    ) {
      // setError("Таны мэдээлэл дутуу байна бүрэн бөглөнө үү !");
      toast.warning("Таны мэдээлэл дутуу байна бүрэн бөглөнө үү !")
      setLoad(false);
      return;
    }
    const b = await POST({uri:org_uri, data:data});
    if(b.status === 200){
      // setError(b.data.msg)
      toast.warning(b.data.msg)
      return setLoad(false)
    }
    if(b.status === 201){
      // setResult(b.data)
      toast.success(b.data)
      navigate("/login")
      return setLoad(false)
    }
    setLoad(false)
  };

  const handleUpload = async (e) => {
    setImgload(true);
    const file = e.target.files[0];
    try {
      const res = await IMAGE_UPLOAD({file:file})
      setData({...data, logo:res});
      setImgload(false);
    } catch (error) {
      console.error('Error uploading file', error);
    }
  };


  // const Get = async () => {
  //   const b = await GET(org_uri);
  //   console.log(b);
  // };


  return (
    <div className='font-Roboto'>
        <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='grid col-span-1 xs:mx-4 md:container mt-16'>
                <div>
                    <div className='flex justify-between'>
                        <Link to='/'><img className='xs:h-10 md:h-20' src='../images/logoblue.png'/></Link>
                        <img className='xs:h-10 md:h-20' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP0ZYfGItYkIMoQEaP7W01j-Fcc08tXoSmDHE8yLlFlw&s'/>
                    </div>
                    <h1 className='text-xl font-bold text-center mt-10'>Бүртгүүлэх хуудас</h1>
                    <p className='text-sm mt-2 text-center'>Монголын жүдо бөхийн холбоо</p>
                   {/* <div className='mt-10'>
                      {
                        error&&
                        <div className='bg-red-600 text-center rounded-md p-4 text-white'>
                          {error}
                        </div>
                      }
                      {
                        result&&
                        <div className='bg-green-600 text-center rounded-md p-4 text-white'>
                          {result}
                        </div>
                      }
                   </div> */}
                    <div className='mt-10'>

                        {
                          stage === 1&&
                          <>
                            <div className=''>
                                <h1 className='font-bold text-sm'>Байгууллагын нэр</h1>
                                <Input onChange={(e) => setData({ ...data, name: e.target.value })} value={data.name} type="text" label="Байгууллагын нэр оруулах" size="sm" className="mt-2"/>
                            </div>
                            <div className='mt-2'>
                                <h1 className='font-bold text-sm'>Утасны дугаар</h1>
                                <Input onChange={(e) => setData({ ...data, phone_no: e.target.value })} value={data.phone_no} type="number" label="Утасны дугаар оруулах" size="sm" className="mt-2"/>
                            </div>
                            <div className='mt-2'>
                                <h1 className='font-bold text-sm'>Товч танилцуулга</h1>
                                <Textarea onChange={(e) => setData({ ...data, description: e.target.value })} value={data.description} type="text" label="Товч танилцуулга оруулах" size="sm" className="mt-2"/>
                            </div>
                            <div className='mt-2'>
                                <h1 className='font-bold text-sm'>Имейл хаяг</h1>
                                <Input onChange={(e) => setData({ ...data, email: e.target.value })} value={data.email} type="text" label="Имейл хаяг оруулах" size="sm" className="mt-2"/>
                            </div>
                          </>
                        }
                        {
                          stage === 2&&
                          <>
                            <div className='mt-2'>
                                <h1 className='font-bold text-sm'>Хот / аймаг</h1>
                                <Input onChange={(e) => setData({ ...data, province: e.target.value })}  value={data.province} type="text" label="Хот / аймаг оруулах" size="sm" className="mt-2"/>
                            </div>
                            <div className='mt-2'>
                                <h1 className='font-bold text-sm'>Сум / дүүрэг</h1>
                                <Input onChange={(e) => setData({ ...data, sum: e.target.value })}  value={data.sum} type="text" label="Сум / дүүрэг оруулах" size="sm" className="mt-2"/>
                            </div>
                            <div className=''>
                                <h1 className='font-bold text-sm'>Дэлгэрэнгүй хаяг</h1>
                                <Textarea onChange={(e) => setData({ ...data, address: e.target.value })}  value={data.address} type="text" label="Хаяг оруулах" size="sm" className="mt-2"/>
                            </div>
                            <div className='mt-2'>
                                <h1 className='font-bold text-sm'>Байгуулагдсан он</h1>
                                <Input onChange={(e) => setData({ ...data, created_date: e.target.value })}  value={data.created_date} type="number" label="Байгуулагдсан он оруулах" size="sm" className="mt-2"/>
                            </div>
                            <div className='mt-4'>
                                <h1 className='font-bold text-sm'>Лого оруулах</h1>
                                <input className="mt-1" type='file' onChange={handleUpload}/>
                                {
                                  imgload &&
                                  <div className="mt-1 flex items-center gap-2">
                                    <h1 className="text-sm">Зургийг хадгалж байна.</h1>
                                    <Spinner size='sm'/>
                                  </div>
                                }
                            </div>
                          </>
                        }

                        {
                          stage ===1&&
                          <Button onClick={()=> setStage(2)} className='text-white bg-blue-800 w-full mt-10'>Дараагийх</Button>
                        }
                        {
                          stage ===2&&
                         <>
                         <Button onClick={()=> setStage(1)} className='text-gray-700 bg-gray-300 hover:bg-gray-400 w-full mt-10'>Өмнөх хуудасруу буцах</Button>
                         {
                           load?
                           <Button className='text-white bg-blue-700 w-full  mt-2'>Хүсэлт илгээж байна... <Spinner className='' color='white'/></Button>
                           :
                           <Button onClick={()=> Submit()} className='text-white bg-blue-800 w-full hover:bg-blue-900 mt-2'>Бүртгүүлэх хүсэлт илгээх</Button>
                         }
                         </>
                        }

                        <div className='text-center mt-6'>
                          <Link to="/login">Хэрэв бүртгэлтэй бол ?<span className='text-blue-700 font-semibold ml-2'>Нэвтрэх хуудас</span></Link>
                        </div>

                    </div>
                </div>
            </div>
            <div className='grid col-span-2 bg-backtsogoo bg-cover h-screen bg-center'>
            </div>
        </div>
    </div>
  )
}

export default Register