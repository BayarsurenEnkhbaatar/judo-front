import React from 'react';
import { Link } from 'react-router-dom';

const NowCompCard = ({data}) => {
  return (
    <Link to={`/comptation-right/${data.id}`}>
       <div className='shadow-lg font-Roboto rounded-md hover:shadow-xl hover:bg-gray-100'>
            <div className='rounded-t-md py-2 bg-blue-600'>
                <h1 className='text-center text-white uppercase text-2xl '>{data.name}</h1>
            </div>
            <div className='p-4'>
                <div className='flex items-center justify-center gap-4'>
                    <img className='rounded-full h-12' src='https://koo-bucket-2022.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/10/25110837/judo_logo.jpg'/>
                </div>
                
                <p className='text-xs mt-4 text-center md:text-xs font-bold'>{new Date(data.start_date).getFullYear() + 1} оны {new Date(data.start_date).getMonth()} сарын {new Date(data.start_date).getDate()}-{new Date(data.end_date).getDate()} ны хооронд</p>
                <p className='text-xs text-center md:text-xs font-bold'>{data.province} {data.sum}</p>
            </div>
       </div>
    </Link>
  )
}

export default NowCompCard