import axios from "axios";
import jwt_decode from "jsonwebtoken"




export const newUser = async (data: any) => {
    
    return await axios ({
        
            
        method: "post",
        url: `${process.env.CXCD}/user/register`,
        data: data,
        
    })
    .then((result) => {
         
        return result
        
    })
    .catch((error)=> {
        
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
        
        return result
    })
    .catch((error)=>{
        return error
    })
}

export const offlineAllUsers = async ()=>{
    return await axios ({
        method: "put",
        url:`${process.env.CXCD}/user/edit/offline/user`,
    })
    .then((result)=>{
        
        return result
    })
    .catch((error)=>{
       return error
    })
}




export const LogUser = async (data: any) => {
    return await axios ({
        method:'post',
        url: `${process.env.CXCD}/user/login`,
        data: data
    })
    .then((result)=> {

        
        const onlinePush = async() => {
            const idUser = jwt_decode.decode(result.data.token)

            const data = {
                token: result.data.token,
                statsUser: 1
            }

            await StatutUser(data, idUser.id)
            .then(()=>{
                
                const token = result.data.token
                token !== null ?
                localStorage.setItem('tokenUser', token) : null
            })
        }
        onlinePush()
        return result
        
    })
    .catch((error) =>{
        return error
    })
} 

export const GetUser = async (paramsUser: any) => {
    return await axios ({
        method: "get",
        url: `${process.env.CXCD}/user/get/user/${paramsUser}`
    })
    .then((result)=>{
        return result.data
    })
    .catch((error)=>{
        return error
    })
}

export const GetAllUser = async ()=>{
    return await axios ({
        method: 'get',
        url: `${process.env.CXCD}/user/get/all`
    })
    .then((result)=>{
        return result.data.users
    })
    .catch((error)=>{
        return error
    })
}


export const UpdateConfidUser = async (data: any, paramsUser: number) => {
   
    return await axios ({
        method: 'put',
        url: `${process.env.CXCD}/user/edit/confidentialite/${paramsUser}`,
        data: data,
        
    })
    .then((result)=>{
        
        return result
        
    })
    .catch((error)=>{
        return error
    })
}

export const UpdatePPUser = async (data : any, paramsUser: number) => {
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
        return error
    })
}

export const UpdateBannerUser = async (data : any, paramsUser: number) => {
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
        return error
    })
}

export const UpdateUser = async (data : any, paramsUser: any) => {
    
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
        return error
    })
}


export const DeleteUser = async (data: any, params: any) =>{
    return await axios ({
        method:"delete",
        url: `${process.env.CXCD}/user/delete/${params}`,
        data: data
    })
    .then((result)=>{
        
        return result
        
    })
    .catch((error)=>{
        return error
    })
}
