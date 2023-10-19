import axios from 'axios'

export const newCom = async (data: any) => {
    return await axios ({
        method: 'post',
        url: `${process.env.CXCD}/com/new/com`,
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

export const emptyImageCom = async (data: any, params: any) =>{
    return await axios ({
        method:"put",
        url:`${process.env.CXCD}/com/put/image/com/${params}`,
        data: data
    })
    .then((result)=>{
        return result
    })
    .catch((error)=>{
        return error
    })
}

export const getAllCom = async () => {
    return await axios({
        method: 'get',
        url: `${process.env.CXCD}/com/get/com/all/com`
    })
    .then((result)=> {
        return result.data.coms
    })
    .catch((error)=> {
        return error
    })
}

export const getCom = async (paramsCom: any) =>{
    console.log(paramsCom)
    return await axios({
        method: 'get',
        url: `${process.env.CXCD}/com/get/com/${paramsCom}`,
       
    })
    .then((result)=> {
        return result.data.com
    })
    .catch((error)=> {
        return error
    })
}

export const putComs = async (data: any, paramsCom: any) => {
    return await axios ({
        method: 'put',
        url: `${process.env.CXCD}/com/put/com/${paramsCom}`,
        data: data,
        headers: {
            'Content-Type': "multipart/form-data"
        }
    })
    .then((result)=>{
        return result
    })
    .catch((error)=>{
        return error
    })
}

export const delComs = async (data: any, paramsCom: any) =>{
    return await axios ({
        method: 'delete',
        url: `${process.env.CXCD}/com/delete/com/${paramsCom}`,
        data: data
    })
    .then((result)=>{
        return result
    })
    .catch((error)=> {
        return error
    })
}