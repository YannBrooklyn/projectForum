import axios from "axios"

export const newTheme = async (data: any)=>{
    return await axios ({
        method:"post",
        url: `${process.env.CXCD}/theme/new/theme`,
        data: data
    })
    .then((result)=>{
        return result
    })
    .catch((error)=>{
        return error
    })
}

export const getAllTheme = async ()=>{
    return await axios ({
        method:"get",
        url: `${process.env.CXCD}/theme/get/theme/all/theme`,
        
    })
    .then((result)=>{
        return result.data.themes
    })
    .catch((error)=>{
        return error
    })
}

export const UpdateTheme = async (data: any, params: any) =>{
    return await axios ({
        method:"put",
        url: `${process.env.CXCD}/theme/edit/theme/${params}`,
        data: data
    })
    .then((res)=> {
       
        return res
        
    })
    .catch((error)=>{
        return error
    })
}

export const DeleteTheme = async (data: any, params: any)=>{
    return await axios ({
        method:"delete",
        url: `${process.env.CXCD}/theme/delete/theme/${params}`,
        data: data
    })
    .then((res)=>{
        return res
    })
    .catch((error)=>{
        return error
    })
}

export const getTheme = async (params: any)=>{
    return await axios ({
        method:"get",
        url: `${process.env.CXCD}/theme/get/theme/${params}`
    })
    .then((res)=>{
        return res
    })
    .catch((error)=>{
        return error
    })
}