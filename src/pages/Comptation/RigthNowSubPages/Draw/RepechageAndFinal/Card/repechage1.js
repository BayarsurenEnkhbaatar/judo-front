import React, { useEffect, useState } from 'react'

const Repechage1 = ({data}) => {

  return (
    <>
      <div className='border-t border-b border-r p-1 justify-between flex-col xs:w-28 md:w-52 mt-1 font-Roboto xs:text-xs md:text-sm border-amber-600'>
          <div>
            {
              data?.athlete1_id === 111 ?
              <h1 className='text-white'>.</h1>
              :
              <div className='flex items-center gap-2'>
                <img className='xs:h-3 md:h-5' src='../../icons/mongolia.png'/>
                <h1 className='xs:text-[10px] md:text-xs text-overflow-ellipsis overflow-hidden whitespace-nowrap max-w-[14ch]'>{data?.athlete1.lastname.charAt(0)}.{data?.athlete1.username}</h1>
              </div>
            }
          </div>
          <div>
            {
              data?.athlete2_id === 111 ?
              <h1 className='text-white'>.</h1>
              :
              <div className='flex items-center gap-2'>
                <img className='xs:h-3 md:h-5' src='../../icons/mongolia.png'/>
                <h1 className='xs:text-[10px] md:text-xs text-overflow-ellipsis overflow-hidden whitespace-nowrap max-w-[14ch]'>{data?.athlete2.lastname.charAt(0)}.{data?.athlete2.username}</h1>
              </div>
            }
          </div>
      </div>
    </>
  )
}

export default Repechage1

