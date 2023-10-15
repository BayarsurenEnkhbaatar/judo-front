import axios from "axios"


export const GET = async (url) => {
    try{
        const response = await axios.get(url)
        return response
    }catch(error){
        console.log(error)
    }
};

export const POST = async ({uri, data}) => {
    console.log(data, uri)
    try{
        const response = await axios.post(uri, data)
        return response
    }catch(error){
        console.log(error)
    }
};
