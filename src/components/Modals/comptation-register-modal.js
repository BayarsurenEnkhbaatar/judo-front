import React, { useContext, useEffect, useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Spinner} from "@nextui-org/react";
import {AuthContext} from '../../context/auth';
import { GET, POST } from "../../utils/requests";
import { athlete_to_comptation_uri, org_uri } from "../../utils/url";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { STATUS } from "../../utils/types";

export default function ComptationRegisterModal({data, callback, org}) {
  const params = useParams();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {currentUser} = useContext(AuthContext);
  const[ath, setAth] = useState([]);
  const [search, setSearch] = useState('');
  const [checkedValue, setValue] = useState([]);
  const [load, setLoad] = useState({submit:false, cardload:false, athletes:[]});

  const Get = async() => {
    setLoad({...load, cardload:true});
    const res = await GET(org_uri+ `-athletes?token=${currentUser}&gender=${data.gender.gender}&name=${search}`);
    setAth(res.data);
    setLoad({...load, cardload:false});
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

  function handleCallback(){
    callback();
  }

  const Submit = async () => {
    if(org === STATUS.APPROVED){
      return toast.warning("Таны мэдүүлэг баталгаажсан тул мэдүүлэг өөрчлөх боломжгүй");
    }
    setLoad({...load, submit:true});
    const res = await POST({uri: athlete_to_comptation_uri, data:{token: currentUser, kg:data.data.kg, athlete_ids: checkedValue, category_id: data.gender.id, comp_id:params.slug}});
    if(res.status === 200){
      if(res.data.length > 0){
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

  return (
    <>
      {/* <Button onPress={open} className='xs:mt-2 md:mt-0 z-0' size='sm'>Тамирчин бүртгүүлэх</Button> */}
      <button onClick={open} className='xs:mt-2 md:mt-0 bg-gray-200 hover:bg-gray-300 text-xs rounded-md p-2'>Тамирчин бүртгүүлэх</button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='top' backdrop="blur" scrollBehavior='inside' classNames={{
          // backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
        }}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Тамирчин бүртгүүлэх <span>{data.data.kg} кг</span></ModalHeader>
              <ModalBody>
                <div>
                  <div className="flex justify-between items-center gap-2">
                    <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Тамирчины нэрээр хайх"/>
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
                      load.cardload ?
                      <div className="flex justify-center items-center py-4">
                        <Spinner/>
                        <h1>Уншиж байна ...</h1>
                      </div>
                      :
                      <>
                        {
                          ath.map((item, index) => {
                            return(
                              <div className="mt-2" key={index}>
                                  <div className="bg-gray-200 p-2 rounded-md flex justify-between ">
                                      <div className="flex">
                                        <Checkbox onChange={(e) => handleChange({ checked:e.target.checked, id:item.id})}/>
                                        <h1 className="uppercase">{item.lastname.charAt(0)}.{item.username}</h1>
                                      </div>
                                      <h1 className="text-sm" onClick={haha}>{new Date().getFullYear() - new Date(item.birth_date).getFullYear()} нас</h1>
                                  </div>
                              </div>
                            )
                          })
                        }
                      </>
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
