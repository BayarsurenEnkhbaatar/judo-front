import { Button, Input, Textarea } from '@nextui-org/react'
import React from 'react'
import { FiAlertCircle } from 'react-icons/fi'

const DashboardProfile = () => {
  return (
    <div className='grid grid-cols-3 gap-2'>

      <div className='grid col-span-2'>
        <div className='bg-white rounded-2xl p-8 font-Roboto'>
          <div>
            <h1 className='text-xl font-semibold'>Дэвжээний мэдээлэл</h1>

            <div className='mt-4 flex gap-4'>
              <div className='mt-4 w-full'>
                <h1 className='text-sm font-semibold'>Аймаг/Хот</h1>
                <Input className='mt-1' value="Улаанбаатар хот" classNames="w-full"/>
              </div>
              <div className='mt-4 w-full'>
                <h1 className='text-sm font-semibold'>Сум/Дүүрэг</h1>
                <Input className='mt-1' value="Баянзүрх дүүрэг" classNames="w-full"/>
              </div>
            </div>
            <div className='mt-4'>
              <h1 className='text-sm font-semibold'>Дэлгэрэнгүй хаяг</h1>
              <Textarea className='mt-1' value="Баянзүрх 102 р сургуулийн төв байр" classNames="w-full"/>
            </div>
            <div className='mt-4'>
              <Button className='bg-blue-800 text-white font-semibold'>Хадгалах</Button>
            </div>
            <div className='mt-4'>
              <h1 className='text-xl font-semibold'>Анхааруулга</h1>
              <div className='bg-red-200 w-full mt-2 rounded-md flex p-6 gap-4'>
                <FiAlertCircle color='red' size={50}/>
                <p className='text-sm text-red-600'>
                Таны мэдээлэл бичиг баримтаар баталгаажаагүй байна. Баталгаажуулах товч дээр дарж өөрийн бичиг баримтын зургийг илгээнэ үү
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='grid col-span-1'>
        <div className='bg-white rounded-2xl p-8 font-Roboto'>
          <div>
            <h1 className='text-lg font-semibold'>Дэвжээ</h1>
          </div>
        </div>
      </div>

    </div>
  )
}

export default DashboardProfile