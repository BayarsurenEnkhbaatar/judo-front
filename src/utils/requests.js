import axios from "axios"
import { toast } from "react-toastify";
import { utils_uri } from "./url";


export const GET = async (url) => {
    try{
        const response = await axios.get(url)
        return response
    }catch(error){
        toast.error("Алдаа гарлаа")
        console.log(error)
        return error
    }
};

export const POST = async ({uri, data}) => {
    try{
        const response = await axios.post(uri, data)
        return response
    }catch(error){
        toast.error("Алдаа гарлаа")
        return error
    }
};

export const PATCH = async ({uri, data}) => {
    try{
        const response = await axios.patch(uri, data)
        return response
    }catch(error){
        toast.error("Алдаа гарлаа")
        return error
    }
};

export const DELETE = async ({uri, data}) => {
    try{
        const response = await axios.delete(uri, data)
        return response
    }catch(error){
        toast.error("Алдаа гарлаа")
        return error
    }
};

const filetype = ['image/jpg','image/jpeg','image/png']

export const IMAGE_UPLOAD = async ({file}) => {
    // if(!filetype.find(type => type === file.type)){
    //     console.log("TYPE ERROR")
    // }

    const form = new FormData();
    form.append('image', file);

    try{
        const response = await axios.post(utils_uri+`/img-upload` , form)
        return response.data
    }catch(error){
        console.log(error);
        toast.error("Зураг хадгалахад алдаа гарлаа дахин оролдоно уу !");
        return ""
    }

};

export const IMAGE_GET = async ({key}) => {
    try{
        const response = await axios.get(utils_uri+`/img-get?key=${key}`)
        return response.data
    }catch(error){
        return error
    }
};
