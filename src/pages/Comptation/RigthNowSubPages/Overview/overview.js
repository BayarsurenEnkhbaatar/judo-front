import React,{useState} from 'react'
import OverviewHeader from './Components/header'

const SubOverview = () => {
  return (
    <div className='bg-white p-4 mt-4 rounded-md'>
      <OverviewHeader/>
      <div className='mt-4'>
        <div className='flex justify-between items-center'>
          <h1 className='text-lg uppercase'>Тэмцээний зорилго</h1>
          <div className='bg-green-600 text-white rounded-lg px-2'>
            2023.10.10 - 2023.10.12
          </div>
        </div>
        <p className='text-sm mt-2'>Монгол Улсын гавьяат багш Ц.Хандын нэрэмжит физикийн олимпиадын дүн гарч, медаль хүртсэн сурагчид шагналаа гардаж авлаа.</p>
      </div>
    </div>
  )
}

export default SubOverview