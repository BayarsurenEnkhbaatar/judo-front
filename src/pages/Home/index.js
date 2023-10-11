import React, { useEffect } from 'react'
import {FaSearch} from 'react-icons/fa'
import HomeLast6 from '../../components/Calendar/home-last-6-month'
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
      <div className='grid xs:grid-cols-1 xl:grid-cols-2 gap-4 container'>
        <div className='grid col-span-1 mt-28'>
          <div className=''>
            <HomeHeader/>
            {/* <HomeLast6/> */}
          </div>
          {/* <img className='mt-20' src='../images/chingis.png'/> */}
        </div>
        <div className='grid col-span-1 mt-20'>
          <div>
            <img data-aos="fade-left" src='../images/athlete.png'/>
          </div>
        </div>
      </div>
      <div>
        <NowComptation/>
      </div>
    </div>
  )
}

export default Home