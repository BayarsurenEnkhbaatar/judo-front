import { Button, Input, Spinner } from '@nextui-org/react'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import {AuthContext} from '../../context/auth'

const Login = () => {
    const {login} = useContext(AuthContext);
    const [data, setData] = useState({email:"", password:""});
    const [load, setLoad] = useState(false);

    const Submit = async () => {
        setLoad(true);
        await login(data);
        setLoad(false);
    }

  return (
    <div className='font-Roboto'>
        <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='grid col-span-1 xs:mx-4 md:container xs:mt-10 md:mt-16'>
                <div>
                <Link className='text-blue-600 text-xs' to='/'>
                   {'<'} Нүүр хуудасруу очих
                </Link>
                    <div className='flex justify-between mt-2'>
                        <Link to='/'><img className='xs:h-10 md:h-20' src='../images/logoblue.png'/></Link>
                        <img className='xs:h-10 md:h-20' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP0ZYfGItYkIMoQEaP7W01j-Fcc08tXoSmDHE8yLlFlw&s'/>
                    </div>
                    <h1 className='text-xl font-bold text-center mt-10'>DOJO.MN -д тавтай морилно уу !</h1>
                    <p className='text-sm mt-2 text-center'>Монголын жүдо бөхийн холбоо</p>
                    <div className='mt-20'>

                        <div className=''>
                            <h1 className='font-bold text-sm'>Нэвтрэх нэр</h1>
                            <Input type="email" label="Нэвтрэх нэр оруулах" onChange={(e) => setData({...data, email:e.target.value})} size="sm" className="mt-2"/>
                        </div>
                        <div className='mt-2'>
                            <h1 className='font-bold text-sm'>Нууц үг</h1>
                            <Input type="password" label="Нууц үг оруулах" onChange={(e) => setData({...data, password:e.target.value})} size="sm" className="mt-2"/>
                        </div>

                        {
                            load?
                            <Button className='text-white bg-blue-800 w-full mt-10'> <Spinner/></Button>
                            :
                            <Button onPress={Submit} className='text-white bg-blue-800 w-full mt-10'>Нэвтрэх</Button>
                        }

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