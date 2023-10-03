import { Button, Input } from '@nextui-org/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='font-Roboto'>
      <div className='grid xs:grid-cols-1 md:grid-cols-2 gap-4 items-center'>
        <div className='grid col-span-1 container mt-16'>
          <h1 className='text-xl font-bold flex gap-4 items-center justify-center'>DOJO.MN -д тавтай морилно уу ! <span><img src='../icons/star.png' className='h-10'/></span></h1>
          <p className='text-sm mt-4 text-center'>Монгол улсад зохион байгуулагдаж байгаа жүдо бөхийн тэмцээнүүдэд өөрийн клубын мэдээллээ үнэн зөв бөглөснөөр оролцох боломжтой болно.</p>
          <div className='mt-10'>
            <div>
              <h1 className='font-bold text-sm'>Байгууллагын нэр</h1>
              <Input type="text" label="Байгууллагын нэр оруулах" size="sm" className="mt-2"/>
            </div>
            <div className='mt-6'>
              <h1 className='font-bold text-sm'>И-мейл хаяг</h1>
              <Input type="email" label="И-мейл хаяг оруулах" size="sm" className="mt-2"/>
            </div>
            <div className='mt-6'>
              <h1 className='font-bold text-sm'>Утасны дугаар</h1>
              <Input type="number" label="Утасны дугаар оруулах" size="sm" className="mt-2"/>
            </div>
            <div className='mt-6'>
              <h1 className='font-bold text-sm'>Лого</h1>
              <input type="file" size="sm" className="mt-2 bg-gray-100 w-full rounded-md p-2"/>
            </div>
            <Button className='text-white bg-blue-800 w-full mt-16'>Бүртгүүлэх</Button>
           <div className='text-center mt-6'>
           <Link to="/">Хэрэв бүртгэлтэй бол ?<span className='text-blue-700 font-semibold ml-2'>Нүүр хуудасруу шилжих</span></Link>
           </div>
          </div>
        </div>
        <div className='grid col-span-1 p-4'>
          <img src='../images/erkhmee.png' className='h-full w-full rounded-xl'/>
        </div>
      </div>
    </div>
  )
}

export default Register