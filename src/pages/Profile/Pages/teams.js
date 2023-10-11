import React from 'react'
import {Button, Input, Select, SelectItem} from '@nextui-org/react'
import {AiOutlineArrowDown} from 'react-icons/ai'
import TeamCard from '../Components/teamCard'
import TeamAdd from '../Components/team-add'

const Teams = () => {
  return (
    <div className='bg-white p-8 rounded-xl'>
      <div className='flex items-center justify-between'>
        <h1 className='font-semibold text-2xl mt-4'>Тамирчдын мэдээлэл</h1>
        <TeamAdd/>
      </div>
      <h1 className='text-sm mt-2'>Тамирчны мэдээллийг үнэн зөв илгээх болон зөв бөглөх талаас нь анхаарах хэрэгтэй</h1>
      <h1 className='text-sm'>мөн тамирчдыг жагсаалтаас хасах болон хайх боломжтой.</h1>
      <div className=''>
      <div className='my-2'>
        <Input placeholder='Хайлт хийх'/>
      </div>
        <div className='mt-4 grid grid-cols-4 gap-2'>
          <TeamCard/>
          <TeamCard/>
          <TeamCard/>
        </div>
      </div>
    </div>
  )
}

export default Teams
