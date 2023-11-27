import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import {Button} from '@nextui-org/react'
import { Link } from 'react-router-dom';
const HomeHeader = () => {

    useEffect(()=>{
        Aos.init({
          duration: 2000,
        });
      }, [])


  return (
    <div data-aos="fade-right" className='md:mt-36 xs:mt-2 font-Roboto'>
        <h1 className='text-5xl'>Монголын жүдо бөхийн</h1>
        <h1 className='text-4xl'>онлайн портал вебсайт</h1>
        <p className='mt-4'>Дотоодын жүдо бөхийн тэмцээн уралдаан эрэмбэ мэдээ мэдээллийг багтаасан цогц систем</p>
        <div className='mt-8'>
          <div className='flex items-center sm:gap-2 md:gap-8 '>
            <Link to='/comptation' className='bg-blue-700 xs:py-2 md:px-8 xs:px-4 xs:text-xs rounded-full text-white'>Тэмцээний мэдээлэл</Link>
            <div className='flex items-center'>
              <h1 className='text-sm xs:hidden md:block'>Танилцуулга</h1>
              <img className='h-10 xs:hidden md:block' src='../icons/play.png'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomeHeader