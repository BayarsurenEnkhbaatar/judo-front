import React from "react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const router = useNavigate();

  return (
    <>
    <h1 onClick={onOpen} className='hover:text-opacity-75 cursor-pointer'>
        Нэвтрэх
    </h1>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top" size="xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="px-12 pb-10 pt-6 font-Roboto">
                    <div className="flex justify-center">
                      <img src="../images/logoblue.png" className="h-20"/>
                    </div>
                    <h1 className="text-2xl text-center py-4 mt-4">DOJO.MN -д тавтай морилно уу !</h1>
                    <p className="text-center text-sm pb-8">Та өөрийн бүртгүүлсэн мэдээллээ зөв оруулснаар dojo.mn вебсайтад нэвтрэх боломжтой болно.</p>
                    <Input type="email" label="Утасны дугаар оруулах" size="sm" className="mt-1 rounded-lg focus:border"/>
                    <Input type="password" label="Нууц үг оруулах" size="sm" className="mt-2"/>
                    <div className="text-blue-600 text-end mt-2 text-sm hover:text-blue-400">
                        <Link to="/forget" className="">Нууц үг сэргээх ?</Link>
                    </div>
                    <Button onClick={()=> router("/profile")} className="w-full my-6 bg-[#0337A6] text-white uppercase hover:bg-opacity-70">Нэвтрэх</Button>
                    <h1 className="text-center mt-4">Та өөрийн хаяггүй бол ? <span className="text-blue-800 font-bold" onClick={onClose}><Link to="/register">Бүртгүүлэх</Link></span></h1>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
