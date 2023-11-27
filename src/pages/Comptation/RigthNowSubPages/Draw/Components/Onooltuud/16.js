import React, { useState } from 'react'
import Round1Card from '../../Cards/round1card'
import Round2Card from '../../Cards/round2card'
import Round3Card from '../../Cards/round3card'

const Onoolt16 = ({data, group}) => {
    const round1 = data.filter(item => item.group === group).filter(item => item.round === 1).sort((a, b) => a.match_number - b.match_number);
    const round2 = data.filter(item => item.group === group).filter(item => item.round === 2).sort((a, b) => a.match_number - b.match_number);
    const round3 = data.filter(item => item.group === group).filter(item => item.round === 3).sort((a, b) => a.match_number - b.match_number);
    const round4 = data.filter(item => item.group === group).filter(item => item.round === 4).sort((a, b) => a.match_number - b.match_number);
    const round5 = data.filter(item => item.group === group).filter(item => item.round === 5).sort((a, b) => a.match_number - b.match_number);

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

        <div className={'flex justify-between flex-col my-6'}>
            {
                round2.map((data, index) => {
                    return(
                        <Round2Card data={data} key={index}/>
                    )
                })
            }
        </div>

        <div className={'flex justify-between flex-col my-[70px]'}>
            {
                round3.map((data, index) => {
                    return(
                        <Round2Card data={data} key={index}/>
                    )
                })
            }
        </div>

        <div className={'flex justify-between flex-col my-[98px]'}>
            {
                round4.map((data, index) => {
                    return(
                        <Round3Card data={data} key={index}/>
                    )
                })
            }
        </div>

        <div className="flex items-center font-Roboto text-sm ml-1">
            {
              round5[0]?.athlete1?.id === 111 ?
              <h1 className='border-b xs:w-20 md:w-40'></h1>
              :
              <div className='flex items-center gap-2'>
                <img className='xs:h-3 md:h-5' src='../../icons/mongolia.png'/>
                <h1>{round4[0]?.athlete1.lastname.charAt(0)}.{round4[0]?.athlete1?.username}</h1>
              </div>
            }
        </div>

    </div>
  )
}

export default Onoolt16