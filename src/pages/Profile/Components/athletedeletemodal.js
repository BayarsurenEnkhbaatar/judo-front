import React, { useEffect, useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { GET } from "../../../utils/requests";
import { athlete_uri } from "../../../utils/url";
import { toast } from "react-toastify";

export default function AthleteDeleteModal({data}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const Delete = async () => {
    const res = await GET(athlete_uri+`delete?id=${data.id}`);
    toast.success("Тамирчины мэдээлэл устлаа")
  }

  return (
    <>
      <button onClick={onOpen} className=" bg-red-500 text-white rounded-md w-full  mt-1 text-xs py-1">Хасах</button>
      <Modal placement='top' isOpen={isOpen} onOpenChange={onOpenChange} size="2xl" >
      {/* backdrop='blur' */}
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Та хасахдаа итгэлтэй байна уу ?</ModalHeader>
              <ModalBody>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Гарах
                </Button>
                <Button className="bg-red-600 text-white" onPress={Delete}>
                  Тийм
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
