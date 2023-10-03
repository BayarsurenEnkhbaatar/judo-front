import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

const HomeHeader = () => {

    useEffect(()=>{
        Aos.init({
          duration: 2000,
        });
      }, [])


  return (
    <h1>
        <h1 data-aos="fade-right" className='text-4xl'>Монголын жүдо бөхийн</h1>
        <h1 data-aos="fade-left" className='text-4xl ml-28'>онлайн портал вебсайт</h1>
    </h1>
  )
}

export default HomeHeader