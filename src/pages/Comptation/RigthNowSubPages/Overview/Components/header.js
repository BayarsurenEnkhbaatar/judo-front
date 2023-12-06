import React from 'react'

const OverviewHeader = () => {
  return (
    <div className='bg-gray-200 rounded-md p-8 xs:text-xs hidden md:block'>
      <div className='flex justify-between gap-8'>

        <div className=''>
          <div className='flex items-center gap-4'>
            <img src='../../icons/organization.png' className='xs:h-8 md:h-10'/>
            <h1 className='xs:lg md:text-4xl font-bold '>Нийт</h1>
          </div>
          <div className='uppercase text-center mt-2'>
            Тоон мэдээлэл
          </div>
        </div>

        <div className=''>
          <div className='flex items-center gap-4'>
            <img src='../../icons/organization.png' className='h-10'/>
            <h1 className='xs:lg md:text-4xl font-bold '>56</h1>
          </div>
          <div className='uppercase text-center mt-2'>
            Клуб
          </div>
        </div>

        <div className=''>
          <div className='flex items-center gap-4'>
            <img src='../../icons/organization.png' className='h-10'/>
            <h1 className='xs:lg md:text-4xl font-bold '>620</h1>
          </div>
          <div className='uppercase text-center mt-2'>
            Эрэгтэй
          </div>
        </div>

        <div className=''>
          <div className='flex items-center gap-4'>
            <img src='../../icons/organization.png' className='h-10'/>
            <h1 className='xs:lg md:text-4xl font-bold '>520</h1>
          </div>
          <div className='uppercase text-center mt-2'>
            Эмэгтэй
          </div>
        </div>

      </div>
      </div>
  )
}

export default OverviewHeader