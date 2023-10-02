import axios from 'axios'

export const updateSet = async (data: any, params: any) => {
    return await axios ({
        method: "put",
        url: `${process.env.CXCD}/setting/update/setting/${params}`,
        data: data,
        headers: {
            'Content-Type': "multipart/form-data"
        }
    })
    .then((res)=>{
        return res
    })
    .catch((error)=>{
        return error
    })
}

export const getSet = async (params: any) => {
    console.log(params)
    return await axios({
        method: "get",
        url: `${process.env.CXCD}/setting/get/setting/${params}`
    })
    .then((res)=>{
        return res
    })
    .catch((error)=>{
        return error
    })
}