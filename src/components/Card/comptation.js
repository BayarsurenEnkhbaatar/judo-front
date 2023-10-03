import React from 'react'
import {Button} from '@nextui-org/react'

const CompCard = () => {
  return (
    <div className='font-Roboto'>
        <div className='bg-white rounded-lg shadow-md cursor-pointer hover:shadow-xl group'>
            <img className='rounded-t-lg' src='https://res.cloudinary.com/duu3v9gfg/image/fetch/t_fit_1920/https://78884ca60822a34fb0e6-082b8fd5551e97bc65e327988b444396.ssl.cf3.rackcdn.com/up/2017/08/MGL_POD-1503614218-1503614219.jpg'/>
            <div className='p-4 '>
                <div className='flex items-center justify-between'>
                  <p className='text-xs'>2022-10-23 өдөр Эрдэнэт хот</p>
                  <div className='p-1 bg-green-600 rounded-md text-white text-xs'>Өсвөр үе</div>
                </div>
                <h1 className='text-xl font-semibold'>Боржин цом</h1>
                <Button size='sm' className='mt-8'>Тэмцээнд бүртгүүлэх</Button>
            </div>
        </div>
    </div>
  )
}

export default CompCard