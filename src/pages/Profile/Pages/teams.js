import React from 'react'
import {Button, Select, SelectItem} from '@nextui-org/react'
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
        <div className='flex justify-between gap-2 mt-4'>
          <Select
            placeholder="Хүйс сонгох"
            labelPlacement="outside"
            className="max-w-xs"
            disableSelectorIconRotation
            selectorIcon={<AiOutlineArrowDown/>}
          >
              <SelectItem>
                Эр
              </SelectItem>
              <SelectItem>
                Эм
              </SelectItem>
          </Select>
          <Select
            placeholder="Нас"
            labelPlacement="outside"
            className="max-w-xs"
            disableSelectorIconRotation
            selectorIcon={<AiOutlineArrowDown/>}
          >
              <SelectItem>
                4-6
              </SelectItem>
              <SelectItem>
                10-12
              </SelectItem>
          </Select>
          <Select
            placeholder="Статус"
            labelPlacement="outside"
            className="max-w-xs"
            disableSelectorIconRotation
            selectorIcon={<AiOutlineArrowDown/>}
          >
              <SelectItem className='flex items-center gap-2'>
                {/* <div className='p-2 bg-gray-300 rounded-full w-4 h-4'></div> */}
                <h1>Хүлээгдэж байгаа</h1>
              </SelectItem>
              <SelectItem>
                Баталгаажсан
              </SelectItem>
          </Select>
        </div>
        <div className='mt-4 grid grid-cols-4 gap-2'>
          <TeamCard/>
        </div>
      </div>
    </div>
  )
}

export default Teams