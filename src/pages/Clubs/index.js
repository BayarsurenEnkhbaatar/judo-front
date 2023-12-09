import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { org_uri } from '../../utils/url';
import ClubCard from './components/clubcard'

const Clubs = () => {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);

    const Get = async () => {
        setLoad(true);
        try{
            const res = await axios.get(org_uri);
            setData(res.data);
            setLoad(false);
        }catch(err){
            setLoad(false);
            console.log(err);
        }
    }

    useEffect(() => {
        Get();
    }, []);


  return (
    <div className='md:container xs:block xs:mx-4 py-14 font-Roboto' >
        <div className='flex justify-center'>
            <div className='flex justify-center flex-col'>
                <h1 className='text-md uppercase text-center '>монголын жүдо бөхийн холбоо</h1>
                <h1 className='text-3xl uppercase text-center text-yellow-500'>хамтын хүч амжилт</h1>
                <div className="flex justify-center">
                    <img className='h-36 w-36' src='../../images/judo.jpg'/>
                </div>
            </div>
        </div>
        {
            load?
            <h1 className='text-center py-10'>Уншиж байна...</h1>
            :
            <div className='grid xs:grid-cols-3 md:grid-cols-6 xs:gap-12 md:gap-20 my-20'>
                {
                    data.map((item, index) => {
                        return(
                            <ClubCard key={index} data={item}/>
                        )
                    })
                }
            </div>
        }
    </div>
  )
}

export default Clubs