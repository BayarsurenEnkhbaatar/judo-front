import { createContext, useEffect, useState } from "react";
import { org_uri } from "../utils/url";
import { POST } from "../utils/requests";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) =>{
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("MNGJDOACCSSOEKN")) || null)

    const navigate = useNavigate();
    const login = async(data)=>{
        const res = await POST({uri: org_uri+'/login', data: data});
        if(res.status === 204) return toast.warning("Ийм имейл хаягтай хэрэглэгч байхгүй байна !");
        if(res.status === 205) return toast.error("Хэрэглэгчийн имейл эсвэл нууц үг буруу байна !");
        if(res.status === 200){
            setCurrentUser(res.data)
            navigate('/profile')
            return toast.success("Амжилттай нэвтэрлээ");
        }
    }

    const logout = async() => {
        setCurrentUser(null)
    };

    useEffect(()=>{
        localStorage.setItem("MNGJDOACCSSOEKN", JSON.stringify(currentUser));
    }, [currentUser]);

    return(
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
