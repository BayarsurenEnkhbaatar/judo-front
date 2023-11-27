import React from 'react'

const Round1Card = ({data}) => {
  return (
    <div className='border-1 p-1 justify-between flex-col xs:w-28 md:w-60 mt-1 font-Roboto text-sm xs:text-xs border-gray-300'>
        <div>
            {
              data?.athlete1.id === 111 ?
              <h1 className='text-white'>.</h1>
              :
              <div className='flex items-center justify-between'>
                <div className="flex items-center gap-2">
                  <img className='xs:h-3 md:h-5' src='../../icons/mongolia.png'/>
                  <h1>{data?.athlete1.lastname.charAt(0)}.{data?.athlete1.username}</h1>
                </div>
                <h1 className="uppercase font-bold text-xs mr-1">{data?.athlete1.organization.name.substring(0, 3)}</h1>
              </div>
            }
        </div>
        <div>
            {
              data?.athlete2.id === 111 ?
              <h1 className='text-white'>.</h1>
              :
              <div className='flex items-center justify-between'>
                <div className="flex items-center gap-2">
                  <img className='xs:h-3 md:h-5' src='../../icons/mongolia.png'/>
                  <h1>{data?.athlete2.lastname.charAt(0)}.{data?.athlete2.username}</h1>
                </div>
                <h1 className="uppercase font-bold text-xs mr-1">{data?.athlete2.organization.name.substring(0, 3)}</h1>
              </div>
            }
        </div>
    </div>
  )
}

export default Round1Card
