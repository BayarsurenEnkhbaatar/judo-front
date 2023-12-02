import { Button, DatePicker, Input, message, Select, Spin } from 'antd';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/auth';
import axios from 'axios';
import { athlete_uri } from '../../../utils/url';
import { toast } from 'react-toastify';
import { IMAGE_UPLOAD } from '../../../utils/requests';
import { Link } from 'react-router-dom';
import { STATUS } from '../../../utils/types';

const TeamsAdd = () => {
    const {currentUser} = useContext(AuthContext);
    const [data, setData] = useState({username:"",lastname:"",gender:"",birth_date:"",phone_no:"", status:STATUS.REQUESTED ,register_no:"",profile_img:"",document_img:"",token:currentUser})
    const [load, setLoad] = useState({load:false,loadimg1:false,loadimg2:false, end:false});

      const Submit = async() => {
        setLoad({...load, load:true});
        if(data.username === "" || data.lastname === "" || data.gender === "" || data.birth_date === "" || data.phone_no === "" || data.register_no === "" || data.profile_img === "" || data.document_img === "" ){
            setLoad(false);
            return toast.warning("Таны мэдээлэл дутуу байна бүрэн бөглөнө үү !");
        }
          try{
              const res = await axios.post(athlete_uri, data)
              console.log(res);
              if(res.status === 201){
                  setLoad({...data, end:true});
                  setData({...data, username:"", lastname:"", gender:"", birth_date:"", phone_no:"", register_no:"", profile_img:"", document_img:""});
                  return toast.success("Тамирчны мэдээллийг илгээлээ");
              }
              setLoad({...load, load:false});
          }catch(err){
              console.log(err);
              toast.warning("Алдаа гарлаа !");
              setLoad({...load, load:false});
          }
      }

    const handleUpload1 = async (e) => {
        setLoad({...load, loadimg1:true});
        const file = e;
        try {
            const res = await IMAGE_UPLOAD({file:file});
            setData({...data, profile_img:res});
            setLoad({...load, loadimg1:false});
        } catch (error) {
            setLoad({...load, loadimg1:false});
            toast.error("Зураг оруулхад алдаа гарлаа !");
            console.error('Error uploading file', error);
        }
    };

    const handleUpload2 = async (e) => {
        setLoad({...load, loadimg2:true});
        const file = e;
        try {
            const res = await IMAGE_UPLOAD({file:file});
            setData({...data, document_img:res});
            setLoad({...load, loadimg2:false});
        } catch (error) {
            setLoad({...load, loadimg2:false});
            toast.error("Зураг оруулхад алдаа гарлаа !");
            console.error('Error uploading file', error);
        }
    };

    function clear(){
        setData({...data, username:"", lastname:"", gender:"", birth_date:"", phone_no:"", register_no:"", profile_img:"", document_img:""});
        toast.success("Больлоо");
    }

  return (
    <div className='bg-white p-8 rounded-xl xs:mt-2 font-Roboto'>
        <div className=''>
            <h1 className='uppercase'>Тамирчны бүртгэл</h1>
           {
            load.end ?
            <div className='mt-2 flex flex-col'>
                <div className='flex justify-center my-4'>
                    <img className='h-36' src='../../icons/gifs/check.gif'/>
                </div>
                <h1 className='text-green-900 text-sm text-center'> Тамирчин бүртгүүлэх хүсэлт амжилттай явууллаа.</h1>
                <div className='flex xs:flex-wrap gap-2 justify-center mt-2'>
                    <Button className='rounded-full bg-green-600 text-white hover:text-black' onClick={()=> setLoad({...load, end:false })}>Өөр тамирчин бүртгүүлэх</Button>
                    <Link to='/profile/teams'>
                        <Button className='rounded-full bg-blue-600 text-white'>Тамирчдын мэдээлэл харах</Button>
                    </Link>
                </div>
            </div>
            :
            <div className='mt-4 text-sm'>

                <div className='grid grid-cols-1 gap-2'>
                    <div>
                        <h1>Овог</h1>
                        <Input onChange={(e)=> setData({...data, lastname:e.target.value})} value={data.lastname} placeholder='Тамирчны овог'/>
                    </div>
                    <div>
                        <h1>Нэр</h1>
                        <Input onChange={(e)=> setData({...data, username:e.target.value})} value={data.username} placeholder='Тамирчны нэр'/>
                    </div>
                </div>
                <div className='mt-2'>
                    <h1>Төрсөн он сар</h1>
                    <DatePicker  value={data.birth_date} onChange={(e) =>  setData({...data, birth_date:e})} className="w-full"/>
                </div>
                <div className='mt-2'>
                    <h1>Хүйс</h1>
                    <Select
                        className="w-full"
                        defaultValue="Сонгох"
                        value={data.gender}
                        onChange={(e) => setData({...data, gender:e})}
                        options={[
                            {
                                value: 'MALE',
                                label: 'Эрэгтэй',
                            },
                            {
                                value: 'FEMALE',
                                label: 'Эмэгтэй',
                            },
                        ]}
                    />
                </div>
                <div className='grid xs:grid-cols-1 md:grid-cols-2 gap-2 mt-2'>
                    <div>
                        <h1>Утасны дугаар</h1>
                        <Input type='number' onChange={(e)=> setData({...data, phone_no:e.target.value})} value={data.phone_no} placeholder='00000000'/>
                    </div>
                    <div>
                        <h1>Регистерийн дугаар</h1>
                        <Input onChange={(e)=> setData({...data, register_no:e.target.value})} value={data.register_no} placeholder='АА00000000'/>
                    </div>
                </div>
                <div className='grid grid-cols-2 mt-2 gap-2 pb-8'>

                    <div className="relative w-full">
                        <h1 className='mb-2'>Цээж зураг</h1>
                        <input
                            onChange={(e) => handleUpload1(e.target.files[0])}
                            placeholder="Image"
                            className="absolute bottom-0 w-full h-full z-10 opacity-0"
                            type="file"
                            size="xs"
                        />
                        <div className='border border-dashed rounded-md p-4 bg-gray-50' onClick={handleUpload1}>
                            <div className=''>
                                <div className='flex justify-center'>
                                    <img className='w-12' src='../../icons/nice/upload.png'/>
                                </div>
                                <h1 className='text-center text-sm mt-2'>Цээж зураг оруулах</h1>
                                <h1 className='text-center xs:text-xs md:text-lg opacity-40 font-light mt-1'>Зөв зурагаа сонгож оруулна уу</h1>
                            </div>
                        </div>
                        {
                            data.profile_img?
                            <h1 className='bg-green-600 text-white xs:text-[8px] md:text-xs md:w-24 xs:w-16 text-center rounded mt-2'>Зураг орсон</h1>
                            :
                            <h1 className='bg-yellow-600 text-white xs:text-[8px] md:text-xs md:w-40 xs:w-24 text-center rounded mt-2'>Зураг оруулаагүй байна</h1>
                        }
                        {
                            load.loadimg1&&
                            <div className='flex items-center justify-center mt-2 animate-pulse gap-2'>
                                <h1>Зургийг хадгалж байна ...</h1>
                                <Spin/>
                            </div>
                        }
                    </div>

                    <div className="relative w-full">
                        <h1 className='mb-2'>Бичиг баримт зураг</h1>
                        <input
                            onChange={(e) => handleUpload2(e.target.files[0])}
                            placeholder="Image"
                            className="absolute bottom-0 w-full h-full z-10 opacity-0"
                            type="file"
                            size="xs"
                        />
                        <div className='border border-dashed rounded-md p-4 bg-gray-50' onClick={handleUpload2}>
                            <div className=''>
                                <div className='flex justify-center'>
                                    <img className='w-12' src='../../icons/nice/submit.png'/>
                                </div>
                                <h1 className='text-center text-sm mt-2'>Бичиг баримт зураг оруулах</h1>
                                <h1 className='text-center xs:text-xs md:text-lg opacity-40 font-light mt-1'>Зөв зурагаа сонгож оруулна уу</h1>
                            </div>
                        </div>
                        {
                            data.document_img?
                            <h1 className='bg-green-600 text-white xs:text-[8px] md:text-xs md:w-24 xs:w-16 text-center rounded mt-2'>Зураг орсон</h1>
                            :
                            <h1 className='bg-yellow-600 text-white xs:text-[8px] md:text-xs md:w-40 xs:w-24 text-center rounded mt-2'>Зураг оруулаагүй байна</h1>
                        }
                        {
                            load.loadimg2&&
                            <div className='flex items-center justify-center mt-2 animate-pulse gap-2'>
                                <h1>Зургийг хадгалж байна ...</h1>
                                <Spin/>
                            </div>
                        }
                    </div>

                </div>
               
                <div className='mt-4 flex justify-end gap-2'>
                    <Button className='rounded-full' onClick={clear}>Болих</Button>
                    {
                        load.load ?
                        <Button className='bg-gray-100 text-black'>Хүсэлт илгээж байна ... <Spin className='ml-2'/></Button>
                        :
                        <Button className='bg-green-600 text-white hover:text-black rounded-full' onClick={Submit}>Хүсэлт илгээх</Button>
                    }
                </div>

            </div>
           }
        </div>
    </div>
  )
}

export default TeamsAdd