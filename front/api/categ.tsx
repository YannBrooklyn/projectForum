import axios from 'axios'

export const getAllCateg = async () => {
    return await axios({
        method: 'get',
        url: `${process.env.CXCD}/categorie/get/categorie/all/categ`
    })
    .then ((result) => {
        return result.data.categories
    })
    .catch((error)=> {
        console.log(error)
        return error
    })
}

export const newCateg = async (data: any) => {
    return await axios ({
        method:"post",
        url: `${process.env.CXCD}/categorie/new/categorie`,
        data: data
    })
    .then((result)=> {
        return result
        
    })
    .catch((error)=>{
        return error
    })
}

export const UpdateCateg = async (data: any, params: any) =>{
    
    return await axios ({
        method:"put",
        url: `${process.env.CXCD}/categorie/edit/categorie/${params}`,
        data: data
    })
    .then((res)=> {
        return res
    })
    .catch((error)=>{
        return error
    })
}

export const DeleteCateg = async (data: any, params: any)=>{
    return await axios ({
        method:"delete",
        url: `${process.env.CXCD}/categorie/delete/categorie/${params}`,
        data: data
    })
    .then((res)=>{
        return res
    })
    .catch((error)=>{
        return error
    })
}

export const getCateg = async (params: any)=>{
    return await axios ({
        method:"get",
        url: `${process.env.CXCD}/categorie/get/categorie/${params}`
    })
    .then((res)=>{
        return res
    })
    .catch((error)=>{
        return error
    })
}