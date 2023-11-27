import React from 'react'
import Repechage1 from './Card/repechage1'
import Repechage2 from './Card/repechage2';

const Repechage = ({data}) => {
    const round1 = data.filter(item => item.round === 1).sort((a, b) => a.match_number - b.match_number);
    const round2 = data.filter(item => item.round === 2).sort((a, b) => a.match_number - b.match_number);
    const round3 = data.filter(item => item.round === 3).sort((a, b) => a.match_number - b.match_number);

  return (
    <div className='flex overflow-auto'>
    
        <div className={'flex justify-between flex-col my-8'}>
          {
              round1.map((it, index) => {
                  return(
                      <Repechage1 data={it} key={index}/>
                  )
              })
          }
        </div>

        <div className={'flex flex-col mt-14 ml-1'}>
          {
              round2.map((it, index) => {
                  return(
                      <Repechage1 data={it} key={index}/>
                  )
              })
          }
        </div>
        
        <div className="flex flex-col items-center font-Roboto text-sm ml-1 mt-9">
            {
              round3.map((it, index) => {
                  return(
                      <Repechage2 data={it} key={index}/>
                  )
              })
            }
        </div>

    </div>
  )
}

export default Repechage

// round3[0]?.athlete1?.id === 111 ?
//               <h1 className='border-b xs:w-20 md:w-40'></h1>
//               :
//               <div className='flex items-center gap-2'>
//                 <img className='xs:h-3 md:h-5' src='../../icons/mongolia.png'/>
//                 <h1>{round3[0]?.athlete1.lastname.charAt(0)}.{round3[0]?.athlete1?.username}</h1>
//               </div>