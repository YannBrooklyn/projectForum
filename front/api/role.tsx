
import axios from 'axios'

export const newRole = async (data: any) => {
    console.log(data)
    return await axios ({
        method:"post",
        url: `${process.env.CXCD}/role/new/role`,
        data: data
    })
    .then((result)=>{ 
        return result
        
    })
    .catch((error)=>{ 
        return error
    })
}

export const getAllRole = async () =>{
    return await axios ({
        method:'get', 
        url: `${process.env.CXCD}/role/all/role`,
    })
    .then((res)=>{
        return res.data
    })
    .catch((error)=>{
        return error
    })
}

export const UpdateRole = async (data: any, params: any) =>{
    return await axios ({
        method:'put',
        url:`${process.env.CXCD}/role/edit/role/${params}`,
        data: data
    })
    .then((result)=>{
        if (result.status === 200) {
            return result
        }

    })
    .catch((error)=>{ 
        return error
    })
}

export const DeleteRole = async (data: any, params: any) => {
    return await axios ({
        method: 'delete',
        url: `${process.env.CXCD}/role/delete/role/${params}`,
        data: data
    })
    .then((result)=>{ 
        return result 
    })
    .catch((error)=>{
        return error
    })
}
