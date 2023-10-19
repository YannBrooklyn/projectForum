import axios from 'axios'

export const actionLikePost = async (data: any) => {
    return await axios ({
        method: 'post',
        url: `${process.env.CXCD}/likepost/action/likepost`,
        data: data
    })
    .then((res)=>{
        return res.data
    })
    .catch((error)=>{
        return error
    })
}

export const getLikePost = async (data :any) => { 
    return await axios ({

        method:'post',
        url: `${process.env.CXCD}/likepost/get/likepost`,
        data: data
    })
    .then((res)=>{
        return res.data
    })
    .catch((error)=>{
        return error
    })
}

export const getAllLikePost = async (data: any) => {
    return await axios ({
        method: 'post',
        url: `${process.env.CXCD}/likepost/getall/likepost`,
        data: data
    })
    .then((res)=>{
        return res.data
    }).catch((error)=>{
        return error
    })
}



