import React, {useState} from 'react';
import {Link, Outlet, useLocation, useParams} from 'react-router-dom';

const RigthNowComp = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const params = useParams();

  return (
    <div className='font-Roboto bg-gray-100'>
      <div className=' bg-blue-900 mt-1'>
        <div className='container'>
          <div className='py-8'>
            <h1 className='text-3xl font-bold uppercase text-white'>Боржин цом 2024</h1>
            <p className='text-white text-xl font-light uppercase'>Улаанбаатар хот , Чингэлтэй</p>
          </div>
          <div className='py-4 border-t'>
            <div className='text-white font-light flex items-center gap-4'>
              <Link to={`/comptation-right/${params.slug}`} className={pathname === `/comptation-right/${params.slug}` ? 'font-bold' : 'font-light text-gray-200'}>
                Ерөнхий мэдээлэл
              </Link>
              <Link to={`/comptation-right/${params.slug}/draw`} className={pathname === `/comptation-right/${params.slug}/draw` ? 'font-bold' : 'font-light text-gray-200'}>
                Оноолт
              </Link>
              <Link to={`/comptation-right/${params.slug}/draw`} className={pathname === `/comptation-right/${params.slug}/plan` ? 'font-bold' : 'font-light text-gray-200'}>
                Хөтөлбөр
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='container rounded-lg'>
        <Outlet/>
      </div>
    </div>
  );
};

export default RigthNowComp;
