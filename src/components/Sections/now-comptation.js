import React from 'react'
import NowCompCard from '../Card/now-comp-card'

const NowComptation = () => {
  return (
    <div className='container font-Roboto'>
        <div className='mt-10'>
            <h1 className='text-center uppercase text-xl font-light'>Яг одоо болж байгаа тэмцээнүүд</h1>
            <div className='flex justify-center animate-bounce'>
              <img src='../icons/down-arrow.png' className='h-8'/>
            </div>
            <div className='mt-16 mb-4'>
                <NowCompCard/>
                <NowCompCard/>
                <NowCompCard/>
                <NowCompCard/>  
            </div>
        </div>
    </div>
  )
}

export default NowComptation