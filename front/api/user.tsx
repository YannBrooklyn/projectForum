
import { cookies } from "next/dist/client/components/headers";
import axios from "axios";
import jwt_decode from "jsonwebtoken"



export const newUser = async (data: any) => {
    
    return await axios ({
        
            
            method: "post",
            url: `${process.env.CXCD}/user/register`,
            data: data,
        
    })
    .then((result) => {
        console.log("sa passe ici")
        
            console.log(result)
            return result
        
    })
    .catch((error)=> {
        console.log("error yoooo" , error)
        return error
    })
}

export const StatutUser = async (data: any, params: any)=>{
    return await axios ({
        method: "put",
        url:`${process.env.CXCD}/user/edit/online/user/${params}`,
        data: data
    })
    .then((result)=>{
        console.log(result)
        return result
    })
    .catch((error)=>{
        console.log(error)
    })
}

export const offlineAllUsers = async ()=>{
    return await axios ({
        method: "put",
        url:`${process.env.CXCD}/user/edit/offline/user`,
    })
    .then((result)=>{
        console.log(result)
        return result
    })
    .catch((error)=>{
        console.log(error)
    })
}




export const LogUser = async (data: any) => {
    console.log("tooo")
    console.log("taa")
    return await axios ({
        method:'post',
        url: `${process.env.CXCD}/user/login`,
        data: data
    })
    .then((result)=> {

        console.log(result)
        const onlinePush = async() => {
            const idUser = jwt_decode.decode(result.data.token)

            const data = {
                token: result.data.token,
                statsUser: 1
            }

            await StatutUser(data, idUser.id)
            .then((res)=>{
                console.log(res)
                
                console.log('salut')
                const token = result.data.token
                console.log(token)
                token !== null ?
                localStorage.setItem('tokenUser', token) : null
            })
            .catch((error)=>{
                console.log(error)
            })
        }
        onlinePush()
        return result
        
    })
    .catch((error) =>{
        console.log('coucou')
        console.log(error)
        return error
    })
} 

export const GetUser = async (paramsUser: any) => {
    console.log(paramsUser)
    return await axios ({
        method: "get",
        url: `${process.env.CXCD}/user/get/user/${paramsUser}`
    })
    .then((result)=>{
        
        console.log(result)
        return result.data
    })
    .catch((error)=>{
        console.log(error)
    })
}

export const GetAllUser = async ()=>{
    return await axios ({
        method: 'get',
        url: `${process.env.CXCD}/user/get/all`
    })
    .then((result)=>{
        console.log(result.data.users)
        return result.data.users
    })
    .catch((error)=>{
        console.log(error)
    })
}


export const UpdateConfidUser = async (data: any, paramsUser: number) => {
    console.log(paramsUser)
    
    return await axios ({
        method: 'put',
        url: `${process.env.CXCD}/user/edit/confidentialite/${paramsUser}`,
        data: data,
        
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

export const UpdatePPUser = async (data : any, paramsUser: number) => {
    console.log(data)
    return await axios ({
        method: "put",
        url: `${process.env.CXCD}/user/edit/photoprofil/${paramsUser}`,
        data: data,
        headers: {
            'Content-Type': "multipart/form-data"
        }
    })
    .then((result)=> {
        
        return result
        
    })
    .catch((error)=>{
        console.log(error)
        return error
    })
}

export const UpdateBannerUser = async (data : any, paramsUser: number) => {
    console.log(data)
    return await axios ({
        method: "put",
        url: `${process.env.CXCD}/user/edit/banner/${paramsUser}`,
        data: data,
        headers: {
            'Content-Type': "multipart/form-data"
        }
    })
    .then((result)=> {
      
        return result
        
    })
    .catch((error)=>{
        console.log(error)
        return error
    })
}

export const UpdateUser = async (data : any, paramsUser: any) => {
    console.log(data)
    return await axios ({
        method: "put",
        url: `${process.env.CXCD}/user/edit/user/${paramsUser}`,
        data: data,
        headers: {
            'Content-Type': "multipart/form-data"
        }
    })
    .then((result)=> {
        
        return result
        
    })
    .catch((error)=>{
        console.log(error)
        return error
    })
}


export const DeleteUser = async (data: any, params: any) =>{
    console.log(params)
    console.log(params.idUser)
    return await axios ({
        method:"delete",
        url: `${process.env.CXCD}/user/delete/${params}`,
        data: data
    })
    .then((result)=>{
        
        return result
        
    })
    .catch((error)=>{
        console.log(error)
        return error
        
    })
}
