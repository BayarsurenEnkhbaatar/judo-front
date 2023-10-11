import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import {Button} from '@nextui-org/react'
const HomeHeader = () => {

    useEffect(()=>{
        Aos.init({
          duration: 2000,
        });
      }, [])


  return (
    <div data-aos="fade-right" className='mt-40 font-Roboto'>
        <h1 className='text-5xl'>Монголын жүдо бөхийн</h1>
        <h1 className='text-4xl'>онлайн портал вебсайт</h1>
        <p className='mt-4'>Дотоодын жүдо бөхийн тэмцээн уралдаан эрэмбэ мэдээ мэдээллийг багтаасан цогц систем</p>
        <div className='mt-8'>
          <div className='flex items-center gap-8'>
            <button className='bg-blue-700 py-3 px-8 rounded-full text-white'>Тэмцээний мэдээлэл</button>
            <div className='flex items-center'>
              <h1 className='text-sm'>Танилцуулга</h1>
              <img className='h-10' src='../icons/play.png'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomeHeader