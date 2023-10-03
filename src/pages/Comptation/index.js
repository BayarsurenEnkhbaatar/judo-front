import React from 'react'
import CompCard from '../../components/Card/comptation'

const Comptation = () => {
  return (
    <div className='font-Roboto bg-gray-100 h-full'>
        <div className='container'>
        <div className='pt-20 pb-6'>
            <h1 className='text-2xl font-semibold'>Одоо Болох Тэмцээнүүд</h1>
        </div>
            <div>
              
            </div>
            <div className='grid grid-cols-4 gap-4'>
                <CompCard/>
                <CompCard/>
                <CompCard/>
                <CompCard/>
                <CompCard/>
                <CompCard/>
            </div>
        </div>
    </div>
  )
}

export default Comptation