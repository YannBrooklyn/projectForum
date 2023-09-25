'use client'

import axios from "axios"


export const actionLikeCom = async (data: any) =>{
    console.log(data)
    return await axios ({
        method: 'post',
        url: `${process.env.CXCD}/likecom/action/likecom`,
        data: data
    })
    .then((res)=>{
        console.log(res)
        return res.data
    })
    .catch((error)=>{
        console.log(error)
    })
}


export const getLikeCom = async (data :any) => {
    console.log(data)
    return await axios ({

        method:'post',
        url: `${process.env.CXCD}/likecom/get/likecom`,
        data: data
    })
    .then((res)=>{
        
            console.log('null')
            return res.data
        
    })
    .catch((error)=>{
        console.log(error)
    })
}

export const AllLikeCom = async (data: any) => {
    console.log("aaaaa", data)
    return await axios ({
        method: 'post',
        url: `${process.env.CXCD}/likecom/getall/likecom`,
        data: data
    })
    .then((res)=>{
        console.log(res)
        return res.data
    }).catch((error)=>{
        console.log(error)
    })
}