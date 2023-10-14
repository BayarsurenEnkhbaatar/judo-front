import React from 'react'
import Round1Card from '../../Cards/round1card'
import Round2Card from '../../Cards/round2card'
import Round3Card from '../../Cards/round3card'

const Onoolt4 = () => {
  return (
    <div className='flex overflow-auto'>
    
        <div className={'flex justify-between flex-col my-8'}>
            <Round2Card/>
            <Round2Card/>
        </div>
        
        <div class={"flex justify-between flex-col my-14"}>
            <Round3Card/>
        </div>
        <div class="flex items-center">
            <h1>Tsogtbaatar .Ts</h1>
        </div>

    </div>
  )
}

export default Onoolt4