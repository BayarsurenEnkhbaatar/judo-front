import React from 'react'
import Final1 from './Card/final1';
import Repechage1 from './Card/repechage1'
import Repechage2 from './Card/repechage2';

const Final = ({data}) => {
    const round1 = data.filter(item => item.round === 1).sort((a, b) => a.match_number - b.match_number);
    const round2 = data.filter(item => item.round === 2).sort((a, b) => a.match_number - b.match_number);
    const round3 = data.filter(item => item.round === 3).sort((a, b) => a.match_number - b.match_number);
    
  return (
    <div className='flex overflow-auto'>
    
        <div className={'flex justify-between flex-col my-8'}>
          {
              round1.map((it, index) => {
                  return(
                      <Final1 data={it} key={index}/>
                  )
              })
          }
        </div>
        <div className={'flex justify-between flex-col mt-14'}>
          {
              round2.map((it, index) => {
                  return(
                      <Final1 data={it} key={index}/>
                  )
              })
          }
        </div>

        <div className={'flex flex-col mt-[60px] ml-1'}>
            <div className='border-b xs:w-20 md:w-40 border-yellow-300'>
                {
                    round3[0]?.athlete1_id === 111 ?
                    <h1 className='text-white'>.</h1>
                    :
                    <div className='flex items-center gap-2 font-Roboto xs:text-xs md:text-sm xs:w-28 md:32'>
                        <img className='xs:h-3 md:h-5' src='../../icons/mongolia.png'/>
                        <h1 className='xs:text-[10px] md:text-xs'>{round3[0]?.athlete1?.lastname.charAt(0)}.{round3[0]?.athlete1?.username}</h1>
                    </div>
                }
            </div>
            <h1 className='font-Roboto text-[10px] font-bold'>Алтан медаль</h1>
        </div>

    </div>
  )
}

export default Final
