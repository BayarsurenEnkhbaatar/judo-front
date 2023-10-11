import { Button } from '@nextui-org/react'
import React from 'react'
import AthleteMoreModal from './athletemoremodal'

const TeamCard = () => {
  return (
    <div className='bg-white rounded-lg w-full shadow-lg hover:shadow-2xl hover:cursor-pointer'>
        <h1 className='absolute z-10 text-white bg-green-600 rounded-md text-xs px-2 mt-2 ml-2'>
          Баталгаажсан
        </h1>
        <div>
          <img src='https://mnb.mn/uploads/202107/news/thumb/7547dac1e7d21ef23f1f2ef2ef03e364_x3.jpg' className='rounded-t-lg w-full'/>
        </div>
        <div className='p-4'>
          <div className='flex justify-between'>
            <div>
              <h1 className='text-xs'>Овог, Нэр</h1>
              <h1 className='text-xs ml-2 mt-1'>Өлзийбаяр</h1>
              <h1 className='text-sm ml-2 font-bold'>Дүүрэнбаяр</h1>
            </div>
            <div>
              <h1 className='text-xs'>Нас</h1>
              <h1 className='text-sm font-bold'>28</h1>
            </div>
          </div>
          <div className='mt-2'>
            <AthleteMoreModal/>
          </div>
        </div>
    </div>
  )
}

export default TeamCard
