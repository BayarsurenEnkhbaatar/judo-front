import React from 'react'
import {Button} from '@nextui-org/react'
import Comptationregister from '../../../components/Card/comptation-register'

const CompRegDetail = () => {
  return (
    <div className='font-Roboto bg-gray-200'>
      <div className=' bg-blue-900 mt-1'>
        <div className='container'>
          <div className='py-8'>
            <h1 className='text-3xl font-bold uppercase text-white'>Боржин цом 2024</h1>
            <p className='text-white text-xl font-light uppercase mt-1'>Тэмцээний бүртгэл</p>
          </div>
        </div>
      </div>
      <div className='container py-4'>
        <h1 className='mb-2'>Эрэгтэй жингийн мэдээлэл</h1>
        <Comptationregister/>
        <Comptationregister/>
      </div>
      <div className='container py-4'>
        <h1 className='mb-2'>Эмэгтэй жингийн мэдээлэл</h1>
        <Comptationregister/>
        <Comptationregister/>
      </div>  
    </div>
  )
}

export default CompRegDetail
