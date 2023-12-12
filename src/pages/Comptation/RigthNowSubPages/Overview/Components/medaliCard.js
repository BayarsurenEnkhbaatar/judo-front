import React from 'react'

const MedaliCard = ({data, index}) => {
    console.log(data);
  return (
    <div className='flex pt-2 py-3 border-b items-center font-Roboto'>
        <div className='w-1/4'>
            <div className='mt-2 flex gap-4 items-center'>
                <h1 className='text-sm'>{index}.</h1>
                {/* <img className='w-8 rounded-md' src='../../images/dojo.jpg'/> */}
                <h1 className='font-bold uppercase text-xs'>{data.name}</h1>
            </div>
        </div>
        <div className='w-1/4'>
            <h1 className='text-center text-sm'>{data.gold}</h1>
        </div>
        <div className='w-1/4'>
            <h1 className='text-center text-sm'>{data.silver}</h1>
        </div>
        <div className='w-1/4'>
            <h1 className='text-center text-sm'>{data.bronze}</h1>
        </div>
    </div>
  )
}

export default MedaliCard