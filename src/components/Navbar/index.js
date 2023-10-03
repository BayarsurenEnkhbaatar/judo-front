import React, { useContext, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom';
import {HiHome} from "react-icons/hi"
import NavItem from './item';
import { AuthContext } from '../../context/auth';
import {Button} from '@nextui-org/react'
import Login from '../Modals/login';

const Navbar = ({children}) => {

    const {currentUser} = useContext(AuthContext);
    const location = useLocation();
    const pathname = location.pathname;

    const routes = useMemo(() => [
        {
            icon: HiHome,
            label:'Нүүр',
            activate: pathname === '/',
            href: '/'
        },
        {
            icon: HiHome,
            label:'Тэмцээнүүд',
            activate: pathname === '/comptation',
            href: '/comptation'
        },
        {
            icon: HiHome,
            label:'Мэдээ',
            activate: pathname === '/service-procedure',
            href: '/service-procedure'
        },
        
    ], [pathname]);


  return (
    <div className={pathname === '/register' ? 'font-Roboto hidden':'font-Roboto'}>
        <div className=' bg-white'>
            <div className='shadow py-2'>
                <div className='container flex justify-between items-center'>
                    <Link to="/" className=''>
                        <img className='h-12' src='../images/logoblue.png'/>
                    </Link>
                    <div className='flex'>
                        {routes.map((item) => (
                            <NavItem
                                key={item.label}
                                {...item}
                            />
                        ))}
                    </div>
                    <div className='flex items-center gap-4 text-sm'>
                    <Login/>
                    <Link to="/register" className=''>
                        <Button className='bg-[#0337A6] text-white hover:bg-opacity-70 rounded-full'>Бүртгүүлэх</Button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Navbar