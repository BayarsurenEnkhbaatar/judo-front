import React, { useContext, useState } from "react";
import {Modal, ModalContent, ModalFooter, Button, useDisclosure, Spinner, Input} from "@nextui-org/react";
import {AuthContext} from '../../../context/auth'
import { IMAGE_UPLOAD, POST } from "../../../utils/requests";
import { athlete_uri } from "../../../utils/url";
import { toast } from "react-toastify";
import { DatePicker } from 'antd';

export default function TeamAdd({callback}) {
  const {currentUser} = useContext(AuthContext);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [step, setStep] = useState(1)
  const [data, setData] = useState({username:"",lastname:"",gender:"",birth_date:"",phone_no:"",register_no:"",profile_img:"",document_img:"",token:currentUser})
  const [load, setLoad] = useState(false);
  const [imgload, setImgload] = useState(false);
  const [imgload1, setImgload1] = useState(false);

  const Submit = async () => {
    if(imgload || imgload1){
      return toast.warning("Зураг хараахан ороогүй байна... түр хүлээнэ үү")
    }
    setLoad(true)
    if(data.username === "" || data.lastname === "" || data.gender === "" || data.birth_date === "" || data.phone_no === "" || data.register_no === "" || data.profile_img === "" || data.document_img === "" ){
      setLoad(false);
      return toast.warning("Таны мэдээлэл дутуу байна бүрэн бөглөнө үү !");
    }
    const res = await POST({uri:athlete_uri, data:data})
    if(res.status === 201){
      setLoad(false)
      onOpenChange(false);
      handlecallback();
      setData({...data, username:"", lastname:"", gender:"", birth_date:"", phone_no:"", register_no:"", profile_img:"", document_img:""});
      return toast.success("Амжилттай нэмлээ")
    }
    setLoad(false)
    return toast.error("Алдаа гарлаа")
  }

  const handlecallback = () =>{
    callback();
  }

  const handleUpload = async (e) => {
    setImgload(true);
    const file = e.target.files[0];
    try {
      const res = await IMAGE_UPLOAD({file:file})
      setData({...data, document_img:res});
      setImgload(false);
    } catch (error) {
      setImgload(false);
      console.error('Error uploading file', error);
    }
  };

  //bichig barimt
  const handleUpload1 = async (e) => {
    setImgload1(true);
    const file = e.target.files[0];
    try {
      const res = await IMAGE_UPLOAD({file:file})
      setData({...data, profile_img:res});
      setImgload1(false);
    } catch (error) {
      setImgload1(false);
      console.error('Error uploading file', error);
    }
  };

  const onChangeDate = (dateString) => {
    setData({...data, birth_date: dateString});
  };

  return (
    <>
      <Button onPress={onOpen} className='bg-blue-800 text-white xs:text-xs' size="sm">Тамирчин бүртгүүлэх</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='top' size="xl" className="font-Roboto">
        <ModalContent>
          {(onClose) => (
            <>
                <div className="mx-8">
                    <h1 className="text-center text-2xl font-bold mt-4">Тамирчин Бүргүүлэх</h1>
                    <p className="text-center text-xs mt-2">Та өөрийн клубийн тамирчны мэдээллийг үнэн зөв бөглөн илгээнэ үү.</p>
                    {
                        step === 1&&
                        <div>
                          <h1 className="text-xl mt-4">Тамирчны мэдээлэл</h1>
                              <div>
                                  <div className="mt-4">
                                      <h1>Овог</h1>
                                      <Input onChange={(e)=> setData({...data, lastname:e.target.value})} value={data.lastname} placeholder="Овог бичих"/>
                                  </div>
                                  <div className="mt-2">
                                      <h1>Нэр</h1>
                                      <Input onChange={(e)=> setData({...data, username:e.target.value})} value={data.username} placeholder="Нэр бичих"/>
                                  </div>
                                  <div className="mt-2">
                                      <h1>Хүйс</h1>
                                      <select onChange={(e) => setData({...data, gender:e.target.value})} value={data.gender} className="w-full bg-gray-100 p-3 rounded-md">
                                        <option>Сонгох</option>
                                        <option value='MALE'>эр</option>
                                        <option value='FEMALE'>эм</option>
                                      </select>
                                  </div>
                                  <div className="mt-4">
                                      <h1>Төрсөн он сар өдөр</h1>
                                      {/* <Input onChange={(e)=> setData({...data, birth_date:e.target.value})} value={data.birth_date} type='date'/> */}
                                      {/* <DatePicker onChange={onChangeDate} className="w-full py-2 bg-gray-100"/> */}
                                      <input onChange={(e) =>  setData({...data, birth_date: e.target.value})} type='date' className="bg-gray-100 w-full p-2 rounded" value={data.birth_date}/>
                                  </div>
                                  <div className="mt-4">
                                      <h1>Регистерийн дугаар</h1>
                                      <Input onChange={(e)=> setData({...data, register_no:e.target.value})} value={data.register_no} placeholder='Регистерийн дугаар бичих'/>
                                  </div>
                                  <div className="mt-4">
                                      <h1>Утасны дугаар</h1>
                                      <Input onChange={(e)=> setData({...data, phone_no:e.target.value})} value={data.phone_no} placeholder='Утасны дугаар бичих'/>
                                  </div>
                              </div>
                      </div>
                    }
                    {
                        step === 2&&
                        <div className='mt-4'>
                          <h1 className="text-xl mt-4">Бичиг баримт болон зураг оруулах</h1>

                          <div className='mt-4'>
                              <div>
                                <h1>Цээж зураг</h1>
                                <input className="mt-1" type='file' onChange={handleUpload1}/>
                                {
                                  imgload &&
                                  <div className="mt-1 flex items-center gap-2">
                                    <h1 className="text-sm">Зургийг хадгалж байна.</h1>
                                    <Spinner size='sm'/>
                                  </div>
                                }
                              </div>
                              <div className="mt-4">
                                <h1>Бичиг баримт</h1>
                                <input className="mt-1" type='file' onChange={handleUpload}/>
                                {
                                  imgload1 &&
                                  <div className="mt-1 flex items-center gap-2">
                                    <h1 className="text-sm">Зургийг хадгалж байна.</h1>
                                    <Spinner size='sm'/>
                                  </div>
                                }
                              </div>
                          </div>

                      </div>
                    }
                </div>
              <ModalFooter>
                {
                    step === 1?
                    <Button color="danger" variant="light" onPress={onClose}>
                        Болих
                    </Button>
                    :
                    <Button color="danger" variant="light" onPress={()=> setStep(step-1)}>
                        Буцах
                    </Button>
                }
                {
                    step==2?
                    <>
                      {
                        load?
                        <Button color="primary">
                          Илгээж байна... <Spinner/>
                        </Button>
                        :
                        <Button color="primary" onPress={()=> Submit()}>
                            Илгээх
                        </Button>
                      }
                    </>
                    :
                    <Button color="primary" onPress={()=> setStep(step+1)}>
                        Дараагийх
                    </Button>
                }
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
