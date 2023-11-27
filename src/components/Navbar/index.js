import React, { useContext, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom';
import {HiHome} from "react-icons/hi"
import NavItem from './item';
import { AuthContext } from '../../context/auth';
import {Button} from '@nextui-org/react'
import NavbarProfileMenu from '../Dropdown/navbar-menu';

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
        // {
        //     icon: HiHome,
        //     label:'Эрэмбэ',
        //     activate: pathname === '/rank',
        //     href: '/rank'
        // },
        // {
        //     icon: HiHome,
        //     label:'Мэдээ',
        //     activate: pathname === '/service-procedure',
        //     href: '/service-procedure'
        // },
        
    ], [pathname]);


  return (
    <div className={pathname === '/register' || pathname === '/login' ? 'font-Roboto hidden':'font-Roboto'}>
        <div className=' bg-white'>
            <div className='shadow py-2'>
                <div className='mx-4 md:container flex justify-between items-center'>
                    <Link to="/" className=''>
                        <img className='h-12' src='../images/logoblue.png'/>
                    </Link>
                    <div className='hidden md:block'>
                        <div className='flex'>
                            {routes.map((item) => (
                                <NavItem
                                    key={item.label}
                                    {...item}
                                />
                            ))}
                        </div>
                    </div>
                    {
                        currentUser?
                        <div>
                            <NavbarProfileMenu/>
                        </div>
                        :
                        <div className='flex items-center gap-4 text-sm'>
                            <Link to='/login' className='hover:text-opacity-75 cursor-pointer'>
                                Нэвтрэх
                            </Link>
                            <Link to="/register" className=''>
                                <Button className='bg-[#0337A6] text-white hover:bg-opacity-70 rounded-full'>Бүртгүүлэх</Button>
                            </Link>
                        </div>
                    }
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