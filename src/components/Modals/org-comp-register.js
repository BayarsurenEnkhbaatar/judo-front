
import axios from 'axios';
import React, { useContext, useEffect, useState } from "react";
import {Button} from "@nextui-org/react";
import { GET, POST } from "../../utils/requests";
import { comptoorg_uri, org_uri } from "../../utils/url";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { toast } from "react-toastify";

export default function ComptoOrgRegister() {
  const params = useParams();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const {currentUser} = useContext(AuthContext);
  const [expiry, setExpiry] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    Get1();
 }, []);

    const Get = async() => {
        const res = await GET(comptoorg_uri + `/register-modal?comp_id=${params.slug}&token=${currentUser}`)
        if(!res.data) setIsModalOpen(true);
    }

    const Get1 = async () => {
      const res = await axios.get(org_uri+`/${currentUser}`);
      if(new Date(res.data.expiry_date) < new Date()){
        setExpiry(true);
        setIsModalOpen(true);
      }else{
        Get();
      }
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
          <div className="bg-white rounded-lg z-10 w-80 h-32 mt-20 p-4">
            {
              expiry?
              <>
                <div className="bg-white rounded-lg z-10" id="demo">
                  <h1>Таны гишүүнчлэлийн хугацаа дууссан байна.</h1>
                </div>
                <div className="mt-4 flex justify-end ml-2 z-20 gap-2">
                  <Button onPress={()=> navigate(-1)} className="bg-white">Буцах</Button>
                </div>
              </>
              :
              <>
                <div className="bg-white rounded-lg z-10" id="demo">
                  <h1>Тэмцээнд бүртгүүлэх</h1>
                </div>
                <div className="mt-4 flex justify-end ml-2 z-20 gap-2">
                  <Button onPress={()=> navigate(-1)} className="bg-white">Үгүй</Button>
                  <Button className="bg-gray-200" onPress={Submit}>Тийм</Button>
                </div>
              </>
            }

          </div>
        </div>
      )}
    </>
  );
}
