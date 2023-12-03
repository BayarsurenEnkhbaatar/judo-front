import React, {useState, useEffect} from 'react';
import {Link, Outlet, useLocation, useParams} from 'react-router-dom';
import { GET } from '../../utils/requests';
import { comp_uri } from '../../utils/url';

const RigthNowComp = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    Get();
  }, []);

  const Get = async () => {
    const res = await GET(comp_uri+`/findId?id=${params.slug}`);
    setData(res.data);
  }

  return (
    <div className='font-Roboto bg-gray-100'>
    
      <div className='bg-mongolia bg-cover bg-center  mt-1'>
        <div className='xs:mx-4 md:container xs:text-xs'>
          <div className='py-8'>
            <h1 className='text-3xl font-bold uppercase text-white'>{data.name}</h1>
            <p className='text-white text-xl font-light uppercase'>{data.province}, {data.sum}</p>
          </div>
          <div className='py-4 border-t'>
            <div className='text-white font-light flex items-center gap-4'>
              <Link to={`/comptation-right/${params.slug}`} className={pathname === `/comptation-right/${params.slug}` ? 'font-bold' : 'font-light text-gray-200'}>
                Ерөнхий мэдээлэл
              </Link>
              <Link to={`/comptation-right/${params.slug}/draw`} className={pathname === `/comptation-right/${params.slug}/draw` ? 'font-bold' : 'font-light text-gray-200'}>
                Оноолт
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='xs:mx-0 md:container rounded-lg'>
        <Outlet />
      </div>

    </div>
  );
};

export default RigthNowComp;
