import React, { useEffect, useState } from 'react'

const Repechage2 = ({data}) => {

  return (
    <div className='xs:pt-4 md:pt-7 flex flex-col '>
      <div className='border-b xs:w-20 md:w-40 border-amber-600'>
        {
          data?.athlete1_id === 111 ?
          <h1 className='text-white'>.</h1>
          :
          <div className='flex items-center gap-2'>
            {/* <img className='xs:h-3 md:h-5' src='../../icons/mongolia.png'/> */}
            <h1 className='xs:text-[10px] md:text-xs'>{data?.athlete1.lastname.charAt(0)}.{data?.athlete1.username}</h1>
          </div>
        }
      </div>
      <h1 className='font-Roboto text-[10px] font-bold'>Хүрэл медаль</h1>
    </div>
  )
}

export default Repechage2

