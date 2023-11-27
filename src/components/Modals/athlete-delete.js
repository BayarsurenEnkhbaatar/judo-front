import React, { useContext } from "react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { DELETE } from "../../utils/requests";
import { comp_uri } from "../../utils/url";
import { AuthContext } from "../../context/auth";
import { toast } from "react-toastify";

export default function AthleteDelete({data, callback}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {currentUser} = useContext(AuthContext);

    const Submit = async() => {
        const res = await DELETE({uri:comp_uri + `-to-athlete-category?comp_id=${data.comp_id}&category_id=${data.category_id}&org_id=${currentUser}&kg=${data.kg}&athlete=${data.athlete.id}&id=${data.id}`});
        console.log(res.data);
        if(res.status === 200){
            HandleCallback();
            onOpenChange(false);
            toast.success("Амжилттай устгалаа");
        }
    }

    const HandleCallback =()=>{
        callback();
    }

  return (
    <>
      <img onClick={onOpen} className='h-4 cursor-pointer hover:bg-gray-500 bg-gray-400 rounded-full p-1' src='../../icons/x.png'/>
      <Modal placement="bottom" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              {/* <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader> */}
              <ModalBody>
                <div>
                    <h1 className="text-xl font-bold font-Roboto mt-8">Та тамирчныг жингээс хасахдаа итгэлтэй байна уу !</h1>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Болих
                </Button>
                <Button color="primary" onPress={Submit}>
                  Устгах
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
