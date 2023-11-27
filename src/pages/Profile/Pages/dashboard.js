import { Button, Input, Textarea } from '@nextui-org/react'
import React from 'react'
import { FiAlertCircle } from 'react-icons/fi'
import { useOutletContext } from 'react-router-dom';
import DateFormat from '../../../components/Date';

const DashboardProfile = () => {
  const user = useOutletContext();

  return (
    <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-2 xs:mt-2'>

      <div className='grid col-span-2'>
        <div className='bg-white rounded-2xl p-8 font-Roboto'>
          <div>
            <h1 className='text-xl font-semibold'>Дэвжээний мэдээлэл</h1>

            <div className='mt-4 flex gap-4'>
              <div className='mt-4 w-full'>
                <h1 className='text-sm font-semibold'>Аймаг/Хот</h1>
                <Input className='mt-1' value={user?.province} classNames="w-full"/>
              </div>
              <div className='mt-4 w-full'>
                <h1 className='text-sm font-semibold'>Сум/Дүүрэг</h1>
                <Input className='mt-1' value={user?.sum} classNames="w-full"/>
              </div>
            </div>
            <div className='mt-4'>
              <h1 className='text-sm font-semibold'>Дэлгэрэнгүй хаяг</h1>
              <Textarea value={user?.address} className='mt-1' classNames="w-full"/>
            </div>
            {/* <div className='mt-4'>
              <Button className='bg-blue-800 text-white font-semibold'>Хадгалах</Button>
            </div> */}
            <div className='mt-4'>
              <h1 className='text-xl font-semibold'>Анхааруулга</h1>
              <div className='bg-green-200 w-full mt-2 rounded-md flex items-center p-6 gap-4'>
                {/* <FiAlertCircle color='red' size={50}/> */}
                <img className='h-20' src='../icons/checkmark.png'/>
                <p className='text-sm text-green-700'>
                  Сайн байна уу Dojo.mn сайтад тавтай морилно уу
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
            <div className='mt-4'>
              <h1 className='text-sm'>Хүсэлт илгээсэн огноо</h1>
              <h1 className='text-lg'><DateFormat dateString={user?.created_at}/></h1>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default DashboardProfile