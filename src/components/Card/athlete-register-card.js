import { Checkbox } from '@nextui-org/react'
import React from 'react'

const AthleteregisterCard = () => {
  return (
    <div className="mt-2">
        <div className="bg-gray-200 p-2 rounded-md flex justify-between ">
            <div className="flex">
                <Checkbox/>
                <h1>Батболд</h1>
            </div>
            <h1 className="text-sm">16 нас</h1>
        </div>
    </div>
  )
}

export default AthleteregisterCard