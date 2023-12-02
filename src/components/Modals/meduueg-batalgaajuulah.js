import React from "react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function MeduulegBatalgaajuulah({ath}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const a = ath.org.comptation.mandat_price * ath.ath.length

  return (
    <>
      <Button onPress={onOpen} size="sm">Баталгаажуулах</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Мэдүүлэг баталгаажуулах</ModalHeader>
              <ModalBody>
                <div>
                <h1 className="mb-4 text-green-700">Та мандатны төлбөр төлснөөр тухайн тамирчдын бүртгэл баталгаажна !</h1>
                    <h1 className="flex justify-between">Тэмцээнд мэдүүлэг өгсөн тамирчид <span className="font-bold">{ath.ath.length}</span></h1>
                    <h1 className="flex justify-between">Мандатны үнэ <span className="font-bold">{ath.org.comptation.mandat_price}</span></h1>
                    <h1 className="flex justify-between">Нийт төлөх дүн <span className="font-bold">{a} ₮</span></h1>
                    <div className="text-xs bg-green-600 rounded px-2 py-1 text-white mt-2">
                        <h1 className="flex justify-between">Шилжүүлэх данс <span className="">5664021746</span> <span className="">copy</span></h1>
                        <h1 className="flex justify-between">Хүлээн авагчийн нэр <span className="">Монголын жүдо бөхийн холбоо</span> <span className="">copy</span></h1>
                        <h1 className="flex justify-between">Гүйлгээний утга <span className="">Байгууллагын нэр</span> <span className="">copy</span></h1>
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