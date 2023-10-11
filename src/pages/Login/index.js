import { Button, Input } from '@nextui-org/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

  return (
    <div className='font-Roboto'>
        <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='grid col-span-1 container mt-16'>
                <div>
                    <div className='flex justify-between'>
                        <Link to='/'><img className='h-20' src='../images/logoblue.png'/></Link>
                        <img className='h-20' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP0ZYfGItYkIMoQEaP7W01j-Fcc08tXoSmDHE8yLlFlw&s'/>
                    </div>
                    <h1 className='text-xl font-bold text-center mt-10'>DOJO.MN -д тавтай морилно уу !</h1>
                    <p className='text-sm mt-2 text-center'>Монголын жүдо бөхийн холбоо</p>
                    <div className='mt-20'>

                        <div className=''>
                            <h1 className='font-bold text-sm'>Нэвтрэх нэр</h1>
                            <Input type="email" label="Нэвтрэх нэр оруулах" size="sm" className="mt-2"/>
                        </div>
                        <div className='mt-2'>
                        <h1 className='font-bold text-sm'>Нууц үг</h1>
                        <Input type="password" label="Нууц үг оруулах" size="sm" className="mt-2"/>
                        </div>

                        <Button onClick={()=> navigate('/profile')} className='text-white bg-blue-800 w-full mt-10'>Нэвтрэх</Button>
                        <div className='text-center mt-6'>
                        <Link to="/register">Хэрэв бүртгэлгүй бол ?<span className='text-blue-700 font-semibold ml-2'>Бүртгүүлэх хуудас</span></Link>
                        </div>

                    </div>
                </div>
            </div>
            <div className='grid col-span-2 bg-back bg-cover h-screen bg-center'>
            </div>
        </div>
    </div>
  )
}

export default Login