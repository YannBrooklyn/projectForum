import axios from "axios"


export const actionLikeCom = async (data: any) =>{
    return await axios ({
        method: 'post',
        url: `${process.env.CXCD}/likecom/action/likecom`,
        data: data
    })
    .then((res)=>{
        return res.data
    })
    .catch((error)=>{
        return error
    })
}


export const getLikeCom = async (data :any) => {
    return await axios ({

        method:'post',
        url: `${process.env.CXCD}/likecom/get/likecom`,
        data: data
    })
    .then((res)=>{
        return res.data
    })
    .catch((error)=>{
        return error
    })
}

export const AllLikeCom = async (data: any) => {
    return await axios ({
        method: 'post',
        url: `${process.env.CXCD}/likecom/getall/likecom`,
        data: data
    })
    .then((res)=>{
        return res.data
    })
    .catch((error)=>{
        return error
    })
}