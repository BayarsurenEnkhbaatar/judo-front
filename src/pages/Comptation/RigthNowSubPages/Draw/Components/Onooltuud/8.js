import React, { useState } from 'react'
import Round1Card from '../../Cards/round1card'
import Round2Card from '../../Cards/round2card'
import Round3Card from '../../Cards/round3card'

const Onoolt8 = ({data, group}) => {
    const round1 = data.filter(item => item.group === group).filter(item => item.round === 1).sort((a, b) => a.match_number - b.match_number);
    const round2 = data.filter(item => item.group === group).filter(item => item.round === 2).sort((a, b) => a.match_number - b.match_number);
    const round3 = data.filter(item => item.group === group).filter(item => item.round === 3).sort((a, b) => a.match_number - b.match_number);
    const round4 = data.filter(item => item.round === 4).sort((a, b) => a.match_number - b.match_number);
    
  return (
    <div className='flex overflow-auto'>

        <div>
            {
                round1.map((data, index) => {
                    return(
                        <Round1Card data={data} key={index}/>
                    )
                })
            }
        </div>

        <div className={'flex justify-between flex-col my-8'}>
            {
                round2.map((data, index) => {
                    return(
                        <Round2Card data={data} key={index}/>
                    )
                })
            }
        </div>
        
        <div class={"flex justify-between flex-col my-14"}>
            {
                round3.map((data, index) => {
                    return(
                        <Round3Card data={data} key={index}/>
                    )
                })
            }
        </div>
        <div class="flex items-center">
            {
              round4[0].athlete1.athlete.id === 111 ?
              <h1 className='border-b w-40'></h1>
              :
              data.athlete1.athlete.username
            }
        </div>

    </div>
  )
}

export default Onoolt8