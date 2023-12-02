import React, { useEffect, useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { IMAGE_GET } from "../../../utils/requests";

export default function AthleteMoreModal({data}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [profile, setProfile] = useState();

  const Get = async () => {
    const res = await IMAGE_GET({key:data.profile_img});
    setProfile(res);
  }
  
  useEffect(() => {
    Get();
  }, [data]);

console.log(data)
  return (
    <>
      <Button  onPress={onOpen} className='bg-gray-100 rounded-md w-full h-8 hover:bg-gray-200' size="sm">Дэлгэрэнгүй</Button>
      <Modal placement='top' isOpen={isOpen} onOpenChange={onOpenChange} size="2xl" >
      {/* backdrop='blur' */}
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Тамирчны мэдээлэл</ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-2 gap-4">
                  <div className="">
                    <img className="h-60 w-full" src={profile}/>
                  </div>
                  <div className="font-Roboto">
                    <h1 className="text-sm">{data.lastname}</h1>
                    <h1 className="text-lg">{data.username}</h1>
                    <h1 className="text-sm">{data.phone_no}</h1>
                    <h1 className="text-sm">{data.register_no}</h1>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Гарах
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
