import React from 'react'

const Round3Card = ({data}) => {
  return (
    <div className='border-t border-b border-r p-1 h-full flex justify-between flex-col w-48 mt-1'>
        <div>
            {
              data.athlete1.athlete.id === 111 ?
              <h1 className='text-white'>.</h1>
              :
              data.athlete1.athlete.username
            }
        </div>
        <div>
            {
              data.athlete2.athlete.id === 111 ?
              <h1 className='text-white'>.</h1>
              :
              data.athlete2.athlete.username
            }
        </div>
    </div>
  )
}

export default Round3Card