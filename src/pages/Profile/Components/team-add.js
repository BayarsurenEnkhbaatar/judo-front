import React, { useState } from "react";
import {Modal, ModalContent, ModalFooter, Button, useDisclosure, Input, Select, SelectItem} from "@nextui-org/react";
import { AiOutlineArrowDown } from "react-icons/ai";
import PersonalStep from "./Steps/personal";
import ImagesStep from "./Steps/images";

export default function TeamAdd() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [step, setStep] = useState(1)

  return (
    <>
      <Button onPress={onOpen} className='bg-blue-800 text-white'>Тамирчин нэмэх</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='top' size="" className="font-Roboto">
        <ModalContent>
          {(onClose) => (
            <>
                <div className="container py-4 ">
                    <h1 className="text-center text-2xl font-bold mt-4">Тамирчин Бүргүүлэх</h1>
                    <p className="text-center text-xs mt-2">Та өөрийн клубийн тамирчны мэдээллийг үнэн зөв бөглөн илгээснээр Монголын жүдо бөхийн холбооноос баталгаажуулж тэмцээнд уралдаанд онлайнаар бүртгүүлэн оролцох боломжтой болох юм.</p>
                    {
                        step === 1&&
                        <PersonalStep/>
                    }
                    {
                        step === 2&&
                        <ImagesStep/>
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
                    <Button color="primary" onPress={()=> setStep(step)}>
                        Илгээх
                    </Button>
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
