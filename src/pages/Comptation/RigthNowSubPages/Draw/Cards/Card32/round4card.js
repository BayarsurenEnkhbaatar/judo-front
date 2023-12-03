import React from 'react'

const Round4Card = ({data}) => {
  return (
    // <div className='border-t border-b border-r border-gray-300 p-1 h-full flex justify-between flex-col xs:w-24 md:w-48 mt-1 font-Roboto xs:text-xs md:text-sm'>
    <div className='border-t border-gray-300 border-b border-r p-1 justify-between flex-col xs:w-24 md:w-48 mt-1 font-Roboto xs:text-xs md:text-sm'>
        <div className='md:pb-[68px] xs:pb-[70px]'>
            {
              data?.athlete1.id === 111 ?
              <h1 className='text-white'>.</h1>
              :
              <div className='flex items-center gap-2'>
                <h1 className="xs:text-[10px] md:text-xs text-overflow-ellipsis overflow-hidden whitespace-nowrap max-w-[14ch]">{data?.athlete1.lastname.charAt(0)}.{data?.athlete1.username}</h1>
              </div>
            }
        </div>
        <div className='md:pt-[68px] xs:pt-[70px]'>
            {
              data?.athlete2.id === 111 ?
              <h1 className='text-white'>.</h1>
              :
              <div className='flex items-center gap-2'>
                <h1 className="xs:text-[10px] md:text-xs text-overflow-ellipsis overflow-hidden whitespace-nowrap max-w-[14ch]">{data?.athlete2.lastname.charAt(0)}.{data?.athlete2.username}</h1>
              </div>
            }
        </div>
    </div>
  )
}

export default Round4Card