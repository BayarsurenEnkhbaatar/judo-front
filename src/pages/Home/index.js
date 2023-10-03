import React from 'react'
import {FaSearch} from 'react-icons/fa'
import HomeLast6 from '../../components/Calendar/home-last-6-month'
import HomeHeader from '../../components/Sections/home-header'
import NowComptation from '../../components/Sections/now-comptation'

const Home = () => {
  return (
    <div className='font-Roboto bg-patt bg-cover bg-center mt-[1px]'>
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
            <img src='../images/athlete.png'/>
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
