import axios from 'axios'




export const getAllPost = async () => {
    
    return await axios({
        method: 'get',
        url: `${process.env.CXCD}/post/get/all/post`,
    })
    .then((result)=> {
        
        return result.data.post
    })
    .catch((error) => {
        return error
    })
}

export const emptyImagePost = async (data: any, params: any) =>{
    return await axios ({
        method:"put",
        url:`${process.env.CXCD}/post/put/image/post/${params}`,
        data: data
    })
    .then((result)=>{
        return result
    })
    .catch((error)=>{
        return error
    })
}

export const newPost = async (data: any) => {
    
    return await axios({
        method: 'post',
        url: `${process.env.CXCD}/post/new/post`,
        data: data,
        headers: {
            'Content-Type': "multipart/form-data"
        }
    })
    .then((result)=> {       
        return result
    })
    .catch((error) => {
        return error
    })
}

export const getPost = async (data: any) => {
    const params = data.params
    
    return await axios({
        method: 'get',
        url: `${process.env.CXCD}/post/get/post/${params}`,
       
    })
    .then((result)=> {
        return result.data.post
    })
    .catch((error)=> {
        return error
    })
}

export const getPostNoParams = async (data: any) => {
    const params = data.params
    
    
    return await axios({
        method: 'get',
        url: `${process.env.CXCD}/post/get/post/${data}`,
       
    })
    .then((result)=> {
        return result.data.post
    })
    .catch((error)=> {
        return error
    })
}

export const delPost = async (data: any, paramsTopic: any) => {
    

    return await axios({
        method:'delete',
        url: `${process.env.CXCD}/post/delete/post/${paramsTopic}`,
        data: data
    })
    .then((result)=> {
        return result
    })
    .catch((error)=>{
        return error
    })
}

export const putPost = async (data: any, paramsTopic: any)=>{
    console.log(data)
    return await axios ({
        method:'put',
        url: `${process.env.CXCD}/post/put/post/${paramsTopic}`,
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