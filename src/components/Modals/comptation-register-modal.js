import React, { useContext, useEffect, useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input} from "@nextui-org/react";
import {AuthContext} from '../../context/auth';
import { GET, POST } from "../../utils/requests";
import { athlete_to_comptation_uri, org_uri } from "../../utils/url";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

export default function ComptationRegisterModal({data, callback}) {
  const params = useParams();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {currentUser} = useContext(AuthContext);
  const[ath, setAth] = useState([]);
  const [search, setSearch] = useState('');
  const [checkedValue, setValue] = useState([]);
  const [load, setLoad] = useState({submit:false, athletes:[]});

  const Get = async() => {
    const res = await GET(org_uri+ `-athletes?token=${currentUser}&gender=${data.gender.gender}&name=${search}`);
    setAth(res.data);
  }

  useEffect(() => {
    Get();
  }, [search]);

  function open(){
    onOpen();
    setValue([]);
    Get();
  }

  function handleChange({ checked, id, pay }) {
    if (checked) {
      setValue(prevChecked => [...prevChecked, id]);
    } else {
      setValue(prevChecked => prevChecked.filter(item => item !== id));
    }
  }

  function haha(){
    console.log(checkedValue);
  }

  const Submit = async () => {
    setLoad({...load, submit:true});
    const res = await POST({uri: athlete_to_comptation_uri, data:{token: currentUser, kg:data.data.kg, athlete_ids: checkedValue, category_id: data.gender.id, comp_id:params.slug}});
    console.log(res.data);
    if(res.status === 200){
      if(res.data.length > 0){
        console.log(res.data)
        setLoad({...load, submit:false});
        handleCallback();
        return setLoad({...data, athletes:res.data});
      }
      handleCallback();
      setLoad({...load, submit:false});
      toast.success("Тамирчдыг бүртгэлээ");
      onOpenChange(false);
    }
  }

  function handleCallback(){
    callback();
  }

  return (
    <>
      <Button onPress={open} className='' size='sm'>Тамирчин бүртгүүлэх</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='top'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Тамирчин бүртгүүлэх <span>{data.data.kg} кг</span></ModalHeader>
              <ModalBody>
                <div>
                  <div className="flex justify-between items-center gap-2">
                    <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Тамирчин хайх"/>
                  </div>
                  {
                    load.athletes.length > 0 &&
                    <div className="my-4 bg-yellow-600 rounded-md text-white p-2">
                    <h1 className="text-xs mb-2">Эдгээр тамирчид нь өөр жинд бүртгүүлсэн байна. Бүртгүүлсэн жингээс нь хасч байж бүртгүүлнэ үү !</h1>
                      {
                        load.athletes.map((item, index) => {
                          return(
                            <div key={index} className="flex items-center gap-2">
                              <h1 className="text-sm uppercase">{item.athlete.lastname}</h1>
                              <h1 className="text-sm font-bold uppercase">{item.athlete.username}</h1>
                              <h1 className="text-sm ">{item.kg} кг</h1>
                            </div>
                          )
                        })
                      }
                    </div>
                  }
                    <h1 className="mt-3 text-xs">Тамирчдын жагсаалт</h1>
                    {
                      ath.map((item, index) => {
                        return(
                          <div className="mt-2" key={index}>
                              <div className="bg-gray-200 p-2 rounded-md flex justify-between ">
                                  <div className="flex">
                                    <Checkbox onChange={(e) => handleChange({ checked:e.target.checked, id:item.id})}/>
                                    <h1>{item.username}</h1>
                                  </div>
                                  <h1 className="text-sm" onClick={haha}>16 нас</h1>
                              </div>
                          </div>
                        )
                      })
                    }
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Болих
                </Button>
                {
                  load.submit ?
                  <Button color="primary">
                    Уншиж байна ...
                  </Button>
                  :
                  <Button color="primary" onPress={Submit}>
                    Бүртгүүлэх
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
