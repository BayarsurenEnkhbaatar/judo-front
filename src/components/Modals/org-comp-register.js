

import React, { useContext, useEffect, useState } from "react";
import {Button} from "@nextui-org/react";
import { GET, POST } from "../../utils/requests";
import { comptoorg_uri } from "../../utils/url";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { toast } from "react-toastify";

export default function ComptoOrgRegister() {
  const params = useParams();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const {currentUser} = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    Get();
 }, []);

    const Get = async() => {
        const res = await GET(comptoorg_uri + `/register-modal?comp_id=${params.slug}&token=${currentUser}`)
        if(!res.data) setIsModalOpen(true);
    }
    const Submit = async() => {
        const res = await POST({uri:comptoorg_uri + `/register-modal`, data:{comp_id: params.slug, token: currentUser}})
        if(res.status === 200){
            toast.success("Амжилттай тамирчдаа бүртгүүлнэ үү !")
            setIsModalOpen(false);
        }else{
            toast.success("Системд алдаа гарлаа !")
        }
    }
 
  return (
    <>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center">
          <div className="absolute w-full h-full bg-gray-800 opacity-50"></div>
          <div className="bg-white rounded-lg z-10 w-80 h-28 mt-20 p-4">
            <div className="bg-white rounded-lg z-10" id="demo">
              <h1>Тэмцээнд бүртгүүлэх</h1>
            </div>
            <div className="mt-4 flex justify-end ml-2 z-20 gap-2">
              <Button onPress={()=> navigate(-1)} className="bg-white">Үгүй</Button>
              <Button className="bg-gray-200" onPress={Submit}>Тийм</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
