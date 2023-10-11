import React, { useEffect, useState } from "react";

const SubDraw = ({ type }) => {
 

  // const [data, setData] = useState();

  // const participants = [
  //   {
  //     id: 1,
  //     name: "Ganbat",
  //     flag: "🇲🇳",
  //   },
  //   {
  //     id: 2,
  //     name: "Sukhbat",
  //     flag: "🇲🇳",
  //   },
  //   {
  //     id: 3,
  //     name: "sss",
  //     flag: "🇲🇳",
  //   },
  //   {
  //     id: 4,
  //     name: "xxx",
  //     flag: "🇲🇳",
  //   },
  // ];

  // const stages = [
  //   {
  //     id: 1,
  //     name: "Quarter Finals",
  //     type: "single_elimination",
  //   },
  //   {
  //     id: 2,
  //     name: "Semi Finals",
  //     type: "single_elimination",
  //   },
  //   {
  //     id: 3,
  //     name: "Finals",
  //     type: "single_elimination",
  //   },
  // ];

  // const tournament = [
  //   {
  //     id: 1,
  //     name: "World championship",
  //   },
  // ];
  
  // const matches = [
  //   {
  //     id: 1,
  //     stageId: 1,
  //     round: 1,
  //     opponent1: participants[0],
  //     opponent2: participants[1],
  //   },
  //   {
  //     id: 2,
  //     stageId: 1,
  //     round: 1,
  //     opponent1: participants[2],
  //     opponent2: participants[3],
  //   },
  //   {
  //     id: 3,
  //     stageId: 1,
  //     round: 2,
  //     opponent1: participants[0], // Winner of Match 1
  //     opponent2: participants[2], // Winner of Match 2
  //   },
  //   {
  //     id: 4,
  //     stageId: 1,
  //     round: 3,
  //     opponent1: participants[0], // Winner of Match 3
  //     opponent2: participants[1], // Winner of Match 4
  //   },
  // ];

  // Group matches by round

  return (
    <div className="bg-white rounded-md p-4 mt-4">
    <h1>Judo Tournament Bracket</h1>

      <div className="flex items-center">

        <div>
        
          <div className="flex items-center">
            <div className="">
              <div className="border h-14 w-80 mt-2">
                <div>Test 1</div>
                <div>Test 1</div>
              </div>
              <div className="border h-14 w-80 mt-2">
                <div>Test 1</div>
                <div>Test 1</div>
              </div>
            </div>
            <div className="border h-14 w-80 mt-2">
              <div>Test 3</div>
              <div>Test 3</div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="">
              <div className="border h-14 w-80 mt-2">
                <div>Test 1</div>
                <div>Test 1</div>
              </div>
              <div className="border h-14 w-80 mt-2">
                <div>Test 1</div>
                <div>Test 1</div>
              </div>
            </div>
            <div className="border h-14 w-80 mt-2">
              <div>Test 4</div>
              <div>Test 4</div>
            </div>
          </div>

        </div>

        <div className="border h-14 w-80 mt-2">
          <div>Test 1</div>
          <div>Test 1</div>
        </div>

      </div>

  </div>
  );
};

export default SubDraw;