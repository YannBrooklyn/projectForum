'use client'
import axios from 'axios'
import { url } from 'inspector'
import { Result } from 'postcss'

export const actionLikePost = async (data: any) => {
    return await axios ({
        method: 'post',
        url: `${process.env.CXCD}/likepost/action/likepost`,
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

export const getLikePost = async (data :any) => {
    console.log(data)
    return await axios ({

        method:'post',
        url: `${process.env.CXCD}/likepost/get/likepost`,
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

export const getAllLikePost = async (data: any) => {
    return await axios ({
        method: 'post',
        url: `${process.env.CXCD}/likepost/getall/likepost`,
        data: data
    })
    .then((res)=>{
        console.log(res)
        return res.data
    }).catch((error)=>{
        console.log(error)
    })
}



