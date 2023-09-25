'use client'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import env from "dotenv"




export const getAllActu = async () => {
    
    return await axios({
        method: 'get',
        url: `${process.env.CXCD}/post/get/actualite/all/actu`,
        
    })
    .then((result)=> {
        return result.data.post
    })
    .catch((error) => {
        console.log(error);
    })
}

export const newPost = async (data: any) => {
    console.log("tototoooooo",data)
    return await axios({
        method: 'post',
        url: `${process.env.CXCD}/post/new/post`,
        data: data,
        
    })
    .then((result)=> {
        

            console.log('regarde regarde', data)
            console.log('yo', result.data)
            return result
        
    })
    .catch((error) => {
        console.log("tottototo", error)
        return error
    })
}

export const getPost = async (data: any) => {
    const params = data.params
    
    console.log('params', data)
    return await axios({
        method: 'get',
        url: `${process.env.CXCD}/post/get/actualite/${params}`,
       
    })
    .then((result)=> {
        console.log("cocou", result)
        return result.data.post
    })
    .catch((error)=> {
        console.log(error)
    })
}

export const getPostNoParams = async (data: any) => {
    const params = data.params
    
    console.log('params', data)
    return await axios({
        method: 'get',
        url: `${process.env.CXCD}/post/get/actualite/${data}`,
       
    })
    .then((result)=> {
        console.log("cocou", result)
        return result.data.post
    })
    .catch((error)=> {
        console.log(error)
    })
}

export const delPost = async (data: any, paramsTopic: any) => {
    

    return await axios({
        method:'delete',
        url: `${process.env.CXCD}/post/delete/post/${paramsTopic}`,
        data: data
    })
    .then((result)=> {
        
            console.log(result)
            return result
        
    })
    .catch((error)=>{
        console.log(error)
        return error
    })
}

export const putPost = async (data: any, paramsTopic: any)=>{
    
    console.log("teùa", paramsTopic)
    return await axios ({
        method:'put',
        url: `${process.env.CXCD}/post/put/post/${paramsTopic}`,
        data: data
    })
    .then((result)=>{
        
            console.log(result)
            return result
        
        
    })
    .catch((error)=>{
        console.log(error)
        return error
    })
}