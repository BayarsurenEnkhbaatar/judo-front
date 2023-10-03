import { Button } from '@nextui-org/react'
import React from 'react'

const TeamCard = () => {
  return (
    <div className='bg-white rounded-lg w-full shadow-lg'>
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
            <Button className='bg-gray-100 rounded-md w-full h-8 hover:bg-gray-200'>Дэлгэрэнгүй</Button>
          </div>
        </div>
    </div>
  )
}

export default TeamCard
