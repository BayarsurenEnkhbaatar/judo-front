import React, { useState } from 'react'
import Round1Card from '../Cards/Card8/round1card';
import Round2Card from '../Cards/Card8/round2card';
import Round3Card from '../Cards/Card8/round3card';

const Onoolt8 = ({data, group, onoolt_type}) => {
    const round1 = data.filter(item => item.group === group).filter(item => item.round === 1).sort((a, b) => a.match_number - b.match_number);
    const round2 = data.filter(item => item.group === group).filter(item => item.round === 2).sort((a, b) => a.match_number - b.match_number);
    const round3 = data.filter(item => item.group === group).filter(item => item.round === 3).sort((a, b) => a.match_number - b.match_number);
    const round4 = data.filter(item => item.group === group).filter(item => item.round === 4).sort((a, b) => a.match_number - b.match_number);
    // const round4 = data.filter(item => item.round === 4).sort((a, b) => a.match_number - b.match_number);

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

        <div className={"flex justify-between flex-col my-11"}>
            {
                round3.map((data, index) => {
                    return(
                        <Round3Card data={data} key={index}/>
                    )
                })
            }
        </div>

        <div className="flex items-center font-Roboto text-sm ml-1">
            {
              round4[0]?.athlete1?.id === 111 ?
              <h1 className='border-b xs:w-20 md:w-40'></h1>
              :
              <div className='flex items-center gap-2 xs:w-20 md:w-40'>
                <h1 className="xs:text-[10px] md:text-xs text-overflow-ellipsis overflow-hidden whitespace-nowrap">{round4[0]?.athlete1.lastname.charAt(0)}.{round4[0]?.athlete1?.username}</h1>
              </div>
            }
        </div>

    </div>
  )
}

export default Onoolt8