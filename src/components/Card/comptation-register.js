import { Button } from '@nextui-org/react'
import React from 'react'
import ComptationRegisterModal from '../Modals/comptation-register-modal'

const Comptationregister = () => {
  return (
    <div className='bg-white rounded-md px-4 py-2 mt-1'>
        <div className='flex justify-between items-center'>
            <h1 className='font-bold'>27 кг</h1>
            <div className='flex items-center gap-2 flex-wrap'>
                <h1 className='bg-gray-200 px-2 text-xs py-1 rounded-md'>Батболд x</h1>
                <h1 className='bg-gray-200 px-2 text-xs py-1 rounded-md'>Сүхбат x</h1>
                <h1 className='bg-gray-200 px-2 text-xs py-1 rounded-md'>Наранбат x</h1>
            </div>
            <ComptationRegisterModal/>
        </div>
    </div>
  )
}

export default Comptationregister
