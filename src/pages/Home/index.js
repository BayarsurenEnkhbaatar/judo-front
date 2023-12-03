import React, { useEffect } from 'react'
import HomeHeader from '../../components/Sections/home-header'
import NowComptation from '../../components/Sections/now-comptation'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(()=>{
    Aos.init({
      duration: 2000,
    });
  }, [])


  return (
    <div className='font-Roboto bg-patst bg-cover bg-center mt-[1px]'>
      <div className='grid xs:grid-cols-1 xl:grid-cols-2 gap-4 mx-4 md:container'>
        <div className='grid col-span-1'>
          <div className=''>
            <HomeHeader/>
          </div>
        </div>
        <div className='grid col-span-1 justify-center mt-20'>
          <div>
            <img data-aos="fade-left" className='w-[70%]' src='../images/athlete.png'/>
          </div>
        </div>
      </div>
      <div className='xs:mx-4 mb-60'>
        <NowComptation/>
      </div>
    </div>
  )
}
export default Home