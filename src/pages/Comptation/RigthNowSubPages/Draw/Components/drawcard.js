import React from 'react'

const DrawCard = () => {
  return (
    <div>
      <div className='border-t-2 border-b-2 border-r-2 w-60 mt-2'>
        <div className='flex items-center mb-1 gap-2'>
          <h1 className='text-[6px] font-bold rotate-90'>MNG</h1>
          <img className='h-3' src='https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_the_Mongolian_People%27s_Republic_%281945%E2%80%931992%29.svg'/>
          <h1 className='text-xs '>Батдорж <span className='font-bold'>Бадамсайхан</span></h1>
        </div>
        <div className='mt-1 flex items-center gap-2'>
          <h1 className='text-[6px] font-bold rotate-90'>CAN</h1>
          <img className='h-3' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/255px-Flag_of_Canada_%28Pantone%29.svg.png'/>
          <h1 className='text-xs '>Ono <span className='font-bold'>Shohei</span></h1>
        </div>
      </div>
    </div>
  )
}

export default DrawCard