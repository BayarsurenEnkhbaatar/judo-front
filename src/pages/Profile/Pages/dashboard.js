import { Input, Textarea } from '@nextui-org/react'
import React from 'react'
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

            {
              new Date(user.expiry_date) < new Date() || user.expiry_date === null ?
              <div className='mt-4'>
                <h1 className='text-xl font-semibold'>Анхааруулга</h1>
                <div className='bg-yellow-600 w-full mt-2 rounded-md flex items-center p-6 gap-4'>
                  {/* <FiAlertCircle color='red' size={50}/> */}
                  <img className='h-16' src='../icons/alert.png'/>
                  <div>
                    <p className='text-sm text-gray-200'>
                      Та гишүүнчлэлээ баталгаажуулна уу
                    </p>
                    <p className='text-sm text-gray-200 mt-2'>
                      Жилийн хураамж <span className='font-bold text-gray-100'>200,000</span> төгрөгийг Монголын жүдо бөхийн холбооны <span className='font-bold text-gray-100 mr-1'>5664021746</span>
                       дансанд хийнэ үү гүйлгээний утга <span className='font-bold text-gray-100'>Байгууллагын нэр</span> байна.
                    </p>
                  </div>
                </div>
              </div>
              :
              <div className='mt-4'>
                <h1 className='text-xl font-semibold'>Анхааруулга</h1>
                <div className='bg-green-200 w-full mt-2 rounded-md flex items-center p-6 gap-4'>
                  {/* <FiAlertCircle color='red' size={50}/> */}
                  <img className='h-16' src='../icons/checkmark.png'/>
                  <div>
                    <p className='text-sm text-gray-700'>
                      Сайн байна уу Dojo.mn сайтад тавтай морилно уу.
                    </p>
                    <p className='text-sm text-gray-700'>
                      Таны гишүүнчлэлийн хугацаа <span className='font-bold'><DateFormat dateString={user.expiry_date}/></span> өдөр дуусна.
                    </p>
                  </div>
                </div>
              </div>
            }

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