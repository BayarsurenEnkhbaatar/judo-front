import React from 'react'

const Round1Card = ({data}) => {
  return (
    <div className='border-2 p-1 justify-between flex-col w-60 mt-1'>
        <div>
            {
              data.athlete1.athlete.username
            }
        </div>
        <div>
          {
            data.athlete2.athlete.username
          }
        </div>
    </div>
  )
}

export default Round1Card