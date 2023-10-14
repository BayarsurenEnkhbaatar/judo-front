import React from 'react'
import {Switch} from "@nextui-org/react";

const Rank = () => {
  return (
    <div className='bg-gray-200'>
        <div className='bg-blue-900 py-8'>
            <div className='container text-white'>
              <h1 className='text-3xl font-Roboto'>Тамирчдын эрэмбийн мэдээлэл</h1>
            </div>
        </div>
        <div className='container mt-8'>
          <div className='flex gap-4'>
            <div>
              <div className='bg-white rounded-md w-28'>
                <div className='bg-blue-900 rounded-t-md py-4'>
                  <h1 className='text-white text-center'>Seniors</h1>
                </div>
                <div className='py-2'>
                  <div>
                    <h1 className='text-center'>All</h1>
                  </div>
                  <div className='flex items-center w-full border-t'>
                    <h1>M</h1>
                    <h1>F</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white w-full p-4'>
              <div>
              <Switch
      defaultSelected
      size="lg"
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <h1>qqqq</h1>
        ) : (
          <h1>sasa</h1>
        )
      }
    >
      Dark mode
    </Switch>
                jj
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Rank