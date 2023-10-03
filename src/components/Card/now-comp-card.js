import React from 'react'
import { Link } from 'react-router-dom'

const NowCompCard = () => {
  return (
    <Link to='/comptation-right/asdf'>
        <div className='bg-gray-100 rounded-2xl p-8 hover:bg-gray-200 hover:ring-2 cursor-pointer mt-2'>
            <div className='flex justify-between items-center flex-wrap'>
                <img src='../images/logoblue.png' className='h-20 '/>
                <div>
                    <h1 className='xs:text-sm md:text-xl font-light'>Насантогтох багшийн нэрэмжит өсвөрийн тэмцээн</h1>
                    <div className='flex items-center flex-wrap gap-4 my-2'>
                        <img className='h-4' src='../icons/location.png'/>
                        <p className='text-xs md:text-sm'>Улаанбаатар хот, Аврагч спорт хороо</p>
                    </div>
                </div>
                <div className='p-2 bg-green-600 text-white rounded-xl text-xs'>
                    Өсвөр үе
                </div>
            </div>
        </div>
    </Link>
  )
}

export default NowCompCard