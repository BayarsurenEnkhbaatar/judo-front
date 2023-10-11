import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input} from "@nextui-org/react";
import AthleteregisterCard from "../Card/athlete-register-card";

export default function ComptationRegisterModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className='' size='sm'>Тамирчин бүртгүүлэх</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='top'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Тамирчин бүртгүүлэх</ModalHeader>
              <ModalBody>
                <div>
                  <Input placeholder="Тамирчин хайх"/>
                    <h1 className="mt-3 text-xs">Бүртгүүлэх болмжтой тамирчдын жагсаалт</h1>  
                    <AthleteregisterCard/>
                    <AthleteregisterCard/>
                    <AthleteregisterCard/>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Болих
                </Button>
                <Button color="primary" onPress={onClose}>
                  Бүртгүүлэх
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
