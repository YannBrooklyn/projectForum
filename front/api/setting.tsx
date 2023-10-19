import axios from 'axios'

export const updateSet = async (data: any, params: any) => {
    return await axios ({
        method: "put",
        url: `${process.env.CXCD}/setting/update/setting`,
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

export const getSet = async () => {
    
    return await axios({
        method: "get",
        url: `${process.env.CXCD}/setting/get/setting`
    })
    .then((res)=>{
        return res
    })
    .catch((error)=>{
        return error
    })
}

export const changeSet = async (data: any, params: any)=>{
    return await axios({
        method:"put",
        url: `${process.env.CXCD}/setting/update/change/${params}`,
        data: data
    })
    .then((res)=>{
        console.log(res)
        return res
    })
    .catch((error)=>{
        console.log(error)
        return error
    })
}

export const newSet = async (data: any) => {
    
    return await axios({
        method:"put",
        url: `${process.env.CXCD}/setting/post/new/setting`,
        data: data
    })
    .then((res)=>{
        return res
    })
    .catch((error)=>{
        return error
    })
}

export const getAllSet = async () => {
    
    return await axios ({
        method:"get",
        url: `${process.env.CXCD}/setting/get/all/setting`,
        
    })
    .then((res)=>{
        return res.data
    })
    .catch((error)=>{
        return error
    })
}