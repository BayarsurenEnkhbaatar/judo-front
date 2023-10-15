import { Button, Input } from '@nextui-org/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GET, POST } from '../../utils/requests';
import { org_uri } from '../../utils/url';

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({name:"HAHAH", type:"REQUIESTED", status:"aaa"})

  const Submit = async () => {
    const b = await POST({uri:org_uri, data:data});
    console.log(b);
  };

  const Get = async () => {
    const b = await GET(org_uri);
    console.log(b);
  };

//   type, status, name, logo, address, phone_no, create_date, description, email

  return (
    <div className='font-Roboto'>
        <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='grid col-span-1 container mt-16'>
                <div>
                    <div className='flex justify-between'>
                        <Link to='/'><img className='h-20' src='../images/logoblue.png'/></Link>
                        <img className='h-20' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP0ZYfGItYkIMoQEaP7W01j-Fcc08tXoSmDHE8yLlFlw&s'/>
                    </div>
                    <h1 className='text-xl font-bold text-center mt-10'>Бүртгүүлэх хуудас</h1>
                    <p className='text-sm mt-2 text-center'>Монголын жүдо бөхийн холбоо</p>
                    <div className='mt-20'>

                        <div className=''>
                            <h1 className='font-bold text-sm'>Клубын нэр</h1>
                            <Input type="email" label="Клубын нэр оруулах" size="sm" className="mt-2"/>
                        </div>
                        <div className='mt-2'>
                            <h1 className='font-bold text-sm'>Нэвтрэх нэр</h1>
                            <Input type="email" label="Нэвтрэх нэр оруулах" size="sm" className="mt-2"/>
                        </div>
                        <div className='mt-2'>
                            <h1 className='font-bold text-sm'>Нэвтрэх нэр</h1>
                            <Input type="email" label="Нэвтрэх нэр оруулах" size="sm" className="mt-2"/>
                        </div>

                        <Button onClick={()=> Get()} className='text-white bg-blue-800 w-full mt-10'>Бүртгүүлэх</Button>
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