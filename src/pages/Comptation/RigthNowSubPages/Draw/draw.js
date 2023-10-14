import React, { useState } from 'react'
import Onoolt16 from './Components/Onooltuud/16';
import Onoolt4 from './Components/Onooltuud/4';
import Onoolt8 from './Components/Onooltuud/8';
import { groups, matches } from './data';

const SubDraw = () => {
  const round = 3;
  const around = 8
  const [athletes, setAthletes] = useState(matches);

  return (
    <div className='p-4 bg-white'>
      {
        groups.map((group, index) => {
          return(
            <div className='mt-8'>
              <h1>{group.groupname} group</h1>
              {/* {
                around === 16 &&
                <Onoolt16 data={athletes} group={group.groupname}/>
              } */}
              {
                around === 8 &&
                <Onoolt8 data={athletes} group={group.groupname}/>
              }
              {/* {
                around === 4 &&
                <Onoolt4 data={athletes} group={group.groupname}/>
              } */}
            </div>
          )
        })
      }
    </div>
  )
}

export default SubDraw
